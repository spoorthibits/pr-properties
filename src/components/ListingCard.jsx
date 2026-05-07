import React from 'react';

const ListingCard = ({ layout = 'grid' }) => {
  return (
    <div className={`bg-white rounded-[10px] shadow-md overflow-hidden group font-['Montserrat',sans-serif] flex ${layout === 'list' ? 'flex-col sm:flex-row w-full' : 'flex-col w-full'}`}>
      {/* Image Container */}
      <div className={`relative overflow-hidden ${layout === 'list' ? 'w-full sm:w-[40%] h-[250px] sm:h-auto shrink-0' : 'w-full h-[230px]'}`}>
        {/* Dummy Image */}
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Elegant studio flat"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            Featured
          </span>
          <span className="bg-lightgold text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            For Sale
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
        <h3 className="text-[22px] font-semibold text-primary font-['Playfair_Display',serif] mb-2">
          Elegant studio flat
        </h3>

        <div className="flex items-center text-gray-500 text-[15px] mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          102 Ingraham St, Brooklyn, NY 11237
        </div>

        <div className="flex items-center gap-4 text-gray-500 text-[15px] mb-6">
          <div><span className="font-semibold text-gray-800">3</span> Beds</div>
          <div><span className="font-semibold text-gray-800">3</span> Baths</div>
          <div><span className="font-semibold text-gray-800">4043</span> Sqft</div>
        </div>

        <div className={`h-[1px] w-full bg-gray-200 ${layout === 'list' ? 'mb-8' : 'mb-6'}`}></div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="text-[22px] font-bold text-primary">
            $8600
          </div>

          <div className="flex items-center gap-6">
            <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-[15px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                <path d="m16 3 4 4-4 4" />
                <path d="M20 7H4" />
                <path d="m8 21-4-4 4-4" />
                <path d="M4 17h16" />
              </svg>
              Compare
            </button>

            {/* Left to Right Sliding Button */}
            <button className="relative overflow-hidden group/btn border border-primary rounded-md px-5 py-2 transition-colors">
              <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-300 ease-in-out z-0"></div>
              <span className="relative z-10 text-primary group-hover/btn:text-white font-medium transition-colors duration-300">
                Details
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
