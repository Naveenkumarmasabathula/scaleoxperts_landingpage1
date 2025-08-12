'use client'

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-gradient text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-xl"></span>
                </div> */}
              <Image
                              src="/favicon.webp"
                              alt="Logo"
                              width={50}
                              height={50}
                              className='bg-white rounded-full p-2'
              />
              <span className="text-3xl font-bold">Scaleoxperts</span>
            </div>
            <p className="text-gray-100 leading-relaxed">
              We help businesses grow their online presence through comprehensive digital marketing strategies and data-driven results.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white-500" />
                <span>+91 80081 29875</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white-500" />
                <span>hello@digitalmarketingpro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white-500" />
                <span>3rd Floor, Oyster Complex, Somajiguda, Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#services" className="block text-gray-100 hover:text-white transition-colors">
                Our Services
              </a>
              <a href="#testimonials" className="block text-gray-100 hover:text-white transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="block text-gray-100 hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="/privacy-policy" className="block text-gray-100 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-100">
          <p>&copy; 2025 Scaleoxperts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;