"use client";

import { useState } from "react";

export default function ContactForm({ title, subtitle, buttonText }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  /* ── HANDLE INPUT ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setForm({ ...form, [name]: value.replace(/[^A-Za-z\s]/g, "") });
      return;
    }
    if (name === "phone") {
      setForm({ ...form, [name]: value.replace(/\D/g, "") });
      return;
    }
    setForm({ ...form, [name]: value });
  };

  /* ── VALIDATION ── */
  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10-digit number";
    if (!form.interest) newErrors.interest = "Please select an option";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  /* ── SUBMIT ── */
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted:", form);
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", phone: "", interest: "", message: "" });
    }
  };

  return (
    <>
      <style>{`
        /* ── Reset global h2/h3/p inside the card so base styles don't bleed ── */
        .cf-left-top h2,
        .cf-right-heading h3 {
          font-family: "Playfair Display", serif;
          font-weight: 600;
          line-height: 1.35;
          margin: 0;
        }

        .cf-left-top h2 {
          font-size: 26px;
          color: var(--color-offwhite);
        }

        .cf-right-heading h3 {
          font-size: 22px;
          color: var(--color-primary);
        }

        .cf-left-top p,
        .cf-right-heading p,
        .cf-trust-item span,
        .cf-privacy,
        .cf-label,
        .cf-error,
        .cf-input,
        .cf-select,
        .cf-textarea {
          font-family: "Montserrat", sans-serif;
          margin: 0;
        }

        /* ── CARD ── */
        .cf-card {
          display: grid;
          grid-template-columns: 320px 1fr;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.10);
          background: #ffffff;
          width: 100%;
        }

        /* ── LEFT PANEL ── */
        .cf-left {
          background-color: var(--color-primary);
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .cf-left-top p {
          font-size: 13px;
          color: rgba(247, 246, 242, 0.65);
          margin-top: 10px;
          line-height: 1.75;
        }

        .cf-trust {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 2rem;
        }

        .cf-trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cf-trust-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cf-trust-icon svg {
          width: 15px;
          height: 15px;
          stroke: var(--color-gold);
          fill: none;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .cf-trust-item span {
          font-size: 12.5px;
          color: rgba(247, 246, 242, 0.70);
          line-height: 1.45;
        }

        .cf-dots {
          display: flex;
          gap: 6px;
          margin-top: 2.5rem;
        }

        .cf-dot {
          height: 5px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.20);
        }

        .cf-dot.active {
          width: 22px;
          background: var(--color-gold);
        }

        .cf-dot:not(.active) {
          width: 6px;
        }

        /* ── RIGHT FORM ── */
        .cf-right {
          padding: 2.5rem 2rem;
          background: #ffffff;
        }

        .cf-right-heading {
          margin-bottom: 1.5rem;
        }

        .cf-right-heading p {
          font-size: 13px;
          color: var(--color-muted);
          margin-top: 5px;
          line-height: 1.65;
        }

        /* ── FORM ── */
        .cf-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .cf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .cf-field {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .cf-label {
          font-size: 11px;
          font-weight: 600;
          color: var(--color-primary);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .cf-input,
        .cf-select,
        .cf-textarea {
          width: 100%;
          font-size: 13px;
          color: var(--color-text);
          background: var(--color-offwhite);
          border: 1.5px solid #dedad0;
          border-radius: 6px;
          outline: none;
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        .cf-input,
        .cf-select {
          height: 44px;
          padding: 0 14px;
        }

        .cf-textarea {
          padding: 12px 14px;
          resize: none;
          line-height: 1.65;
        }

        .cf-input:focus,
        .cf-select:focus,
        .cf-textarea:focus {
          border-color: var(--color-gold);
          background: #ffffff;
        }

        .cf-input.error,
        .cf-select.error,
        .cf-textarea.error {
          border-color: #e24b4a;
          background: #fff8f8;
        }

        .cf-error {
          font-size: 11px;
          color: #e24b4a;
          margin-top: 1px;
        }

        /* ── SUBMIT ROW ── */
        .cf-submit {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 4px;
        }

        .cf-privacy {
          font-size: 11px;
          color: var(--color-muted);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .cf-privacy svg {
          width: 12px;
          height: 12px;
          stroke: var(--color-muted);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          flex-shrink: 0;
        }

        /* Matches .btn-primary from global CSS */
        .cf-btn {
          background-color: var(--color-primary);
          color: #fff;
          padding: 0 24px;
          height: 44px;
          border-radius: 6px;
          font-family: "Montserrat", sans-serif;
          font-weight: 500;
          font-size: 13.5px;
          border: none;
          cursor: pointer;
          transition: opacity 0.3s ease, transform 0.1s ease;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }

        .cf-btn:hover {
          opacity: 0.9;
        }

        .cf-btn:active {
          transform: scale(0.98);
        }

        .cf-btn svg {
          width: 14px;
          height: 14px;
          stroke: #fff;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* ── RESPONSIVE: Tablet (≤1024px) — sidebar narrows ── */
        @media (max-width: 1024px) {
          .cf-card {
            grid-template-columns: 260px 1fr;
          }
        }

        /* ── RESPONSIVE: Mobile (≤768px) — hide left panel entirely ── */
        @media (max-width: 768px) {
          .cf-card {
            grid-template-columns: 1fr;
            border-radius: 14px;
          }

          .cf-left {
            display: none;
          }

          .cf-right {
            padding: 1.75rem 1.25rem;
          }

          .cf-row {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .cf-submit {
            flex-direction: column;
            align-items: flex-start;
          }

          .cf-btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* ── RESPONSIVE: Very small (≤360px) ── */
        @media (max-width: 360px) {
          .cf-right-heading h3 {
            font-size: 18px;
          }
        }
      `}</style>

      {/*
        .section         → py-16 md:py-24  (global CSS)
        .container-custom → w-full mx-auto px-4 with responsive max-widths (global CSS)
      */}
      <section className="section">
        <div className="container-custom">
          <div className="cf-card">
            {/* ── LEFT PANEL ── */}
            <div className="cf-left">
              <div className="cf-left-top">
                <h2>Find Your Dream Property</h2>
                <p>
                  Modern homes, luxury apartments and premium real estate
                  solutions tailored for you.
                </p>

                <div className="cf-trust">
                  <div className="cf-trust-item">
                    <div className="cf-trust-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <span>100+ premium listings</span>
                  </div>

                  <div className="cf-trust-item">
                    <div className="cf-trust-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <span>Verified properties only</span>
                  </div>

                  <div className="cf-trust-item">
                    <div className="cf-trust-icon">
                      <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <span>24h response guarantee</span>
                  </div>
                </div>
              </div>

              <div className="cf-dots">
                <div className="cf-dot active" />
                <div className="cf-dot" />
                <div className="cf-dot" />
              </div>
            </div>

            {/* ── RIGHT FORM ── */}
            <div className="cf-right">
              <div className="cf-right-heading">
                <h3>{title || "Get in Touch"}</h3>
                <p>
                  {subtitle ||
                    "Fill in your details and our team will reach out to you."}
                </p>
              </div>

              <form className="cf-form" onSubmit={handleSubmit}>
                {/* Row 1 — Name & Email */}
                <div className="cf-row">
                  <div className="cf-field">
                    <label className="cf-label">Name</label>
                    <input
                      className={`cf-input${errors.name ? " error" : ""}`}
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <span className="cf-error">{errors.name}</span>
                    )}
                  </div>

                  <div className="cf-field">
                    <label className="cf-label">Email</label>
                    <input
                      className={`cf-input${errors.email ? " error" : ""}`}
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="cf-error">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Row 2 — Phone & Interest */}
                <div className="cf-row">
                  <div className="cf-field">
                    <label className="cf-label">Phone Number</label>
                    <input
                      className={`cf-input${errors.phone ? " error" : ""}`}
                      type="text"
                      name="phone"
                      placeholder="10-digit number"
                      maxLength={10}
                      value={form.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <span className="cf-error">{errors.phone}</span>
                    )}
                  </div>

                  <div className="cf-field">
                    <label className="cf-label">Interested In</label>
                    <select
                      className={`cf-select${errors.interest ? " error" : ""}`}
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="buy">Buy Property</option>
                      <option value="sell">Sell Property</option>
                      <option value="rent">Rent Property</option>
                    </select>
                    {errors.interest && (
                      <span className="cf-error">{errors.interest}</span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="cf-field">
                  <label className="cf-label">Your Message</label>
                  <textarea
                    className={`cf-textarea${errors.message ? " error" : ""}`}
                    name="message"
                    placeholder="Write your message..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <span className="cf-error">{errors.message}</span>
                  )}
                </div>

                {/* Submit */}
                <div className="cf-submit">
                  <span className="cf-privacy">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    Your data is secure
                  </span>
                  <button type="submit" className="cf-btn">
                    {buttonText || "Send Message"}
                    <svg viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
