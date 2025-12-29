import NextAuth from "next-auth";
import { AuthConfig } from "./auth.config";

export default NextAuth(AuthConfig).auth;
