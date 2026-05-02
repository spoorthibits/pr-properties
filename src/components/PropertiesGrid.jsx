// components/PropertiesGrid.jsx
"use client";

import PropertyCard from "./PropertyCard";

export default function PropertiesGrid({ properties }) {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2>Featured Properties</h2>
          <p className="mt-2">
            Thousands of luxury home enthusiasts just like you have found their dream home
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}