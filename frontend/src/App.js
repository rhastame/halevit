import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import StickyFloatingCTA from './components/StickyFloatingCTA';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <StickyFloatingCTA />
    </div>
  );
}

export default App;