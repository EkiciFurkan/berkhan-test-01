import React, { useEffect } from "react";
import { FilterCard } from "./FilterCard";
import { useFilters } from "@/contexts/FilterContext";

export function FilterContainer() {
	const {
		filters,
		brands,
		series,
		fuelTypes,
		bodyTypes,
		loading,
		setFilters,
		loadBrands,
		loadSeries,
		loadFuelTypes,
		loadBodyTypes,
		resetFilters
	} = useFilters();

	// Sayfa yüklendiğinde markaları ve yakıt tiplerini yükle
	useEffect(() => {
		loadBrands();
		loadFuelTypes();
		loadBodyTypes();
	}, []);

	// Bir marka seçildiğinde serileri yükle
	useEffect(() => {
		if (filters.brandId) {
			loadSeries(filters.brandId);
		}
	}, [filters.brandId]);

	return (
		<div className="relative">
			{/* Filtre sıfırlama butonu */}
			<div className="absolute top-0 right-0">
				<button
					onClick={resetFilters}
					className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
				>
					Filtreleri Sıfırla
				</button>
			</div>

			{/* Filtre kartları */}
			<div className="flex overflow-x-auto gap-4 pb-4 pt-10 px-2">
				{/* Markalar */}
				<FilterCard
					title="Marka"
					items={brands}
					selectedId={filters.brandId}
					onSelect={(id) => setFilters({ brandId: id })}
					loading={loading}
				/>

				{/* Seriler (sadece marka seçiliyse göster) */}
				{filters.brandId && (
					<FilterCard
						title="Seri"
						items={series}
						selectedId={filters.seriesId}
						onSelect={(id) => setFilters({ seriesId: id })}
						loading={loading}
					/>
				)}

				{/* Yakıt Tipleri (sadece seri seçiliyse göster) */}
				{filters.seriesId && (
					<FilterCard
						title="Yakıt Tipi"
						items={fuelTypes}
						selectedId={filters.fuelTypeId}
						onSelect={(id) => setFilters({ fuelTypeId: id })}
						loading={loading}
					/>
				)}

				{/* Kasa Tipleri (sadece yakıt tipi seçiliyse göster) */}
				{filters.fuelTypeId && (
					<FilterCard
						title="Kasa Tipi"
						items={bodyTypes}
						selectedId={filters.bodyTypeId}
						onSelect={(id) => setFilters({ bodyTypeId: id })}
						loading={loading}
					/>
				)}
			</div>
		</div>
	);
}