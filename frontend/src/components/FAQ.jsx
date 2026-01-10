import React, { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
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

  const faqs = [
    {
      question: 'Apa itu Halevit Fiber?',
      answer: 'Halevit Fiber adalah minuman serat berbentuk serbuk dengan 2 varian rasa yang membantu melancarkan pencernaan, menjaga kesehatan usus, membantu BAB lebih teratur, dan mendukung gaya hidup sehat sehari-hari.'
    },
    {
      question: 'Apakah Halevit Fiber aman dikonsumsi setiap hari?',
      answer: 'Ya, Halevit Fiber aman untuk dikonsumsi setiap hari. Terbuat dari bahan alami, tanpa gula tambahan, serta telah terdaftar BPOM dan bersertifikat Halal.'
    },
    {
      question: 'Kapan hasil konsumsi Halevit Fiber bisa dirasakan?',
      answer: 'Hasil dapat berbeda pada setiap orang. Umumnya, pencernaan terasa lebih lancar dalam 1–2 minggu konsumsi rutin. Untuk hasil yang lebih optimal, disarankan konsumsi secara teratur.'
    },
    {
      question: 'Bagaimana cara minum Halevit Fiber yang benar?',
      answer: 'Larutkan 1 sachet Halevit Fiber ke dalam 150 ml air, lalu minum setiap malam sebelum tidur untuk membantu menjaga pencernaan.'
    },
    {
      question: 'Apakah Halevit Fiber menimbulkan efek samping?',
      answer: 'Halevit Fiber dibuat dari bahan alami dan umumnya tidak menimbulkan efek samping.'
    },
    {
      question: 'Apakah Halevit Fiber aman untuk ibu hamil dan menyusui?',
      answer: 'Untuk ibu hamil dan menyusui, disarankan berkonsultasi terlebih dahulu dengan dokter sebelum mengonsumsi Halevit Fiber atau suplemen lainnya.'
    },
    {
      question: 'Apakah Halevit Fiber bisa diminum bersamaan dengan obat?',
      answer: 'Halevit Fiber aman dikonsumsi bersamaan dengan obat lain. Untuk hasil terbaik, beri jeda sekitar 1–2 jam atau konsultasikan dengan tenaga medis.'
    },
    {
      question: 'Di mana bisa membeli Halevit Fiber?',
      answer: 'Halevit Fiber tersedia di official store Halevit di Tokopedia, Shopee, dan TikTok Shop. Klik tombol beli sekarang untuk menuju marketplace pilihan Anda.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pertanyaan <span className="text-pink-500">Umum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan yang sering diajukan tentang Halevit
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow px-6 border-none scroll-reveal"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-pink-500 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center scroll-reveal">
          <p className="text-gray-600 mb-4">
            Masih ada pertanyaan? Hubungi tim customer service kami
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/6285186881407"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            {/* <a
              href="mailto:info@halevit.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;