
"use client";
import { useState } from "react";
import ProjectListingCard from "@/components/ProjectListingCard";
import Link from "next/link";

export default function properties() {
    const [viewColumns, setViewColumns] = useState(3);
    const [sortOption, setSortOption] = useState("default");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const dummyProjects = [
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

    const getBasePrice = (priceRange) => {
        return parseInt(priceRange.replace(/[^0-9-]/g, '').split('-')[0]) || 0;
    };

    const sortedProjects = [...dummyProjects].sort((a, b) => {
        if (sortOption === "price-low") return getBasePrice(a.priceRange) - getBasePrice(b.priceRange);
        if (sortOption === "price-high") return getBasePrice(b.priceRange) - getBasePrice(a.priceRange);
        return 0; // default
    });

    return (
        <div className="container-custom pt-28 pb-10">
            {/* Breadcrumbs */}


            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
                <h1 className="text-3xl md:text-[40px] font-bold text-[#1B304B] font-['Playfair_Display',serif]">
                    Property listing
                </h1>

                {/* Controls */}
                <div className="flex flex-wrap items-center gap-3">
                    {/* Filter Button */}
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-md text-[#1B304B] font-medium hover:border-primary hover:text-primary transition-colors shadow-sm">
                        Filter
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gold" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="4" y1="21" y2="14" /><line x1="4" x2="4" y1="10" y2="3" /><line x1="12" x2="12" y1="21" y2="12" /><line x1="12" x2="12" y1="8" y2="3" /><line x1="20" x2="20" y1="21" y2="16" /><line x1="20" x2="20" y1="12" y2="3" /><line x1="2" x2="6" y1="14" y2="14" /><line x1="10" x2="14" y1="8" y2="8" /><line x1="18" x2="22" y1="16" y2="16" /></svg>
                    </button>

                    {/* View Toggles */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setViewColumns(3)}
                            className={`flex items-center justify-center w-[42px] h-[42px] rounded-md transition-colors shadow-sm ${viewColumns === 3 ? 'bg-primary text-white' : 'bg-white border border-gray-200 text-gray-400 hover:border-primary hover:text-primary'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" /></svg>
                        </button>
                        <button
                            onClick={() => setViewColumns(2)}
                            className={`flex items-center justify-center w-[42px] h-[42px] rounded-md transition-colors shadow-sm ${viewColumns === 2 ? 'bg-primary text-white' : 'bg-white border border-gray-200 text-gray-400 hover:border-primary hover:text-primary'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg>
                        </button>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="flex items-center justify-between gap-8 px-4 py-2.5 bg-white border border-gray-200 rounded-md text-[#1B304B] font-medium hover:border-[#f09343] transition-colors shadow-sm min-w-[200px]"
                        >
                            {sortOption === "default" ? "Sort by (Default)" :
                                sortOption === "price-low" ? "Price (Low to High)" : "Price (High to Low)"}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </button>

                        {isSortOpen && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm transition-colors"
                                    onClick={() => { setSortOption("default"); setIsSortOpen(false); }}
                                >
                                    Default
                                </button>
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm transition-colors"
                                    onClick={() => { setSortOption("price-low"); setIsSortOpen(false); }}
                                >
                                    Price (Low to High)
                                </button>
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm transition-colors"
                                    onClick={() => { setSortOption("price-high"); setIsSortOpen(false); }}
                                >
                                    Price (High to Low)
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Grid of Listing Cards */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${viewColumns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-10`}>
                {sortedProjects.map((project) => (
                    <ProjectListingCard
                        key={project.id}
                        project={project}
                        companyId={1}
                        layout={viewColumns === 2 ? 'list' : 'grid'}
                    />
                ))}
            </div>
        </div>
    );
}