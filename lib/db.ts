import { PrismaClient } from "@prisma/client";
import { NODE_ENV } from "./env.config";

const prismaGlobal = global as typeof global & { prisma?: PrismaClient };

export const db = prismaGlobal.prisma || new PrismaClient();

if (NODE_ENV !== "production") prismaGlobal.prisma = db;


// import { PrismaClient } from "@prisma/client";
// import { NODE_ENV } from "./env.config";

// declare global {
//   var prisma: PrismaClient | undefined;
// }

// export const db = globalThis.prisma || new PrismaClient();

// if (NODE_ENV !== "production") globalThis.prisma = db;
