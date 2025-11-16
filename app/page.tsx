// app/page.tsx
"use client"; // Required for state and event handlers, if you add them

import React from "react";
import Pill from "./components/Pill";
import PropertyCard from "./components/PropertyCard";
import {
  HERO_IMAGE_URL,
  FILTER_LABELS,
  PROPERTYLISTINGSAMPLE,
} from "@/constants";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Find your favorite place here!
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* 2. Filter Section */}
      <section className="sticky top-[129px] z-40 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-3 overflow-x-auto py-4 no-scrollbar">
            {FILTER_LABELS.map((label, index) => (
              <Pill key={index} label={label} isActive={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Listing Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      </section>
    </>
  );
}