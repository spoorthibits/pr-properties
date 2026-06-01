import React from 'react';
import { Building2, MapPin, Home, ArrowRight, Calendar, TrendingUp, Star, Phone, Mail, Globe } from 'lucide-react';
import Link from 'next/link';
import ProjectListingCard from './ProjectListingCard';
import PropertyPage from './PropertyPage';
import { companies } from '@/data/companies';
import { properties } from '@/data/properties';
import Footer from './Footer';

export default function CompanyProjectsPage({ companyId }) {
  const company = companies.find(c => c.id === companyId) || companies[0];

  if (company.upcoming) {
    return (
      <div className="bg-[#0F1D30] min-h-screen flex items-center justify-center font-['Montserrat',sans-serif] px-4">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f09343]/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#1B304B]/20 rounded-full blur-2xl"></div>
          
          {company.logo && (
            <div className="mx-auto bg-white p-2 rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg border border-white/10 mb-6">
              <img src={company.logo} alt={company.name} className="w-full h-full object-contain rounded-lg" />
            </div>
          )}
          
          <h2 className="text-white text-2xl md:text-3xl font-bold font-['Playfair_Display',serif] mb-3">
            {company.name}
          </h2>
          
          <div 
            className="inline-block text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full uppercase mb-6 shadow-sm"
            style={{ backgroundColor: 'var(--color-gold)' }}
          >
            Coming Soon
          </div>
          
          <p className="text-white/70 text-sm leading-relaxed mb-8">
            We are working on bringing you exclusive premium ventures and properties from {company.name}. Stay tuned for updates!
          </p>
          
          <Link 
            href="/companies" 
            className="inline-block w-full py-3 rounded-full text-sm font-semibold transition-all duration-300 text-white border border-[#C5A880] hover:bg-[#C5A880]/10"
          >
            Back to Companies
          </Link>
        </div>
      </div>
    );
  }

  // Calculate dynamic stats to display (we always display exactly 3 stats to maintain balance)
  const propsCount = company.properties !== undefined ? company.properties : (properties.filter(p => p.companyId === company.id).length || 2);

  const statsList = [
    {
      value: propsCount,
      label: "Properties Listed",
      icon: <Home className="w-6 h-6 text-[#B89454]" />,
      bg: "bg-amber-50"
    },
    {
      value: company.established || "2018",
      label: "Established Since",
      icon: <Calendar className="w-6 h-6 text-[#1B304B]" />,
      bg: "bg-blue-50"
    },
    company.experience ? {
      value: company.experience,
      label: "Experience",
      icon: <TrendingUp className="w-6 h-6 text-[#B89454]" />,
      bg: "bg-amber-50"
    } : {
      value: company.rating ? `${company.rating} ★` : "Top Rated",
      label: company.rating ? "Customer Rating" : "Market Standing",
      icon: company.rating ? <Star className="w-6 h-6 fill-[#B89454] text-[#B89454]" /> : <TrendingUp className="w-6 h-6 text-[#B89454]" />,
      bg: "bg-amber-50"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
     

      {/* Company Hero */}
      <section className="relative h-[420px] sm:h-[480px] md:h-[530px] overflow-hidden">
        <img 
          src={company.coverImage} 
          alt={company.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row items-center sm:items-end text-center sm:text-left gap-4 sm:gap-6">
              {/* Premium Logo Container with Matching Border Radius & Object-Contain */}
              <div className="bg-white p-2 rounded-2xl w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center shadow-xl border-4 border-white shrink-0">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div className="text-white pb-2 flex-1">
                <h1 className="text-white mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-['Playfair_Display',serif]">
                  {company.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 mb-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 sm:w-5 h-5 text-[#f09343] shrink-0" />
                    <span>{company.location}</span>
                  </div>

                  {company.established && (
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Calendar className="w-4 h-4 sm:w-5 h-5 text-[#f09343] shrink-0" />
                      <span>Est. {company.established}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info & Stats */}
      <section className="section" style={{ backgroundColor: 'var(--color-offwhite)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* About */}
            <div className="lg:col-span-2">
              <h2 className="mb-4">About {company.name}</h2>
              <p className="mb-6">{company.description}</p>
              
              {/* Interactive Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {statsList.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#1B304B] font-['Playfair_Display',serif] leading-none">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 font-semibold tracking-wide uppercase mt-1.5">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Interactive Contact Info Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-fit">
              <h3 className="mb-6 pb-2 border-b border-gray-100 font-['Playfair_Display',serif] text-xl font-bold text-[#1B304B]">
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#B89454]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Phone</div>
                    <a href={`tel:${company.phone}`} className="font-semibold text-[#1B304B] hover:text-[#B89454] transition-colors text-sm">
                      {company.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#B89454]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Email</div>
                    <a href={`mailto:${company.email}`} className="font-semibold text-[#1B304B] hover:text-[#B89454] transition-colors text-sm break-all">
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-8 py-3.5 px-6 bg-[#B89454] hover:bg-[#A38044] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-sm">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listing */}
      <PropertyPage companyId={company.id} isCompanyPage={true} />
      <Footer/>
    </div>
  );
}
