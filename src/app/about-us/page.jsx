import HeroBanner from "@/components/HomeBanner";
import SplitSection from "@/components/SplitSection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div>

      {/* HERO BANNER */}
      <HeroBanner
        title="About Us"
        subtitle="Learn more about our journey"
        bgImage="/assets/about_banner.jpg"
        showSearch={false}
      />

      {/* FIRST SPLIT SECTION WITH BACKGROUND */}
      <SplitSection
        showBackground={false}

        imagePosition="left"

        images={[
          "/assets/splitImage1.webp",
          "/assets/splitImage2.webp",
        ]}

        title="Benefits when you work at Proty"

        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin ipsum ullamcorper..."

        subText="Proin pharetra rhoncus maximus. Sed est dolor..."

        features={[
          {
            icon: "❤️",
            label: "Health care",
          },
          {
            icon: "💰",
            label: "Attractive salary and bonus",
          },
          {
            icon: "👨‍👩‍👧",
            label: "Family life",
          },
        ]}

        buttonText="Join our team"
      />

      {/* SECOND REVIEW SECTION WITHOUT BACKGROUND */}
      <SplitSection
        imagePosition="right"
        imageStyle="review"
        showBackground={true}

        images={[
          "/assets/about-us.webp",
        ]}

        title="Reviews from employees working at Proty"

        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin ipsum ullamcorper, pulvinar ipsum in, imperdiet ante."

        subText="Proin pharetra rhoncus maximus. Sed est dolor, consectetur eu sagittis a"

        features={[]}

  buttonText="More stories"
/>
    </div>
  );
}