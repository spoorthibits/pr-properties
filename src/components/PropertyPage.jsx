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
            completionDate: "Completed",
            description: "Modern apartments designed for contemporary urban lifestyle",
            featured: false,
            type: "Residential"
        }
    ];

    const sortedProjects = [...dummyProjects];

    return (
        <div className="container-custom pt-28 pb-10">

            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
                <h1 className="text-3xl md:text-[40px] font-bold text-[#1B304B] font-['Playfair_Display',serif]">
                    Property listing
                </h1>

                <div className="flex flex-wrap items-center gap-3">

                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-md text-[#1B304B] font-medium hover:border-primary hover:text-primary transition-colors shadow-sm">
                        Filter
                    </button>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setViewColumns(3)}
                            className={`flex items-center justify-center w-[42px] h-[42px] rounded-md transition-colors shadow-sm ${viewColumns === 3 ? 'bg-primary text-white' : 'bg-white border border-gray-200 text-gray-400'}`}>
                            Grid
                        </button>

                        <button
                            onClick={() => setViewColumns(2)}
                            className={`flex items-center justify-center w-[42px] h-[42px] rounded-md transition-colors shadow-sm ${viewColumns === 2 ? 'bg-primary text-white' : 'bg-white border border-gray-200 text-gray-400'}`}>
                            List
                        </button>
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="flex items-center justify-between gap-8 px-4 py-2.5 bg-white border border-gray-200 rounded-md"
                        >
                            Sort by (Default)
                        </button>
                    </div>

                </div>
            </div>

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