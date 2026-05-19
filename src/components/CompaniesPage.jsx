import React from 'react';
import { Building2, MapPin, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CompaniesPage() {
  const companies = [
    {
      id: 1,
      name: "Skyline Developers",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop",
      description: "Premium luxury residences and commercial spaces across major metropolitan areas",
      projects: 12,
      properties: 450,
      location: "New York, NY",
      established: "2010",
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      name: "Urban Living Properties",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop",
      description: "Modern urban apartments and condominiums for contemporary lifestyle",
      projects: 8,
      properties: 320,
      location: "Brooklyn, NY",
      established: "2015",
      rating: 4.6,
      featured: true
    },
    {
      id: 3,
      name: "Green Valley Estates",
      logo: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop",
      description: "Sustainable living communities with eco-friendly homes and amenities",
      projects: 15,
      properties: 580,
      location: "Queens, NY",
      established: "2008",
      rating: 4.9,
      featured: false
    },
    {
      id: 4,
      name: "Prestige Realty Group",
      logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=200&fit=crop",
      description: "High-end luxury estates and penthouses for discerning clients",
      projects: 6,
      properties: 180,
      location: "Manhattan, NY",
      established: "2012",
      rating: 4.7,
      featured: true
    },
    {
      id: 5,
      name: "Riverside Constructions",
      logo: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=200&h=200&fit=crop",
      description: "Waterfront properties and scenic residential developments",
      projects: 10,
      properties: 420,
      location: "Jersey City, NJ",
      established: "2013",
      rating: 4.5,
      featured: false
    },
    {
      id: 6,
      name: "Metropolitan Homes",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop",
      description: "Affordable housing solutions with quality construction and amenities",
      projects: 20,
      properties: 750,
      location: "Bronx, NY",
      established: "2005",
      rating: 4.4,
      featured: false
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-offwhite)' }}>
        <div className="container-custom text-center">
          <h1 className="mb-6">Trusted Real Estate Companies</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Explore our network of premium real estate developers and find your perfect property from industry-leading companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-sm">
              <Building2 className="w-6 h-6" style={{ color: 'var(--color-gold)' }} />
              <div className="text-left">
                <div className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-primary)' }}>50+</div>
                <div className="text-sm" style={{ color: 'var(--color-muted)' }}>Companies</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-sm">
              <Home className="w-6 h-6" style={{ color: 'var(--color-gold)' }} />
              <div className="text-left">
                <div className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-primary)' }}>2,500+</div>
                <div className="text-sm" style={{ color: 'var(--color-muted)' }}>Properties</div>
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
