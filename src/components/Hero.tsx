'use client';

import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import TrustedBySection from './TrustedBy';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/+919999999999?text=I want to claim my free digital marketing audit',
      '_blank'
    );
  };

  return (
    <div className="relative overflow-hidden">
      {/* Orange Gradient Banner */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 leading-tight">
            Uncover exactly what&apos;s holding your business back online with our Digital marketing audit worth ₹7,999 for <span className="text-yellow-300">free</span>
          </h1>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-orange-600 font-bold py-3 px-6 sm:px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Claim now for free
          </button>
        </div>
      </div>

      {/* Countdown Banner */}
      <div className="bg-[#fffaf4] text-black py-4 px-4 sm:px-6 border-b-2 border-orange-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="w-10 h-10 text-orange-600" />
            <span className="text-sm sm:text-base font-semibold">
              Claim within 4 hours for Bonus Business growth strategy audit and competitor analysis
            </span>
          </div>
          <div className="flex justify-center gap-4 mb-4">
            <div className="bg-orange-100 px-3 py-2 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-600">Hours</div>
            </div>
            <div className="bg-orange-100 px-3 py-2 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-600">Minutes</div>
            </div>
            <div className="bg-orange-100 px-3 py-2 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-600">Seconds</div>
            </div>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="bg-orange-600 text-white font-bold py-3 px-6 sm:px-8 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span className="line-through text-orange-200 mr-2">₹10,999</span>
            <span className="text-yellow-300">FREE</span>
          </button>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="bg-gradient-to-br from-brand-orange1 via-orange-600 to-red-600 relative">
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Generate leads and sales for your business with comprehensive
              <span className="text-yellow-300"> Digital Marketing Services</span>
            </h2>

            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-orange-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl mb-12 inline-flex items-center gap-2"
            >
              Get free audit
              <ArrowRight className="w-5 h-5" />
            </button>


            {/* Laptop Mockup */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <div className="bg-gray-800 rounded-lg p-4 shadow-2xl">
                <div className="bg-[#f49312] rounded aspect-video flex items-center justify-center p-8">
                  <Image
                    src="/Hero.png" // replace with your image path
                    alt="Our Service"
                    width={800} // adjust for your image size
                    height={600}
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl mb-8"
            >
              <span className="line-through text-gray-600 mr-2">₹10,999</span>
              <span>FREE</span>
            </button>

            {/* Trusted By Section */}
            <TrustedBySection />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
