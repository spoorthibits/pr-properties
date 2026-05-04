"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * ScrollingLogos
 *
 * Reuses your existing scroll animations (animate-scroll-left / animate-scroll-right)
 * defined in globals.css. Brand colors come from CSS variables.
 *
 * Props:
 *  title        — section heading
 *  subtitle     — section subheading
 *  logos        — array of image src strings
 *  cta          — optional object for the cream CTA card:
 *                 { heading, subheading, buttonLabel, buttonHref, image }
 */
export default function ScrollingLogos({
  title,
  subtitle,
  logos = [],
  cta,
}) {
  // Duplicate for seamless infinite loop
  const loopLogos = [...logos, ...logos];

  return (
    <>
      {/* ── Dark section: heading + scrolling logo row ── */}
      <section
        className="section overflow-hidden"
        style={{ backgroundColor: "#1B304B" }}
      >
        <div className="container-custom text-center">

          {/* Heading */}
          <h2 style={{ color: "#ffffff" }}>{title}</h2>

          {/* Subtitle */}
          <p
            className="mt-3 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {subtitle}
          </p>

          {/* Single scrolling logo row */}
          <div className="mt-10 overflow-hidden">
            <div className="flex w-max animate-scroll-left gap-10">
              {loopLogos.map((logo, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    padding: "14px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "140px",
                    transition: "background 0.25s",
                  }}
                  className="logo-card"
                >
                  <Image
                    src={logo}
                    alt="partner logo"
                    width={110}
                    height={50}
                    className="object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── CTA Card — sits inside the dark section, overlapping bottom ── */}
        {cta && (
          <div className="container-custom mt-16">
            <div
              style={{
                background: "var(--color-offwhite)",
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2.75rem 3rem",
                position: "relative",
                gap: "2rem",
              }}
            >
              {/* Decorative swirl lines — pure CSS, no image needed */}
              <svg
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "220px",
                  top: 0,
                  height: "100%",
                  opacity: 0.18,
                  pointerEvents: "none",
                }}
                width="160"
                viewBox="0 0 160 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M80 0 Q140 50 80 100 Q20 150 80 200" stroke="#B89454" strokeWidth="1.5" fill="none"/>
                <path d="M100 0 Q160 50 100 100 Q40 150 100 200" stroke="#B89454" strokeWidth="1" fill="none"/>
                <path d="M60 0 Q120 50 60 100 Q0 150 60 200" stroke="#B89454" strokeWidth="1" fill="none"/>
              </svg>

              {/* Left — text + CTA button */}
              <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
                <h3
                  style={{
                    color: "var(--color-primary)",
                    fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
                    fontWeight: 700,
                    lineHeight: 1.25,
                    marginBottom: "0.6rem",
                  }}
                >
                  {cta.heading}
                </h3>
                <p
                  style={{
                    color: "var(--color-muted)",
                    fontSize: "0.925rem",
                    marginBottom: "1.5rem",
                    lineHeight: 1.65,
                  }}
                >
                  {cta.subheading}
                </p>
                <Link
                  href={cta.buttonHref || "#"}
                  style={{
                    display: "inline-block",
                    padding: "0.65rem 1.75rem",
                    borderRadius: "999px",
                    backgroundColor: "var(--color-gold)",
                    color: "#ffffff",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    transition: "opacity 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.88";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {cta.buttonLabel}
                </Link>
              </div>

              {/* Right — agent / person image */}
              {cta.image && (
                <div
                  style={{
                    flexShrink: 0,
                    width: "clamp(160px, 18vw, 240px)",
                    height: "clamp(160px, 18vw, 220px)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Image
                    src={cta.image}
                    alt="Real estate agent"
                    fill
                    style={{ objectFit: "contain", objectPosition: "bottom center" }}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
        .logo-card:hover {
          background: rgba(255, 255, 255, 0.13) !important;
        }
      `}</style>
    </>
  );
}