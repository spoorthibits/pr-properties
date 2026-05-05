"use client";

import { useState, useRef } from "react";

export default function FAQSection({ faqData = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const answerRefs = useRef([]);

  if (!faqData.length) return null;

  return (
    <section
      className="relative py-20 md:py-26 bg-offwhite
      bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px)]
      bg-[size:40px_40px]"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* ── Left heading block ── */}
          <div className="flex justify-center md:justify-start">
            <div
              className="px-5 py-2"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <h2
                className="md:text-5xl leading-[1]"
                style={{ color: "#ffffff" }}
              >
                FAQ&apos;s
              </h2>
            </div>
          </div>

          {/* ── Accordion ── */}
          <div className="md:col-span-2 bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
            {faqData.map((item, index) => {
              const isActive = index === activeIndex;
              const contentHeight = isActive
                ? (answerRefs.current[index]?.scrollHeight ?? 0) + "px"
                : "0px";

              return (
                <div
                  key={index}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  {/* Question button */}
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="w-full flex justify-between items-center gap-4 px-6 md:px-8 py-5 text-left transition-colors duration-300"
                    style={{
                      backgroundColor: isActive
                        ? "var(--color-primary)"   /* #1B304B navy when active */
                        : "transparent",
                      color: isActive
                        ? "#ffffff"
                        : "var(--color-text)",     /* #1f2937 default */
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = "var(--color-primary)";
                        e.currentTarget.style.color = "#ffffff";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "var(--color-text)";
                      }
                    }}
                  >
                    <span className="flex-1 text-[15px] md:text-[18px] font-medium break-words leading-snug">
                      {item.question}
                    </span>

                    <span className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 transition-transform duration-300"
                        style={{
                          transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Answer panel */}
                  <div
                    ref={(el) => (answerRefs.current[index] = el)}
                    style={{
                      maxHeight: contentHeight,
                      overflow: "hidden",
                      transition:
                        "max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div
                      className="px-6 md:px-8 py-5 text-[14px] md:text-[16px] leading-relaxed"
                      style={{
                        color: "var(--color-muted)",      /* #6b7280 */
                        borderTop: "1px solid #f0f0f0",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}