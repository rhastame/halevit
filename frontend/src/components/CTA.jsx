import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ShoppingBag, ExternalLink } from 'lucide-react';

const CTA = () => {
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

  return (
    <section id="cta" className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 opacity-50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 scroll-reveal">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mulai Perjalanan Sehatmu <span className="text-pink-500">Hari Ini!</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bergabunglah dengan ribuan pelanggan yang telah merasakan manfaat luar biasa dari Halevit. Dapatkan produk original hanya di official store kami.
              </p>
            </div>

            {/* Product Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-10 scroll-reveal">
              {/* Gojiberry Product */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border-2 border-pink-200 hover:border-pink-400 transition-colors group">
                <div className="flex items-center justify-center mb-4 h-40">
                  <img
                    src="../images/gojiberry-fix2.png"
                    alt="Halevit Fiber Gojiberry"
                    className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    style={{ filter: 'drop-shadow(0 10px 20px rgba(236, 72, 153, 0.3))' }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Halevit Fiber Gojiberry</h3>
                <p className="text-gray-600 text-center mb-4 text-sm">Kombinasi gojiberry, acaiberry, dan guarana - Untuk pecinta kuliner</p>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="text-pink-500 mr-2">✓</span>
                    Mengikat lemak berlebih
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-500 mr-2">✓</span>
                    Detoks maksimal setelah makan besar
                  </li>
                  <li className="flex items-center">
                    <span className="text-pink-500 mr-2">✓</span>
                    Kontrol berat badan
                  </li>
                </ul>
              </div>

              {/* Apple Cranberry Product */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-colors group">
                <div className="flex items-center justify-center mb-6 h-40">
                  <img
                    src="../images/apple-cranberry-fix.png"
                    alt="Halevit Fiber Apple Cranberry"
                    className="h-60 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    style={{ filter: 'drop-shadow(0 10px 20px rgba(34, 197, 94, 0.3))' }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Halevit Fiber Apple Cranberry</h3>
                <p className="text-gray-600 text-center mb-4 text-sm">Perpaduan apel dan cranberry - Untuk yang aktif bergerak</p>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Melancarkan BAB tanpa begah
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Detoks ringan untuk aktivitas padat
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Kaya antioksidan alami
                  </li>
                </ul>
              </div>
            </div>

            {/* Purchase Buttons */}
            <div className="space-y-6 scroll-reveal">
              <div className="text-center">
                <p className="text-gray-700 font-semibold mb-4 text-lg">
                  Beli Sekarang!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Tokopedia Button */}
                <a
                  href="https://www.tokopedia.com/halevit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_halevit-health/artifacts/og5cj586_logo%20toped.png" 
                      alt="Tokopedia" 
                      className="h-6 w-12 h-auto"
                    />
                    Beli di Tokopedia
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>

                {/* Shopee Button */}
                <a
                  href="https://shopee.co.id/halevit_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_halevit-health/artifacts/ryms579u_logo%20shopee.png" 
                      alt="Shopee" 
                      className="h-6 mr-2"
                    />
                    Beli di Shopee
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>

                {/* TikTok Shop Button */}
                <a
                  href="https://www.tiktok.com/@halevitfiber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                    Beli di TikTok Shop
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-gray-200 scroll-reveal">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-pink-500 mb-1">100%</div>
                  <p className="text-sm text-gray-600">Original</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-500 mb-1">BPOM</div>
                  <p className="text-sm text-gray-600">Tersertifikasi</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-500 mb-1">Halal</div>
                  <p className="text-sm text-gray-600">MUI</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-500 mb-1">10K+</div>
                  <p className="text-sm text-gray-600">Terjual</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-500 mb-1">Tinggi</div>
                  <p className="text-sm text-gray-600">Serat</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-500 mb-1">Bebas</div>
                  <p className="text-sm text-gray-600">Gula</p>
                </div>
              </div>
            </div>
          </div>

          {/* Promo Banner */}
          <div className="mt-8 bg-pink-500 text-white rounded-2xl p-6 text-center shadow-lg">
            <p className="text-2xl font-bold mb-2">#Stayfitwithhalevit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;