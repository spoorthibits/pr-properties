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
  showBackground = false,
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section
      className={`
        section
        relative
        overflow-hidden
        ${showBackground ? "bg-[#F7F6F2]" : "bg-white"}
      `}
      style={
        showBackground
          ? {
              backgroundImage: `
                linear-gradient(rgba(27,48,75,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(27,48,75,0.06) 1px, transparent 1px)
              `,
              backgroundSize: "52px 52px",
            }
          : {}
      }
    >

      {/* ── MOBILE REVIEW FIXES ── */}
      <style>{`
        @media (max-width: 320px) {

          .review-wrapper {
            padding-top: 6px;
            padding-bottom: 32px;
          }

          .review-person {
            width: 50%;
          }

          .review-profile-card {
            top: 26%;
            left: -4px;
            min-width: 106px;
            padding: 5px 6px;
            gap: 5px;
          }

          .review-profile-card .avatar {
            width: 26px;
            height: 26px;
          }

          .review-profile-card .name {
            font-size: 10px;
          }

          .review-profile-card .role {
            font-size: 9px;
            margin-top: 2px;
          }

          .review-stars-badge {
            top: 50%;
            right: 3%;
            padding: 5px 8px;
            font-size: 10px;
          }

          .review-bottom-card {
            margin-top: 8px;
            padding: 14px;
          }

          .features-mobile {
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }

          .feature-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .feature-box h3 {
            font-size: 14px;
            line-height: 20px;
          }

          .mobile-center {
            text-align: center;
          }
        }
      `}</style>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================= IMAGE SIDE ================= */}
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

                {/* TOP SECTION */}
                <div className="review-wrapper relative w-full pt-4 pb-10 sm:pt-0 sm:pb-6">

                  {/* Circle */}
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

                  {/* PERSON */}
                  <div
                    className="
                      review-person
                      relative
                      z-10
                      mx-auto
                      w-[54%]
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

                  {/* PROFILE CARD */}
                  <div
                    className="
                      review-profile-card
                      absolute
                      top-[26%]
                      left-[2%]
                      sm:top-[10%]
                      sm:left-[0%]

                      z-30
                      bg-white
                      rounded-2xl
                      shadow-lg

                      px-2
                      sm:px-4

                      py-2
                      sm:py-3

                      flex
                      items-center
                      gap-2
                      sm:gap-3

                      min-w-[120px]
                      sm:min-w-[220px]
                    "
                  >

                    <div className="avatar w-8 h-8 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src="/assets/user-profile.avif"
                        alt="avatar"
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="name text-[11px] sm:text-[18px] font-semibold text-gray-900 leading-none">
                        Cody Fisher
                      </p>

                      <p className="role text-[10px] sm:text-[12px] text-gray-500 mt-1">
                        CEO Themesflat
                      </p>
                    </div>
                  </div>

                  {/* STARS BADGE */}
                  <div
                    className="
                      review-stars-badge
                      absolute
                      top-[45%]
                      right-[2%]

                      sm:top-[42%]
                      sm:right-[-4%]

                      z-20
                      bg-white
                      rounded-2xl
                      shadow-md

                      px-2
                      sm:px-4

                      py-2
                      sm:py-3

                      text-[11px]
                      sm:text-[16px]

                      whitespace-nowrap
                    "
                  >
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>

                {/* REVIEW CARD */}
                <div
                  className="
                    review-bottom-card
                    relative
                    z-20
                    bg-white
                    rounded-[26px]
                    shadow-xl

                    p-5
                    sm:p-8

                    w-full

                    mt-4
                    sm:-mt-14
                  "
                >

                  <div className="text-[16px] sm:text-[18px]">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] leading-8 text-gray-600">
                    Vivamus at nisl ornare, vulputate turpis finibus,
                    posuere metus. Donec in placerat felis. Praesent
                    ante tellus, dignissim nec imperdiet ac.
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-7">

                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src="/assets/user_profile2.avif"
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

                      <p className="text-[11px] sm:text-[12px] text-gray-500 mt-1">
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

                  h-[260px]
                  sm:h-[420px]
                  lg:h-[620px]

                  mx-auto
                "
              >

                {/* BACK IMAGE */}
                {images[1] && (
                  <div
                    className="
                      absolute

                      bottom-0
                      right-2
                      sm:right-0

                      w-[68%]
                      sm:w-[72%]

                      h-[62%]
                      sm:h-[72%]

                      rounded-[22px]
                      sm:rounded-[26px]

                      overflow-hidden

                      shadow-[0_20px_60px_rgba(0,0,0,0.10)]

                      z-10
                      group

                      transition-all
                      duration-500
                    "
                  >
                    <Image
                      src={images[1]}
                      alt="secondary"
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
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

                    w-[68%]
                    sm:w-[72%]

                    h-[62%]
                    sm:h-[72%]

                    rounded-[22px]
                    sm:rounded-[26px]

                    overflow-hidden

                    shadow-[0_24px_70px_rgba(0,0,0,0.14)]

                    z-20
                    group

                    transition-all
                    duration-500
                  "
                >
                  <Image
                    src={images[0]}
                    alt="main"
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
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

          {/* ================= CONTENT SIDE ================= */}
          <div
            className={`
              ${isImageLeft ? "lg:order-2" : "lg:order-1"}
              order-2
              max-[768px]:text-center
            `}
          >

            <h2 className="mobile-center">
              {title}
            </h2>

            <p className="mt-5 mobile-center">
              {description}
            </p>

            <p className="mt-4 mobile-center">
              {subText}
            </p>

            {/* FEATURES */}
            {features && features.length > 0 && (
              <div className="features-mobile grid grid-cols-2 sm:grid-cols-3 gap-8 mt-10">

                {features.map((item, i) => (
                  <div
                    key={i}
                    className="
                      feature-box
                      group
                      transition-all
                      duration-300
                    "
                  >

                    {/* ICON BOX */}
                    <div
                      className="
                        w-16 h-16
                        flex items-center justify-center
                        mx-auto

                        rounded-2xl
                        bg-[var(--color-lightgold)]/20

                        transition-all duration-300

                        group-hover:bg-[var(--color-gold)]
                        group-hover:-translate-y-1
                      "
                    >
                      <div
                        className="
                          text-[var(--color-primary)]
                          transition-all duration-300
                          group-hover:text-white
                        "
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        mt-4
                        text-center
                        transition-all duration-300
                        group-hover:text-[var(--color-gold)]
                      "
                    >
                      {item.label}
                    </h3>
                  </div>
                ))}
              </div>
            )}

            {/* BUTTON */}
            {buttonText && (
              <div className="mt-8 max-[768px]:flex max-[768px]:justify-center">

                <button
                  className="
                    btn-primary
                    w-full sm:w-auto

                    transition-all
                    duration-300

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