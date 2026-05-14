"use client";

import { useEffect, useRef, useState } from "react";

const LISTING_TYPES = ["For sale", "For rent", "New homes"];

export default function HeroBanner({
  bgImage = "",
  title = "Search Luxury Homes",
  
  subtitle = "Thousands of luxury home enthusiasts just like you visit our website.",
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("For sale");
  const [searchValue, setSearchValue] = useState("");
  const [contentVisible, setContentVisible] = useState(false);

  const dropdownRef = useRef(null);

  /* ── entrance animation trigger ── */
  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* ── close dropdown on outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () =>
      document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[520px] overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

        {/* Title */}
        <h1
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg transition-all duration-700 ease-out"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible
              ? "translateY(0)"
              : "translateY(28px)",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="mt-4 text-white/85 max-w-2xl text-base md:text-lg transition-all duration-700 ease-out delay-150"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible
              ? "translateY(0)"
              : "translateY(20px)",
          }}
        >
          {subtitle}
        </p>

        {/* Search Bar */}
        {/* <div
          className="mt-8 w-full max-w-2xl transition-all duration-700 ease-out delay-300"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible
              ? "translateY(0)"
              : "translateY(20px)",
          }}
        >
          <SearchBar
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            dropdownRef={dropdownRef}
          />
        </div> */}
      </div>
    </section>
  );
}

function SearchBar({
  selectedType,
  setSelectedType,
  searchValue,
  setSearchValue,
  dropdownOpen,
  setDropdownOpen,
  dropdownRef,
}) {
  return (
    <div className="flex items-center bg-white rounded-full shadow-2xl overflow-visible px-2 py-2 gap-2">

      {/* Dropdown */}
      <div className="relative flex-shrink-0" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((p) => !p)}
          className="flex items-center gap-1 px-4 py-2 rounded-full font-semibold text-[#1B304B] text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          {selectedType}
        </button>

        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 min-w-[140px]">
            {LISTING_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => {
                  setSelectedType(type);
                  setDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-sm font-medium hover:bg-gray-50"
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Place, neighborhood, school or agent..."
        className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 min-w-0 px-2"
      />

      {/* Search Button */}
      <button className="bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-full">
        Search
      </button>
    </div>
  );
}