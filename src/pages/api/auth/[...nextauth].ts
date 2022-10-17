import NextAuth, { type NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
  /**
   * ! Include user.id on session.
   */
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },

  /**
   * * Configure one or more authentication providers.
   * ! GitHub returns a field on Account called
   * ! refresh_token_expires_in which is a number.
   * ! Remember to add this field to your database schema,
   * ! in case if you are using an Adapter.
   */
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
