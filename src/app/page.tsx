"use client";

import React from "react";
import { FilterProvider } from "@/contexts/FilterContext";
import { FilterContainer } from "@/components/FilterContainer";
import { CarList } from "@/components/CarList";
import { ActiveFilters } from "@/components/ActiveFilters";

export default function Home() {
  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

        <main className="container mx-auto px-4 py-8">
          <FilterProvider>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-8 overflow-x-auto">
              <FilterContainer />
            </div>

            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Araç Listesi</h2>
              </div>

              <ActiveFilters />
              <CarList />
            </section>
          </FilterProvider>
        </main>

        <footer className="bg-white dark:bg-gray-800 shadow-inner mt-8 py-4">
          <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
            <p>&copy; 2025 Araç Filtreleme Sistemi</p>
          </div>
        </footer>
      </div>
  );
}