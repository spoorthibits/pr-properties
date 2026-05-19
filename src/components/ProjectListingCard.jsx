import React from 'react';
import Link from 'next/link';

const ProjectListingCard = ({ project, companyId, layout = 'grid' }) => {
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
    <div className={`bg-white rounded-[10px] shadow-md overflow-hidden group font-['Montserrat',sans-serif] flex ${layout === 'list' ? 'flex-col sm:flex-row w-full' : 'flex-col w-full'} hover:shadow-2xl transition-all duration-300`}>
      {/* Image Container */}
      <div className={`relative overflow-hidden ${layout === 'list' ? 'w-full sm:w-[40%] h-[250px] sm:h-auto shrink-0' : 'w-full h-[230px]'}`}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
          <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white" style={{ color: 'var(--color-primary)' }}>
            {project.type}
          </span>
        </div>

        {/* Top to Bottom Sliding Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 transition-transform duration-300 ease-in-out -translate-y-full group-hover:translate-y-0 z-0">
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
      <div className={`p-6 flex flex-col flex-1 justify-center ${layout === 'list' ? 'sm:p-8' : ''}`}>
        <h3 className="text-[22px] font-semibold text-primary font-['Playfair_Display',serif] mb-2 group-hover:text-gold transition-colors">
          {project.name}
        </h3>

        <div className="flex items-center text-gray-500 text-[15px] mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 shrink-0">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="line-clamp-1">{project.location}</span>
        </div>

        <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--color-muted)' }}>
          {project.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
          <div>
            <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-muted)' }}>Properties</div>
            <div className="font-bold" style={{ color: 'var(--color-primary)' }}>{project.properties} Units</div>
          </div>
          <div>
            <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-muted)' }}>Price Range</div>
            <div className="font-bold" style={{ color: 'var(--color-primary)' }}>{project.priceRange}</div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs" style={{ color: 'var(--color-muted)' }}>Completion</div>
            <div className="text-sm font-semibold">{project.completionDate}</div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center text-gray-600 hover:text-gray-900 transition-colors text-[15px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                <path d="m16 3 4 4-4 4" />
                <path d="M20 7H4" />
                <path d="m8 21-4-4 4-4" />
                <path d="M4 17h16" />
              </svg>
              Compare
            </button>

            {/* Left to Right Sliding Button */}
            <Link href={`/properties/${project.id}`} className="relative overflow-hidden group/btn border border-primary rounded-md px-5 py-2 transition-colors block text-center">
              <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-300 ease-in-out z-0"></div>
              <span className="relative z-10 text-primary group-hover/btn:text-white font-medium transition-colors duration-300">
                Details
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListingCard;
