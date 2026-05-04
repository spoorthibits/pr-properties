"use client";

export default function PropertyTypes({ PROPERTY_TYPES }) {
  const hoverStyle = `
    .stat-item:hover .card-icon {
      filter: brightness(0) invert(1);
      opacity: 1;
    }
    .stat-item:hover .card-label {
      color: #ffffff !important;
    }
    .stat-item:hover .card-count {
      color: rgba(255, 255, 255, 0.65) !important;
    }
  `;

  const Card = ({ type }) => (
    <div
      className="stat-item flex flex-col items-center justify-center gap-3 cursor-pointer"
      style={{
        flex: 1,
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      <div
        className="card-icon"
        style={{
          color: "rgba(255,255,255,0.85)",
          transition: "opacity 0.3s ease",
        }}
      >
        {type.icon}
      </div>
      <div>
        <p
          className="card-label font-semibold text-base leading-tight"
          style={{
            color: "rgba(255,255,255,0.92)",
            transition: "color 0.3s ease",
          }}
        >
          {type.label}
        </p>
        <p
          className="card-count text-sm mt-1"
          style={{
            color: "rgba(255,255,255,0.65)",
            transition: "color 0.3s ease",
            letterSpacing: "0.05em",
          }}
        >
          {type.count}
        </p>
      </div>
    </div>
  );

  const Divider = () => (
    <div
      style={{
        width: "1px",
        height: "70px",
        background: "rgba(255,255,255,0.45)",
        flexShrink: 0,
        alignSelf: "center",
      }}
    />
  );

  return (
    <section style={{ background: "#1B304B", width: "100%" }}>
      <style>{hoverStyle}</style>

      {/* Mobile: stacked */}
      <div className="flex flex-col sm:hidden">
        {PROPERTY_TYPES.map((type, i) => (
          <div key={type.label}>
            <Card type={type} />
            {i < PROPERTY_TYPES.length - 1 && (
              <div style={{ height: "1px", background: "rgba(255,255,255,0.35)", margin: "0 2rem" }} />
            )}
          </div>
        ))}
      </div>

      {/* Desktop: all 5 in one row with dividers */}
      <div className="hidden sm:flex items-center" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {PROPERTY_TYPES.map((type, i) => (
          <div key={type.label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <Card type={type} />
            {i < PROPERTY_TYPES.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </section>
  );
}