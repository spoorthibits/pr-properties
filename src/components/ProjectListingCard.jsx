import React from 'react';
import Link from 'next/link';

const ProjectListingCard = ({ project, companyId, layout = 'grid' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden group font-['Montserrat',sans-serif] flex ${layout === 'list' ? 'flex-col sm:flex-row w-full' : 'flex-col w-full'} hover:shadow-2xl transition-all duration-300 border border-gray-100`}>
      {/* Image Container */}
      <div className={`relative overflow-hidden ${layout === 'list' ? 'w-full sm:w-[40%] h-[250px] sm:h-auto shrink-0' : 'w-full h-[230px]'}`}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {project.type && (
            <span className="bg-primary/95 text-white text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-md shadow-sm">
              {project.type}
            </span>
          )}
          {project.status && (
            <span className="bg-gold/95 text-white text-[10px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-md shadow-sm w-fit">
              {project.status}
            </span>
          )}
        </div>

        {/* Top to Bottom Sliding Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 transition-transform duration-300 ease-in-out -translate-y-full group-hover:translate-y-0 z-20">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#f09343] hover:bg-[#f09343] hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#f09343] hover:bg-[#f09343] hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
              <path d="M11 8v6" />
              <path d="M8 11h6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className={`p-6 flex flex-col flex-1 ${layout === 'list' ? 'sm:p-8' : ''}`}>
        <h3 className="text-xl font-bold text-primary font-['Playfair_Display',serif] mb-2 group-hover:text-gold transition-colors line-clamp-1">
          {project.name}
        </h3>

        <div className="flex items-center text-gray-500 text-sm mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2 shrink-0 text-gold">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="line-clamp-1">{project.location}</span>
        </div>

        <p className="text-sm mb-4 line-clamp-2 leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          {project.description}
        </p>

        {/* Pricing and Units Grid */}
        <div className="grid grid-cols-2 gap-4 mt-auto pt-4 border-t border-gray-100">
          <div>
            <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Price</div>
            <div className="font-bold text-sm text-gold">{project.priceRange}</div>
          </div>
          <div className="text-right">
            <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Plots / Units</div>
            <div className="font-bold text-sm text-primary">{project.properties} Units</div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-1">
          <Link href="/contact" className="relative overflow-hidden group/btn border border-primary rounded-md w-full py-2 transition-colors block text-center">
            <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-300 ease-in-out z-0"></div>
            <span className="relative z-10 text-primary group-hover/btn:text-white font-semibold transition-colors duration-300 flex items-center justify-center gap-1.5 text-sm">
             Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-1">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectListingCard;
