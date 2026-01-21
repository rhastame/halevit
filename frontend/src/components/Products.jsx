import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Activity, Sparkles, Scale, Flame, Shield, Zap, CheckCircle } from 'lucide-react';

const Products = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const gojiberryBenefits = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Membantu Mengikat Lemak Berlebih',
      description: 'Membantu mengikat lemak dari makanan berat agar tidak terserap berlebihan oleh tubuh.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Detoks Maksimal Setelah Makan Banyak',
      description: 'Membersihkan sisa makanan dan racun dalam tubuh secara lebih optimal setelah makan banyak.'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Kontrol Berat Badan',
      description: 'Membantu mengontrol asupan dan menjaga berat badan tetap ideal.'
    }
  ];

  const appleCranberryBenefits = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Melancarkan Pencernaan dan BAB',
      description: 'Membantu melancarkan BAB agar pencernaan tetap nyaman setiap hari.'
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: 'Detoks Ringan untuk Aktivitas Padat',
      description: 'Mendukung pembersihan tubuh secara lembut tanpa rasa begah.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Mendukung Metabolisme Tubuh',
      description: 'Membantu tubuh mengolah makanan lebih optimal agar terasa lebih ringan.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Kaya Antioksidan',
      description: 'Perpaduan apel dan cranberry kaya antioksidan untuk mendukung daya tahan tubuh.'
    },
    // {
    //   icon: <CheckCircle className="w-8 h-8" />,
    //   title: 'Praktis untuk Konsumsi Rutin',
    //   description: 'Formulasi ringan yang nyaman dikonsumsi setiap hari.'
    // }
  ];

  return (
    <section id="products" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Produk <span className="text-pink-500">Halevit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pilih varian yang sesuai dengan gaya hidupmu
          </p>
        </div>

        {/* Gojiberry Product */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 scroll-reveal-left">
              <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Fiber Rasa Gojiberry
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Halevit Fiber – Gojiberry
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Kombinasi <span className="font-semibold text-pink-600">gojiberry, acaiberry, dan guarana</span> dengan manis alami yang cocok untuk kamu yang <span className="font-semibold">sering makan banyak dan hobi kuliner.</span>
              </p>

              <div className="space-y-6">
                {gojiberryBenefits.map((benefit, index) => (
                  <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 card-hover scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500 transition-transform duration-300 hover:scale-110">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative scroll-reveal-right">
              <div className="relative z-10 group flex justify-center">
                <img
                  src="../images/gojiberry-fix.png"
                  alt="Halevit Fiber Gojiberry"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105 p-4 mt-2"
                  style={{ 
                    filter: 'drop-shadow(0 30px 40px rgba(236, 72, 153, 0.4))',
                    animation: 'float 3s ease-in-out infinite'
                  }}
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Apple Cranberry Product */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 lg:p-12 scroll-reveal">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative scroll-reveal-left">
              <div className="relative z-10 group flex justify-center">
                <img
                  src="../images/apple-cranberry-fix.png"
                  alt="Halevit Fiber Apple Cranberry"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    animationDelay: '0.5s',
                    filter: 'drop-shadow(0 30px 40px rgba(236, 72, 153, 0.4))',
                    animation: 'float 3s ease-in-out infinite 0.5s'
                  }}
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            </div>

            <div className="scroll-reveal-right">
              <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Fiber Rasa Apple Cranberry
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Halevit Fiber – Apple Cranberry
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Perpaduan rasa asam-manis dari <span className="font-semibold text-pink-600">apel dan cranberry</span> yang kaya antioksidan, dengan detoks yang lebih ringan—pas untuk kamu yang <span className="font-semibold">aktif bergerak dan jarang makan berat.</span>
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {appleCranberryBenefits.map((benefit, index) => (
                  <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 transition-transform duration-300 hover:scale-110 hover:rotate-6">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;