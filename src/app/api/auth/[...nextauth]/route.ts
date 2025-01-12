import NextAuth from "next-auth";
import { nextAuthOptions } from "@/lib/nextAuthOption";
const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
