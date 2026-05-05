"use client";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Properties", href: "/properties" },
  { label: "Contact Us", href: "/contact" },
];

const PROPERTY_TYPES = [
  { label: "Open Plots", href: "#" },
  { label: "Villas", href: "#" },
  { label: "Commercial", href: "#" },
];

const ChevronRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-gold)"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3 h-3 flex-shrink-0"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const WaveDivider = () => (
  <svg
    viewBox="0 0 1200 80"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full block"
    style={{ marginBottom: "-1px", backgroundColor: "#f5f5f0" }}
  >
    <path
      d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z"
      fill="#1B304B"
    />
  </svg>
);

function FooterLink({ href, children }) {
  const handleEnter = (e) => {
    e.currentTarget.style.color = "var(--color-gold)";
  };
  const handleLeave = (e) => {
    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
  };

  return (
    <a
      href={href}
      className="flex items-center gap-2 text-sm transition-colors duration-200"
      style={{ color: "rgba(255,255,255,0.55)" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer>
      <WaveDivider />

      <div className="bg-primary mb-[70px] md:mb-0">
        <div className="container-custom">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 py-8 border-b border-white/10">

            <Image
              src="/assets/logo2.png"
              width={180}
              height={140}
              priority
              alt="Dream Properties Logo"
            />

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">

              <a href="tel:+16035550123" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-gold)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
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
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-gold)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12">

            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">About Us</h3>
              <p className="text-sm leading-relaxed text-white/50">
                Your trusted partner in finding luxury properties across India&apos;s finest locations.
              </p>
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>
                      <ChevronRight />
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Properties</h3>
              <ul className="space-y-3">
                {PROPERTY_TYPES.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>
                      <ChevronRight />
                      {item.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Find Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-gold)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-sm text-white/50">Hyderabad, Telangana, India</p>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-gold)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <p className="text-sm text-white/50">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="bg-[var(--color-gold)] text-white text-center py-4 text-sm">
          Copyright 2026, All Rights Reserved - PR Dream Properties
        </div>
      </div>
    </footer>
  );
}