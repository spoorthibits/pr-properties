"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_LISTING_TYPES = ["For sale", "For rent", "New homes"];

export default function HeroBanner({
  title = "Search Luxury Homes",
  subtitle = "Thousands of luxury home enthusiasts just like you visit our website.",
  backgroundImage = "/assets/homebanner.avif",
  overlay = "bg-black/40",
  showSearch = true,
  listingTypes = DEFAULT_LISTING_TYPES,
  defaultType = "For sale",
}) {
  // ── Intro state ──────────────────────────────────────────────────────────
  const [zoom, setZoom] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);

  // ── HeroBanner state ─────────────────────────────────────────────────────
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(defaultType);
  const [searchValue, setSearchValue] = useState("");
  const [contentVisible, setContentVisible] = useState(false);
  const dropdownRef = useRef(null);

  // ── Trigger zoom at 200ms ────────────────────────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setZoom(true), 200);
    return () => clearTimeout(t);
  }, []);

  // ── Remove intro + show hero content after animation ends ────────────────
  useEffect(() => {
    if (!zoom) return;
    const t = setTimeout(() => {
      setIntroVisible(false);
      setTimeout(() => setContentVisible(true), 100);
    }, 2000);
    return () => clearTimeout(t);
  }, [zoom]);

  // ── Outside click for dropdown ───────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <style>{`
        @keyframes vtm-zoom-out {
          from { transform: scale(1);  opacity: 1; }
          to   { transform: scale(40); opacity: 0; }
        }
        .vtm-overlay-zoom {
          animation: vtm-zoom-out 2.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .vtm-overlay-zoom { animation: none; opacity: 0; }
        }
      `}</style>

      <section className="relative h-[100vh] min-h-[520px] overflow-hidden">

        {/* ── Background ── */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: "fixed",
          }}
        />

        {/* ── Overlay ── */}
        <div className={`absolute inset-0 ${overlay}`} />

        {/* ── Hero Content ── */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          {title && (
            <h1
              className="text-white drop-shadow-lg transition-all duration-700 ease-out"
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? "translateY(0)" : "translateY(28px)",
              }}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p
              className="mt-3 text-white/85 max-w-xl transition-all duration-700 ease-out delay-150"
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {subtitle}
            </p>
          )}
          {showSearch && (
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
                listingTypes={listingTypes}
              />
            </div>
          )}
        </div>

        {/* ── Intro Overlay ── */}
        {introVisible && (
          <div
            className={`absolute inset-0 z-50 flex items-center justify-center bg-white select-none pointer-events-none${zoom ? " vtm-overlay-zoom" : ""}`}
            style={{ mixBlendMode: "screen" }}
          >
            <h2 className="font-[Montserrat] !text-[16vw] md:text-[14vw] font-black leading-[0.85] tracking-tight text-center text-black">
              WELCOME
            </h2>
          </div>
        )}

      </section>
    </>
  );
}

/* ═══════════════════════════════════════════ */
function SearchBar({
  selectedType,
  setSelectedType,
  searchValue,
  setSearchValue,
  dropdownOpen,
  setDropdownOpen,
  dropdownRef,
  listingTypes,
}) {
  return (
    <div className="flex items-center bg-white rounded-full shadow-2xl overflow-visible px-2 py-2 gap-2">
      <div className="relative flex-shrink-0" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((p) => !p)}
          className="flex items-center gap-1 px-4 py-2 rounded-full font-semibold text-[#1B304B] text-sm hover:bg-gray-100 whitespace-nowrap"
        >
          {selectedType}
          <svg className={`w-4 h-4 ${dropdownOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth={2.5} fill="none" />
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border z-50 min-w-[140px]">
            {listingTypes.map((type) => (
              <button
                key={type}
                onClick={() => { setSelectedType(type); setDropdownOpen(false); }}
                className={`w-full text-left px-4 py-3 text-sm ${
                  type === selectedType ? "bg-orange-50 text-orange-500" : "hover:bg-gray-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="w-px h-6 bg-gray-200" />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Place, neighborhood, school or agent..."
        className="flex-1 bg-transparent outline-none text-sm px-2"
      />
      <button className="px-5 py-2.5 bg-[var(--color-primary)] text-white rounded-full">
        Search
      </button>
    </div>
  );
}