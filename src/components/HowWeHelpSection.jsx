// components/HowWeHelpSection.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

/* ══════════════════════════════════════════
   ICONS — using --color-primary & --color-gold
══════════════════════════════════════════ */

export const SearchHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <polyline points="10,35 40,10 70,35" stroke="var(--color-primary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="var(--color-primary)" strokeWidth="3.5"/>
    <circle cx="36" cy="52" r="9" stroke="var(--color-gold)" strokeWidth="3"/>
    <line x1="43" y1="59" x2="50" y2="66" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const MoneyHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <polyline points="10,35 40,10 70,35" stroke="var(--color-primary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="var(--color-primary)" strokeWidth="3.5"/>
    <circle cx="40" cy="51" r="11" stroke="var(--color-gold)" strokeWidth="3"/>
    <text x="40" y="56" textAnchor="middle" fontSize="13" fontWeight="bold" fill="var(--color-gold)" fontFamily="serif">$</text>
  </svg>
);

export const GrowthHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <polyline points="10,35 40,10 70,35" stroke="var(--color-primary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="var(--color-primary)" strokeWidth="3.5"/>
    <polyline points="26,58 34,48 42,54 54,44" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="50,44 54,44 54,48" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const KeyHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <polyline points="10,35 40,10 70,35" stroke="var(--color-primary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="var(--color-primary)" strokeWidth="3.5"/>
    <circle cx="36" cy="49" r="6" stroke="var(--color-gold)" strokeWidth="3"/>
    <line x1="42" y1="49" x2="54" y2="49" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round"/>
    <line x1="51" y1="49" x2="51" y2="54" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round"/>
    <line x1="47" y1="49" x2="47" y2="53" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const StarHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <polyline points="10,35 40,10 70,35" stroke="var(--color-primary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="var(--color-primary)" strokeWidth="3.5"/>
    <polygon points="40,41 42.5,47 49,47 44,51 46,57 40,53 34,57 36,51 31,47 37.5,47" stroke="var(--color-gold)" strokeWidth="2" strokeLinejoin="round" fill="none"/>
  </svg>
);

export const TagHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <polyline points="10,35 40,10 70,35" stroke="var(--color-primary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="var(--color-primary)" strokeWidth="3.5"/>
    <path d="M28,44 L28,56 L40,56 L54,44 L42,44 Z" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="34" cy="48" r="2" fill="var(--color-gold)"/>
  </svg>
);

/* ══════════════════════════════════════════
   FEATURE CARD
   Props: icon, title, description, learnMoreHref
══════════════════════════════════════════ */

export function FeatureCard({ icon, title, description, learnMoreHref }) {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:shadow-md transition-shadow duration-300">

      {/* Icon */}
      <div className="flex items-center justify-center">
        {icon}
      </div>

      {/* Title */}
      <h3 style={{ color: "var(--color-primary)" }}>{title}</h3>

      {/* Description */}
      <p className="text-small" style={{ color: "var(--color-muted)" }}>
        {description}
      </p>

      {/* Learn More Button */}
      <Link
  href={learnMoreHref}
  className="mt-auto px-8 py-3 rounded-full border text-small font-medium transition-all duration-200"
  style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
  onMouseEnter={e => {
    e.currentTarget.style.backgroundColor = "var(--color-primary)";
    e.currentTarget.style.color = "#fff";
  }}
  onMouseLeave={e => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = "var(--color-primary)";
  }}
>
  Learn More
</Link>
    </div>
  );
}

/* ══════════════════════════════════════════
   TAB BUTTON
   Props: label, isActive, onClick
══════════════════════════════════════════ */

function TabButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-7 py-2.5 rounded-full text-small font-medium transition-all duration-200 border"
      style={
        isActive
          ? { backgroundColor: "var(--color-primary)", color: "#fff", borderColor: "var(--color-primary)" }
          : { backgroundColor: "transparent", color: "var(--color-primary)", borderColor: "var(--color-primary)" }
      }
    >
      {label}
    </button>
  );
}

/* ══════════════════════════════════════════
   HOW WE HELP SECTION
   Props:
     heading     — string
     subheading  — string
     tabs        — [{ key, label }]
     cards       — [{ id, tab, icon, title, description, learnMoreHref }]
     bgColor     — optional CSS color string (default: white)
══════════════════════════════════════════ */

export default function HowWeHelpSection({
  heading,
  subheading,
  tabs,
  cards,
  bgColor = "#F8F8F8",
}) {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const visibleCards = cards.filter((c) => c.tab === activeTab);

  return (
    <section className="section" style={{ backgroundColor: bgColor }}>
      <div className="container-custom">

        {/* ── Heading ── */}
        <div className="text-center mb-10">
          <h2 style={{ color: "var(--color-primary)" }}>{heading}</h2>
          <p className="mt-3 text-small" style={{ color: "var(--color-muted)" }}>
            {subheading}
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <TabButton
              key={tab.key}
              label={tab.label}
              isActive={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
            />
          ))}
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCards.map((card) => (
            <FeatureCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              learnMoreHref={card.learnMoreHref}
            />
          ))}
        </div>

      </div>
    </section>
  );
}