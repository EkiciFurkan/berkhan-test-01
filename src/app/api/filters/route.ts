import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams;
		const type = searchParams.get("type");
		const brandId = searchParams.get("brandId");
		const seriesId = searchParams.get("seriesId");
		const fuelTypeId = searchParams.get("fuelTypeId");

		switch (type) {
			case "brands":
				const brands = await prisma.brand.findMany({
					orderBy: { name: "asc" }
				});
				return NextResponse.json(brands);

			case "series":
				if (!brandId) {
					return NextResponse.json({ error: "BrandId parametresi gerekli" }, { status: 400 });
				}
				const series = await prisma.series.findMany({
					where: { brandId: parseInt(brandId) },
					orderBy: { name: "asc" }
				});
				return NextResponse.json(series);

			case "fuelTypes":
				const fuelTypes = await prisma.fuelType.findMany({
					orderBy: { name: "asc" }
				});
				return NextResponse.json(fuelTypes);

			case "bodyTypes":
				const bodyTypes = await prisma.bodyType.findMany({
					orderBy: { name: "asc" }
				});
				return NextResponse.json(bodyTypes);

			case "cars":
				const whereClause: any = {};

				if (brandId) {
					whereClause.brandId = parseInt(brandId);
				}

				if (seriesId) {
					whereClause.seriesId = parseInt(seriesId);
				}

				if (fuelTypeId) {
					whereClause.fuelTypeId = parseInt(fuelTypeId);
				}

				const cars = await prisma.car.findMany({
					where: whereClause,
					include: {
						brand: true,
						series: true,
						fuelType: true,
						bodyType: true
					},
					orderBy: { createdAt: "desc" }
				});

				return NextResponse.json(cars);

			default:
				return NextResponse.json({ error: "Geçersiz sorgu tipi" }, { status: 400 });
		}
	} catch (error) {
		console.error("API hatası:", error);
		return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
	}
}