"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ================= DEFAULT CONFIG ================= */

const DEFAULT_LOGO = {
  src: "/assets/logo.png",
  alt: "Logo",
  
  href: "/",
};

const DEFAULT_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Properties", href: "/properties" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const DEFAULT_CTA = {
  label: "Enquire Now",
  href: "/contact",
};

/* ================= NAVBAR COMPONENT ================= */

export default function Navbar({
  logo = DEFAULT_LOGO,
  navLinks = DEFAULT_LINKS,
  cta = DEFAULT_CTA,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">

          {/* ================= LOGO ================= */}
          <Link href={logo.href}>
            <div className="flex items-center gap-2">
              {logo.src && (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={140}
                  priority
                />
              )}
              {logo.text && (
                <span className="text-[var(--color-primary)] font-semibold text-lg">
                  {logo.text}
                </span>
              )}
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-8 text-nav">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[var(--color-primary)] hover:text-[var(--color-gold)] transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ================= CTA ================= */}
          <div className="hidden md:block">
            <Link href={cta.href} className="text-[var(--color-gold)] border-2 px-8 py-3 rounded-md hover:bg-[var(--color-gold)] hover:text-white transition">
              {cta.label}
            </Link>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle Menu"
          >
            <span className="w-6 h-0.5 bg-[var(--color-primary)]"></span>
            <span className="w-6 h-0.5 bg-[var(--color-primary)]"></span>
            <span className="w-6 h-0.5 bg-[var(--color-primary)]"></span>
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container-custom py-4 flex flex-col gap-4 text-nav">

            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[var(--color-primary)] hover:text-[var(--color-gold)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={cta.href}
              className="btn-primary text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              {cta.label}
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}