import PostgresAdapter from '@auth/pg-adapter';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { Pool } from 'pg';

export const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const { auth, handlers, signIn, signOut } = NextAuth({
  trustHost: true,
  debug: true,
  adapter: PostgresAdapter(pool),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'database',
    maxAge: 12 * 60 * 60,
  },
  pages: {
    signIn: '/user/login',
  },
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true,
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
});
