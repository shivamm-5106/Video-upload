import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth"; // Keep this import

const handler = NextAuth(authOptions); // Fix the syntax here

export { handler as GET, handler as POST };

