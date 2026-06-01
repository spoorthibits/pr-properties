import React from "react";
import Footer from "@/components/Footer";
import SplitSection from "@/components/SplitSection";
import HeroBanner from "@/components/HomeBanner";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function About() {
  return (
    <div className="bg-white min-h-screen font-['Montserrat',sans-serif]">
      <HeroBanner
        title="About Us"
        subtitle="Building trusted spaces for modern living"
        bgImage="/assets/about_banner.jpg"
      />

      <SplitSection
        imagePosition="left"
        images={["/assets/splitImage1.webp", "/assets/splitImage2.webp"]}
        title="Who We Are"
        description="At Dream Properties, we believe every property represents more than just a space — it represents a future, a dream, and a new beginning."
        subText={[
          "With a strong understanding of the real estate market and a commitment to transparency, we help clients make confident property decisions.",
          "We focus on building long-term relationships through trust, professionalism, and dedicated service.",
        ]}
        features={[
          {
            icon: "shield",
            text: "Trusted Guidance",
          },
          {
            icon: "trending",
            text: "Market Expertise",
          },
          {
            icon: "users",
            text: "Client-Focused Service",
          },
        ]}
        buttonText="Explore Properties"
        buttonHref="/properties"
        showBackground={false}
      />
      <WhyChooseUs />
      <SplitSection
        imagePosition="right"
        imageStyle="single"
        images={["/assets/vision-house.jpg"]}
        // eyebrow="Our Vision"
        title="Our Vision"
        description="Our vision is to create meaningful real estate experiences by connecting people with spaces that match their lifestyle, goals, and future aspirations."
        subText="We aim to build communities, create opportunities, and deliver lasting value through quality service and trusted relationships."
        buttonText="Contact Us"
        buttonHref="/contact"
        showBackground={false}
      />

      {/* FOOTER */}
      <Footer waveBg="#FFFFFF" />
    </div>
  );
}
