import { PrismaClient } from "@prisma/client";
import { NODE_ENV, TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from "./env.config";
import { createClient } from "@libsql/client/web";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

const prismaGlobal = global as typeof global & { prisma?: PrismaClient };

// export const db = prismaGlobal.prisma || new PrismaClient();
const libsql = createClient({
    url: TURSO_DATABASE_URL || "",
    authToken: TURSO_AUTH_TOKEN,
  });

  const adapter = new PrismaLibSQL(libsql);
  export const db = prismaGlobal.prisma || new PrismaClient({ adapter });

if (NODE_ENV !== "production") prismaGlobal.prisma = db;
