"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FloatingCTAs() {
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add("has-floating-cta");
    return () => document.body.classList.remove("has-floating-cta");
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 w-full md:w-auto md:left-auto md:right-0 md:top-[60%] md:-translate-y-1/2 z-50"
      style={{ willChange: "transform" }}
    >
      <div className="flex flex-row md:flex-col md:overflow-hidden md:rounded-l-2xl shadow-[0_12px_32px_rgba(0,0,0,0.45)] md:shadow-none">
        <button
          onClick={() => router.push("/contact-us")}
          style={{ backgroundColor: "#1B304B" }}
          className="flex-1 md:flex-none text-white cursor-pointer text-[15px] md:text-[12px] font-semibold tracking-wide h-[70px] md:h-[120px] md:w-[44px] flex items-center justify-center md:rotate-180 md:[writing-mode:vertical-rl]"
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
}