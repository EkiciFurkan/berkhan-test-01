// prisma/seed.mjs
import {PrismaClient} from "../src/generated/prisma/client.js";

const prisma = new PrismaClient();

async function main() {
	// Mevcut verileri temizle (geliştirme amaçlı)
	await prisma.car.deleteMany();
	await prisma.series.deleteMany();
	await prisma.bodyType.deleteMany();
	await prisma.fuelType.deleteMany();
	await prisma.brand.deleteMany();

	console.log("Veritabanı temizlendi, veri yükleme başlıyor...");

	// Markalar
	const brands = [
		{ name: "Alfa Romeo" },
		{ name: "Audi" },
		{ name: "BMW" },
		{ name: "Chevrolet" },
		{ name: "Citroën" },
		{ name: "DS Automobiles" },
		{ name: "Dacia" },
		{ name: "Ferrari" },
		{ name: "Fiat" },
		{ name: "Ford" },
		{ name: "Honda" },
		{ name: "Hyundai" },
		{ name: "Jaguar" },
		{ name: "Kia" },
		{ name: "Land Rover" },
		{ name: "Lexus" },
		{ name: "Mazda" },
		{ name: "Mercedes-Benz" },
		{ name: "Mini" },
		{ name: "Mitsubishi" },
		{ name: "Nissan" },
		{ name: "Opel" },
		{ name: "Peugeot" },
		{ name: "Porsche" },
		{ name: "Renault" },
		{ name: "Seat" },
		{ name: "Skoda" },
		{ name: "Subaru" },
		{ name: "Suzuki" },
		{ name: "Toyota" },
		{ name: "Volkswagen" },
		{ name: "Volvo" }
	];

	console.log("Markalar ekleniyor...");
	const createdBrands = {};

	for (const brand of brands) {
		const createdBrand = await prisma.brand.create({ data: brand });
		createdBrands[brand.name] = createdBrand;
	}

	// BMW için seriler
	console.log("BMW serileri ekleniyor...");
	const bmwSeries = [
		{ name: "1 Serisi", brandId: createdBrands["BMW"].id },
		{ name: "2 Serisi", brandId: createdBrands["BMW"].id },
		{ name: "3 Serisi", brandId: createdBrands["BMW"].id },
		{ name: "4 Serisi", brandId: createdBrands["BMW"].id },
		{ name: "5 Serisi", brandId: createdBrands["BMW"].id },
		{ name: "6 Serisi", brandId: createdBrands["BMW"].id },
		{ name: "7 Serisi", brandId: createdBrands["BMW"].id },
		{ name: "8 Serisi", brandId: createdBrands["BMW"].id },
		{ name: "X1", brandId: createdBrands["BMW"].id },
		{ name: "X2", brandId: createdBrands["BMW"].id },
		{ name: "X3", brandId: createdBrands["BMW"].id },
		{ name: "X4", brandId: createdBrands["BMW"].id },
		{ name: "X5", brandId: createdBrands["BMW"].id },
		{ name: "X6", brandId: createdBrands["BMW"].id },
		{ name: "X7", brandId: createdBrands["BMW"].id },
		{ name: "Z4", brandId: createdBrands["BMW"].id },
		{ name: "i3", brandId: createdBrands["BMW"].id },
		{ name: "i4", brandId: createdBrands["BMW"].id },
		{ name: "i8", brandId: createdBrands["BMW"].id },
		{ name: "iX", brandId: createdBrands["BMW"].id }
	];

	const createdBMWSeries = {};
	for (const series of bmwSeries) {
		const createdSeries = await prisma.series.create({ data: series });
		createdBMWSeries[series.name] = createdSeries;
	}

	// Mercedes-Benz için seriler
	console.log("Mercedes-Benz serileri ekleniyor...");
	const mercedesSeries = [
		{ name: "A-Serisi", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "B-Serisi", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "C-Serisi", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "E-Serisi", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "S-Serisi", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "CLA", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "CLS", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "GLA", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "GLB", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "GLC", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "GLE", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "GLS", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "G-Serisi", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "EQA", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "EQB", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "EQC", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "EQE", brandId: createdBrands["Mercedes-Benz"].id },
		{ name: "EQS", brandId: createdBrands["Mercedes-Benz"].id }
	];

	const createdMercedesSeries = {};
	for (const series of mercedesSeries) {
		const createdSeries = await prisma.series.create({ data: series });
		createdMercedesSeries[series.name] = createdSeries;
	}

	// Audi için seriler
	console.log("Audi serileri ekleniyor...");
	const audiSeries = [
		{ name: "A1", brandId: createdBrands["Audi"].id },
		{ name: "A3", brandId: createdBrands["Audi"].id },
		{ name: "A4", brandId: createdBrands["Audi"].id },
		{ name: "A5", brandId: createdBrands["Audi"].id },
		{ name: "A6", brandId: createdBrands["Audi"].id },
		{ name: "A7", brandId: createdBrands["Audi"].id },
		{ name: "A8", brandId: createdBrands["Audi"].id },
		{ name: "Q2", brandId: createdBrands["Audi"].id },
		{ name: "Q3", brandId: createdBrands["Audi"].id },
		{ name: "Q4", brandId: createdBrands["Audi"].id },
		{ name: "Q5", brandId: createdBrands["Audi"].id },
		{ name: "Q7", brandId: createdBrands["Audi"].id },
		{ name: "Q8", brandId: createdBrands["Audi"].id },
		{ name: "TT", brandId: createdBrands["Audi"].id },
		{ name: "R8", brandId: createdBrands["Audi"].id },
		{ name: "e-tron", brandId: createdBrands["Audi"].id }
	];

	const createdAudiSeries = {};
	for (const series of audiSeries) {
		const createdSeries = await prisma.series.create({ data: series });
		createdAudiSeries[series.name] = createdSeries;
	}

	// Yakıt tipleri
	console.log("Yakıt tipleri ekleniyor...");
	const fuelTypes = [
		{ name: "Benzin" },
		{ name: "Benzin & LPG" },
		{ name: "Dizel" },
		{ name: "Elektrik" },
		{ name: "Hibrit" },
		{ name: "Plug-in Hibrit" },
		{ name: "Hidrojen" }
	];

	const createdFuelTypes = {};
	for (const fuelType of fuelTypes) {
		const createdFuelType = await prisma.fuelType.create({ data: fuelType });
		createdFuelTypes[fuelType.name] = createdFuelType;
	}

	// Kasa tipleri
	console.log("Kasa tipleri ekleniyor...");
	const bodyTypes = [
		{ name: "Sedan" },
		{ name: "Hatchback" },
		{ name: "SUV" },
		{ name: "Cabrio" },
		{ name: "Coupe" },
		{ name: "Station Wagon" },
		{ name: "MPV" },
		{ name: "Roadster" },
		{ name: "Pick-up" },
		{ name: "Van" }
	];

	const createdBodyTypes = {};
	for (const bodyType of bodyTypes) {
		const createdBodyType = await prisma.bodyType.create({ data: bodyType });
		createdBodyTypes[bodyType.name] = createdBodyType;
	}

	// Örnek araçlar
	console.log("Örnek araçlar ekleniyor...");

	// BMW örnekleri
	await prisma.car.create({
		data: {
			title: "BMW 320i Luxury Line",
			year: 2019,
			brandId: createdBrands["BMW"].id,
			seriesId: createdBMWSeries["3 Serisi"].id,
			fuelTypeId: createdFuelTypes["Benzin"].id,
			bodyTypeId: createdBodyTypes["Sedan"].id,
			price: 650000,
			mileage: 45000,
			description: "Bakımlı BMW 320i Luxury Line, sunroof, deri koltuk, navigasyon"
		}
	});

	await prisma.car.create({
		data: {
			title: "BMW 520d xDrive Executive",
			year: 2021,
			brandId: createdBrands["BMW"].id,
			seriesId: createdBMWSeries["5 Serisi"].id,
			fuelTypeId: createdFuelTypes["Dizel"].id,
			bodyTypeId: createdBodyTypes["Sedan"].id,
			price: 1250000,
			mileage: 25000,
			description: "BMW 520d xDrive Executive, M Sport, head-up display, 360 kamera"
		}
	});

	await prisma.car.create({
		data: {
			title: "BMW X5 40i xDrive",
			year: 2022,
			brandId: createdBrands["BMW"].id,
			seriesId: createdBMWSeries["X5"].id,
			fuelTypeId: createdFuelTypes["Benzin"].id,
			bodyTypeId: createdBodyTypes["SUV"].id,
			price: 2800000,
			mileage: 10000,
			description: "BMW X5 40i xDrive, panoramik cam tavan, Harman Kardon ses sistemi"
		}
	});

	// Mercedes örnekleri
	await prisma.car.create({
		data: {
			title: "Mercedes-Benz C200 AMG",
			year: 2020,
			brandId: createdBrands["Mercedes-Benz"].id,
			seriesId: createdMercedesSeries["C-Serisi"].id,
			fuelTypeId: createdFuelTypes["Benzin"].id,
			bodyTypeId: createdBodyTypes["Sedan"].id,
			price: 980000,
			mileage: 35000,
			description: "Mercedes-Benz C200 AMG, Burmester ses sistemi, akıllı park asistanı"
		}
	});

	await prisma.car.create({
		data: {
			title: "Mercedes-Benz E250 CDI",
			year: 2019,
			brandId: createdBrands["Mercedes-Benz"].id,
			seriesId: createdMercedesSeries["E-Serisi"].id,
			fuelTypeId: createdFuelTypes["Dizel"].id,
			bodyTypeId: createdBodyTypes["Sedan"].id,
			price: 850000,
			mileage: 65000,
			description: "Mercedes-Benz E250 CDI, deri döşeme, elektrikli ön koltuklar, navigasyon"
		}
	});

	await prisma.car.create({
		data: {
			title: "Mercedes-Benz GLC 300d 4MATIC",
			year: 2022,
			brandId: createdBrands["Mercedes-Benz"].id,
			seriesId: createdMercedesSeries["GLC"].id,
			fuelTypeId: createdFuelTypes["Dizel"].id,
			bodyTypeId: createdBodyTypes["SUV"].id,
			price: 2100000,
			mileage: 15000,
			description: "Mercedes-Benz GLC 300d 4MATIC, geniş ekranlı MBUX, aktif şerit takip"
		}
	});

	// Audi örnekleri
	await prisma.car.create({
		data: {
			title: "Audi A4 40 TDI quattro",
			year: 2021,
			brandId: createdBrands["Audi"].id,
			seriesId: createdAudiSeries["A4"].id,
			fuelTypeId: createdFuelTypes["Dizel"].id,
			bodyTypeId: createdBodyTypes["Sedan"].id,
			price: 1100000,
			mileage: 30000,
			description: "Audi A4 40 TDI quattro, S-Line, Bang & Olufsen ses sistemi"
		}
	});

	await prisma.car.create({
		data: {
			title: "Audi Q5 45 TFSI quattro",
			year: 2022,
			brandId: createdBrands["Audi"].id,
			seriesId: createdAudiSeries["Q5"].id,
			fuelTypeId: createdFuelTypes["Benzin"].id,
			bodyTypeId: createdBodyTypes["SUV"].id,
			price: 1750000,
			mileage: 20000,
			description: "Audi Q5 45 TFSI quattro, Matrix LED farlar, sanal kokpit"
		}
	});

	await prisma.car.create({
		data: {
			title: "Audi e-tron 55 quattro",
			year: 2023,
			brandId: createdBrands["Audi"].id,
			seriesId: createdAudiSeries["e-tron"].id,
			fuelTypeId: createdFuelTypes["Elektrik"].id,
			bodyTypeId: createdBodyTypes["SUV"].id,
			price: 3200000,
			mileage: 5000,
			description: "Audi e-tron 55 quattro, 95 kWh batarya, 400 km menzil, hızlı şarj desteği"
		}
	});

	// Volkswagen örnekleri
	await prisma.car.create({
		data: {
			title: "Volkswagen Golf 1.5 TSI",
			year: 2021,
			brandId: createdBrands["Volkswagen"].id,
			seriesId: null, // Seri tanımlanmamış
			fuelTypeId: createdFuelTypes["Benzin"].id,
			bodyTypeId: createdBodyTypes["Hatchback"].id,
			price: 750000,
			mileage: 25000,
			description: "Volkswagen Golf 1.5 TSI, dijital gösterge paneli, adaptif hız sabitleyici"
		}
	});

	await prisma.car.create({
		data: {
			title: "Volkswagen Passat 2.0 TDI",
			year: 2020,
			brandId: createdBrands["Volkswagen"].id,
			seriesId: null, // Seri tanımlanmamış
			fuelTypeId: createdFuelTypes["Dizel"].id,
			bodyTypeId: createdBodyTypes["Sedan"].id,
			price: 850000,
			mileage: 40000,
			description: "Volkswagen Passat 2.0 TDI, DSG şanzıman, App-Connect, panoramik tavan"
		}
	});

	// Toyota örnekleri
	await prisma.car.create({
		data: {
			title: "Toyota Corolla 1.8 Hybrid",
			year: 2022,
			brandId: createdBrands["Toyota"].id,
			seriesId: null, // Seri tanımlanmamış
			fuelTypeId: createdFuelTypes["Hibrit"].id,
			bodyTypeId: createdBodyTypes["Sedan"].id,
			price: 950000,
			mileage: 15000,
			description: "Toyota Corolla 1.8 Hybrid, e-CVT, Toyota Safety Sense, akıllı telefon entegrasyonu"
		}
	});

	await prisma.car.create({
		data: {
			title: "Toyota RAV4 2.5 Hybrid AWD",
			year: 2023,
			brandId: createdBrands["Toyota"].id,
			seriesId: null, // Seri tanımlanmamış
			fuelTypeId: createdFuelTypes["Hibrit"].id,
			bodyTypeId: createdBodyTypes["SUV"].id,
			price: 1650000,
			mileage: 8000,
			description: "Toyota RAV4 2.5 Hybrid AWD, JBL premium ses sistemi, kablosuz şarj"
		}
	});

	// Renault örnekleri
	await prisma.car.create({
		data: {
			title: "Renault Megane 1.5 Blue dCi",
			year: 2020,
			brandId: createdBrands["Renault"].id,
			seriesId: null, // Seri tanımlanmamış
			fuelTypeId: createdFuelTypes["Dizel"].id,
			bodyTypeId: createdBodyTypes["Hatchback"].id,
			price: 550000,
			mileage: 35000,
			description: "Renault Megane 1.5 Blue dCi, multimedya sistemi, eller serbest park sistemi"
		}
	});

	await prisma.car.create({
		data: {
			title: "Renault Clio 1.0 TCe",
			year: 2021,
			brandId: createdBrands["Renault"].id,
			seriesId: null, // Seri tanımlanmamış
			fuelTypeId: createdFuelTypes["Benzin"].id,
			bodyTypeId: createdBodyTypes["Hatchback"].id,
			price: 450000,
			mileage: 20000,
			description: "Renault Clio 1.0 TCe, EASY LINK multimedya sistemi, otomatik klima"
		}
	});

	// Farklı yıllardan BMW 3 Serisi örnekleri
	await prisma.car.create({
		data: {
			title: "BMW 320d M Sport",
			year: 2015,
			brandId: createdBrands["BMW"].id,
			seriesId: createdBMWSeries["3 Serisi"].id,
			fuelTypeId: createdFuelTypes["Dizel"].id,
			bodyTypeId: createdBodyTypes["Sedan"].id,
			price: 380000,
			mileage: 120000,
			description: "BMW 320d M Sport, sportif tasarım, xenon farlar, kırmızı deri koltuklar"
		}
	});

	await prisma.car.create({
		data: {
			title: "BMW 316i Technology",
			year: 2016,
			brandId: createdBrands["BMW"].id,
			seriesId: createdBMWSeries["3 Serisi"].id,
			fuelTypeId: createdFuelTypes["Benzin"].id,
			bodyTypeId: createdBodyTypes["Sedan"].id,
			price: 420000,
			mileage: 100000,
			description: "BMW 316i Technology, iDrive sistem, geri görüş kamerası, ısıtmalı koltuklar"
		}
	});

	await prisma.car.create({
		data: {
			title: "BMW 320i ED Sport Line",
			year: 2017,
			brandId: createdBrands["BMW"].id,
			seriesId: createdBMWSeries["3 Serisi"].id,
			fuelTypeId: createdFuelTypes["Benzin"].id,
			bodyTypeId: createdBodyTypes["Sedan"].id,
			price: 480000,
			mileage: 90000,
			description: "BMW 320i ED Sport Line, LED farlar, spor süspansiyon, Harman Kardon ses sistemi"
		}
	});

	await prisma.car.create({
		data: {
			title: "BMW 318i Premium Line",
			year: 2018,
			brandId: createdBrands["BMW"].id,
			seriesId: createdBMWSeries["3 Serisi"].id,
			fuelTypeId: createdFuelTypes["Benzin"].id,
			bodyTypeId: createdBodyTypes["Sedan"].id,
			price: 520000,
			mileage: 75000,
			description: "BMW 318i Premium Line, Dakota deri, ısıtmalı direksiyon, panoramik cam tavan"
		}
	});

	console.log("Toplam 20+ araç eklendi!");
	console.log("Veritabanı başarıyla dolduruldu!");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});