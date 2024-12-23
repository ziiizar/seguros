import { PrismaClient } from "@prisma/client";
import { NODE_ENV } from "./env.config";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (NODE_ENV !== "production") globalThis.prisma = db;
