import React from "react";

const SpotlightSection = () => {
  return (
    <div className="relative bg-gray-900 py-10">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="text-white text-2xl font-bold uppercase tracking-wider">
          <div className="animate-marquee">
            <span className="inline-block mx-8">Results - 2023 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightSection;
