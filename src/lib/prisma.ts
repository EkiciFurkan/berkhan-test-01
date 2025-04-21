import { PrismaClient } from "@/generated/prisma";

// PrismaClient örneği için singleton desen
let prismaInstance: PrismaClient | undefined;

export function getPrisma(): PrismaClient {
	if (!prismaInstance) {
		prismaInstance = new PrismaClient({
			log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
		});
	}
	return prismaInstance;
}

export const prisma = getPrisma();