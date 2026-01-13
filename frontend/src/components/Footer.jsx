import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="../images/logo.png"
                alt="Halevit Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">Halevit adalah solusi kesehatan alami untuk pencernaan yang lebih sehat dan tubuh yang lebih ramping.</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1CArz9biDQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/halevit.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@halevitfiber"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Produk
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Manfaat
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Testimoni
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-pink-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Jl. Tampa 1 No. 97, Tangerang, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>085186881407</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Marketplace Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-lg font-bold mb-4 text-center">Official Store</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.tokopedia.com/halevit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-green-600 rounded-lg transition-colors font-semibold"
            >
              Tokopedia Official Store
            </a>
            <a
              href="https://shopee.co.id/halevit_official"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-orange-600 rounded-lg transition-colors font-semibold"
            >
              Shopee Official Store
            </a>
            <a
              href="https://www.tiktok.com/@halevitfiber"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-black rounded-lg transition-colors font-semibold"
            >
              TikTok Shop Official
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Halevit. All rights reserved. | #Stayfitwithhalevit
          </p>
          <p className="text-gray-500 text-sm mt-2">
            BPOM & Halal Certified | Made with ❤️ in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;