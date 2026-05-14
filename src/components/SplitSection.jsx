"use client";

import Image from "next/image";

export default function SplitSection({
  imagePosition,
  images,
  imageStyle,
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE SIDE */}
          <div
            className={`
              relative flex justify-center
              ${isImageLeft ? "lg:order-1" : "lg:order-2"}
              order-1
            `}
          >

            {/* ================= REVIEW STYLE ================= */}
            {imageStyle === "review" ? (

              <div className="relative w-full max-w-[620px] mx-auto">

                {/* ───────────────── TOP SECTION ───────────────── */}
                <div className="relative w-full pb-6">

                  {/* Circle Background */}
                  <div
                    className="
                      absolute
                      top-0
                      right-[10%]
                      w-[72%]
                      aspect-square
                      rounded-full
                      bg-[#EDE4D7]
                      z-0
                    "
                  />

                  {/* Person Image */}
                  <div
                    className="
                      relative
                      z-10
                      mx-auto
                      w-[72%]
                      sm:w-[66%]
                      lg:w-[62%]
                    "
                  >
                    <Image
                      src={images[0]}
                      alt="review person"
                      width={420}
                      height={520}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>

                  {/* Floating User Card */}
                  <div
                    className="
                      absolute
                      top-[10%]
                      left-[2%]
                      z-20
                      bg-white
                      rounded-2xl
                      shadow-lg
                      px-4
                      py-3
                      flex
                      items-center
                      gap-3
                      min-w-[190px]
                      sm:min-w-[220px]
                    "
                  >
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src="/assets/avatar1.jpg"
                        alt="avatar"
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-[15px] sm:text-[18px] font-semibold text-gray-900 leading-none">
                        Cody Fisher
                      </p>

                      <p className="text-[12px] text-gray-500 mt-1">
                        CEO Themesflat
                      </p>
                    </div>
                  </div>

                  {/* Floating Stars */}
                  <div
                    className="
                      absolute
                      top-[36%]
                      right-[4%]
                      z-20
                      bg-white
                      rounded-2xl
                      shadow-md
                      px-4
                      py-3
                      text-[16px]
                      whitespace-nowrap
                    "
                  >
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>

                {/* ───────────────── REVIEW CARD ───────────────── */}
                <div
                  className="
                    relative
                    z-20
                    bg-white
                    rounded-[26px]
                    shadow-xl
                    p-6
                    sm:p-8
                    w-full
                    -mt-4
                  "
                >

                  {/* Stars */}
                <div
                    className="
                      absolute
                      top-[36%]
                      left-[-10%]
                      z-20
                      bg-white
                      rounded-2xl
                      shadow-md
                      px-4
                      py-3
                      text-[16px]
                      whitespace-nowrap
                    "
                  >
                ⭐⭐⭐⭐⭐
                </div>

                  {/* Review Text */}
                  <p className="mt-5 text-[15px] sm:text-[16px] leading-8 text-gray-600">
                    Vivamus at nisl ornare, vulputate turpis finibus,
                    posuere metus. Donec in placerat felis. Praesent
                    ante tellus, dignissim nec imperdiet ac.
                  </p>

                  {/* Reviewer */}
                  <div className="flex items-center gap-4 mt-7">

                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src="/assets/avatar2.jpg"
                        alt="avatar"
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-[16px] sm:text-[18px] font-semibold text-gray-900 leading-none">
                        Cody Fisher
                      </p>

                      <p className="text-[12px] text-gray-500 mt-1">
                        CEO Themesflat
                      </p>
                    </div>

                  </div>
                </div>
              </div>

            ) : (

              /* ================= NORMAL STYLE ================= */
              <div
                className="
                  relative
                  w-full
                  max-w-[620px]
                  h-[420px]
                  sm:h-[520px]
                  lg:h-[620px]
                "
              >

                {/* BACK IMAGE */}
                {images[1] && (
                  <div
                    className="
                      absolute
                      bottom-0
                      right-0
                      w-[72%]
                      h-[72%]
                      rounded-[26px]
                      overflow-hidden
                      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                      z-10
                      group
                    "
                  >
                    <Image
                      src={images[1]}
                      alt="secondary"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div
                      className="
                        absolute inset-0
                        bg-[var(--color-gold)]/10
                        opacity-0
                        group-hover:opacity-100
                        transition-all duration-500
                      "
                    />
                  </div>
                )}

                {/* FRONT IMAGE */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-[72%]
                    h-[72%]
                    rounded-[26px]
                    overflow-hidden
                    shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                    z-20
                    group
                  "
                >
                  <Image
                    src={images[0]}
                    alt="main"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div
                    className="
                      absolute inset-0
                      bg-[var(--color-primary)]/10
                      opacity-0
                      group-hover:opacity-100
                      transition-all duration-500
                    "
                  />
                </div>
              </div>
            )}
          </div>

          {/* CONTENT SIDE */}
          <div
            className={`
              ${isImageLeft ? "lg:order-2" : "lg:order-1"}
              order-2
            `}
          >
            <h2>{title}</h2>

            <p className="mt-5">{description}</p>

            <p className="mt-4">{subText}</p>

            {/* FEATURES */}
            {features && features.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-10">
                {features.map((item, i) => (
                  <div
                    key={i}
                    className="group transition-all duration-300"
                  >
                    <div
                      className="
                        w-16 h-16
                        flex items-center justify-center
                        rounded-2xl
                        bg-[var(--color-lightgold)]/20
                        transition-all duration-300
                        group-hover:bg-[var(--color-gold)]
                        group-hover:-translate-y-1
                      "
                    >
                      <div className="text-[var(--color-primary)] transition-all duration-300 group-hover:text-white">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="mt-4 transition-all duration-300 group-hover:text-[var(--color-gold)]">
                      {item.label}
                    </h3>
                  </div>
                ))}
              </div>
            )}

            {/* BUTTON */}
            {buttonText && (
              <div className="mt-8">
                <button
                  className="
                    btn-primary
                    w-full sm:w-auto
                    transition-all duration-300
                    hover:bg-[var(--color-gold)]
                    hover:text-white
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  {buttonText}
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}