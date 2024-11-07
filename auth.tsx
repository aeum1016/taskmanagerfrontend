import PostgresAdapter from '@auth/pg-adapter';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(pool),
  pages: {
    signIn: '/user/login',
  },
  providers: [
    Google,
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
