"use client";
import Image from "next/image";
import Banner from "@/components/Banner";
import PropertyTypes from "@/components/SearchFor";
import PropertyCard from "@/components/PropertyCard";
import PropertiesGrid from "@/components/PropertiesGrid";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import ScrollingLogos from "@/components/LogoGridSection";
import FAQSection from "@/components/Faq";

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

  const PROPERTIES = [
    {
      id: 1,
      image: { src: "/assets/home1.jpg", alt: "Elegant studio flat" },
      badges: [
        { label: "Featured", variant: "featured" },
        { label: "For Sale", variant: "status" },
      ],
      title: "Elegant studio flat",
      address: "Ingraham St, Brooklyn, NY 11237",
      beds: 3,
      baths: 3,
      sqft: 4043,
      price: 8600,
      detailsHref: "/properties/1",
    },
    {
      id: 2,
      image: { src: "/assets/home2.jpg", alt: "Elegant studio flat" },
      badges: [
        { label: "Featured", variant: "featured" },
        { label: "For Sale", variant: "status" },
      ],
      title: "Elegant studio flat",
      address: "Ingraham St, Brooklyn, NY 11237",
      beds: 3,
      baths: 3,
      sqft: 4043,
      price: 8600,
      detailsHref: "/properties/1",
    },
    {
      id: 3,
      image: { src: "/assets/home3.jpg", alt: "Elegant studio flat" },
      badges: [
        { label: "Featured", variant: "featured" },
        { label: "For Sale", variant: "status" },
      ],
      title: "Elegant studio flat",
      address: "Ingraham St, Brooklyn, NY 11237",
      beds: 3,
      baths: 3,
      sqft: 4043,
      price: 8600,
      detailsHref: "/properties/1",
    },
  ];

  // ── HowWeHelpSection — slide-based (matches new component) ─────────────────
  // Each slide has: id, label (bottom tab), heading, body, image path
  // Replace image paths with your actual property photos
  const HOW_WE_HELP_SLIDES = [
    {
      id: 1,
      label: "Buying a Home",
      heading: "Find out how much you can afford",
      body: "Use our smart budget calculator to estimate your price range based on your income, savings, and liabilities. Save it to your buyer profile for personalised matches. We help thousands of buyers every year secure their dream home at the right price — with full financial clarity from day one.",
      image: "/assets/slide-buying.jpg",
    },
    {
      id: 2,
      label: "Monthly Costs",
      heading: "Understand your monthly costs",
      body: "Get a complete picture of your ongoing expenses — mortgage repayments, strata fees, council rates, maintenance, and insurance — all in one place. Our tools break down every line item so you know exactly what homeownership costs before you sign anything.",
      image: "/assets/slide-costs.jpg",
    },
    {
      id: 3,
      label: "Market Trends",
      heading: "Track property value trends",
      body: "Follow suburb-level price movements, historical growth data, and demand signals in real time. Our market intelligence platform surfaces the insights you need to spot the right moment to buy or sell — before the rest of the market catches on.",
      image: "/assets/slide-trends.jpg",
    },
    {
      id: 4,
      label: "Selling",
      heading: "Unlock your selling potential",
      body: "Discover what upgrades, styling choices, and timing strategies could add thousands to your final sale price. We connect you with top local agents who have a proven record of achieving premium results for homes just like yours.",
      image: "/assets/slide-selling.jpg",
    },
  ];

  // ── ScrollingLogos data ─────────────────────────────────────────────────
  // Replace srcs with your actual partner/brand logo image paths
  const LOGOS = [
    "/assets/logos/logo1.png",
    "/assets/logos/logo2.png",
    "/assets/logos/logo3.png",
    "/assets/logos/logo4.png",
    "/assets/logos/logo5.png",
    "/assets/logos/logo6.png",
  ];

  const SCROLLING_CTA = {
    heading: "Are You Selling Or Renting Your Property?",
    subheading:
      "Thousands of luxury home enthusiasts just like you visit our website. List with us and get matched to the right buyers instantly.",
    buttonLabel: "Request your free appraisal",
    buttonHref: "/appraisal",
    image: "/assets/agent.png",
  };
const FAQS = [
  {
    question: "How do I know how much property I can afford?",
    answer: "Start by calculating your net monthly income and existing liabilities. A general rule is that your EMI should not exceed 40% of your monthly take-home pay. Factor in your down payment savings, credit score, and any additional costs like registration, stamp duty, and maintenance. Our budget calculator can give you a personalised estimate in minutes.",
  },
  {
    question: "What is the difference between carpet area, built-up area, and super built-up area?",
    answer: "Carpet area is the actual usable floor space inside your home — the area where you can lay a carpet. Built-up area adds the thickness of walls to carpet area. Super built-up area (also called saleable area) further includes a proportionate share of common spaces like lobbies, staircases, and lifts. Always compare properties on carpet area for an accurate price-per-sqft comparison.",
  },
  {
    question: "What documents do I need to verify before buying a property?",
    answer: "You should verify the title deed, encumbrance certificate, approved building plan, occupancy certificate, property tax receipts, and RERA registration number. For apartments, also check the society's no-objection certificate (NOC). We recommend engaging a legal advisor to conduct thorough due diligence before signing any agreement.",
  },
  {
    question: "How long does the home loan approval process take?",
    answer: "Pre-approval (in-principle sanction) can happen within 24–72 hours if your documents are in order. Final loan disbursement typically takes 7–15 working days after property verification and legal checks are complete. Having your KYC, income proof, and property documents ready upfront significantly speeds up the process.",
  },
  {
    question: "What costs should I budget for beyond the property price?",
    answer: "Budget an additional 8–12% over the property price for ancillary costs. These include stamp duty (4–7% depending on state), registration fees (1%), GST for under-construction properties (5%), legal/due diligence fees, interior fit-outs, and society maintenance deposits. Always keep a contingency buffer of at least 5%.",
  },
];

  return (
    <div>
      <Banner />
      <PropertyTypes PROPERTY_TYPES={properties} />
      <PropertiesGrid properties={PROPERTIES} />
      <HowWeHelpSection slides={HOW_WE_HELP_SLIDES} />
      <ScrollingLogos
        title="Let's Work Together"
        subtitle="Thousands of luxury home enthusiasts just like you visit our website."
        logos={LOGOS}
        cta={SCROLLING_CTA}
      />
      <FAQSection faqData={FAQS} /> 
    </div>
  );
}