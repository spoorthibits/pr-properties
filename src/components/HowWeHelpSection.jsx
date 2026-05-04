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

function TabButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.5rem 1.75rem",
        borderRadius: "999px",
        border: "1.5px solid #1a2b4a",
        fontSize: "0.9rem",
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 0.25s",
        backgroundColor: isActive ? "#1a2b4a" : "transparent",
        color: isActive ? "#fff" : "#1a2b4a",
        outline: "none",
      }}
    >
      {label}
    </button>
  );
}

const AUTO_SCROLL_INTERVAL = 3000;

export default function HowWeHelpSection({
  heading = "Discover how we can help",
  subheading = "Thousands of luxury home enthusiasts just like you visit our website.",
  tabs = [
    { key: "buying", label: "Buying" },
    { key: "selling", label: "Selling" },
  ],
  className = "",
  cardsByTab = {
    buying: [
      {
        id: "b1",
        title: "Find out how much you can afford",
        description:
          "Use our smart budget calculator to estimate your price range based on your income, savings, and liabilities. Save it to your buyer profile for personalised matches.",
        icon: <SearchHouseIcon />,
        learnMoreHref: "#",
      },
      {
        id: "b2",
        title: "Understand your monthly costs",
        description:
          "Get a full breakdown of mortgage repayments, strata fees, council rates, and insurance. Know exactly what you'll pay every month before you commit.",
        icon: <MoneyHouseIcon />,
        learnMoreHref: "#",
      },
      {
        id: "b3",
        title: "Track property value trends",
        description:
          "Follow suburb-level price movements and historical growth data. Spot the right moment to buy with our market intelligence tools.",
        icon: <GrowthHouseIcon />,
        learnMoreHref: "#",
      },
    ],
    selling: [
      {
        id: "s1",
        title: "Get an instant property estimate",
        description:
          "Receive a data-driven valuation of your home based on recent comparable sales, local demand, and market conditions—all in seconds.",
        icon: <TagHouseIcon />,
        learnMoreHref: "#",
      },
      {
        id: "s2",
        title: "Connect with top local agents",
        description:
          "We match you with experienced agents in your area who have a proven track record of selling homes like yours for the best price.",
        icon: <StarHouseIcon />,
        learnMoreHref: "#",
      },
      {
        id: "s3",
        title: "Unlock your selling potential",
        description:
          "Discover what upgrades and styling choices could increase your sale price. Our experts guide you through every step of the selling journey.",
        icon: <KeyHouseIcon />,
        learnMoreHref: "#",
      },
    ],
  },
  bgColor = "#eef0f5",
}) {
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef(null);

  const cards = cardsByTab[activeTab] || [];
  const active = cards[activeIdx] || cards[0];

  const startAutoScroll = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % cards.length);
    }, AUTO_SCROLL_INTERVAL);
  };

  useEffect(() => {
    setActiveIdx(0);
    startAutoScroll();
    return () => clearInterval(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, cards.length]);

  const handleListClick = (i) => {
    setActiveIdx(i);
  };

  return (
    <section
      className={`relative w-full bg-offwhite overflow-hidden bg-[url('/assets/linesbg.png')] p-24 bg-cover bg-center bg-no-repeat ${className}`}
      
    >
    
      <style>{`
        .hwh-list-item { transition: background 0.2s; }
        .hwh-list-item:hover { background: rgba(255,255,255,0.06) !important; }
        .hwh-panel-anim { animation: hwhFadeUp 0.4s ease; }
        @keyframes hwhFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hwh-learn-btn {
          display: inline-block;
          padding: 0.55rem 1.85rem;
          border-radius: 999px;
          border: 1.5px solid #1a2b4a;
          color: #1a2b4a;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.25s;
          width: fit-content;
          cursor: pointer;
          background: transparent;
        }
        .hwh-learn-btn:hover {
          background: #1a2b4a;
          color: #fff;
        }
        @media (max-width: 680px) {
          .hwh-panel { flex-direction: column !important; }
          .hwh-left {
            width: 100% !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.1) !important;
          }
          .hwh-right { padding: 1.75rem !important; }
        }
      `}</style>

      <div className="container-custom">

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
          <h2 style={{
            color: "#1a2b4a",
            fontSize: "clamp(1.6rem, 4vw, 2.1rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            margin: 0,
          }}>
            {heading}
          </h2>
          <p style={{
            marginTop: "0.6rem",
            fontSize: "0.9rem",
            color: "#6b7a99",
          }}>
            {subheading}
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.75rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}>
          {tabs.map((tab) => (
            <TabButton
              key={tab.key}
              label={tab.label}
              isActive={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
            />
          ))}
        </div>

        {/* Split panel */}
        <div
          className="hwh-panel"
          style={{
            display: "flex",
            borderRadius: "2px",
            overflow: "hidden",
            boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
          }}
        >
          {/* LEFT — dark navy */}
          <div
            className="hwh-left"
            style={{
              width: "38%",
              flexShrink: 0,
              background: "#1a2b4a",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {cards.map((card, i) => (
              <div
                key={card.id}
                className="hwh-list-item"
                onClick={() => handleListClick(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  padding: "0 1.5rem",
                  cursor: "pointer",
                  borderBottom: i < cards.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  background:
                    activeIdx === i
                      ? "rgba(255,255,255,0.10)"
                      : "transparent",
                  position: "relative",
                  flex: 1,
                  minHeight: "90px",
                }}
              >
                {/* Gold dot / active indicator */}
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: activeIdx === i ? "#c89c3c" : "rgba(255,255,255,0.25)",
                  transition: "background 0.25s",
                }} />

                <span style={{
                  fontSize: "1.275rem",
                  fontWeight: activeIdx === i ? 600 : 400,
                  color: activeIdx === i ? "#ffffff" : "rgba(255,255,255,0.55)",
                  lineHeight: 1.4,
                  transition: "all 0.2s",
                  flex: 1,
                }}>
                  {card.title}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT — white */}
          <div
            className="hwh-right"
            style={{
              flex: 1,
              padding: "2.5rem 2.25rem",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
            }}
          >
            {active && (
              <div
                key={`${activeTab}-${activeIdx}`}
                className="hwh-panel-anim"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.1rem",
                  width: "100%",
                }}
              >
                {/* Icon box */}
                <div style={{
                  width: "62px",
                  height: "62px",
                  background: bgColor,
                  borderRadius: "1px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {active.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#1a2b4a",
                  lineHeight: 1.3,
                  margin: 0,
                }}>
                  {active.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: "0.875rem",
                  color: "#6b7a99",
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  {active.description}
                </p>

                {/* CTA */}
                <Link href={active.learnMoreHref} className="hwh-learn-btn">
                  Learn more ›
                </Link>

                {/* Progress dots */}
                <div style={{ display: "flex", gap: "6px", marginTop: "0.1rem" }}>
                  {cards.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => handleListClick(i)}
                      style={{
                        width: i === activeIdx ? "28px" : "8px",
                        height: "5px",
                        borderRadius: "3px",
                        background: i === activeIdx ? "#1a2b4a" : "#d1d5db",
                        cursor: "pointer",
                        transition: "all 0.35s ease",
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