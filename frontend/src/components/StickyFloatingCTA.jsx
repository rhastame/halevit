import React, { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { Button } from './ui/button';

const StickyFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 800px down
      if (window.scrollY > 800 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 800) {
        setIsVisible(false);
      }

      // Hide when near CTA section at bottom
      const ctaSection = document.getElementById('cta');
      if (ctaSection) {
        const ctaPosition = ctaSection.getBoundingClientRect().top;
        if (ctaPosition < window.innerHeight) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 sticky-cta">
      <div className="relative">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Main CTA Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 w-72 border-2 border-pink-500">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-pink-500" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Siap Untuk Hidup Sehat?</h4>
              <p className="text-sm text-gray-600">Pilih varian favoritmu!</p>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Beli Sekarang
            <ShoppingBag className="ml-2 w-4 h-4" />
          </Button>

          {/* Trust indicators */}
          <div className="flex justify-around mt-3 pt-3 border-t border-gray-200">
            <div className="text-center">
              <p className="text-xs font-semibold text-pink-600">100%</p>
              <p className="text-xs text-gray-600">Alami</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-pink-600">BPOM</p>
              <p className="text-xs text-gray-600">Certified</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-pink-600">10K+</p>
              <p className="text-xs text-gray-600">Terjual</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFloatingCTA;
