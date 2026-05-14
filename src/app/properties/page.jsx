
"use client";
import { useState } from "react";
import ListingCard from "@/components/ListingCard";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function properties() {
    const [viewColumns, setViewColumns] = useState(3);

    return (
        <>
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
                    <button className="flex items-center justify-between gap-8 px-4 py-2.5 bg-white border border-gray-200 rounded-md text-[#1B304B] font-medium hover:border-[#f09343] transition-colors shadow-sm min-w-[200px]">
                        Sort by (Default)
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </button>
                </div>
            </div>

            {/* Grid of Listing Cards */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${viewColumns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-10`}>
                <ListingCard layout={viewColumns === 2 ? 'list' : 'grid'} />
                <ListingCard layout={viewColumns === 2 ? 'list' : 'grid'} />
                <ListingCard layout={viewColumns === 2 ? 'list' : 'grid'} />
                <ListingCard layout={viewColumns === 2 ? 'list' : 'grid'} />
                <ListingCard layout={viewColumns === 2 ? 'list' : 'grid'} />
                <ListingCard layout={viewColumns === 2 ? 'list' : 'grid'} />
            </div>
            
        </div>
        <Footer/>
        </>
    );
}