"use client";

import Image from "next/image";

export default function SplitSection({
  imagePosition,   // "left" | "right"
  images,          // [img1, img2]
  title,
  description,
  subText,
  features,
  buttonText,
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="section bg-[#f9fafb]">
      <div className="container-custom">

        {/* MOBILE CARD STYLE */}
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-0 lg:bg-transparent lg:shadow-none">

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">

            {/* IMAGE SIDE */}
            <div
              className={`
                relative flex justify-center
                ${isImageLeft ? "lg:order-1" : "lg:order-2"}
                order-1
              `}
            >
              {/* Main Image */}
              <div className="w-full overflow-hidden rounded-xl lg:rounded-2xl">
                <Image
                  src={images[0]}
                  alt="main"
                  width={600}
                  height={500}
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Overlap Image (desktop only) */}
              {images[1] && (
                <div className="hidden lg:block absolute -bottom-12 left-10 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={images[1]}
                    alt="secondary"
                    width={300}
                    height={250}
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            {/* CONTENT SIDE */}
            <div
              className={`
                ${isImageLeft ? "lg:order-2" : "lg:order-1"}
                order-2 text-left lg:text-left
              `}
            >
              <h2>{title}</h2>

              <p className="mt-4">{description}</p>
              <p className="mt-3">{subText}</p>

              {/* FEATURES (optional) */}
              {features && features.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
                  {features.map((item, i) => (
                    <div key={i} className="text-left lg:text-left">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl bg-[var(--color-lightgold)]/30">
                        {item.icon}
                      </div>
                      <h3 className="mt-3">{item.label}</h3>
                    </div>
                  ))}
                </div>
              )}

              {/* BUTTON */}
              {buttonText && (
                <div className="mt-6 lg:mt-8">
                  <button className="btn-primary w-full sm:w-auto">
                    {buttonText}
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}