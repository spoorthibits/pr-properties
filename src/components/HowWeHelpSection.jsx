"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export const SearchHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <polyline points="10,35 40,10 70,35" stroke="#1a2b4a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="#1a2b4a" strokeWidth="3.5"/>
    <circle cx="36" cy="52" r="9" stroke="#c89c3c" strokeWidth="3"/>
    <line x1="43" y1="59" x2="50" y2="66" stroke="#c89c3c" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
export const MoneyHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <polyline points="10,35 40,10 70,35" stroke="#1a2b4a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="#1a2b4a" strokeWidth="3.5"/>
    <circle cx="40" cy="51" r="11" stroke="#c89c3c" strokeWidth="3"/>
    <text x="40" y="56" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#c89c3c" fontFamily="serif">$</text>
  </svg>
);
export const GrowthHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <polyline points="10,35 40,10 70,35" stroke="#1a2b4a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="#1a2b4a" strokeWidth="3.5"/>
    <polyline points="26,58 34,48 42,54 54,44" stroke="#c89c3c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="50,44 54,44 54,48" stroke="#c89c3c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const KeyHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <polyline points="10,35 40,10 70,35" stroke="#1a2b4a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="#1a2b4a" strokeWidth="3.5"/>
    <circle cx="36" cy="49" r="6" stroke="#c89c3c" strokeWidth="3"/>
    <line x1="42" y1="49" x2="54" y2="49" stroke="#c89c3c" strokeWidth="3" strokeLinecap="round"/>
    <line x1="51" y1="49" x2="51" y2="54" stroke="#c89c3c" strokeWidth="3" strokeLinecap="round"/>
    <line x1="47" y1="49" x2="47" y2="53" stroke="#c89c3c" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
export const StarHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <polyline points="10,35 40,10 70,35" stroke="#1a2b4a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="#1a2b4a" strokeWidth="3.5"/>
    <polygon points="40,41 42.5,47 49,47 44,51 46,57 40,53 34,57 36,51 31,47 37.5,47" stroke="#c89c3c" strokeWidth="2" strokeLinejoin="round" fill="none"/>
  </svg>
);
export const TagHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <polyline points="10,35 40,10 70,35" stroke="#1a2b4a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="#1a2b4a" strokeWidth="3.5"/>
    <path d="M28,44 L28,56 L40,56 L54,44 L42,44 Z" stroke="#c89c3c" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="34" cy="48" r="2" fill="#c89c3c"/>
  </svg>
);

const AUTO_SCROLL_INTERVAL = 3000;
const TRANSITION_DURATION = 600; // ms — must match CSS transition below

export default function HowWeHelpSection({
  heading = "Discover how we can help",
  subheading = "Thousands of luxury home enthusiasts just like you visit our website.",
  tabs = [
    { key: "buying",  label: "Buying"  },
    { key: "selling", label: "Selling" },
  ],
  className = "",
  cardsByTab = {
    buying: [
      { id: "b1", title: "Find out how much you can afford",   description: "Use our smart budget calculator to estimate your price range based on your income, savings, and liabilities. Save it to your buyer profile for personalised matches.", icon: <SearchHouseIcon />, learnMoreHref: "#" },
      { id: "b2", title: "Understand your monthly costs",      description: "Get a full breakdown of mortgage repayments, strata fees, council rates, and insurance. Know exactly what you'll pay every month before you commit.", icon: <MoneyHouseIcon />, learnMoreHref: "#" },
      { id: "b3", title: "Track property value trends",        description: "Follow suburb-level price movements and historical growth data. Spot the right moment to buy with our market intelligence tools.", icon: <GrowthHouseIcon />, learnMoreHref: "#" },
    ],
    selling: [
      { id: "s1", title: "Get an instant property estimate",   description: "Receive a data-driven valuation of your home based on recent comparable sales, local demand, and market conditions—all in seconds.", icon: <TagHouseIcon />, learnMoreHref: "#" },
      { id: "s2", title: "Connect with top local agents",      description: "We match you with experienced agents in your area who have a proven track record of selling homes like yours for the best price.", icon: <StarHouseIcon />, learnMoreHref: "#" },
      { id: "s3", title: "Unlock your selling potential",      description: "Discover what upgrades and styling choices could increase your sale price. Our experts guide you through every step of the selling journey.", icon: <KeyHouseIcon />, learnMoreHref: "#" },
    ],
  },
  bgColor = "#eef0f5",
}) {
  const [activeTab, setActiveTab]   = useState(tabs[0].key);
  const [activeIdx, setActiveIdx]   = useState(0);
  // For smooth right-panel cross-fade
  const [displayIdx, setDisplayIdx] = useState(0);
  const [fading, setFading]         = useState(false);

  const timerRef    = useRef(null);
  // Mobile scroll container ref — so we can smoothly scroll the active tab into view
  const mobileListRef = useRef(null);
  const itemRefs      = useRef([]);

  const cards = cardsByTab[activeTab] || [];
  const active = cards[displayIdx] || cards[0];

  /* ── Smooth index change: fade out → update → fade in ── */
  const goTo = (i) => {
    if (i === activeIdx) return;
    setFading(true);
    setTimeout(() => {
      setDisplayIdx(i);
      setActiveIdx(i);
      setFading(false);
    }, TRANSITION_DURATION / 2);
  };

  /* ── Auto-scroll timer ── */
  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % cards.length;
        goTo(next);
        return next;
      });
    }, AUTO_SCROLL_INTERVAL);
  };

  useEffect(() => {
    setFading(true);
    setTimeout(() => {
      setActiveIdx(0);
      setDisplayIdx(0);
      setFading(false);
    }, TRANSITION_DURATION / 2);
    startTimer();
    return () => clearInterval(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, cards.length]);

  /* ── Auto-scroll active mobile tab into view ── */
  useEffect(() => {
    const el = itemRefs.current[activeIdx];
    const container = mobileListRef.current;
    if (!el || !container) return;
    const elLeft     = el.offsetLeft;
    const elWidth    = el.offsetWidth;
    const ctrWidth   = container.offsetWidth;
    const targetScroll = elLeft - ctrWidth / 2 + elWidth / 2;
    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  }, [activeIdx]);

  const handleClick = (i) => {
    clearInterval(timerRef.current);
    goTo(i);
    startTimer();
  };

  return (
    <section
      className={`relative w-full bg-offwhite overflow-hidden bg-[url('/assets/linesbg.png')] bg-cover bg-center bg-no-repeat py-12 md:py-16 lg:py-24 ${className}`}
    >
      <style>{`
        /* Right panel — slide from left */
        .hwh-panel-content {
          transition:
            opacity ${TRANSITION_DURATION / 2}ms cubic-bezier(0.4,0,0.2,1),
            transform ${TRANSITION_DURATION / 2}ms cubic-bezier(0.4,0,0.2,1);
          will-change: transform, opacity;
        }
        .hwh-panel-content.fading {
          opacity: 0;
          transform: translateX(-18px);
        }
        .hwh-panel-content.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Left item active bar */
        .hwh-active-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #c89c3c;
          border-radius: 0 2px 2px 0;
          transition: opacity 0.3s ease;
        }

        /* Mobile: hide scrollbar but keep scroll */
        .hwh-mobile-list {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hwh-mobile-list::-webkit-scrollbar { display: none; }

        /* Mobile list item smooth highlight */
        .hwh-mobile-item {
          transition: background 0.3s ease, color 0.3s ease;
          position: relative;
        }
        .hwh-mobile-item::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: #c89c3c;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .hwh-mobile-item.active::after {
          transform: scaleX(1);
        }

        /* Desktop left item */
        .hwh-desktop-item {
          transition: background 0.3s ease;
        }

        /* Learn more button */
        .hwh-learn-btn {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border-radius: 999px;
          border: 1.5px solid #1a2b4a;
          color: #1a2b4a;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.25s ease, color 0.25s ease;
          cursor: pointer;
          background: transparent;
          white-space: nowrap;
        }
        .hwh-learn-btn:hover {
          background: #1a2b4a;
          color: #fff;
        }

        /* Progress dot */
        .hwh-dot {
          height: 5px;
          border-radius: 3px;
          cursor: pointer;
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s ease;
        }
      `}</style>

      <div className="container-custom">

        {/* ── Heading ── */}
        <div className="text-center mb-5">
          <h2 className="text-[#1a2b4a] text-2xl sm:text-3xl lg:text-[2.1rem] font-bold leading-snug m-0">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-[#6b7a99]">{subheading}</p>
        </div>

        {/* ── Tab buttons ── */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2 rounded-full border border-[#1a2b4a] text-sm font-medium
                transition-all duration-300 outline-none cursor-pointer
                ${activeTab === tab.key
                  ? "bg-[#1a2b4a] text-white"
                  : "bg-transparent text-[#1a2b4a] hover:bg-[#1a2b4a]/10"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Main split panel ── */}
        <div className="flex flex-col md:flex-row shadow-[0_4px_32px_rgba(0,0,0,0.10)] overflow-hidden">

          {/* ════════════════════════════════
              MOBILE — horizontal pill strip
              (visible only below md)
          ════════════════════════════════ */}
          {/* MOBILE — single full-width active title with prev/next arrows */}
          <div className="flex md:hidden items-center bg-[#1a2b4a] border-b border-white/10 w-full">
            {/* Prev arrow */}
            <button
              onClick={() => handleClick((activeIdx - 1 + cards.length) % cards.length)}
              className="flex-shrink-0 px-4 py-5 text-white/50 hover:text-white transition-colors outline-none border-none cursor-pointer bg-transparent text-xl"
              aria-label="Previous"
            >
              ‹
            </button>

            {/* Active title — full width, centered */}
            <div className="flex-1 text-center py-5 px-2">
              <span className="text-white font-semibold text-[14px] leading-snug">
                {cards[activeIdx]?.title}
              </span>
              {/* Dot indicators */}
              <div className="flex justify-center gap-1.5 mt-2">
                {cards.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => handleClick(i)}
                    className="h-[3px] rounded-full cursor-pointer transition-all duration-300"
                    style={{
                      width: i === activeIdx ? "20px" : "6px",
                      background: i === activeIdx ? "#c89c3c" : "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Next arrow */}
            <button
              onClick={() => handleClick((activeIdx + 1) % cards.length)}
              className="flex-shrink-0 px-4 py-5 text-white/50 hover:text-white transition-colors outline-none border-none cursor-pointer bg-transparent text-xl"
              aria-label="Next"
            >
              ›
            </button>
          </div>

          {/* ════════════════════════════════
              DESKTOP — vertical list (md+)
          ════════════════════════════════ */}
          <div className="hidden md:flex flex-col w-[38%] flex-shrink-0 bg-[#1a2b4a]">
            {cards.map((card, i) => (
              <div
                key={card.id}
                onClick={() => handleClick(i)}
                className={`hwh-desktop-item relative flex items-center gap-3 px-6 cursor-pointer flex-1
                  ${i < cards.length - 1 ? "border-b border-white/[0.07]" : ""}
                  ${activeIdx === i ? "bg-white/10" : "hover:bg-white/[0.06]"}
                `}
                style={{ minHeight: "90px" }}
              >
                {/* Gold active bar */}
                <span
                  className="hwh-active-bar"
                  style={{ opacity: activeIdx === i ? 1 : 0 }}
                />

                {/* Gold dot */}
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-300"
                  style={{ background: activeIdx === i ? "#c89c3c" : "rgba(255,255,255,0.25)" }}
                />

                <span
                  className="text-[0.95rem] leading-snug flex-1 transition-all duration-300"
                  style={{
                    fontWeight: activeIdx === i ? 600 : 400,
                    color: activeIdx === i ? "#ffffff" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {card.title}
                </span>
              </div>
            ))}
          </div>

          {/* ════════════════════════════════
              RIGHT — detail panel (all sizes)
          ════════════════════════════════ */}
          <div className="flex-1 bg-white flex items-center p-6 sm:p-8 lg:p-10 min-h-[260px] overflow-hidden">
            {active && (
              <div
                className={`hwh-panel-content flex flex-col gap-4 w-full ${fading ? "fading" : "visible"}`}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center flex-shrink-0"
                  style={{ background: bgColor, borderRadius: "1px" }}
                >
                  {active.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#1a2b4a] leading-snug m-0">
                  {active.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6b7a99] leading-relaxed m-0">
                  {active.description}
                </p>

                {/* CTA */}
                <Link href={active.learnMoreHref} className="hwh-learn-btn self-start">
                  Learn more ›
                </Link>

                {/* Progress dots */}
                <div className="flex gap-1.5 mt-1">
                  {cards.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => handleClick(i)}
                      className="hwh-dot"
                      style={{
                        width: i === activeIdx ? "28px" : "8px",
                        background: i === activeIdx ? "#1a2b4a" : "#d1d5db",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}