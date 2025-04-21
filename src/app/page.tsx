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
      </div>
  );
}