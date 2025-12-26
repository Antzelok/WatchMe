import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

// Enable WebSocket support
neonConfig.webSocketConstructor = ws;

// Ensure DATABASE_URL exists
if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

// Create Neon pool
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Use PrismaNeon directly
export const prisma = new PrismaNeon(pool);
