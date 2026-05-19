export default function CoreValues({ title, items }) {
  return (
    <section className="section">
      <div className="container-custom">

        <h2 style={{ marginBottom: "40px" }}>
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {items?.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-8"
              style={{
                background: "var(--color-offwhite)",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: "#E8F0E8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.heading}
                  style={{
                    width: "22px",
                    height: "22px",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Heading */}
              <h3 style={{ marginBottom: "14px" }}>
                {item.heading}
              </h3>

              {/* Description */}
              <p>
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}