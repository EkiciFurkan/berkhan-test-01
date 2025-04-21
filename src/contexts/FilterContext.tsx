import React, { createContext, useState, useContext, ReactNode } from "react";
import { Brand, Series, FuelType, BodyType, FilterState } from "@/types/filters";

interface FilterContextType {
	filters: FilterState;
	brands: Brand[];
	series: Series[];
	fuelTypes: FuelType[];
	bodyTypes: BodyType[];
	loading: boolean;
	setFilters: (filters: Partial<FilterState>) => void;
	loadBrands: () => Promise<void>;
	loadSeries: (brandId: number) => Promise<void>;
	loadFuelTypes: () => Promise<void>;
	loadBodyTypes: () => Promise<void>;
	resetFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function useFilters() {
	const context = useContext(FilterContext);
	if (context === undefined) {
		throw new Error("useFilters must be used within a FilterProvider");
	}
	return context;
}

interface FilterProviderProps {
	children: ReactNode;
}

export function FilterProvider({ children }: FilterProviderProps) {
	const [filters, setFiltersState] = useState<FilterState>({
		brandId: null,
		seriesId: null,
		fuelTypeId: null,
		bodyTypeId: null
	});

	const [brands, setBrands] = useState<Brand[]>([]);
	const [series, setSeries] = useState<Series[]>([]);
	const [fuelTypes, setFuelTypes] = useState<FuelType[]>([]);
	const [bodyTypes, setBodyTypes] = useState<BodyType[]>([]);
	const [loading, setLoading] = useState(false);

	const setFilters = (newFilters: Partial<FilterState>) => {
		setFiltersState((prev) => {
			const updated = { ...prev, ...newFilters };

			// Eğer brandId değiştiyse seriesId'yi sıfırla
			if (newFilters.brandId !== undefined && newFilters.brandId !== prev.brandId) {
				updated.seriesId = null;
				updated.fuelTypeId = null;
				updated.bodyTypeId = null;
			}

			// Eğer seriesId değiştiyse fuelTypeId'yi sıfırla
			if (newFilters.seriesId !== undefined && newFilters.seriesId !== prev.seriesId) {
				updated.fuelTypeId = null;
				updated.bodyTypeId = null;
			}

			// Eğer fuelTypeId değiştiyse bodyTypeId'yi sıfırla
			if (newFilters.fuelTypeId !== undefined && newFilters.fuelTypeId !== prev.fuelTypeId) {
				updated.bodyTypeId = null;
			}

			return updated;
		});
	};

	const loadBrands = async () => {
		try {
			setLoading(true);
			const response = await fetch("/api/filters?type=brands");
			if (!response.ok) throw new Error("Markalar yüklenirken hata oluştu");
			const data = await response.json();
			setBrands(data);
		} catch (error) {
			console.error("Markalar yüklenirken hata:", error);
		} finally {
			setLoading(false);
		}
	};

	const loadSeries = async (brandId: number) => {
		try {
			setLoading(true);
			const response = await fetch(`/api/filters?type=series&brandId=${brandId}`);
			if (!response.ok) throw new Error("Seriler yüklenirken hata oluştu");
			const data = await response.json();
			setSeries(data);
		} catch (error) {
			console.error("Seriler yüklenirken hata:", error);
		} finally {
			setLoading(false);
		}
	};

	const loadFuelTypes = async () => {
		try {
			setLoading(true);
			const response = await fetch("/api/filters?type=fuelTypes");
			if (!response.ok) throw new Error("Yakıt tipleri yüklenirken hata oluştu");
			const data = await response.json();
			setFuelTypes(data);
		} catch (error) {
			console.error("Yakıt tipleri yüklenirken hata:", error);
		} finally {
			setLoading(false);
		}
	};

	const loadBodyTypes = async () => {
		try {
			setLoading(true);
			const response = await fetch("/api/filters?type=bodyTypes");
			if (!response.ok) throw new Error("Kasa tipleri yüklenirken hata oluştu");
			const data = await response.json();
			setBodyTypes(data);
		} catch (error) {
			console.error("Kasa tipleri yüklenirken hata:", error);
		} finally {
			setLoading(false);
		}
	};

	const resetFilters = () => {
		setFiltersState({
			brandId: null,
			seriesId: null,
			fuelTypeId: null,
			bodyTypeId: null
		});
		setSeries([]);
	};

	const value = {
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
	};

	return (
		<FilterContext.Provider value={value}>
			{children}
		</FilterContext.Provider>
	);
}