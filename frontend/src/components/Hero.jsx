import React from 'react';
import { Button } from './ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>#StayFitWithHalevit</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hidup Sehat Dimulai dari
              <span className="text-pink-500"> Pencernaan </span>
              yang Baik
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Nikmati kelezatan dalam setiap tegukan bersama <span className="font-semibold text-pink-600">Halevit Jelly Collagen Lychee</span> dan <span className="font-semibold text-pink-600">Fiber Halevit rasa Gojiberry</span>, karena dapat memberi rasa kenyang lebih lama serta membuat kulit terlihat glowing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-6 text-lg font-semibold btn-primary"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Beli Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-pink-500 text-pink-500 hover:bg-pink-50 rounded-full px-8 py-6 text-lg font-semibold transition-colors"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100% Alami</p>
                  <p className="text-sm text-gray-600">Bahan natural</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Tanpa Gula</p>
                  <p className="text-sm text-gray-600">Sugar-free</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Halal</p>
                  <p className="text-sm text-gray-600">Tersertifikasi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Images */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src="https://customer-assets.emergentagent.com/job_halevit-health/artifacts/lgqvwyec_apple-cranberry%20dan%20fojiberry.jpg"
                alt="Halevit Products"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            {/* Background Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;