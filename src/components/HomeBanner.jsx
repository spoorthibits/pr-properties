"use client";

import { useEffect, useRef, useState } from "react";

const LISTING_TYPES = ["For sale", "For rent", "New homes"];

export default function HeroBanner() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("For sale");
  const [searchValue, setSearchValue] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const dropdownRef = useRef(null);

  /* ── scroll state for sticky search bar ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── entrance animation trigger ── */
  useEffect(() => {
    const t = setTimeout(() => setContentVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* ── close dropdown on outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* ─────────────────────────────────────────
          HERO SECTION
      ───────────────────────────────────────── */}
      <section className="relative h-[92vh] min-h-[520px] overflow-hidden">

        {/* Background image — fixed so it doesn't scroll */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* ── HERO CONTENT (scrolls normally) ── */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

          {/* Heading */}
          <h1
            className="text-white drop-shadow-lg transition-all duration-700 ease-out"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(28px)",
            }}
          >
            Search Luxury Homes
          </h1>

          {/* Sub-heading */}
          <p
            className="mt-3 text-white/85 max-w-xl transition-all duration-700 ease-out delay-150"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Thousands of luxury home enthusiasts just like you visit our website.
          </p>

          {/* ── SEARCH BAR (inline — visible when not scrolled) ── */}
          <div
            className="mt-8 w-full max-w-2xl transition-all duration-700 ease-out delay-300"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(20px)",
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
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          STICKY SEARCH BAR  (appears on scroll)
      ───────────────────────────────────────── */}
      
    </>
  );
}

/* ═══════════════════════════════════════════
   SEARCH BAR — reused in hero + sticky bar
═══════════════════════════════════════════ */
function SearchBar({
  selectedType,
  setSelectedType,
  searchValue,
  setSearchValue,
  dropdownOpen,
  setDropdownOpen,
  dropdownRef,
}) {
  const LISTING_TYPES = ["For sale", "For rent", "New homes"];

  return (
    <div className="flex items-center bg-white rounded-full shadow-2xl overflow-visible px-2 py-2 gap-2">

      {/* ── Type Dropdown ── */}
      <div className="relative flex-shrink-0" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((p) => !p)}
          className="flex items-center gap-1 px-4 py-2 rounded-full font-semibold text-[#1B304B] text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          {selectedType}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 min-w-[140px]">
            {LISTING_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => {
                  setSelectedType(type);
                  setDropdownOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-3 text-sm font-medium transition-colors
                  ${type === selectedType
                    ? "bg-orange-50 text-orange-500"
                    : "text-[#1B304B] hover:bg-gray-50"
                  }
                `}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-gray-200 flex-shrink-0" />

      {/* ── Search Input ── */}
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Place, neighborhood, school or agent..."
        className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 min-w-0 px-2"
      />

      {/* ── Filter icon ── */}
      <button className="flex-shrink-0 p-2 rounded-full bg-orange-50 hover:bg-orange-100 transition-colors">
        <svg
          className="w-5 h-5 text-orange-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4h18M7 8h10M10 12h4"
          />
        </svg>
      </button>

      {/* ── Search Button ── */}
      <button className="flex-shrink-0 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md">
        Search
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <circle cx="11" cy="11" r="8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
        </svg>
      </button>
    </div>
  );
}