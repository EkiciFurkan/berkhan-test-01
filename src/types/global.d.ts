import { PrismaClient } from "@/generated/prisma";

declare global {
	namespace NodeJS {
		interface Global {
			prisma: PrismaClient | undefined;
		}
	}

	// Alternatif olarak globalThis tipini genişletelim
	interface globalThis {
		prisma: PrismaClient | undefined;
	}
}

// TypeScript modül gerekliliği için boş bir export ekleyin
export {};