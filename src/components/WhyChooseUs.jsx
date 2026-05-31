const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
    strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const ClipboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
    strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="13" y2="16" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
    strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
    strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
    <circle cx="12" cy="8" r="6" />
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
  </svg>
);

const cards = [
  {
    icon: <CheckCircleIcon />,
    title: "Verified Properties",
    desc: "All our listings are carefully verified for quality and authenticity.",
  },
  {
    icon: <ClipboardIcon />,
    title: "Transparent Process",
    desc: "Clear communication and honest dealings at every step.",
  },
  {
    icon: <PinIcon />,
    title: "Prime Locations",
    desc: "Curated properties in the most sought-after neighborhoods.",
  },
  {
    icon: <AwardIcon />,
    title: "End-to-End Assistance",
    desc: "From property search to final handover, we're with you all the way.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section section">
      <div className="container-custom">
        <div className="why-grid">

          {/* ── LEFT: TEXT ── */}
          <div className="why-text">
            <p className="why-eyebrow">WHY CHOOSE US</p>
            <h2>Why Choose Dream Properties</h2>
            <p className="mt-5">
              We combine local market knowledge with a customer-first approach to
              deliver a seamless real estate experience.
            </p>
            <p className="mt-4">
              Whether you are purchasing your first home, searching for a premium
              commercial space, or making a long-term investment, our team is
              committed to helping you every step of the way.
            </p>
            <p className="mt-4">
              We value honesty, transparency, and attention to detail — ensuring
              every client receives professional support from inquiry to final
              transaction.
            </p>
          </div>

          {/* ── RIGHT: CARDS ── */}
          <div className="why-cards">
            {cards.map((card, i) => (
              <div key={i} className="why-card">
                <div className="why-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p className="why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── SECTION BG ── */
        .why-section {
          background-color: #F7F4EE;
          background-image: radial-gradient(circle, rgba(27,48,75,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* ── LAYOUT ── */
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .why-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        /* ── EYEBROW ── */
        .why-eyebrow {
          color: #C8973A;
          font-size: 12px !important;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        /* ── CARD ── */
        .why-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 28px 24px;
          box-shadow: 0 2px 16px rgba(27,48,75,0.07);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(27,48,75,0.13);
        }

        /* ── CARD ICON ── */
        .why-card-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background-color: #FEF3E2;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C8973A;
          margin-bottom: 16px;
        }

        /* ── CARD DESC overrides global p slightly for tighter cards ── */
        .why-card-desc {
          font-size: 14px !important;
          line-height: 1.65 !important;
          margin-top: 8px;
          margin-bottom: 0;
        }

        /* ── RESPONSIVE: tablet ── */
        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── RESPONSIVE: mobile ── */
        @media (max-width: 540px) {
          .why-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}