import React from 'react';
import { Building2, MapPin, Home, ArrowRight, Calendar, TrendingUp, Star, Phone, Mail, Globe } from 'lucide-react';
import Link from 'next/link';
import ProjectListingCard from './ProjectListingCard';
import PropertyPage from './PropertyPage';

export default function CompanyProjectsPage() {
  // This would come from API/database based on company ID
  const company = {
    id: 1,
    name: "Skyline Developers",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=600&fit=crop",
    description: "Skyline Developers has been at the forefront of luxury real estate development since 2010. We specialize in creating premium residential and commercial spaces that combine innovative design with sustainable practices.",
    projects: 12,
    properties: 450,
    location: "New York, NY",
    established: "2010",
    rating: 4.8,
    phone: "+1 (555) 123-4567",
    email: "info@skylinedevelopers.com",
    website: "www.skylinedevelopers.com"
  };

  const projects = [
    {
      id: 1,
      name: "Brooklyn Heights Residences",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      location: "102 Ingraham St, Brooklyn, NY 11237",
      status: "Available",
      properties: 45,
      priceRange: "$8,600 - $15,000",
      completionDate: "Dec 2024",
      description: "Luxury waterfront living with stunning views and modern amenities",
      featured: true,
      type: "Residential"
    },
    {
      id: 2,
      name: "Manhattan Skyview Tower",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      location: "456 Park Avenue, Manhattan, NY 10022",
      status: "Under Construction",
      properties: 120,
      priceRange: "$12,000 - $25,000",
      completionDate: "Jun 2025",
      description: "Premium high-rise apartments in the heart of Manhattan",
      featured: true,
      type: "Residential"
    },
    {
      id: 3,
      name: "Queens Garden Estates",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      location: "789 Forest Ave, Queens, NY 11375",
      status: "Available",
      properties: 65,
      priceRange: "$6,500 - $11,000",
      completionDate: "Completed",
      description: "Eco-friendly homes surrounded by lush greenery and parks",
      featured: false,
      type: "Residential"
    },
    {
      id: 4,
      name: "Downtown Business Hub",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      location: "321 Wall Street, Manhattan, NY 10005",
      status: "Pre-Launch",
      properties: 80,
      priceRange: "$15,000 - $35,000",
      completionDate: "Sep 2025",
      description: "State-of-the-art commercial spaces for modern businesses",
      featured: true,
      type: "Commercial"
    },
    {
      id: 5,
      name: "Riverside Luxury Villas",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      location: "555 River Road, Jersey City, NJ 07302",
      status: "Available",
      properties: 30,
      priceRange: "$18,000 - $30,000",
      completionDate: "Completed",
      description: "Exclusive waterfront villas with private pools and gardens",
      featured: false,
      type: "Residential"
    },
    {
      id: 6,
      name: "Urban Living Complex",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
      location: "234 Broadway, Brooklyn, NY 11211",
      status: "Available",
      properties: 95,
      priceRange: "$7,000 - $13,500",
      completionDate: "Completed",
      description: "Modern apartments designed for contemporary urban lifestyle",
      featured: false,
      type: "Residential"
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Available': return 'bg-green-100 text-green-700';
      case 'Under Construction': return 'bg-yellow-100 text-yellow-700';
      case 'Pre-Launch': return 'bg-blue-100 text-blue-700';
      case 'Completed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

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
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span>{company.rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Est. {company.established}</span>
                  </div>
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
                  <TrendingUp className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--color-gold)' }} />
                  <div className="text-sm" style={{ color: 'var(--color-muted)' }}>Top Rated</div>
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
      <PropertyPage />
    </div>
  );
}
