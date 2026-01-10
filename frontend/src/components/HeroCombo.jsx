import React from 'react';

const HeroCombo = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
        <img
          src="/images/hero-section-fix.png"
          alt="Halevit Gojiberry"
          className="w-full h-auto animate-float"
          style={{ filter: 'drop-shadow(0 25px 25px rgba(236, 72, 153, 0.3))' }}
        />
    </div>
  );
};

export default HeroCombo;
