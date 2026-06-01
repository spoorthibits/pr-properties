"use client";

import Image from "next/image";

// ── SVG ICONS ──────────────────────────────────────────────
const ICONS = {
  shield: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={28}
      height={28}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  trending: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={28}
      height={28}
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  users: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={28}
      height={28}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  check: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={28}
      height={28}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  clipboard: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={28}
      height={28}
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  ),
  pin: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={28}
      height={28}
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  award: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={28}
      height={28}
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
};

/**
 * SplitSection — reusable two-column section component
 *
 * Props:
 *  imagePosition   "left" | "right"  (default "right")
 *  images          string[]           required — [mainImage, secondaryImage?]
 *  imageStyle      "normal" | "single" (default "normal")
 *  eyebrow         string             small gold label above title
 *  title           string             section heading
 *  description     string             first paragraph
 *  subText         string | string[]  additional paragraphs
 *  features        { icon: string, text: string }[]
 *  buttonText      string
 *  buttonHref      string
 *  showBackground  boolean            grid bg (default false)
 */
export default function SplitSection({
  imagePosition = "right",
  images = [],
  imageStyle = "normal",
  eyebrow,
  title,
  description,
  subText,
  features,
  buttonText,
  buttonHref,
  showBackground = false,
}) {
  const isImageLeft = imagePosition === "left";
  const subTexts = Array.isArray(subText) ? subText : subText ? [subText] : [];

  return (
    <section
      className="section relative overflow-hidden py-12 lg:py-16"
      style={
        showBackground
          ? {
              backgroundColor: "#F5F3EE",
              backgroundImage: `
                linear-gradient(rgba(27,48,75,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(27,48,75,0.07) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }
          : { backgroundColor: "#ffffff" }
      }
    >
      <style>{`
        /* ── SplitSection scoped styles ── */
        .split-image-single {
          width: 100%;
          max-width: 560px;
          aspect-ratio: 4 / 3;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 24px 64px rgba(0,0,0,0.10);
        }

        .split-image-front,
        .split-image-back {
          border-radius: 22px;
          overflow: hidden;
          position: absolute;
          width: 70%;
          height: 70%;
          transition: transform 0.5s ease;
        }
        .split-image-front { top: 0; left: 0; z-index: 20; box-shadow: 0 24px 70px rgba(0,0,0,0.14); }
        .split-image-back  { bottom: 0; right: 0; z-index: 10; box-shadow: 0 20px 60px rgba(0,0,0,0.10); }
        .split-image-front:hover img,
        .split-image-back:hover img  { transform: scale(1.05); }

        .split-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2.5rem;
        }

        .split-feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.3s ease;
        }

        .split-feature-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background-color: rgba(200,151,58,0.12);
          color: var(--color-primary, #1B304B);
          transition: all 0.3s ease;
        }
        .split-feature-item:hover .split-feature-icon {
          background-color: #C8973A;
          color: #fff;
          transform: translateY(-4px);
        }
        .split-feature-item:hover h3 {
          color: #C8973A;
        }
        .split-feature-item h3 {
          margin-top: 1rem;
          font-size: 15px;
          font-weight: 600;
          color: var(--color-primary, #1B304B);
          transition: color 0.3s ease;
        }

 @media (max-width: 768px) {
  .split-image-wrap {
    margin-bottom: 24px !important;
  }

  .split-image-single {
    margin-bottom: 24px !important;
  }

  .split-content {
    margin-top: 0 !important;
    padding-top: 0 !important;
    text-align: left;
  }

  .split-content h2 {
    margin-top: 0 !important;
    margin-bottom: 20px !important;
  }

  .split-content p {
    text-align: left;
  }
}
@media (max-width: 480px) {
  .split-content {
    padding: 0 8px;
  }

  .split-content h2 {
    font-size: 1.8rem !important;
  }

  .split-content p {
    font-size: 0.95rem !important;
    line-height: 1.7;
  }

  .split-image-wrap {
    height: 220px !important;
  }
}
  @media (max-width: 767px) {
  .split-feature-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .split-content {
    text-align: left;
    padding: 0 20px;
  }

  .split-content h2 {
    text-align: left;
    font-size: 2rem;
    line-height: 1.2;
  }

  .split-content p {
    text-align: left;
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
  }

  .split-btn-wrap {
    justify-content: flex-start !important;
  }

  .split-feature-grid {
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}
 .mobile-title {
  width: 100%;
  display: block;
  text-align: left;
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0;
}

.split-feature-item {
  flex-direction: column;
  text-align: center;
}
      `}</style>

      <div className="container-custom px-4 md:px-2">
        {title && (
  <div className="lg:hidden col-span-full w-full mb-6 px-7 pb-4">
    <h2 className="mobile-title">{title}</h2>
  </div>
)}
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-20 items-start">
          {/* ── IMAGE SIDE ── */}
          <div
            className={`
              flex justify-center
              ${isImageLeft ? "lg:order-1" : "lg:order-2"}
              order-1
            `}
          >
            
            {imageStyle === "single" ? (
              /* ── SINGLE IMAGE ── */
              <div className="split-image-single w-full">
                <Image
                  src={images[0]}
                  alt={title || "section image"}
                  fill
                  className="object-cover"
                  priority
                />

              </div>
            ) : (
              /* ── STACKED TWO IMAGES ── */
              <div
                className="split-image-wrap relative w-full"
                style={{ maxWidth: 560, height: 480 }}
              >
                {/* BACK IMAGE */}
                {images[1] && (
                  <div className="split-image-back">
                    <Image
                      src={images[1]}
                      alt="secondary"
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                  </div>
                )}

                {/* FRONT IMAGE */}
                <div className="split-image-front">
                  <Image
                    src={images[0]}
                    alt="main"
                    fill
                    className="object-cover transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            )}
          </div>

          {/* ── CONTENT SIDE ── */}
          <div
            className={`
              split-content
              ${isImageLeft ? "lg:order-2" : "lg:order-1"}
              order-2
            `}
          >
            {/* EYEBROW */}
            {eyebrow && (
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{
                  color: "#C8973A",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {eyebrow}
              </p>
            )}
            

            {/* TITLE — uses global h2 */}
            {title && <h2 className="hidden lg:block">{title}</h2>}

            {/* DESCRIPTION — uses global p */}
            {description && <p className="mt-5">{description}</p>}

            {/* EXTRA PARAGRAPHS */}
            {subTexts.map((para, i) => (
              <p key={i} className="mt-4">
                {para}
              </p>
            ))}

            {/* FEATURES GRID */}
            {features && features.length > 0 && (
              <div className="split-feature-grid">
                {features.map((item, i) => (
                  <div key={i} className="split-feature-item">
                    <div className="split-feature-icon">
                      {typeof item.icon === "string"
                        ? (ICONS[item.icon] ?? null)
                        : item.icon}
                    </div>
                    <h3>{item.text ?? item.label}</h3>
                  </div>
                ))}
              </div>
            )}

            {/* BUTTON */}
            {buttonText && (
              <div
                className="mt-8 flex split-btn-wrap"
                style={{ justifyContent: "flex-start" }}
              >
                <button
                  onClick={() => {
                    if (buttonHref) window.location.href = buttonHref;
                  }}
                  className="btn-primary transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-white hover:-translate-y-1 hover:shadow-xl"
                >
                  {buttonText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
