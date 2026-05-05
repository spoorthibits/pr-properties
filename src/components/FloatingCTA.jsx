"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function FloatingCTAs() {
  const router = useRouter();
  const [isOverNavy, setIsOverNavy] = useState(false);

  useEffect(() => {
    document.body.classList.add("has-floating-cta");
    return () => document.body.classList.remove("has-floating-cta");
  }, []);

  useEffect(() => {
    const checkOverlap = () => {
      // Only apply logic on mobile
      if (window.innerWidth >= 768) {
        setIsOverNavy(false);
        return;
      }

      const navySections = document.querySelectorAll("[data-navy-bg]");
      const ctaBar = document.getElementById("floating-cta-bar");
      if (!ctaBar) return;

      const ctaRect = ctaBar.getBoundingClientRect();
      let overlapping = false;

      navySections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (ctaRect.top < rect.bottom && ctaRect.bottom > rect.top) {
          overlapping = true;
        }
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
    <div
      id="floating-cta-bar"
      className="fixed bottom-0 left-0 w-full md:w-auto md:left-auto md:right-0 md:top-[60%] md:-translate-y-1/2 z-50"
      style={{ willChange: "transform" }}
    >
      <div className="flex flex-row md:flex-col md:overflow-hidden md:rounded-l-2xl shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
        <button
          onClick={() => router.push("/contact-us")}
          style={{
            backgroundColor: isOverNavy ? "#B89454" : "#1B304B",
            color: isOverNavy ? "#ffffff" : "#ffffff",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          className="flex-1 md:flex-none cursor-pointer text-[15px] md:text-[12px] font-semibold tracking-wide h-[70px] md:h-[120px] md:w-[44px] flex items-center justify-center md:rotate-180 md:[writing-mode:vertical-rl]"
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
}