import HeroBanner from "@/components/HomeBanner";
import ContactForm from "@/components/ContactForm";
import SplitSection from "@/components/SplitSection";
import LogoGridSection from "@/components/LogoGridSection";

export default function contact() {
return (
    <>
    <div >
           <HeroBanner
          title="Contact Us"
          subtitle="Learn more about our journey"
          backgroundImage="/assets/ContactUs-banner.jpg"
          showSearch={false}
        />
        <ContactForm
      title="We Would Love to Hear From You"
      subtitle="We’ll get to know you to understand your selling goals and explain the process."
      buttonText="Contact our experts"
    />
    <SplitSection
                        imagePosition="left"   // 🔥 change to "right" anytime
    
                        images={[
                            "/assets/img1.jpg",
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
      <LogoGridSection
  title="Let’s Work Together"
  subtitle="Thousands of luxury home enthusiasts just like you visit our website."
  logos={[
    "/assets/logo1.png",
    "/assets/logo2.png",
    "/assets/logo3.png",
    "/assets/logo4.png",
    "/assets/logo5.png",
    "/assets/logo6.png",
    "/assets/logo7.png",
    "/assets/logo8.png",
  ]}
     />
    </div>
    </>
);
}