import React from 'react';

const HeroCombo = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Gojiberry - Left */}
      {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 z-10"> */}
        <img
          src="/images/hero-section-fix.png"
          alt="Halevit Gojiberry"
          className="w-full h-auto animate-float"
          style={{ filter: 'drop-shadow(0 25px 25px rgba(236, 72, 153, 0.3))' }}
        />
      {/* </div> */}
      
      {/* Apple Cranberry - Right */}
      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 z-10">
        <img
          src="https://customer-assets.emergentagent.com/job_halevit-health/artifacts/qao5b4rt_apple-cranberry1.png"
          alt="Halevit Apple Cranberry"
          className="w-full h-auto drop-shadow-2xl animate-float"
          style={{ 
            animationDelay: '0.5s',
            filter: 'drop-shadow(0 25px 25px rgba(34, 197, 94, 0.3))' 
          }}
        />
      </div> */}
    </div>
  );
};

export default HeroCombo;
