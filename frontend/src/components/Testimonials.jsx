import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

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