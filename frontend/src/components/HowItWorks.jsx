import React from 'react';
import { Card, CardContent } from './ui/card';
import { Coffee, Clock, Smile, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Coffee className="w-10 h-10" />,
      step: 'Langkah 1',
      title: 'Konsumsi Rutin',
      description: 'Minum Halevit Fiber setiap pagi dan Jelly Collagen sebagai snack sehat'
    },
    {
      icon: <Clock className="w-10 h-10" />,
      step: 'Langkah 2',
      title: 'Tunggu Prosesnya',
      description: 'Biarkan kandungan alami bekerja melancarkan pencernaan dan menutrisi kulit'
    },
    {
      icon: <Smile className="w-10 h-10" />,
      step: 'Langkah 3',
      title: 'Rasakan Manfaatnya',
      description: 'Pencernaan lancar, berat badan terkontrol, kulit glowing'
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      step: 'Langkah 4',
      title: 'Hidup Lebih Sehat',
      description: 'Nikmati gaya hidup sehat dengan percaya diri dan penuh energi'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cara <span className="text-pink-500">Menggunakannya</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empat langkah mudah menuju hidup lebih sehat dengan Halevit
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon with Number Badge */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-500">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-pink-500 mb-2">{step.step}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Takaran Konsumsi</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><span className="font-semibold">Halevit Fiber:</span> 1 sachet setiap pagi, larutkan dalam 200ml air</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><span className="font-semibold">Jelly Collagen:</span> 1-2 sachet per hari sebagai snack</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tips Maksimal</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Konsumsi secara rutin untuk hasil optimal</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Imbangi dengan pola makan sehat dan olahraga</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Minum air putih minimal 8 gelas sehari</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;