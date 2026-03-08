import React, { useState } from 'react';

const ComparisonSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPos(e.target.value);
  };

  return (
    <section className="py-24 bg-agri-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-agri-dark mb-4">See What the Eye Can't</h2>
        <p className="text-gray-500 mb-16">Compare standard visual photography with our advanced NDVI heatmaps.</p>
        
        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl group">
          {/* Normal View (Bottom Layer) */}
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=70&w=1000&auto=format&fit=crop&fm=webp" alt="Normal View" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-xs">NORMAL VIEW (RGB)</div>
          </div>

          {/* NDVI View (Top Layer - Clipped) */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img src="https://images.unsplash.com/photo-1599940731034-e4c17bd315e1?q=70&w=1000&auto=format&fit=crop&fm=webp" alt="NDVI View" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute top-4 right-4 bg-agri-green/80 text-white px-3 py-1 rounded text-xs">NDVI HEATMAP</div>
          </div>

          {/* Slider Control */}
          <input 
            type="range" 
            min="0" max="100" value={sliderPos} 
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />
          
          {/* Slider Line Visual */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-agri-green font-bold">↔</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSlider;