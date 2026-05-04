"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "How do I know how much property I can afford?",
    a: "Start by calculating your net monthly income and existing liabilities. A general rule is that your EMI should not exceed 40% of your monthly take-home pay. Factor in your down payment savings, credit score, and any additional costs like registration, stamp duty, and maintenance. Our budget calculator can give you a personalised estimate in minutes.",
  },
  {
    q: "What is the difference between carpet area, built-up area, and super built-up area?",
    a: "Carpet area is the actual usable floor space inside your home — the area where you can lay a carpet. Built-up area adds the thickness of walls to carpet area. Super built-up area (also called saleable area) further includes a proportionate share of common spaces like lobbies, staircases, and lifts. Always compare properties on carpet area for an accurate price-per-sqft comparison.",
  },
  {
    q: "What documents do I need to verify before buying a property?",
    a: "You should verify the title deed, encumbrance certificate, approved building plan, occupancy certificate, property tax receipts, and RERA registration number. For apartments, also check the society's no-objection certificate (NOC). We recommend engaging a legal advisor to conduct thorough due diligence before signing any agreement.",
  },
  {
    q: "How long does the home loan approval process take?",
    a: "Pre-approval (in-principle sanction) can happen within 24–72 hours if your documents are in order. Final loan disbursement typically takes 7–15 working days after property verification and legal checks are complete. Having your KYC, income proof, and property documents ready upfront significantly speeds up the process.",
  },
  {
    q: "What costs should I budget for beyond the property price?",
    a: "Budget an additional 8–12% over the property price for ancillary costs. These include stamp duty (4–7% depending on state), registration fees (1%), GST for under-construction properties (5%), legal/due diligence fees, interior fit-outs, and society maintenance deposits. Always keep a contingency buffer of at least 5%.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section className="section">
      <style>{`
        .faq-item {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #eaecf4;
          transition: box-shadow 0.25s;
        }
        .faq-item:hover {
          box-shadow: 0 4px 24px rgba(27,48,75,0.08);
        }
        .faq-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.35rem 1.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .faq-question {
          font-family: "Playfair Display", serif;
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-primary);
          line-height: 1.4;
          flex: 1;
        }
        .faq-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .faq-icon.open {
          background: var(--color-primary);
          border-color: var(--color-primary);
        }
        .faq-icon svg {
          transition: transform 0.3s ease;
        }
        .faq-icon.open svg {
          transform: rotate(45deg);
        }
        .faq-answer {
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          max-height: 0;
          opacity: 0;
        }
        .faq-answer.open {
          max-height: 300px;
          opacity: 1;
        }
        .faq-answer-inner {
          padding: 0 1.5rem 1.35rem;
          font-family: "Montserrat", sans-serif;
          font-size: 0.9rem;
          color: var(--color-muted);
          line-height: 1.8;
          border-top: 1px solid #f0f2f8;
          padding-top: 1.1rem;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (max-width: 768px) {
          .faq-question { font-size: 0.9rem; }
        }
      `}</style>

      <div className="container-custom">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              marginBottom: "0.75rem",
            }}
          >
            Got Questions?
          </p>
          <h2 style={{ color: "var(--color-primary)", marginBottom: "0.75rem" }}>
            Frequently Asked Questions
          </h2>
          <p
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              color: "var(--color-muted)",
              fontSize: "0.95rem",
            }}
          >
            Everything you need to know about buying, selling, and renting
            property — answered clearly.
          </p>
        </div>

        {/* FAQ grid */}
        <div className="faq-grid">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="faq-item">
                <button
                  className="faq-btn"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{faq.q}</span>
                  <span className={`faq-icon${isOpen ? " open" : ""}`}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="7"
                        y1="1"
                        x2="7"
                        y2="13"
                        stroke={isOpen ? "#fff" : "var(--color-primary)"}
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="1"
                        y1="7"
                        x2="13"
                        y2="7"
                        stroke={isOpen ? "#fff" : "var(--color-primary)"}
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className={`faq-answer${isOpen ? " open" : ""}`}>
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}