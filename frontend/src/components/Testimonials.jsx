import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Siti R.',
      age: 34,
      role: 'Ibu Rumah Tangga',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SitiRahma',
      rating: 5,
      text: 'Ini sudah order kedua. Efeknya terasa tapi tetap nyaman, nggak bikin perut kaget keesokan harinya. Rasanya juga manis segar, jadi enak diminum rutin.'
    },
    {
      name: 'Andi P.',
      age: 29,
      role: 'Karyawan Swasta',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Andi',
      rating: 5,
      text: 'Halevit sudah jadi andalan saya. Minum rutin bikin BAB lebih lancar dan badan terasa lebih ringan. Recommended banget buat yang peduli pencernaan.'
    },
    {
      name: 'Rina O.',
      age: 27,
      role: 'Content Creator',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RinaO',
      rating: 5,
      text: 'Produknya original, packing rapi dan segel aman. Setelah rutin konsumsi, pencernaan jadi lebih teratur dan perut terasa nyaman.'
    },
    {
      name: 'Budi S.',
      age: 41,
      role: 'Pengusaha Kuliner',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi',
      rating: 5,
      text: 'Biasanya minum setelah sering makan banyak. Perut jadi lebih nyaman dan nggak terasa penuh. Rasanya juga seger.'
    },
    {
      name: 'Dewi L.',
      age: 52,
      role: 'Ibu Rumah Tangga',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DewiL',
      rating: 5,
      text: 'Sangat membantu melancarkan BAB. Cocok diminum harian dan nggak bikin perut begah. Puas dengan hasilnya.'
    },
    {
      name: 'Fajar N.',
      age: 25,
      role: 'Mahasiswa',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fajar',
      rating: 5,
      text: 'Polanya simpel, minum malam sebelum tidur. Paginya lebih lancar dan badan terasa lebih fresh. Cocok buat yang aktivitasnya padat.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-pink-500">Mereka</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ribuan pelanggan puas telah merasakan manfaat Halevit
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white relative">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-pink-200">
                  <Quote className="w-12 h-12" fill="currentColor" />
                </div>

                {/* Profile */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-pink-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.age} tahun</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">10K+</div>
            <p className="text-gray-600 font-medium">Pelanggan Puas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">4.9</div>
            <p className="text-gray-600 font-medium">Rating Produk</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">100%</div>
            <p className="text-gray-600 font-medium">Bahan Alami</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">99%</div>
            <p className="text-gray-600 font-medium">Repeat Order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;