import { PrismaClient } from "@prisma/client";
import { NODE_ENV } from "./env.config";


const prismaGlobal = global as typeof global & { prisma?: PrismaClient };

export const db = prismaGlobal.prisma || new PrismaClient();
 

if (NODE_ENV !== "production") prismaGlobal.prisma = db;
