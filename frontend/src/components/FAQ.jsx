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
      question: 'Apakah Halevit Fiber aman dikonsumsi setiap hari?',
      answer: 'Ya, Halevit Fiber aman untuk dikonsumsi setiap hari. Terbuat dari bahan alami, tinggi serat,     bebas gula tambahan, serta telah terdaftar BPOM dan bersertifikat Halal.'
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
      </div>
    </section>
  );
};

export default FAQ;