import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
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
            <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white relative scroll-reveal card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-pink-200 transition-transform duration-300 hover:scale-110">
                  <Quote className="w-12 h-12" fill="currentColor" />
                </div>

                {/* Profile */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative group">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-4 border-pink-100 transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 rounded-full bg-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.age} tahun</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
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
        <div className="mt-16 grid md:grid-cols-4 gap-8 scroll-reveal">
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2 transition-transform duration-300 group-hover:scale-110">10K+</div>
            <p className="text-gray-600 font-medium">Pelanggan Puas</p>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2 transition-transform duration-300 group-hover:scale-110">4.9</div>
            <p className="text-gray-600 font-medium">Rating Produk</p>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2 transition-transform duration-300 group-hover:scale-110">100%</div>
            <p className="text-gray-600 font-medium">Bahan Alami</p>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2 transition-transform duration-300 group-hover:scale-110">99%</div>
            <p className="text-gray-600 font-medium">Repeat Order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;