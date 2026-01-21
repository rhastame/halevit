import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ContactUs = () => {
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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6285186881407', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-pink-500">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ada pertanyaan terkait Halevit? Atau ingin bermitra dengan Halevit? Hubungi Customer Service kami
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto">
          {/* WhatsApp Card - Prominent */}
          <Card className="border-none shadow-2xl mb-8 scroll-reveal bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    WhatsApp Customer Service
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Hubungi kami untuk pembelian langsung, kemitraan, pertanyaan produk, atau konsultasi
                  </p>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Chat via WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
