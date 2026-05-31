import React from 'react';
import { Building2, MapPin, Home, ArrowRight, Calendar, TrendingUp, Star, Phone, Mail, Globe } from 'lucide-react';
import Link from 'next/link';
import ProjectListingCard from './ProjectListingCard';
import PropertyPage from './PropertyPage';
import { companies } from '@/data/companies';

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

  return (
    <div className="bg-white min-h-screen">
     

      {/* Company Hero */}
      <section className="relative h-[530px] overflow-hidden">
        <img 
          src={company.coverImage} 
          alt={company.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-custom">
            <div className="flex items-end gap-6">
              <img 
                src={company.logo} 
                alt={company.name}
                className="w-32 h-32 rounded-xl border-4 border-white shadow-xl object-cover"
              />
              <div className="text-white pb-2 flex-1">
                <h1 className="text-white mb-2">{company.name}</h1>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#f09343]" />
                    <span>{company.location}</span>
                  </div>

                  {company.established && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#f09343]" />
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
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-primary)' }}>{company.projects}</div>
                  <div className="text-sm" style={{ color: 'var(--color-muted)' }}>Total Projects</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-primary)' }}>{company.properties}</div>
                  <div className="text-sm" style={{ color: 'var(--color-muted)' }}>Properties</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  {company.experience ? (
                    <>
                      <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-primary)' }}>{company.experience}</div>
                      <div className="text-sm" style={{ color: 'var(--color-muted)' }}>Experience</div>
                    </>
                  ) : (
                    <>
                      <TrendingUp className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--color-gold)' }} />
                      <div className="text-sm" style={{ color: 'var(--color-muted)' }}>Top Rated</div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-8 rounded-xl shadow-sm h-fit">
              <h3 className="mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1" style={{ color: 'var(--color-gold)' }} />
                  <div>
                    <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-muted)' }}>Phone</div>
                    <div className="font-medium">{company.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1" style={{ color: 'var(--color-gold)' }} />
                  <div>
                    <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-muted)' }}>Email</div>
                    <div className="font-medium">{company.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 mt-1" style={{ color: 'var(--color-gold)' }} />
                  <div>
                    <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-muted)' }}>Website</div>
                    <div className="font-medium">{company.website}</div>
                  </div>
                </div>
              </div>
              <button className="btn-secondary w-full mt-6">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listing */}
      <PropertyPage companyId={company.id} />
    </div>
  );
}
