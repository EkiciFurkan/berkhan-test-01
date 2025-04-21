import React, { useEffect, useState } from "react";
import { useFilters } from "@/contexts/FilterContext";
import { Car } from "@/types/filters";

export function CarList() {
	const { filters } = useFilters();
	const [cars, setCars] = useState<Car[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchCars = async () => {
			try {
				setLoading(true);

				// Filtre parametrelerini hazırla
				const params = new URLSearchParams();
				params.append("type", "cars");

				if (filters.brandId) {
					params.append("brandId", filters.brandId.toString());
				}

				if (filters.seriesId) {
					params.append("seriesId", filters.seriesId.toString());
				}

				if (filters.fuelTypeId) {
					params.append("fuelTypeId", filters.fuelTypeId.toString());
				}

				if (filters.bodyTypeId) {
					params.append("bodyTypeId", filters.bodyTypeId.toString());
				}

				const response = await fetch(`/api/filters?${params.toString()}`);

				if (!response.ok) {
					throw new Error("Araçlar yüklenirken hata oluştu");
				}

				const data = await response.json();
				setCars(data);
			} catch (error) {
				console.error("Araçlar yüklenirken hata:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchCars();
	}, [filters]);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-64">
				<div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
			</div>
		);
	}

	if (cars.length === 0) {
		return (
			<div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
				<h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
					Seçilen kriterlere uygun araç bulunamadı
				</h3>
				<p className="mt-2 text-gray-500 dark:text-gray-400">
					Lütfen farklı filtre seçenekleri deneyin
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
			{cars.map((car) => (
				<div
					key={car.id}
					className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
				>
					<div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
						{car.imageUrl ? (
							<img
								src={car.imageUrl}
								alt={car.title}
								className="w-full h-full object-cover"
							/>
						) : (
							<div className="text-gray-400 dark:text-gray-500 text-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-12 w-12 mx-auto"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								<p>Görsel Yok</p>
							</div>
						)}
					</div>
					<div className="p-4">
						<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
							{car.title}
						</h3>
						<div className="flex flex-wrap text-sm text-gray-600 dark:text-gray-400 mb-3">
							<span className="mr-3">{car.year}</span>
							<span className="mr-3">{car.fuelType.name}</span>
							<span>{car.bodyType.name}</span>
						</div>
						<div className="flex items-baseline mt-2">
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                {new Intl.NumberFormat("tr-TR", {
					style: "currency",
					currency: "TRY",
					maximumFractionDigits: 0
				}).format(car.price)}
              </span>
							<span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                {car.mileage
					? `${new Intl.NumberFormat("tr-TR").format(car.mileage)} km`
					: "0 km"}
              </span>
						</div>
						{car.description && (
							<p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
								{car.description}
							</p>
						)}
					</div>
				</div>
			))}
		</div>
	);
}