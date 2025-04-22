import React from "react";

interface Item {
	id: number;
	name: string;
}

interface FilterCardProps {
	title: string;
	items: Item[];
	selectedId: number | null;
	onSelect: (id: number) => void;
	loading: boolean;
}

export function FilterCard({
							   title,
							   items,
							   selectedId,
							   onSelect,
							   loading
						   }: FilterCardProps) {
	return (
		<div className="w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden" style={{ minWidth: "400px" }}>
			<div className="p-3 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
				<h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">{title}</h3>
			</div>
			<div className="max-h-96 overflow-y-auto">
				{loading ? (
					<div className="p-4 text-center">
						<div className="animate-spin h-5 w-5 border-2 border-gray-500 border-t-transparent rounded-full mx-auto"></div>
						<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Yükleniyor...</p>
					</div>
				) : items.length === 0 ? (
					<div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
						Veri bulunamadı
					</div>
				) : (
					<ul className="divide-y divide-gray-200 dark:divide-gray-700">
						{items.map((item) => (
							<li key={item.id}>
								<button
									onClick={() => onSelect(item.id)}
									className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition ${
										selectedId === item.id
											? "bg-blue-50 dark:bg-blue-900/20 font-medium"
											: ""
									}`}
								>
									{item.name}
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}