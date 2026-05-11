"use client";

import Image from "next/image";
import Link from "next/link";
import FAQSection from "./Faq";

export default function ScrollingLogos({
  title,
  subtitle,
  logos = [],
  cta,
  showFAQ = true,
}) {
  const loopLogos = [...logos, ...logos];

  const FAQS = [
    {
      question: "How do I know how much property I can afford?",
      answer:
        "Start by calculating your net monthly income and existing liabilities. A general rule is that your EMI should not exceed 40% of your monthly take-home pay. Factor in your down payment savings, credit score, and any additional costs like registration, stamp duty, and maintenance. Our budget calculator can give you a personalised estimate in minutes.",
    },
    {
      question:
        "What is the difference between carpet area, built-up area, and super built-up area?",
      answer:
        "Carpet area is the actual usable floor space inside your home — the area where you can lay a carpet. Built-up area adds the thickness of walls to carpet area. Super built-up area (also called saleable area) further includes a proportionate share of common spaces like lobbies, staircases, and lifts. Always compare properties on carpet area for an accurate price-per-sqft comparison.",
    },
    {
      question: "What documents do I need to verify before buying a property?",
      answer:
        "You should verify the title deed, encumbrance certificate, approved building plan, occupancy certificate, property tax receipts, and RERA registration number. For apartments, also check the society's no-objection certificate (NOC). We recommend engaging a legal advisor to conduct thorough due diligence before signing any agreement.",
    },
    {
      question: "How long does the home loan approval process take?",
      answer:
        "Pre-approval (in-principle sanction) can happen within 24–72 hours if your documents are in order. Final loan disbursement typically takes 7–15 working days after property verification and legal checks are complete. Having your KYC, income proof, and property documents ready upfront significantly speeds up the process.",
    },
    {
      question: "What costs should I budget for beyond the property price?",
      answer:
        "Budget an additional 8–12% over the property price for ancillary costs. These include stamp duty (4–7% depending on state), registration fees (1%), GST for under-construction properties (5%), legal/due diligence fees, interior fit-outs, and society maintenance deposits. Always keep a contingency buffer of at least 5%.",
    },
  ];

  return (
    <>
      <style jsx>{`
        .logo-card:hover {
          background: rgba(255, 255, 255, 0.13) !important;
        }
      `}</style>

      {/* ── Dark section ── */}
      <div className="relative bg-[#1B304B] pt-12 md:pt-20 pb-14 md:pb-20">
        {/* Heading + logos */}
        <div className="container-custom text-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-white/55 text-sm sm:text-base">
            {subtitle}
          </p>

          {/* Scrolling logo row */}
          <div className="mt-8 md:mt-10 overflow-hidden">
            <div className="flex w-max animate-scroll-left gap-4 md:gap-8">
              {loopLogos.map((logo, i) => (
                <div
                  key={i}
                  className="logo-card flex items-center justify-center rounded-xl transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    padding: "12px 20px",
                    minWidth: "120px",
                  }}
                >
                  <Image
                    src={logo}
                    alt="partner logo"
                    width={100}
                    height={44}
                    className="object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA Card ──
            Desktop (md+): absolutely positioned, bleeds below dark section
            Mobile: normal flow inside dark section, no absolute tricks
        ── */}

        {cta && (
          <>
            {/* DESKTOP card — absolute, overlapping */}
            <div
              className="hidden md:block container-custom absolute left-1/2 -translate-x-1/2 w-full z-20"
              style={{ bottom: "-200px" }}
            >
              <div
                className="relative flex items-end justify-between rounded-2xl overflow-visible"
                style={{
                  background: "#FAF6EF",
                  padding: "2.75rem 3.5rem",
                  paddingRight: "clamp(200px, 28vw, 380px)",
                  minHeight: "280px",
                  boxShadow: "0 8px 48px rgba(0,0,0,0.14)",
                }}
              >
                {/* Swirl */}
                <svg
                  aria-hidden="true"
                  className="absolute pointer-events-none opacity-20"
                  style={{
                    right: "clamp(160px,22vw,320px)",
                    top: 0,
                    height: "100%",
                  }}
                  width="200"
                  viewBox="0 0 200 300"
                  fill="none"
                >
                  <path
                    d="M100 0 Q175 75 100 150 Q25 225 100 300"
                    stroke="#B89454"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M130 0 Q205 75 130 150 Q55 225 130 300"
                    stroke="#B89454"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M70  0 Q145 75 70  150 Q-5 225 70  300"
                    stroke="#B89454"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>

                {/* Text */}
                <div className="relative z-10 max-w-[520px]">
                  <h3
                    className="text-[var(--color-primary)] font-bold leading-tight mb-3"
                    style={{
                      fontSize: "clamp(1.4rem,2.4vw,2rem)",
                      fontFamily: "'Playfair Display',serif",
                    }}
                  >
                    {cta.heading}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6">
                    {cta.subheading}
                  </p>
                  <Link
                    href={cta.buttonHref || "#"}
                    className="inline-block px-8 py-3 rounded-full bg-[var(--color-gold)] text-white text-sm font-semibold
                      transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                    style={{ fontFamily: "Montserrat,sans-serif" }}
                  >
                    {cta.buttonLabel}
                  </Link>
                </div>

                {/* Agent image */}
                {cta.image && (
                  <div
                    className="absolute z-20"
                    style={{
                      right: "clamp(1rem,4vw,3rem)",
                      bottom: 0,
                      width: "clamp(180px,22vw,320px)",
                      height: "clamp(260px,32vw,440px)",
                    }}
                  >
                    <Image
                      src={cta.image}
                      alt="Real estate agent"
                      fill
                      style={{
                        objectFit: "contain",
                        objectPosition: "bottom center",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* MOBILE card — normal flow, stacks below logos */}
            <div className="md:hidden container-custom mt-8 pb-8">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "#FAF6EF",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                }}
              >
                {/* Agent image — top, full width on mobile */}
                {cta.image && (
                  <div className="relative w-full h-52 sm:h-64 bg-[#f0e8d8]">
                    <Image
                      src={cta.image}
                      alt="Real estate agent"
                      fill
                      style={{
                        objectFit: "contain",
                        objectPosition: "bottom center",
                      }}
                    />
                    {/* Swirl overlay */}
                    <svg
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
                      viewBox="0 0 400 300"
                      fill="none"
                    >
                      <path
                        d="M200 0 Q350 75 200 150 Q50 225 200 300"
                        stroke="#B89454"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M260 0 Q410 75 260 150 Q110 225 260 300"
                        stroke="#B89454"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M140 0 Q290 75 140 150 Q-10 225 140 300"
                        stroke="#B89454"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}

                {/* Text content */}
                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <h3
                    className="text-[var(--color-primary)] font-bold text-xl sm:text-2xl leading-tight mb-3"
                    style={{ fontFamily: "'Playfair Display',serif" }}
                  >
                    {cta.heading}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-5">
                    {cta.subheading}
                  </p>
                  <Link
                    href={cta.buttonHref || "#"}
                    className="inline-block px-7 py-3 rounded-full bg-[var(--color-gold)] text-white text-sm font-semibold
                      transition-all duration-200 hover:opacity-90"
                    style={{ fontFamily: "Montserrat,sans-serif" }}
                  >
                    {cta.buttonLabel}
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Desktop spacer — pushes content below the absolutely positioned card */}
        {cta && <div className="hidden md:block" style={{ height: "160px" }} />}
      </div>

      {/* Spacer connecting to FAQ — matches FAQ background */}
      {cta && (
        <div
          className="hidden md:block bg-offwhite bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{ height: "140px" }}
        />
      )}

      {showFAQ && <FAQSection faqData={FAQS} />}
    </>
  );
}
