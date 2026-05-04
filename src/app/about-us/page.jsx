import HeroBanner from "@/components/HomeBanner";
import SplitSection from "@/components/SplitSection";

export default function About() {
  return (
    <div>
      <HeroBanner
  title="About Us"
  subtitle="Learn more about our journey"
  backgroundImage="/assets/about-banner.jpg"
  showSearch={false}
/>

 <SplitSection
                    imagePosition="left"   // 🔥 change to "right" anytime

                    images={[
                        "/assets/img1.jpg",
                        "/assets/img2.jpg",
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
  <SplitSection
      imagePosition="right"   // 🔥 flipped from previous

      images={[
        "/assets/review-main.png",
        "/assets/review-card.png",
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