import React from 'react';
import { Building2, MapPin, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { companies } from '@/data/companies';

export default function CompaniesPage() {
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
            {companies.filter(c => c.featured).map((company) => (
              <Link 
                key={company.id} 
                href={`/companies/${company.id}`}
                className="card group cursor-pointer transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <span>⭐</span>
                    <span>{company.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 group-hover:text-gold transition-colors">{company.name}</h3>
                  <p className="text-sm mb-4 line-clamp-2">{company.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: 'var(--color-muted)' }}>
                    <MapPin className="w-4 h-4" />
                    <span>{company.location}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{company.projects}</div>
                      <div className="text-xs" style={{ color: 'var(--color-muted)' }}>Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{company.properties}</div>
                      <div className="text-xs" style={{ color: 'var(--color-muted)' }}>Properties</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{company.established}</div>
                      <div className="text-xs" style={{ color: 'var(--color-muted)' }}>Est.</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium" style={{ color: 'var(--color-gold)' }}>View Projects</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" style={{ color: 'var(--color-gold)' }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* All Companies */}
          <div className="mb-8">
            <h2 className="mb-6">All Companies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.filter(c => !c.featured).map((company) => (
              <Link 
                key={company.id} 
                href={`/companies/${company.id}`}
                className="card group cursor-pointer transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <span>⭐</span>
                    <span>{company.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 group-hover:text-gold transition-colors">{company.name}</h3>
                  <p className="text-sm mb-4 line-clamp-2">{company.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: 'var(--color-muted)' }}>
                    <MapPin className="w-4 h-4" />
                    <span>{company.location}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{company.projects}</div>
                      <div className="text-xs" style={{ color: 'var(--color-muted)' }}>Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{company.properties}</div>
                      <div className="text-xs" style={{ color: 'var(--color-muted)' }}>Properties</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>{company.established}</div>
                      <div className="text-xs" style={{ color: 'var(--color-muted)' }}>Est.</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium" style={{ color: 'var(--color-gold)' }}>View Projects</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" style={{ color: 'var(--color-gold)' }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
