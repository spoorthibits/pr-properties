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
        <div className="relative z-20 max-w-6xl mx-auto px-5">
            <div className="-mt-24 bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
                {/* Logo + Title */}
                <div className="flex flex-col justify-center">

                  <h2 className="mb-3 text-[32px] leading-[40px]">
                    P.R Dream <br/>
                     Properties
                  </h2>

                </div>
                {/* Working Hours */}
                <div>

                  <div className="w-12 h-1 bg-[var(--color-gold)] mb-4"></div>

                  <h3 className="mb-4">
                    Working Hours
                  </h3>

                  <div className="leading-7">

                    <p className="text-[16px]">
                      <span className="font-medium text-[var(--color-primary)]">
                        Week Days :
                      </span>{" "}
                      9:00 AM – 5:00 PM
                    </p>

                    <p className="text-[16px]">
                      <span className="font-medium text-[var(--color-primary)]">
                        Sunday :
                      </span>{" "}
                      Holiday
                    </p>

                  </div>

                </div>
                {/* Contact */}
                <div>

                  <div className="w-12 h-1 bg-[var(--color-gold)] mb-4"></div>

                  <h3 className="mb-4">
                    Say Hello
                  </h3>

                  <p className="mb-3 text-[16px]">
                    pavanarunodaya@gmail.com
                  </p>

                  <p className="mb-3 text-[16px]">
                    +91 9000407673
                  </p>

                </div>
              </div>

            </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16">

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