"use client";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "About Us", href: "#" },
  { label: "Our Properties", href: "#" },
  { label: "Why Choose Us?", href: "#" },
  { label: "Customer Reviews", href: "#" },
  { label: "Contact Us", href: "#" },
];

const PROPERTY_TYPES = [
  { label: "Open Plots", href: "#" },
  { label: "Apartments", href: "#" },
  { label: "Villas", href: "#" },
  { label: "Red Sandelwood Farmlands", href: "#" },
  { label: "Commercial", href: "#" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 flex-shrink-0">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const WaveDivider = () => (
  <svg
    viewBox="0 0 1200 80"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full block"
    style={{ marginBottom: "-3px" }}
  >
    <path
      d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z"
      fill="#1B304B"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer>
      <WaveDivider /> 
      

      <div className="bg-primary">
        <div className="container-custom">

          {/* ── Top contact bar ── */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 py-8 border-b border-white/10">

            {/* Logo */}
            <Image
              src="/assets/logo2.png"
               width={180}
                  height={140}
                  priority
              alt="Proty Real Estate Logo"
              />

            {/* Contact items */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <a href="tel:+16035550123" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/50">Call us</p>
                  <p className="font-semibold text-white text-sm">(603) 555-0123</p>
                </div>
              </a>

              <a href="mailto:proty-support@gmail.com" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/50">Need live help</p>
                  <p className="font-semibold text-white text-sm">proty-support@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* ── Main columns ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12">

            {/* About blurb */}
            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">About Us</h3>
              <p className="text-sm leading-relaxed text-white/50">
                Your trusted partner in finding luxury properties across India's finest locations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-white/55 hover:text-gold transition-colors duration-200"
                    >
                      <ChevronRight />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Properties */}
            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Properties</h3>
              <ul className="space-y-3">
                {PROPERTY_TYPES.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-white/55 hover:text-gold transition-colors duration-200"
                    >
                      <ChevronRight />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Find Us */}
            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Find Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-sm text-white/50">Hyderabad, Telangana, India</p>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <p className="text-sm text-white/50">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/10">
            <p className="text-xs text-center sm:text-left text-white/40">
              Copyright © 2026 <span className="font-semibold text-white">PROTY – REAL ESTATE</span>. All rights reserved.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 bg-white/10 hover:bg-gold hover:text-white transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}