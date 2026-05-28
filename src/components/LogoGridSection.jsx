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
      question: "How do I determine the right property within my budget?",
      answer:
        "Evaluate your income, financial commitments, and investment goals to understand your purchasing capacity. Consider additional expenses such as registration charges, taxes, and maintenance costs before making a decision.",
    },

    {
      question:
        "What should I consider when comparing different property types?",
      answer:
        "Compare factors such as location, amenities, property size, connectivity, legal approvals, and long-term investment potential to identify the best option for your lifestyle and goals.",
    },

    {
      question:
        "Which documents should I verify before purchasing a property?",
      answer:
        "Always review the title deed, legal approvals, tax receipts, occupancy certificates, and registration details to ensure transparency and avoid future legal complications.",
    },

    {
      question:
        "How long does the property buying and financing process usually take?",
      answer:
        "The timeline varies depending on loan approvals, legal verification, and documentation. A streamlined process with complete documents can significantly reduce approval times.",
    },

    {
      question:
        "What additional costs should I plan for beyond the property price?",
      answer:
        "Budget for registration fees, taxes, legal charges, maintenance costs, interior upgrades, and contingency expenses to ensure a smooth property ownership experience.",
    },

    {
      question:
        "Why is location important when investing in real estate?",
      answer:
        "A prime location influences property value, future appreciation, connectivity, lifestyle convenience, and long-term investment returns.",
    },
  ];

  return (
    <>
      <style jsx>{`
        .logo-card {
          transition: all 0.3s ease;
        }

        .logo-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.18);
        }
      `}</style>

      {/* ── Dark Section ── */}
      <div className="relative bg-[#1B304B] pt-12 md:pt-20 pb-14 md:pb-20">
        
        {/* Heading */}
        <div className="container-custom text-center">
          
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            {title}
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-white/70 text-sm sm:text-base">
            {subtitle}
          </p>

          {/* ── Logo Row ── */}
          <div className="mt-10 overflow-hidden">
            
            <div className="flex w-max animate-scroll-left gap-8 items-center">

              {loopLogos.map((logo, i) => (
                <div
                  key={i}
                  className="logo-card flex items-center justify-center rounded-3xl overflow-hidden"
                  style={{
                    width: "220px",
                    height: "110px",
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "transparent",
                  }}
                >
                  <div className="relative w-[75%] h-[75%]">
                    <Image
                      src={logo}
                      alt="partner logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* ── CTA Section ── */}
        {cta && (
          <>
            {/* Desktop CTA */}
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
                    d="M70 0 Q145 75 70 150 Q-5 225 70 300"
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
                    className="inline-block px-8 py-3 rounded-full bg-[var(--color-gold)] text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                    style={{ fontFamily: "Montserrat,sans-serif" }}
                  >
                    {cta.buttonLabel}
                  </Link>
                </div>

                {/* Agent Image */}
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

            {/* Mobile CTA */}
            <div className="md:hidden container-custom mt-8 pb-8">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "#FAF6EF",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                }}
              >
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
                  </div>
                )}

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
                    className="inline-block px-7 py-3 rounded-full bg-[var(--color-gold)] text-white text-sm font-semibold transition-all duration-200 hover:opacity-90"
                    style={{ fontFamily: "Montserrat,sans-serif" }}
                  >
                    {cta.buttonLabel}
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Desktop Spacer */}
        {cta && (
          <div
            className="hidden md:block"
            style={{ height: "160px" }}
          />
        )}
      </div>

      {/* FAQ Spacer */}
      {cta && (
        <div
          className="hidden md:block bg-offwhite bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{ height: "140px" }}
        />
      )}

      {/* FAQ */}
      {showFAQ && <FAQSection faqData={FAQS} />}
    </>
  );
}