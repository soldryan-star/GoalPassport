import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | null };

async function createPrisma(): Promise<PrismaClient> {
  const url = process.env.DATABASE_URL ?? "file:./dev.db";

  if (url.startsWith("postgres") || url.startsWith("postgresql")) {
    return new PrismaClient();
  }

  const { PrismaBetterSqlite3 } = await import("@prisma/adapter-better-sqlite3");
  const adapter = new PrismaBetterSqlite3({ url });
  return new PrismaClient({ adapter });
}

let prismaPromise: Promise<PrismaClient> | null = null;

export async function getPrisma(): Promise<PrismaClient> {
  if (globalForPrisma.prisma) return globalForPrisma.prisma;
  if (!prismaPromise) {
    prismaPromise = createPrisma().then((p) => {
      if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = p;
      return p;
    });
  }
  return prismaPromise;
}
