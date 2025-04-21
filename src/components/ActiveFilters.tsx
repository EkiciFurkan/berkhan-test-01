import React, { useEffect, useState } from "react";
import { useFilters } from "@/contexts/FilterContext";

interface FilterItem {
	type: string;
	id: number | null;
	name: string;
}

export function ActiveFilters() {
	const { filters, brands, series, fuelTypes, bodyTypes, setFilters } = useFilters();
	const [activeFilters, setActiveFilters] = useState<FilterItem[]>([]);

	useEffect(() => {
		const newActiveFilters: FilterItem[] = [];

		// Marka filtresi
		if (filters.brandId) {
			const brand = brands.find(b => b.id === filters.brandId);
			if (brand) {
				newActiveFilters.push({
					type: "brand",
					id: brand.id,
					name: brand.name
				});
			}
		}

		// Seri filtresi
		if (filters.seriesId) {
			const seri = series.find(s => s.id === filters.seriesId);
			if (seri) {
				newActiveFilters.push({
					type: "series",
					id: seri.id,
					name: seri.name
				});
			}
		}

		// Yakıt tipi filtresi
		if (filters.fuelTypeId) {
			const fuelType = fuelTypes.find(f => f.id === filters.fuelTypeId);
			if (fuelType) {
				newActiveFilters.push({
					type: "fuelType",
					id: fuelType.id,
					name: fuelType.name
				});
			}
		}

		// Kasa tipi filtresi
		if (filters.bodyTypeId) {
			const bodyType = bodyTypes.find(b => b.id === filters.bodyTypeId);
			if (bodyType) {
				newActiveFilters.push({
					type: "bodyType",
					id: bodyType.id,
					name: bodyType.name
				});
			}
		}

		setActiveFilters(newActiveFilters);
	}, [filters, brands, series, fuelTypes, bodyTypes]);

	// Filtreyi kaldır
	const removeFilter = (type: string, id: number | null) => {
		switch (type) {
			case "brand":
				setFilters({ brandId: null, seriesId: null, fuelTypeId: null, bodyTypeId: null });
				break;
			case "series":
				setFilters({ seriesId: null, fuelTypeId: null, bodyTypeId: null });
				break;
			case "fuelType":
				setFilters({ fuelTypeId: null, bodyTypeId: null });
				break;
			case "bodyType":
				setFilters({ bodyTypeId: null });
				break;
		}
	};

	if (activeFilters.length === 0) {
		return null;
	}

	return (
		<div className="my-4">
			<div className="flex flex-wrap gap-2">
				{activeFilters.map((filter, index) => (
					<div
						key={`${filter.type}-${filter.id}`}
						className="inline-flex items-center bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-full px-3 py-1 text-sm"
					>
            <span className="mr-1">
              {filter.type === "brand" && "Marka:"}
				{filter.type === "series" && "Seri:"}
				{filter.type === "fuelType" && "Yakıt:"}
				{filter.type === "bodyType" && "Kasa:"}
            </span>
						<span className="font-medium">{filter.name}</span>
						<button
							onClick={() => removeFilter(filter.type, filter.id)}
							className="ml-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 w-4 h-4 inline-flex items-center justify-center"
							aria-label={`${filter.name} filtresini kaldır`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3 w-3"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}