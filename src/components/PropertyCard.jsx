// components/PropertyCard.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// 

export default function PropertyCard({
  image,        // { src, alt }
  badges,       // [{ label, variant }] — variant: "featured" | "status"
  title,
  address,
  beds,
  baths,
  sqft,
  price,
  detailsHref,
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">

        
      {/* ── Image + Badges ── */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {badges.map((badge) => (
            <span
              key={badge.label}
              style={{
                backgroundColor: badge.variant === "featured"
                  ? "var(--color-gold)"
                  : "var(--color-primary)",
              }}
              className="text-xs font-semibold px-3 py-1 rounded-full text-white"
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="p-5 flex flex-col gap-3 flex-1">

        {/* Title */}
        <h3 className="leading-tight">{title}</h3>

        {/* Address */}
        <p className="flex items-center gap-1.5 text-small" style={{ color: "var(--color-muted)" }}>
          <LocationIcon />
          {address}
        </p>

        {/* Stats */}
        <p className="text-small" style={{ color: "var(--color-muted)" }}>
          {beds > 0 && (
            <span className="mr-3">
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>{beds}</span> Beds
            </span>
          )}
          {baths > 0 && (
            <span className="mr-3">
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>{baths}</span> Baths
            </span>
          )}
          {sqft > 0 && (
            <span>
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>{sqft.toLocaleString()}</span> Sqft
            </span>
          )}
          {!beds && !baths && (
            <span className="font-semibold" style={{ color: "var(--color-primary)" }}>Open Plot Layout</span>
          )}
        </p>

        <hr className="border-gray-100" />

        {/* Price + Actions */}
        <div className="flex items-center justify-between mt-auto">
          <div className="text-lg font-bold text-primary">
            {typeof price === 'number' ? `₹${price.toLocaleString()}` : price}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => console.log("Compare:", title)}
              className="flex items-center gap-1.5 text-small transition-colors"
              style={{ color: "var(--color-muted)" }}
            >
              {/* <CompareIcon />
              Compare */}
            </button>
            <Link
              href={detailsHref}
              className="text-small font-medium px-4 py-1.5 rounded-full transition-all duration-200 border"
              style={{
                borderColor: "var(--color-gold)",
                color: "var(--color-gold)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "var(--color-gold)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-gold)";
              }}
            >
              Details
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}