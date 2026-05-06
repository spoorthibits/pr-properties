"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export const SearchHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
    <polyline points="10,35 40,10 70,35" stroke="#1B304B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="#1B304B" strokeWidth="3.5"/>
    <circle cx="36" cy="52" r="9" stroke="#B89454" strokeWidth="3"/>
    <line x1="43" y1="59" x2="50" y2="66" stroke="#B89454" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
export const MoneyHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
    <polyline points="10,35 40,10 70,35" stroke="#1B304B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="#1B304B" strokeWidth="3.5"/>
    <circle cx="40" cy="51" r="11" stroke="#B89454" strokeWidth="3"/>
    <text x="40" y="56" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#B89454" fontFamily="serif">$</text>
  </svg>
);
export const GrowthHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
    <polyline points="10,35 40,10 70,35" stroke="#1B304B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="#1B304B" strokeWidth="3.5"/>
    <polyline points="26,58 34,48 42,54 54,44" stroke="#B89454" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="50,44 54,44 54,48" stroke="#B89454" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const KeyHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
    <polyline points="10,35 40,10 70,35" stroke="#1B304B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="#1B304B" strokeWidth="3.5"/>
    <circle cx="36" cy="49" r="6" stroke="#B89454" strokeWidth="3"/>
    <line x1="42" y1="49" x2="54" y2="49" stroke="#B89454" strokeWidth="3" strokeLinecap="round"/>
    <line x1="51" y1="49" x2="51" y2="54" stroke="#B89454" strokeWidth="3" strokeLinecap="round"/>
    <line x1="47" y1="49" x2="47" y2="53" stroke="#B89454" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
export const StarHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
    <polyline points="10,35 40,10 70,35" stroke="#1B304B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="#1B304B" strokeWidth="3.5"/>
    <polygon points="40,41 42.5,47 49,47 44,51 46,57 40,53 34,57 36,51 31,47 37.5,47" stroke="#B89454" strokeWidth="2" strokeLinejoin="round" fill="none"/>
  </svg>
);
export const TagHouseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
    <polyline points="10,35 40,10 70,35" stroke="#1B304B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="18" y="35" width="44" height="32" rx="2" stroke="#1B304B" strokeWidth="3.5"/>
    <path d="M28,44 L28,56 L40,56 L54,44 L42,44 Z" stroke="#B89454" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="34" cy="48" r="2" fill="#B89454"/>
  </svg>
);

const IMG_FADE_MS = 400;

export default function HowWeHelpSection({
  heading = "Discover how we can help",
  subheading = "Thousands of luxury home enthusiasts just like you visit our website.",
  tabs = [
    { key: "buying",  label: "Buying"  },
    { key: "selling", label: "Selling" },
  ],
  className = "",
  cardsByTab = {
    buying: [
      {
        id: "b1",
        title: "Find out how much you can afford",
        description: "Use our smart budget calculator to estimate your price range based on your income, savings, and liabilities. Understanding your true borrowing capacity early means you can search with confidence — no surprises, no wasted viewings.",
        bullets: ["Income & expense analysis", "Borrowing capacity estimate", "Saved to your buyer profile"],
        icon: <SearchHouseIcon />,
        learnMoreHref: "#",
      },
      {
        id: "b2",
        title: "Understand your monthly costs",
        description: "Get a full breakdown of mortgage repayments, strata fees, council rates, and insurance before you commit. We surface every ongoing cost so you can budget accurately and know exactly what homeownership will cost each month.",
        bullets: ["Mortgage repayment modelling", "Strata & council rate estimates", "Insurance cost guidance"],
        icon: <MoneyHouseIcon />,
        learnMoreHref: "#",
      },
      {
        id: "b3",
        title: "Track property value trends",
        description: "Follow suburb-level price movements and historical growth data across every market we operate in. Our intelligence tools help you time your purchase perfectly — buying in the right suburb at the right moment makes all the difference.",
        bullets: ["Suburb growth heat maps", "12-month price movement charts", "Real-time demand signals"],
        icon: <GrowthHouseIcon />,
        learnMoreHref: "#",
      },
    ],
    selling: [
      {
        id: "s1",
        title: "Get an instant property estimate",
        description: "Receive a data-driven valuation of your home based on recent comparable sales, local demand, and current market conditions — all in seconds. Knowing your home's true value is the critical first step to a successful sale.",
        bullets: ["Comparable sales analysis", "Local demand scoring", "Real-time market conditions"],
        icon: <TagHouseIcon />,
        learnMoreHref: "#",
      },
      {
        id: "s2",
        title: "Connect with top local agents",
        description: "We match you with experienced agents in your area who have a proven track record of selling homes like yours at the best possible price. Our matching considers sale history, local expertise, and verified client satisfaction scores.",
        bullets: ["Curated agent shortlist", "Sale history verification", "No obligation comparison"],
        icon: <StarHouseIcon />,
        learnMoreHref: "#",
      },
      {
        id: "s3",
        title: "Unlock your selling potential",
        description: "Discover what upgrades, styling choices, and presentation strategies could meaningfully increase your final sale price. Our experts guide you through every step of the selling journey — from first impression to settlement.",
        bullets: ["Pre-sale styling advice", "ROI-ranked improvement list", "End-to-end selling support"],
        icon: <KeyHouseIcon />,
        learnMoreHref: "#",
      },
    ],
  },
}) {
  const [activeTab,   setActiveTab]   = useState(tabs[0].key);
  const [activeIdx,   setActiveIdx]   = useState(0);
  const [displayIdx,  setDisplayIdx]  = useState(0);
  const [imgFading,   setImgFading]   = useState(false);
  const [winH,        setWinH]        = useState(800);
  const [cardH,       setCardH]       = useState(500);
  // Mobile carousel state
  const [mobileIdx,   setMobileIdx]   = useState(0);

  const imgTimerRef   = useRef(null);
  const cardsColRef   = useRef(null);
  const hdrRef        = useRef(null);
  const activeIdxRef  = useRef(0);
  const displayIdxRef = useRef(0);
  const wheelBusyRef  = useRef(false);
  const wrapperRef    = useRef(null);
  const stickyRef     = useRef(null);
  // Track if we're in "exit mode" — last card reached, next scroll releases sticky
  const exitModeRef   = useRef(false);

  const cards = cardsByTab[activeTab] || [];
  const cardsLenRef = useRef(cards.length);
  cardsLenRef.current = cards.length;

  useEffect(() => { activeIdxRef.current = activeIdx; }, [activeIdx]);
  useEffect(() => { displayIdxRef.current = displayIdx; }, [displayIdx]);

  // Measure window + card heights
  useEffect(() => {
    const measure = () => {
      setWinH(window.innerHeight);
      if (hdrRef.current && stickyRef.current) {
        setCardH(stickyRef.current.offsetHeight - hdrRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (hdrRef.current && stickyRef.current) {
        setCardH(stickyRef.current.offsetHeight - hdrRef.current.offsetHeight);
      }
    }, 60);
  }, [activeTab]);

  const scrollToCard = (i) => {
    const col = cardsColRef.current;
    if (!col) return;
    col.scrollTo({ top: i * cardH, behavior: "smooth" });
  };

  const crossfadeImgTo = (i) => {
    setImgFading(true);
    setTimeout(() => {
      setDisplayIdx(i);
      displayIdxRef.current = i;
      setImgFading(false);
    }, IMG_FADE_MS);
  };

  const startImgTimer = () => {
    clearInterval(imgTimerRef.current);
    imgTimerRef.current = setInterval(() => {
      const next = (displayIdxRef.current + 1) % cardsLenRef.current;
      crossfadeImgTo(next);
    }, 4500);
  };

  // Reset on tab change
  useEffect(() => {
    setActiveIdx(0);
    activeIdxRef.current = 0;
    setMobileIdx(0);
    exitModeRef.current = false;
    crossfadeImgTo(0);
    if (cardsColRef.current) cardsColRef.current.scrollTop = 0;
    startImgTimer();
    return () => clearInterval(imgTimerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  // WHEEL HANDLER — fixed exit logic
  useEffect(() => {
    const sticky = stickyRef.current;
    const wrapper = wrapperRef.current;
    if (!sticky || !wrapper) return;

    const onWheel = (e) => {
      const rect     = sticky.getBoundingClientRect();
      const isPinned = Math.abs(rect.top) < 2;
      const down     = e.deltaY > 0;
      const cur      = activeIdxRef.current;
      const last     = cardsLenRef.current - 1;

      if (!isPinned) return;

      // Already at last card scrolling down → release (do nothing, let page scroll naturally)
      if (down && cur >= last) {
        // Don't preventDefault — let the page scroll past
        return;
      }

      // Already at first card scrolling up → release
      if (!down && cur <= 0) {
        return;
      }

      // Otherwise intercept and step through cards
      e.preventDefault();
      if (wheelBusyRef.current) return;
      wheelBusyRef.current = true;
      setTimeout(() => { wheelBusyRef.current = false; }, 750);

      const next = down ? cur + 1 : cur - 1;
      setActiveIdx(next);
      activeIdxRef.current = next;
      scrollToCard(next);
      crossfadeImgTo(next);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardH]);

  const handleCardClick = (i) => {
    setActiveIdx(i);
    activeIdxRef.current = i;
    scrollToCard(i);
    crossfadeImgTo(i);
  };

  // Mobile carousel navigation
  const handleMobilePrev = () => {
    setMobileIdx((prev) => Math.max(0, prev - 1));
  };
  const handleMobileNext = () => {
    setMobileIdx((prev) => Math.min(cards.length - 1, prev + 1));
  };

  const IMAGES = {
    buying: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85",
      "https://i.pinimg.com/1200x/d6/44/87/d64487145fe58ec916aa9998eb80fbcb.jpg",
    ],
    selling: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=900&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
    ],
  };
  const currentImages = IMAGES[activeTab] || IMAGES.buying;
  const EXTRA_H       = (cards.length - 1) * winH;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Montserrat:wght@300;400;500&display=swap');

        /* ── DESKTOP LAYOUT (≥768px) ── */
        .hwh-desktop { display: none; }
        @media (min-width: 768px) { .hwh-desktop { display: block; } }

        /* ── MOBILE LAYOUT (<768px) ── */
        .hwh-mobile { display: block; }
        @media (min-width: 768px) { .hwh-mobile { display: none; } }

        /* ========== DESKTOP STYLES ========== */
        .hwh-outer {
          display: flex;
          flex-direction: row;
          height: 100vh;
          background: #F7F6F2;
        }

        .hwh-left {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          width: 52%;
          flex-shrink: 0;
          background: #F7F6F2;
          overflow: hidden;
          height: 100vh;
        }

        .hwh-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          max-width: 640px;
          box-sizing: border-box;
        }
        @media (max-width: 1024px) { .hwh-inner { max-width: 100%; } }

        .hwh-hdr {
          flex-shrink: 0;
          padding: 52px 48px 32px;
          border-bottom: 1px solid #ece8e0;
        }
        @media (max-width: 1024px) { .hwh-hdr { padding: 48px 36px 28px; } }

        .hwh-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: .18em; text-transform: uppercase;
          color: #B89454; margin-bottom: 12px; margin-top: 0;
        }
        .hwh-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 2.6vw, 2.4rem);
          font-weight: 600; color: #1B304B;
          line-height: 1.2; margin: 0 0 12px;
        }
        .hwh-subhead {
          font-family: 'Montserrat', sans-serif;
          font-size: 15px; font-weight: 300;
          color: #6b7280; line-height: 1.7;
          margin: 0 0 24px;
        }

        .hwh-tab {
          padding: 9px 26px; border-radius: 999px;
          border: 1.5px solid #1B304B;
          font-size: .85rem; font-weight: 500;
          cursor: pointer; background: transparent;
          color: #1B304B; font-family: 'Montserrat', sans-serif;
          transition: all .25s;
        }
        .hwh-tab.active { background: #1B304B; color: #fff; }

        .hwh-cards-scroll {
          flex: 1;
          overflow: hidden;
          position: relative;
        }

        .hwh-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
          padding: 40px 48px;
          position: relative;
          cursor: pointer;
          transition: background 0.3s ease;
          box-sizing: border-box;
        }
        @media (max-width: 1024px) { .hwh-card { padding: 36px; } }
        .hwh-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0; width: 4px;
          background: #B89454;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.45s cubic-bezier(.4,0,.2,1);
        }
        .hwh-card.active::before { transform: scaleY(1); }
        .hwh-card.active { background: #fdf9f3; }

        .hwh-step-badge {
          display: flex; align-items: center; gap: 14px;
        }
        .hwh-icon-box {
          width: 64px; height: 64px; background: #F7F6F2;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .hwh-step-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: .14em; text-transform: uppercase;
          color: #b0a99a; transition: color .3s;
        }
        .hwh-card.active .hwh-step-label { color: #B89454; }

        .hwh-card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.35rem, 2vw, 1.85rem);
          font-weight: 600; color: #1B304B;
          line-height: 1.25; margin: 0;
        }
        .hwh-card-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 15px; color: #6b7280;
          line-height: 1.8; font-weight: 300; margin: 0;
        }
        .hwh-bullets {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 9px;
        }
        .hwh-bullets li {
          font-family: 'Montserrat', sans-serif;
          font-size: 13.5px; font-weight: 400;
          color: #374151; display: flex; align-items: center; gap: 10px;
        }
        .hwh-bullets li::before {
          content: '';
          width: 6px; height: 6px; border-radius: 50%;
          background: #B89454; flex-shrink: 0;
        }

        .hwh-learn-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 11px 24px; border-radius: 999px;
          border: 1.5px solid #1B304B;
          color: #1B304B; font-size: .82rem; font-weight: 500;
          letter-spacing: .04em; text-decoration: none;
          background: transparent; cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          transition: background .25s, color .25s;
          width: fit-content; margin-top: 4px;
        }
        .hwh-learn-btn:hover { background: #1B304B; color: #fff; }

        .hwh-step-num {
          font-family: 'Playfair Display', serif;
          font-size: 6rem; font-weight: 400;
          color: rgba(184,148,84,.07);
          position: absolute; bottom: 24px; right: 48px;
          line-height: 1; pointer-events: none; user-select: none;
          transition: color .3s;
        }
        .hwh-card.active .hwh-step-num { color: rgba(184,148,84,.14); }

        /* RIGHT panel */
        .hwh-right {
          flex: 1;
          position: relative; overflow: hidden;
        }
        .hwh-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover;
          transition: opacity .6s cubic-bezier(.4,0,.2,1),
                      transform .75s cubic-bezier(.4,0,.2,1);
        }
        .hwh-img.on  { opacity: 1; transform: scale(1); }
        .hwh-img.off { opacity: 0; transform: scale(1.04); }
        .hwh-veil {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(to right, rgba(255,255,255,.15) 0%, transparent 35%);
        }

        /* 3-dot stepper — RIGHT panel */
        .hwh-stepper {
          position: absolute; right: 20px; top: 50%;
          transform: translateY(-50%);
          display: flex; flex-direction: column; gap: 10px; z-index: 10;
        }
        .hwh-sdot {
          width: 8px; height: 8px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,.6);
          background: transparent; cursor: pointer;
          transition: all .3s; padding: 0;
        }
        .hwh-sdot.active {
          background: #B89454; border-color: #B89454;
          transform: scale(1.45);
        }

        /* ========== MOBILE STYLES ========== */
        .hwh-mob-wrap {
          background: #F7F6F2;
          padding: 36px 20px 48px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .hwh-mob-hdr .hwh-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: .18em; text-transform: uppercase; color: #B89454; margin: 0 0 10px; display: block; }
        .hwh-mob-hdr .hwh-heading { font-family: 'Playfair Display', serif; font-size: 1.7rem; font-weight: 600; color: #1B304B; line-height: 1.2; margin: 0 0 10px; }
        .hwh-mob-hdr .hwh-subhead { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 300; color: #6b7280; line-height: 1.7; margin: 0 0 20px; }

        /* Mobile tabs */
        .hwh-mob-tabs { display: flex; gap: 8px; flex-wrap: wrap; }

        /* Mobile single card — image on top, content below, all one card */
        .hwh-mob-card-wrap {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(27,48,75,.07);
          border: 1px solid #ece8e0;
        }

        /* Image portion */
        .hwh-mob-img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
        }
        .hwh-mob-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover;
          transition: opacity .45s ease, transform .55s ease;
        }
        .hwh-mob-img.on  { opacity: 1; transform: scale(1); }
        .hwh-mob-img.off { opacity: 0; transform: scale(1.03); }

        /* Content portion */
        .hwh-mob-content {
          padding: 24px 22px 28px;
          border-left: 4px solid #B89454;
          display: flex; flex-direction: column; gap: 14px;
        }
        .hwh-mob-step-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px; font-weight: 500;
          letter-spacing: .18em; text-transform: uppercase;
          color: #B89454;
        }
        .hwh-mob-icon-row {
          display: flex; align-items: center; gap: 12px;
        }
        .hwh-mob-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem; font-weight: 600; color: #1B304B;
          line-height: 1.25; margin: 0;
        }
        .hwh-mob-card-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 13.5px; color: #6b7280;
          line-height: 1.8; font-weight: 300; margin: 0;
        }

        /* Mobile nav row — arrows + counter */
        .hwh-mob-nav {
          display: flex; gap: 10px; align-items: center;
        }
        .hwh-mob-arrow {
          width: 48px; height: 48px; border-radius: 50%;
          border: none;
          background: #1B304B; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #fff; transition: opacity .2s;
          flex-shrink: 0;
        }
        .hwh-mob-arrow:disabled { opacity: 0.3; cursor: not-allowed; }
        .hwh-mob-counter {
          font-family: 'Montserrat', sans-serif;
          font-size: 12px; font-weight: 500;
          color: #b0a99a; letter-spacing: .1em;
          margin-left: 4px;
        }
      `}</style>

      {/* ── DESKTOP VERSION ── */}
      <div
        ref={wrapperRef}
        style={{ position: "relative", height: `calc(100vh + ${EXTRA_H}px)` }}
        className={`hwh-desktop ${className}`}
      >
        <div
          ref={stickyRef}
          style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}
        >
          <div className="hwh-outer">

            {/* LEFT */}
            <div className="hwh-left">
              <div className="hwh-inner">

                <div className="hwh-hdr" ref={hdrRef}>
                  <p className="hwh-eyebrow">How we help</p>
                  <h2 className="hwh-heading">{heading}</h2>
                  <p className="hwh-subhead">{subheading}</p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {tabs.map((tab) => (
                      <button
                        key={tab.key}
                        className={`hwh-tab${activeTab === tab.key ? " active" : ""}`}
                        onClick={() => setActiveTab(tab.key)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="hwh-cards-scroll" ref={cardsColRef}>
                  {cards.map((card, i) => (
                    <div
                      key={card.id}
                      className={`hwh-card${activeIdx === i ? " active" : ""}`}
                      style={{ height: `${cardH}px` }}
                      onClick={() => handleCardClick(i)}
                    >
                      <span className="hwh-step-num">0{i + 1}</span>

                      <div className="hwh-step-badge">
                        <div className="hwh-icon-box">{card.icon}</div>
                        <span className="hwh-step-label">Step 0{i + 1} of 0{cards.length}</span>
                      </div>

                      <h3 className="hwh-card-title">{card.title}</h3>
                      <p className="hwh-card-desc">{card.description}</p>

                      {card.bullets && (
                        <ul className="hwh-bullets">
                          {card.bullets.map((b) => <li key={b}>{b}</li>)}
                        </ul>
                      )}

                      <Link
                        href={card.learnMoreHref}
                        className="hwh-learn-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn more
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="hwh-right">
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                {currentImages.map((src, i) => (
                  <img
                    key={`${activeTab}-${i}`}
                    src={src}
                    alt={cards[i]?.title || ""}
                    className={`hwh-img${displayIdx === i ? " on" : " off"}`}
                  />
                ))}
                <div className="hwh-veil" />
                {/* 3-dot stepper — no caption */}
                <div className="hwh-stepper">
                  {cards.map((_, i) => (
                    <button
                      key={i}
                      className={`hwh-sdot${displayIdx === i ? " active" : ""}`}
                      onClick={() => handleCardClick(i)}
                      aria-label={`Step ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── MOBILE VERSION ── */}
      <div className={`hwh-mobile ${className}`}>
        <div className="hwh-mob-wrap">

          {/* Header */}
          <div className="hwh-mob-hdr">
            <span className="hwh-eyebrow">How we help</span>
            <h2 className="hwh-heading">{heading}</h2>
            <p className="hwh-subhead">{subheading}</p>
            <div className="hwh-mob-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`hwh-tab${activeTab === tab.key ? " active" : ""}`}
                  onClick={() => { setActiveTab(tab.key); setMobileIdx(0); }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Single card: image top + content bottom */}
          {cards[mobileIdx] && (
            <div className="hwh-mob-card-wrap">
              {/* Image */}
              <div className="hwh-mob-img-box">
                {currentImages.map((src, i) => (
                  <img
                    key={`mob-${activeTab}-${i}`}
                    src={src}
                    alt={cards[i]?.title || ""}
                    className={`hwh-mob-img${mobileIdx === i ? " on" : " off"}`}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="hwh-mob-content">
                <span className="hwh-mob-step-label">Step 0{mobileIdx + 1} of 0{cards.length}</span>
                <div className="hwh-mob-icon-row">
                  <div className="hwh-icon-box" style={{ background: "#F7F6F2" }}>
                    {cards[mobileIdx].icon}
                  </div>
                </div>
                <h3 className="hwh-mob-card-title">{cards[mobileIdx].title}</h3>
                <p className="hwh-mob-card-desc">{cards[mobileIdx].description}</p>
                {cards[mobileIdx].bullets && (
                  <ul className="hwh-bullets">
                    {cards[mobileIdx].bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}
                <Link href={cards[mobileIdx].learnMoreHref} className="hwh-learn-btn">
                  Learn more
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          )}

          {/* Nav arrows + counter */}
          <div className="hwh-mob-nav">
            <button
              className="hwh-mob-arrow"
              onClick={handleMobilePrev}
              disabled={mobileIdx === 0}
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                <path d="M10 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="hwh-mob-arrow"
              onClick={handleMobileNext}
              disabled={mobileIdx === cards.length - 1}
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className="hwh-mob-counter">
              {String(mobileIdx + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
            </span>
          </div>

        </div>
      </div>
    </>
  );
}