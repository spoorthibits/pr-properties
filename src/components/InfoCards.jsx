export default function InfoCards({ cards }) {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cards?.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-8 md:p-10 bg-white transition-all duration-300 hover:shadow-md"
            >
              <span
                className="uppercase tracking-[4px] text-sm font-medium"
                style={{ color: "var(--color-gold)" }}
              >
                {item.tag}
              </span>

              <h2 className="mt-4 whitespace-pre-line">
                {item.title}
              </h2>

              <p className="mt-6 leading-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}