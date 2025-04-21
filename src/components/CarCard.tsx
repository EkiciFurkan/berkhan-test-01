import React from "react";
import { Car } from "@/types/filters";

interface CarCardProps {
	car: Car;
}

export function CarCard({ car }: CarCardProps) {
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
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
				<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">
					{car.title}
				</h3>

				<div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
            {car.year}
          </span>
					<span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded">
            {car.fuelType.name}
          </span>
					<span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded">
            {car.bodyType.name}
          </span>
				</div>

				<div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            {new Intl.NumberFormat("tr-TR", {
				style: "currency",
				currency: "TRY",
				maximumFractionDigits: 0
			}).format(car.price)}
          </span>
					<span className="text-sm text-gray-500 dark:text-gray-400">
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

				<div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
					<div className="flex items-center text-sm">
						<span className="text-gray-600 dark:text-gray-400 font-medium mr-2">Marka:</span>
						<span className="text-gray-800 dark:text-gray-200">{car.brand.name}</span>
					</div>

					{car.series && (
						<div className="flex items-center text-sm mt-1">
							<span className="text-gray-600 dark:text-gray-400 font-medium mr-2">Seri:</span>
							<span className="text-gray-800 dark:text-gray-200">{car.series.name}</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}