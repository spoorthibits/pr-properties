import Image from "next/image";
import HomeBanner from "@/components/HomeBanner";
import PropertyTypes from "@/components/SearchFor";

export default function Home() {
  const properties = [
  {
    label: "Open Plots",
    count: "234 Property",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="18" y="22" width="36" height="46" rx="1" stroke="currentColor" strokeWidth="2.2" />
        <rect x="24" y="30" width="7" height="7" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="37" y="30" width="7" height="7" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="24" y="43" width="7" height="7" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="37" y="43" width="7" height="7" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="31" y="56" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="11" cy="48" r="7" stroke="currentColor" strokeWidth="1.8" />
        <line x1="11" y1="55" x2="11" y2="68" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Apartments",
    count: "234 Property",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <path d="M10 44 L30 24 L50 44" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M22 38 L40 20 L58 38" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <rect x="16" y="44" width="48" height="24" rx="1" stroke="currentColor" strokeWidth="2.2" />
        <rect x="30" y="52" width="10" height="16" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="46" y="50" width="10" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Villas",
    count: "234 Property",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="26" y="12" width="28" height="56" rx="1" stroke="currentColor" strokeWidth="2.2" />
        <rect x="32" y="20" width="6" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="43" y="20" width="6" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="32" y="32" width="6" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="43" y="32" width="6" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="32" y="44" width="6" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="43" y="44" width="6" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="35" y="56" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="10" y="36" width="16" height="32" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="42" width="4" height="4" rx="0.3" stroke="currentColor" strokeWidth="1.6" />
        <rect x="14" y="50" width="4" height="4" rx="0.3" stroke="currentColor" strokeWidth="1.6" />
        <rect x="54" y="42" width="16" height="26" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="58" y="48" width="4" height="4" rx="0.3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: "Red Sandelwood Farmlands",
    count: "234 Property",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="8" y="28" width="64" height="40" rx="1" stroke="currentColor" strokeWidth="2.2" />
        <rect x="16" y="36" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="30" y="36" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="44" y="36" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="58" y="36" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="16" y="50" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="30" y="50" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="44" y="50" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="58" y="50" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <line x1="8" y1="28" x2="72" y2="28" stroke="currentColor" strokeWidth="2.2" />
        <rect x="20" y="14" width="40" height="14" rx="1" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Commercial",
    count: "234 Property",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="10" y="18" width="60" height="50" rx="1" stroke="currentColor" strokeWidth="2.2" />
        <rect x="10" y="18" width="60" height="14" rx="1" stroke="currentColor" strokeWidth="2.2" />
        <rect x="18" y="38" width="10" height="10" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="35" y="38" width="10" height="10" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="52" y="38" width="10" height="10" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="30" y="54" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <line x1="40" y1="54" x2="40" y2="68" stroke="currentColor" strokeWidth="1.4" />
        <line x1="18" y1="24" x2="62" y2="24" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];
  return (
    <div>
      
      <HomeBanner />
      
      <PropertyTypes PROPERTY_TYPES={properties} />
      
    </div>
  );
}