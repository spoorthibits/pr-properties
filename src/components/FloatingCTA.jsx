"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ContactForm from "@/components/ContactForm";

export default function FloatingCTAs() {
  const router = useRouter();
  const [isOverNavy, setIsOverNavy] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.classList.add("has-floating-cta");
    return () => document.body.classList.remove("has-floating-cta");
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  useEffect(() => {
    const checkOverlap = () => {
      if (window.innerWidth >= 768) { setIsOverNavy(false); return; }
      const navySections = document.querySelectorAll("[data-navy-bg]");
      const ctaBar = document.getElementById("floating-cta-bar");
      if (!ctaBar) return;
      const ctaRect = ctaBar.getBoundingClientRect();
      let overlapping = false;
      navySections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (ctaRect.top < rect.bottom && ctaRect.bottom > rect.top) overlapping = true;
      });
      setIsOverNavy(overlapping);
    };
    checkOverlap();
    window.addEventListener("scroll", checkOverlap, { passive: true });
    window.addEventListener("resize", checkOverlap, { passive: true });
    return () => {
      window.removeEventListener("scroll", checkOverlap);
      window.removeEventListener("resize", checkOverlap);
    };
  }, []);

  return (
    <>
      {/* ── FLOATING BUTTON ── */}
      <div
        id="floating-cta-bar"
        className="fixed bottom-0 left-0 w-full md:w-auto md:left-auto md:right-0 md:top-[60%] md:-translate-y-1/2 z-50"
        style={{ willChange: "transform" }}
      >
        <div className="flex flex-row md:flex-col md:overflow-hidden md:rounded-l-2xl shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
          <button
            onClick={() => setShowModal(true)}
            style={{
              backgroundColor: isOverNavy ? "#B89454" : "#1B304B",
              color: "#ffffff",
              transition: "background-color 0.3s ease",
            }}
            className="flex-1 md:flex-none cursor-pointer text-[15px] md:text-[12px] font-semibold tracking-wide h-[70px] md:h-[120px] md:w-[44px] flex items-center justify-center md:rotate-180 md:[writing-mode:vertical-rl]"
          >
            CONTACT US
          </button>
        </div>
      </div>

      {/* ── MODAL OVERLAY ── */}
      {showModal && (
        <>
          <style>{`
            .cf-modal-overlay {
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.55);
              backdrop-filter: blur(4px);
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 16px;
              animation: cf-fade-in 0.2s ease;
            }

            @keyframes cf-fade-in {
              from { opacity: 0; }
              to   { opacity: 1; }
            }

            .cf-modal-box {
              background: #ffffff;
              border-radius: 16px;
              width: 100%;
              max-width: 520px;
              max-height: 90vh;
              overflow-y: auto;
              position: relative;
              box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
              animation: cf-slide-up 0.25s ease;
            }

            @keyframes cf-slide-up {
              from { opacity: 0; transform: translateY(20px); }
              to   { opacity: 1; transform: translateY(0);    }
            }

            /* Scrollbar styling */
            .cf-modal-box::-webkit-scrollbar { width: 4px; }
            .cf-modal-box::-webkit-scrollbar-thumb { background: #dedad0; border-radius: 4px; }

            .cf-modal-close {
              position: sticky;
              top: 0;
              z-index: 10;
              display: flex;
              justify-content: flex-end;
              padding: 12px 14px 0;
              background: #ffffff;
            }

            .cf-modal-close button {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              border: none;
              background: #f0ede6;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: background 0.2s ease;
            }

            .cf-modal-close button:hover {
              background: #e2ddd4;
            }

            .cf-modal-close button svg {
              width: 14px;
              height: 14px;
              stroke: #1B304B;
              fill: none;
              stroke-width: 2.5;
              stroke-linecap: round;
            }

            /* Override ContactForm section padding inside modal */
            .cf-modal-box .section {
              padding: 0 !important;
            }

            /* Hide the left navy panel + show only right form */
            .cf-modal-box .cf-card {
              grid-template-columns: 1fr !important;
              border-radius: 0 !important;
              box-shadow: none !important;
            }

            .cf-modal-box .cf-left {
              display: none !important;
            }

            .cf-modal-box .cf-right {
              padding: 0 1.5rem 1.75rem !important;
            }

            .cf-modal-box .container-custom {
              padding: 0 !important;
              max-width: 100% !important;
            }
          `}</style>

          <div
            className="cf-modal-overlay"
            onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
          >
            <div className="cf-modal-box">
              {/* Close button */}
              <div className="cf-modal-close">
                <button onClick={() => setShowModal(false)} aria-label="Close">
                  <svg viewBox="0 0 24 24">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Reuse ContactForm — left panel hidden via CSS above */}
              <ContactForm
                title="Get in Touch"
                subtitle="Fill in your details and our team will reach out to you."
                buttonText="Send Message"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}