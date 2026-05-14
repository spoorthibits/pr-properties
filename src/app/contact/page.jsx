import HeroBanner from "@/components/HomeBanner";
import ContactForm from "@/components/ContactForm";
import SplitSection from "@/components/SplitSection";
import LogoGridSection from "@/components/LogoGridSection";
import Footer from "@/components/Footer";

export default function contact() {
  return (
    <>
      <div>
        <HeroBanner
          title="Contact Us"
          subtitle="We are here to help you anytime."
          bgImage="https://i.pinimg.com/1200x/c7/c9/61/c7c961eabcd61bbbd64956f9096eeaee.jpg"
          
        />
           
        <ContactForm
          title="We Would Love to Hear From You"
          subtitle="We’ll get to know you to understand your selling goals and explain the process."
          buttonText="Contact our experts"
        />
        
        {/* <LogoGridSection 
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
          showFAQ={false}
        /> */}
        <Footer/>
      </div>
    </>
  );
}
