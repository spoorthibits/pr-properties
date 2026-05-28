import React from "react";
import Link from "next/link";
import { 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  ClipboardCheck, 
  MapPin, 
  Award 
} from "lucide-react";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="bg-white min-h-screen font-['Montserrat',sans-serif]">
      {/* HERO BANNER */}
      <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden flex items-center justify-center">
        <img
          src="/assets/about_banner.jpg"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1D30]/65 z-10"></div>

        <div className="relative z-20 text-center px-4 max-w-3xl">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 font-['Playfair_Display',serif] tracking-wide">
            About Us
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium tracking-wide">
            Building trusted spaces for modern living
          </p>
        </div>
      </section>

      {/* SECTION 1: WHO WE ARE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Overlapping Collage */}
            <div className="relative w-full max-w-[500px] h-[480px] md:h-[520px] mx-auto">
              {/* Top Left Image */}
              <div className="absolute top-0 left-0 w-[72%] h-[320px] md:h-[350px] rounded-[20px] overflow-hidden shadow-lg z-10">
                <img
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop&q=80"
                  alt="Bedroom interior design"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom Right Image */}
              <div className="absolute bottom-0 right-0 w-[72%] h-[320px] md:h-[350px] rounded-[20px] overflow-hidden shadow-2xl z-20 border-[8px] border-white">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&q=80"
                  alt="Living room with coffee table"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Text & Features */}
            <div className="flex flex-col">
              <span className="text-[#f09343] text-[13px] font-bold tracking-widest uppercase mb-2">
                WHO WE ARE
              </span>
              <h2 className="text-[#1B304B] font-['Playfair_Display',serif] text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 font-normal">
                At Dream Properties, we believe every property represents more than just a space — it represents a future, a dream, and a new beginning.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 font-normal">
                With a strong understanding of the real estate market and a commitment to transparency, we help clients make confident property decisions. From residential homes to commercial investments, our team provides personalized guidance tailored to every requirement.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 font-normal">
                We focus on building long-term relationships through trust, professionalism, and dedicated service. Our goal is to simplify the buying, selling, and investment journey while delivering value at every step.
              </p>

              {/* Grid Features */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
                <div className="flex flex-col items-center text-center p-2">
                  <div className="w-12 h-12 rounded-xl bg-[#f09343]/10 flex items-center justify-center mb-3">
                    <Shield className="w-6 h-6 text-[#f09343]" />
                  </div>
                  <span className="text-[12px] md:text-sm font-semibold text-[#1B304B] leading-tight">
                    Trusted Guidance
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-2">
                  <div className="w-12 h-12 rounded-xl bg-[#f09343]/10 flex items-center justify-center mb-3">
                    <TrendingUp className="w-6 h-6 text-[#f09343]" />
                  </div>
                  <span className="text-[12px] md:text-sm font-semibold text-[#1B304B] leading-tight">
                    Market Expertise
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-2">
                  <div className="w-12 h-12 rounded-xl bg-[#f09343]/10 flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-[#f09343]" />
                  </div>
                  <span className="text-[12px] md:text-sm font-semibold text-[#1B304B] leading-tight">
                    Client-Focused Service
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href="/companies"
                  className="bg-[#1B304B] hover:bg-[#15263d] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-block shadow-sm text-sm"
                >
                  Explore Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE DREAM PROPERTIES */}
      <section className="py-20 lg:py-24 bg-[#FAF8F2]">
        <div className="container-custom px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Text */}
            <div className="flex flex-col">
              <span className="text-[#f09343] text-[13px] font-bold tracking-widest uppercase mb-2">
                WHY CHOOSE US
              </span>
              <h2 className="text-[#1B304B] font-['Playfair_Display',serif] text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight mb-6">
                Why Choose Dream Properties
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 font-normal">
                We combine local market knowledge with a customer-first approach to deliver a seamless real estate experience.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 font-normal">
                Whether you are purchasing your first home, searching for a premium commercial space, or making a long-term investment, our team is committed to helping you every step of the way.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed font-normal">
                We value honesty, transparency, and attention to detail — ensuring every client receives professional support from inquiry to final transaction.
              </p>
            </div>

            {/* Right Column: Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 rounded-full bg-[#f09343]/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#f09343]" />
                </div>
                <h4 className="text-[#1B304B] font-bold text-sm mb-2">
                  Verified Properties
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed font-normal">
                  All our listings are carefully verified for quality and authenticity.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 rounded-full bg-[#f09343]/10 flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-5 h-5 text-[#f09343]" />
                </div>
                <h4 className="text-[#1B304B] font-bold text-sm mb-2">
                  Transparent Process
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed font-normal">
                  Clear communication and honest dealings at every step.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 rounded-full bg-[#f09343]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-[#f09343]" />
                </div>
                <h4 className="text-[#1B304B] font-bold text-sm mb-2">
                  Prime Locations
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed font-normal">
                  Curated properties in the most sought-after neighborhoods.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100/50 hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 rounded-full bg-[#f09343]/10 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-[#f09343]" />
                </div>
                <h4 className="text-[#1B304B] font-bold text-sm mb-2">
                  End-to-End Assistance
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed font-normal">
                  From property search to final handover, we're with you all the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR VISION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Text */}
            <div className="flex flex-col">
              <span className="text-[#f09343] text-[13px] font-bold tracking-widest uppercase mb-2">
                OUR VISION
              </span>
              <h2 className="text-[#1B304B] font-['Playfair_Display',serif] text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 font-normal">
                Our vision is to create meaningful real estate experiences by connecting people with spaces that match their lifestyle, goals, and future aspirations.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 font-normal">
                We aim to build communities, create opportunities, and deliver lasting value through quality service and trusted relationships.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="bg-[#1B304B] hover:bg-[#15263d] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-block shadow-sm text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80"
                alt="Modern row houses development"
                className="w-full h-[360px] md:h-[420px] rounded-[24px] overflow-hidden shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer waveBg="#FFFFFF" />
    </div>
  );
}