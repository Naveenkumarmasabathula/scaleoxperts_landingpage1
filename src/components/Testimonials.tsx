'use client'

import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  const reviewImages = [
    {
      id: 1,
      src: "review1.jpeg",
      alt: "Customer WhatsApp Review 1"
    },
    {
      id: 2,
      src: "review2.jpeg",
      alt: "Customer WhatsApp Review 2"
    },
    {
      id: 3,
      src: "review3.jpeg",
      alt: "Customer WhatsApp Review 3"
    },
    {
      id: 4,
      src: "review4.jpeg",
      alt: "Customer WhatsApp Review 4"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+919999999999?text=I saw the testimonials and want to claim my free audit like other successful businesses!', '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            TESTIMONIALS
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            What Business Owners Are Saying
          </p>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-600">
            Real reviews from our satisfied clients
          </p>
        </div>

        {/* Review Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reviewImages.map((review) => (
            <div key={review.id} className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={review.src}
                  alt={review.alt}
                  className="w-full h-auto object-contain max-h-96"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ✓ Verified
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Social Proof */}
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-12">
          <div className="text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">₹10Cr+</div>
                <div className="text-gray-600">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600 font-medium">4.9/5 Average Rating</span>
            </div>
            
            <p className="text-gray-600 mb-6">
              Join hundreds of businesses that have transformed their online presence with our digital marketing expertise.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Ready to grow your Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join our success stories and get your free digital marketing audit today!
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-orange-600 text-white font-bold py-4 px-8 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Claim your free audit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;