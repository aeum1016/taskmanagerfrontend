import PostgresAdapter from '@auth/pg-adapter';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { Pool } from 'pg';

export const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 5432,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const { auth, handlers, signIn, signOut } = NextAuth({
  trustHost: true,
  adapter: PostgresAdapter(pool),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'database',
    maxAge: 24 * 60 * 60,
  },
  pages: {
    signIn: '/user/login',
  },
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          scope: [
            "openid",
            "https://www.googleapis.com/auth/calendar",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
          ].join(" "),
          prompt: "consent",
          access_type: "offline",
        },
      }
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const googleAccount = await pool.query(`SELECT * FROM public.accounts WHERE "userId" = $1::integer AND "provider" = 'google'`, [user.id])
      if (googleAccount.rowCount !== null && googleAccount.rows[0].expires_at * 1000 < Date.now()) {
        // If the access token has expired, try to refresh it
        try {
          // https://accounts.google.com/.well-known/openid-configuration
          // We need the `token_endpoint`.
          const response = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            body: new URLSearchParams({
              client_id: process.env.AUTH_GOOGLE_ID!,
              client_secret: process.env.AUTH_GOOGLE_SECRET!,
              grant_type: "refresh_token",
              refresh_token: googleAccount.rows[0].refresh_token,
            }),
          })

          const tokensOrError = await response.json()

          if (!response.ok) throw tokensOrError

          const newTokens = tokensOrError as {
            access_token: string
            expires_in: number
            refresh_token?: string
          }

          await pool.query(`UPDATE public.accounts 
            SET (access_token, expires_at, refresh_token) = ($1::text, $2::bigint, $3::text) 
            WHERE "provider"='google' AND "providerAccountId" = $4::text`,
            [newTokens.access_token, Math.floor(Date.now() / 1000 + newTokens.expires_in), newTokens.refresh_token ?? googleAccount.rows[0].refresh_token, googleAccount.rows[0].providerAccountId])
        } catch (error) {
          console.error("Error refreshing access_token", error)
          // If we fail to refresh the token, return an error so we can handle it on the page
          session.error = "RefreshTokenError"
        }
      }
      return session
    },
  }
});

declare module "next-auth" {
  interface Session {
    error?: "RefreshTokenError"
  }
}