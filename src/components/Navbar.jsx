"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const DEFAULT_LOGO = {
  src: "/assets/logo.png",
  alt: "Logo",
  href: "/",
};

const DEFAULT_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Properties", href: "/companies" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const DEFAULT_CTA = {
  label: "Enquire Now",
  href: "/contact",
};

export default function Navbar({
  logo = DEFAULT_LOGO,
  navLinks = DEFAULT_LINKS,
  cta = DEFAULT_CTA,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <style>{`
        .drawer {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 75vw;
          max-width: 300px;
          background: #fff;
          z-index: 200;
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 4px 0 24px rgba(27,48,75,0.13);
          display: flex;
          flex-direction: column;
          padding: 2rem 1.5rem;
          gap: 0;
        }
        .drawer.open {
          transform: translateX(0);
        }
        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(27,48,75,0.35);
          z-index: 199;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(2px);
        }
        .drawer-backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }
        .drawer-link {
          display: block;
          padding: 0.85rem 1rem;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          color: #1B304B;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, padding-left 0.2s;
          margin-bottom: 0.25rem;
        }
        .drawer-link:hover {
          background: rgba(27,48,75,0.07);
          padding-left: 1.4rem;
        }
        .drawer-link.active {
          background: #1B304B;
          color: #fff;
          font-weight: 600;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #1B304B;
          border-radius: 2px;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-[0_2px_20px_rgba(27,48,75,0.08)] border-b border-[#eaecf4]">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link href={logo.href}>
              <div className="flex items-center gap-2">
                {logo.src && (
                  <Image src={logo.src} alt={logo.alt} width={180} height={140} priority />
                )}
                {logo.text && (
                  <span className="text-[var(--color-primary)] font-semibold text-lg">{logo.text}</span>
                )}
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <p className="hidden lg:flex items-center gap-8 text-nav">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`transition ${
                    pathname === item.href
                      ? "text-[#1B304B] font-semibold border-b-2 border-[#1B304B] pb-0.5"
                      : "text-[var(--color-primary)] hover:text-[var(--color-gold)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </p>

            {/* DESKTOP CTA */}
            <div className="hidden lg:block">
              <Link
                href={cta.href}
                className="text-white border-2 px-6 py-2.5 rounded-md bg-[var(--color-primary)] hover:opacity-90 transition"
              >
                {cta.label}
              </Link>
            </div>

            {/* HAMBURGER */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden hamburger flex flex-col gap-1.5 p-1 ${isOpen ? "open" : ""}`}
              aria-label="Toggle Menu"
            >
              <span />
              <span />
              <span />
            </button>

          </div>
        </div>
      </header>

      {/* BACKDROP */}
      <div
        className={`drawer-backdrop ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* DRAWER */}
      <nav className={`drawer ${isOpen ? "open" : ""}`}>

        {/* Drawer Logo */}
        <div className="mb-8">
          <Image src={logo.src} alt={logo.alt} width={140} height={100} />
        </div>

        {/* Nav Links */}
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`drawer-link ${pathname === item.href ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}

        {/* CTA */}
        <Link
          href={cta.href}
          className="mt-6 text-center py-3 px-6 rounded-md bg-[#1B304B] text-white font-semibold text-sm hover:opacity-90 transition"
          onClick={() => setIsOpen(false)}
        >
          {cta.label}
        </Link>

      </nav>
    </>
  );
}