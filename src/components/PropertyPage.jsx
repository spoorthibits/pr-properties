"use client";
import { useState } from "react";
import ProjectListingCard from "@/components/ProjectListingCard";
import Link from "next/link";
import { properties } from "@/data/properties";
import { companies } from "@/data/companies";

export default function PropertyPage({ showBanner = false, companyId }) {
    const [viewColumns, setViewColumns] = useState(3);
    const [sortOption, setSortOption] = useState("default");
    const [isSortOpen, setIsSortOpen] = useState(false);

    // Get properties for the current company or all properties
    const getProperties = () => {
        if (companyId) {
            const list = properties.filter(p => p.companyId === companyId);
            if (list.length > 0) return list;
            
            // Dynamic fallback properties for other companies so they never look empty!
            const comp = companies.find(c => c.id === companyId);
            if (!comp) return [];
            
            return [
                {
                    id: companyId * 1000 + 1,
                    companyId: companyId,
                    name: `${comp.name.trim()} Venture I`,
                    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
                    location: comp.location,
                    status: "Available",
                    properties: 45,
                    priceRange: "₹12,500 per sq yard",
                    completionDate: "Ready to Move",
                    description: `Premium plotted development by ${comp.name.trim()} located in prime corridor of ${comp.location}. Fully developed with modern amenities.`,
                    featured: true,
                    type: "Residential Open Plots"
                },
                {
                    id: companyId * 1000 + 2,
                    companyId: companyId,
                    name: `${comp.name.trim()} Meadows`,
                    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
                    location: comp.location,
                    status: "Under Construction",
                    properties: 80,
                    priceRange: "₹15,000 per sq yard",
                    completionDate: "Jun 2027",
                    description: `Modern gated community by ${comp.name.trim()} with premium facilities, landscaped parks, and direct highway connectivity.`,
                    featured: false,
                    type: "Premium Gated Venture"
                }
            ];
        }
        return properties;
    };

    const currentProperties = getProperties();

    const getBasePrice = (priceRange) => {
        const firstPart = priceRange.split('-')[0];
        return parseInt(firstPart.replace(/[^0-9]/g, ''), 10) || 0;
    };

    const sortedProjects = [...currentProperties].sort((a, b) => {
        if (sortOption === "price-low") return getBasePrice(a.priceRange) - getBasePrice(b.priceRange);
        if (sortOption === "price-high") return getBasePrice(b.priceRange) - getBasePrice(a.priceRange);
        return 0; // default
    });

    return (
        <div className="bg-white min-h-screen font-['Montserrat',sans-serif]">
            <div className={`container-custom pb-10 ${showBanner ? 'py-16' : 'pt-28'}`}>
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-b border-gray-100 pb-4">
                    {!showBanner && (
                        <h1 className="text-3xl md:text-[40px] font-bold text-[#1B304B] font-['Playfair_Display',serif]">
                            Properties
                        </h1>
                    )}

                    {/* Controls */}
                    <div className="flex items-center gap-3">
                        {/* View Toggles */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setViewColumns(3)}
                                className={`flex items-center justify-center w-[42px] h-[42px] rounded-lg transition-colors shadow-sm cursor-pointer ${
                                    viewColumns === 3 
                                        ? 'bg-[#1B304B] text-white' 
                                        : 'bg-white border border-gray-200 text-gray-400 hover:text-[#1B304B]'
                                }`}
                                aria-label="Grid View"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" />
                                </svg>
                            </button>

                            <button
                                onClick={() => setViewColumns(2)}
                                className={`flex items-center justify-center w-[42px] h-[42px] rounded-lg transition-colors shadow-sm cursor-pointer ${
                                    viewColumns === 2 
                                        ? 'bg-[#1B304B] text-white' 
                                        : 'bg-white border border-gray-200 text-gray-400 hover:text-[#1B304B]'
                                }`}
                                aria-label="List View"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="8" x2="21" y1="6" y2="6" />
                                    <line x1="8" x2="21" y1="12" y2="12" />
                                    <line x1="8" x2="21" y1="18" y2="18" />
                                    <line x1="3" x2="3.01" y1="6" y2="6" />
                                    <line x1="3" x2="3.01" y1="12" y2="12" />
                                    <line x1="3" x2="3.01" y1="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsSortOpen(!isSortOpen)}
                                className="flex items-center justify-between gap-6 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[#1B304B] font-medium hover:border-gray-300 transition-colors shadow-sm min-w-[200px] cursor-pointer"
                            >
                                <span className="text-sm">
                                    {sortOption === "default" ? "Sort by (Default)" :
                                     sortOption === "price-low" ? "Price (Low to High)" : "Price (High to Low)"}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            {isSortOpen && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                                    <button
                                        className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-[#1B304B] transition-colors cursor-pointer"
                                        onClick={() => { setSortOption("default"); setIsSortOpen(false); }}
                                    >
                                        Default
                                    </button>
                                    <button
                                        className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-[#1B304B] transition-colors cursor-pointer"
                                        onClick={() => { setSortOption("price-low"); setIsSortOpen(false); }}
                                    >
                                        Price (Low to High)
                                    </button>
                                    <button
                                        className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-[#1B304B] transition-colors cursor-pointer"
                                        onClick={() => { setSortOption("price-high"); setIsSortOpen(false); }}
                                    >
                                        Price (High to Low)
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 ${viewColumns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-10`}>
                    {sortedProjects.map((project) => (
                        <ProjectListingCard
                            key={project.id}
                            project={project}
                            companyId={project.companyId}
                            layout={viewColumns === 2 ? 'list' : 'grid'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}