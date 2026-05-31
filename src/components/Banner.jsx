"use client";

import { useEffect, useState } from "react";

export default function HeroBanner({
  title = "Your Dream Home Starts Here",
  subtitle = "Explore exceptional properties with trusted expertise, personalized service, and unmatched value.",
  backgroundImage = "/assets/homebanner.avif",
  overlay = "bg-black/40",
}) {
  const [zoom, setZoom] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setZoom(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!zoom) return;
    const t = setTimeout(() => {
      setIntroVisible(false);
      setTimeout(() => setContentVisible(true), 100);
    }, 2000);
    return () => clearTimeout(t);
  }, [zoom]);

  return (
    <>
      <style>{`
        @keyframes vtm-zoom-out {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(40); opacity: 0; }
        }

        .vtm-overlay-zoom {
          animation: vtm-zoom-out 2.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .vtm-overlay-zoom {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>

      <section className="relative h-[100vh] min-h-[520px] overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: "fixed",
          }}
        />

        {/* Overlay */}
        <div className={`absolute inset-0 ${overlay}`} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

          {title && (
            <h1
              className="text-white drop-shadow-lg transition-all duration-400 ease-out"
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible
                  ? "translateY(0)"
                  : "translateY(28px)",
              }}
            >
              {title}
            </h1>
          )}

          {subtitle && (
            <p
              className="mt-3 text-white/85 max-w-xl transition-all duration-700 ease-out "
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
              }}
            >
              {subtitle}
            </p>
          )}

        </div>

        {/* Welcome Animation */}
        {introVisible && (
          <div
            className={`absolute inset-0 z-50 flex items-center justify-center bg-white select-none pointer-events-none${
              zoom ? " vtm-overlay-zoom" : ""
            }`}
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