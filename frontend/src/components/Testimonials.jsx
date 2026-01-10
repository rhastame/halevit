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

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Siti Nurhaliza',
      age: 32,
      role: 'Ibu Rumah Tangga',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siti',
      rating: 5,
      text: 'Setelah rutin konsumsi Halevit Fiber, pencernaan saya jadi lancar banget! Berat badan juga turun 5kg dalam 2 bulan. Recommended!'
    },
    {
      name: 'Rina Wijaya',
      age: 28,
      role: 'Marketing Executive',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rina',
      rating: 5,
      text: 'Jelly Collagen Lychee-nya enak banget! Kulit saya jadi lebih cerah dan glowing. Teman-teman kantor sampai tanya pakai skincare apa 😊'
    },
    {
      name: 'Dr. Ahmad Fauzi',
      age: 45,
      role: 'Dokter Umum',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad',
      rating: 5,
      text: 'Sebagai tenaga medis, saya merekomendasikan Halevit untuk pasien yang ingin menjaga kesehatan pencernaan dengan cara alami dan aman.'
    },
    {
      name: 'Maya Putri',
      age: 35,
      role: 'Fitness Instructor',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya',
      rating: 5,
      text: 'Perfect untuk mendukung program diet saya! Halevit Fiber bikin kenyang lebih lama, jadi nggak ngemil sembarangan. Love it!'
    },
    {
      name: 'Dewi Santika',
      age: 52,
      role: 'Pensiunan',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dewi',
      rating: 5,
      text: 'Di usia saya yang sudah 50+, pencernaan sering bermasalah. Alhamdulillah setelah minum Halevit rutin, masalah BAB saya teratasi.'
    },
    {
      name: 'Lisa Anggraini',
      age: 26,
      role: 'Content Creator',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      rating: 5,
      text: 'Produk favorit! Rasanya enak, praktis, dan hasilnya nyata. Kulit glowing dan badan lebih fit. Wajib stock di rumah!'
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