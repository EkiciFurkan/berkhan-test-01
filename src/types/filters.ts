export interface Brand {
	id: number;
	name: string;
}

export interface Series {
	id: number;
	name: string;
	brandId: number;
}

export interface FuelType {
	id: number;
	name: string;
}

export interface BodyType {
	id: number;
	name: string;
}

export interface Car {
	id: number;
	title: string;
	year: number;
	brandId: number;
	brand: Brand;
	seriesId: number | null;
	series: Series | null;
	fuelTypeId: number;
	fuelType: FuelType;
	bodyTypeId: number;
	bodyType: BodyType;
	price: number;
	mileage: number | null;
	imageUrl: string | null;
	description: string | null;
}

export interface FilterState {
	brandId: number | null;
	seriesId: number | null;
	fuelTypeId: number | null;
	bodyTypeId: number | null;
}