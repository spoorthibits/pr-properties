"use client";

import React, { useState } from 'react';
import { Building2, MapPin, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { companies } from '@/data/companies';

export default function CompaniesPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const displayedCompanies = companies.slice(0, visibleCount);

  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO BANNER */}
      <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden flex items-center justify-center font-['Montserrat',sans-serif]">
        <img
          src="/assets/properties_banner.jpg"
          alt="Our Properties Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1D30]/65 z-10"></div>

        <div className="relative z-20 text-center px-4 max-w-3xl">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 font-['Playfair_Display',serif] tracking-wide">
            Our Properties
          </h1>
          <p className="text-white/95 text-base md:text-lg font-medium tracking-wide mb-8">
            Explore a curated collection of premium properties designed to suit every lifestyle and budget from industry-leading companies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg shadow-sm border border-white/10 text-white">
              <Building2 className="w-6 h-6 text-[#f09343]" />
              <div className="text-left">
                <div className="text-2xl font-bold font-['Playfair_Display',serif] text-white">50+</div>
                <div className="text-xs text-white/70">Companies</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg shadow-sm border border-white/10 text-white">
              <Home className="w-6 h-6 text-[#f09343]" />
              <div className="text-left">
                <div className="text-2xl font-bold font-['Playfair_Display',serif] text-white">2,500+</div>
                <div className="text-xs text-white/70">Properties</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="section">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Featured Companies</h2>
              <p style={{ color: 'var(--color-muted)' }}>Top-rated developers with exceptional track records</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {displayedCompanies.map((company) => {
              const isUpcoming = company.upcoming;
              const CardContent = (
                <>
                  {/* Image Container with Cover Photo */}
                  <div className="relative h-44 overflow-hidden w-full bg-gray-100 shrink-0">
                    <img 
                      src={company.coverImage || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop"} 
                      alt={`${company.name} cover`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Subtle dark gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Upcoming Label / Badge */}
                    {isUpcoming && (
                      <div 
                        className="absolute top-3 right-3 text-white font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md z-20"
                        style={{ backgroundColor: 'var(--color-gold)' }}
                      >
                        Upcoming
                      </div>
                    )}

                    {/* Logo overlayed at the bottom left */}
                    <div className="absolute bottom-3 left-4 bg-white  rounded-xl shadow-md border border-gray-100 w-16 h-16 flex items-center justify-center overflow-hidden z-10 transition-transform duration-500 group-hover:scale-105">
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Company Name */}
                      <h3 className="text-lg font-bold text-primary font-['Playfair_Display',serif] mb-2 group-hover:text-gold transition-colors duration-300 line-clamp-1">
                        {company.name}
                      </h3>
                      {/* Description */}
                      <p className="text-xs mb-4 line-clamp-2 leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                        {company.description}
                      </p>
                      
                      {/* Location */}
                      <div className="flex items-center gap-1.5 mb-4 text-xs font-semibold" style={{ color: 'var(--color-muted)' }}>
                        <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span className="line-clamp-1">{company.location}</span>
                      </div>
                    </div>

                    <div>
                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-2 text-center bg-offwhite/50 p-3 rounded-xl mb-4 border border-gray-50/50">
                        <div>
                          <div className="text-sm font-bold text-primary">{company.projects}</div>
                          <div className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider">Projects</div>
                        </div>
                        <div className="border-x border-gray-100">
                          <div className="text-sm font-bold text-primary">{company.properties}</div>
                          <div className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider">Properties</div>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-primary">{company.established}</div>
                          <div className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider">Est.</div>
                        </div>
                      </div>

                      {/* View Projects Link */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                        <span className="text-xs font-bold uppercase tracking-wider text-gold group-hover:text-primary transition-colors duration-300">
                          {isUpcoming ? "Coming Soon" : "View Projects"}
                        </span>
                        {!isUpcoming && (
                          <div className="w-7 h-7 rounded-full bg-offwhite group-hover:bg-gold flex items-center justify-center transition-colors duration-300">
                            <ArrowRight className="w-4 h-4 text-gold group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              );

              if (isUpcoming) {
                return (
                  <div 
                    key={company.id} 
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 flex flex-col h-full relative cursor-default"
                  >
                    {CardContent}
                  </div>
                );
              }

              return (
                <Link 
                  key={company.id} 
                  href={`/companies/${company.id}`}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative"
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>

          {visibleCount < companies.length && (
            <div className="flex justify-center -mt-8 mb-16">
              <button 
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="btn-secondary flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <span>More</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
