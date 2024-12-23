import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { routes } from "./constants/routes";
import { getUserById } from "./data/user";
import { UserRole } from "@prisma/client";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  ...authConfig,
  pages: {
    signIn: routes.login,
  },
  session: { strategy: "jwt" },

  // events: {async linkAccount({user}){
  //   await db.user.update({where:{userId: user.id},data:{emailVerified: new Date()}})
  // }}, 

  //*!VER LA PARTE ESTA EN EL VIDEO D ANTONIO
  callbacks: {
    // * Se ejecuta cuando el usuario se intenta logear
    // async signIn ({account}){
    //   if(account?.provider == "google") return true

     
    //   return true
     
    // },
    
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.role = existingUser.role;

      return token;
    },
  },
});
