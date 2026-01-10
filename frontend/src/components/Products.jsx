import React from 'react';
import { Card, CardContent } from './ui/card';
import { Activity, Sparkles, Scale, Flame, Heart, Shield, Zap, Apple as AppleIcon, CheckCircle } from 'lucide-react';

const Products = () => {
  const gojiberryBenefits = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Melancarkan Pencernaan',
      description: 'Membantu melancarkan pencernaan setelah makan banyak agar perut tetap nyaman.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Detoksifikasi Lebih Optimal',
      description: 'Membantu membersihkan sisa makanan dan racun dalam tubuh secara lebih maksimal.'
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Kontrol dan Penjagaan Berat Badan',
      description: 'Membantu mengontrol asupan makan bagi pecinta kuliner agar berat badan tetap terjaga.'
    }
  ];

  const appleCranberryBenefits = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Melancarkan Pencernaan dan BAB',
      description: 'Membantu melancarkan BAB serta menjaga pencernaan tetap nyaman tanpa rasa begah.'
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: 'Detoksifikasi Alami yang Lembut',
      description: 'Membantu proses pembuangan sisa makanan dan racun ringan dari dalam tubuh secara alami.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Mendukung Metabolisme Tubuh',
      description: 'Membantu tubuh mengolah makanan dengan lebih optimal agar terasa lebih ringan setelah makan.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Kaya Antioksidan Alami',
      description: 'Kombinasi apel dan cranberry kaya antioksidan untuk mendukung kesehatan dan daya tahan tubuh.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Nyaman untuk Konsumsi Harian',
      description: 'Formulasi ringan yang tidak mengganggu aktivitas dan cocok dikonsumsi secara rutin setiap hari.'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Produk <span className="text-pink-500">Halevit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap untuk kesehatan pencernaan dan kecantikan kulit Anda
          </p>
        </div>

        {/* Fiber Product */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Fiber Rasa Gojiberry
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Susah BAB? Takut Berat Badan Naik?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Makan dengan porsi banyak tapi takut timbangan selalu naik? Ingin menurunkan berat badan dan melancarkan pencernaan? Ingin memiliki berat badan ideal? <span className="font-semibold text-pink-600">Halevit Fiber solusinya.</span>
              </p>

              <div className="space-y-6">
                {fiberBenefits.map((benefit, index) => (
                  <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500">
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

            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10">
                <img
                  src="https://customer-assets.emergentagent.com/job_halevit-health/artifacts/y6ra1gt2_halevitfiber.png"
                  alt="Halevit Fiber"
                  className="w-full h-auto drop-shadow-2xl animate-float"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full filter blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Collagen Product */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://customer-assets.emergentagent.com/job_halevit-health/artifacts/aismv8sd_halevitcollagen.png"
                  alt="Halevit Collagen"
                  className="w-full h-auto drop-shadow-2xl animate-float"
                  style={{ animationDelay: '0.5s' }}
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-200 rounded-full filter blur-3xl opacity-30"></div>
            </div>

            <div>
              <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Jelly Collagen Lychee
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Segarkan Harimu Bersama Jelly Collagen Lychee
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Kombinasi sempurna kolagen dan lychee untuk kecantikan kulit dari dalam. Rasakan kesegaran dan manfaat luar biasa dalam setiap sajian.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {lycheeBenefits.map((benefit, index) => (
                  <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
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