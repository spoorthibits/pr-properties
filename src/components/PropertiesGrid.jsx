"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import PropertyCard from "./PropertyCard";

export default function PropertiesGrid({ properties }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(2);
  const trackRef = useRef(null);
  const outerRef = useRef(null);

  const maxIndex = Math.max(0, properties.length - visible);

  useEffect(() => {
    const update = () => setVisible(window.innerWidth < 640 ? 1 : 2);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [visible, maxIndex]);

  const updateTrack = useCallback(() => {
    if (!trackRef.current || !outerRef.current) return;
    const gap   = 24;
    const cardW = (outerRef.current.clientWidth - gap * (visible - 1)) / visible;
    trackRef.current.style.transform = `translateX(-${current * (cardW + gap)}px)`;
  }, [current, visible]);

  useEffect(() => { updateTrack(); }, [updateTrack]);

  const slide = (dir) =>
    setCurrent((c) => Math.max(0, Math.min(c + dir, maxIndex)));

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[0.22em] uppercase text-gold mb-2.5">Our Portfolio</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Featured Properties</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-11 bg-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="h-px w-11 bg-gold/40" />
          </div>
          <p className="mt-3 text-sm font-light text-muted max-w-sm mx-auto leading-relaxed">
            Thousands of luxury home enthusiasts have found their dream home
          </p>
        </div>

        {/* ── DESKTOP: unchanged 3-col grid ── */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {properties.map((p) => <PropertyCard key={p.id} {...p} />)}
        </div>

        {/* ── MOBILE/TABLET: carousel ── */}
        <div className="lg:hidden">
          <div ref={outerRef} className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {properties.map((p) => (
                <div
                  key={p.id}
                  className="flex-none"
                  style={{ width: `calc((100% - ${(visible-1)*24}px) / ${visible})` }}
                >
                  <PropertyCard {...p} />
                </div>
              ))}
            </div>
          </div>

          {/* Square nav buttons — bottom right, side by side */}
          <div className="flex justify-center mt-7">
            <button
              onClick={() => slide(-1)}
              disabled={current === 0}
              className="w-[52px] h-[52px] bg-primary hover:bg-gold
                disabled:bg-primary/30 disabled:cursor-not-allowed
                flex items-center justify-center
                rounded-l-[4px] border-r border-white/15
                transition-colors duration-250"
            >
              <svg className="w-5 h-5 stroke-white" fill="none" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={() => slide(1)}
              disabled={current >= maxIndex}
              className="w-[52px] h-[52px] bg-primary hover:bg-gold
                disabled:bg-primary/30 disabled:cursor-not-allowed
                flex items-center justify-center
                rounded-r-[4px]
                transition-colors duration-250"
            >
              <svg className="w-5 h-5 stroke-white" fill="none" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}