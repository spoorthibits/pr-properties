"use client";

import { useState } from "react";

export default function PropertyTypes({ PROPERTY_TYPES }) {
  const [hovered, setHovered] = useState(null);

  const row1 = PROPERTY_TYPES.slice(0, 3);
  const row2 = PROPERTY_TYPES.slice(3, 5);

  // Add this once, outside the component (e.g. top of the file)
const hoverStyle = `
  .property-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--color-primary);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
    border-radius: inherit;
  }
  .property-card:hover::before {
    transform: scaleY(1);
  }
  .property-card:hover .card-icon {
    color: #ffffff;
    filter: brightness(0) invert(1);
  }
  .property-card:hover .card-icon img {
    filter: brightness(0) invert(1);
  }
  .property-card:hover .card-label {
    color: #ffffff !important;
  }
  .property-card:hover .card-count {
    color: rgba(255, 255, 255, 0.65) !important;
  }
`;
const Card = ({ type, i }) => (
  <>
    <style>{hoverStyle}</style>
    <button
      className="property-card flex flex-col items-center justify-center gap-2 rounded-2xl border p-3 cursor-pointer focus:outline-none w-full"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        borderColor: "#e5e7eb",
        boxShadow: "0 1px 4px 0 rgba(0,0,0,0.04)",
        transition: "border-color 0.7s cubic-bezier(0.4,0,0.2,1), box-shadow 0.7s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div className="card-icon" style={{ position: "relative", zIndex: 1, color: "var(--color-primary)", transition: "color 0.7s cubic-bezier(0.4,0,0.2,1)" }}>
        {type.icon}
      </div>
      <div className="text-center" style={{ position: "relative", zIndex: 1 }}>
        <p className="card-label font-semibold text-base leading-tight" style={{ color: "var(--color-primary)", transition: "color 0.7s cubic-bezier(0.4,0,0.2,1)" }}>
          {type.label}
        </p>
        <p className="card-count text-sm mt-0.5" style={{ color: "var(--color-muted)", transition: "color 0.7s cubic-bezier(0.4,0,0.2,1)" }}>
          {type.count}
        </p>
      </div>
    </button>
  </>
);

  return (
    <section className="section bg-white">
      <div className="container-custom">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2>Try Searching For</h2>
          <p className="mt-2">
            Thousands of luxury home enthusiasts just like you have found their dream home
          </p>
        </div>

        {/* Desktop: pyramid layout via 6-col grid. Mobile: single column stack */}
        <div className="flex flex-col gap-4 sm:hidden">
          {PROPERTY_TYPES.map((type, i) => (
            <Card key={type.label} type={type} i={i} />
          ))}
        </div>

        <div className="hidden sm:block">
          {/* Row 1 — 3 equal cards across full width */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {row1.map((type, i) => (
              <Card key={type.label} type={type} i={i} />
            ))}
          </div>

          {/* Row 2 — 2 cards centered using a 6-col grid
              cols: [empty 1col] [card 2col] [gap 0] [card 2col] [empty 1col]
              This places each card under the gap between row-1 cards */}
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-1" />
            <div className="col-span-2">
              <Card type={row2[0]} i={3} />
            </div>
            <div className="col-span-2">
              <Card type={row2[1]} i={4} />
            </div>
            <div className="col-span-1" />
          </div>
        </div>

      </div>
    </section>
  );
}