import Image from "next/image";
import HeroBanner from "@/components/HomeBanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <div className="relative">

        {/* Hero Banner */}
        <HeroBanner
          title="Get in Touch"
          subtitle="We’re here to provide trusted advice and tailored solutions for all your real estate needs."
          bgImage="https://i.pinimg.com/1200x/c7/c9/61/c7c961eabcd61bbbd64956f9096eeaee.jpg"
        />

        {/* Overlap Card */}
      

        {/* Contact Form */}
        <div className="mt-8 md:mt-12">

          <ContactForm
            title="We Would Love to Hear From You"
            subtitle="Share your requirements with us and our experts will help you find the perfect property solution."
            buttonText="Contact our experts"
          />

        </div>


        {/* Footer */}
        <Footer />

      </div>
    </>
  );
}