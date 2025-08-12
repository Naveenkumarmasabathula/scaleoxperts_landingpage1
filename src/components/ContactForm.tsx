'use client';

import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onSubmit?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = 'GET IN TOUCH WITH US',
  subtitle = "Let's Talk! No Sales, Just Support.",
  ctaText = 'Send Me the Audit form',
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    whatsapp: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi! I want to claim my free digital marketing audit.
    
Name: ${formData.name}
Email: ${formData.email}
Website: ${formData.website || 'Not provided'}
WhatsApp: ${formData.whatsapp}`;

    const whatsappUrl = `https://wa.me/+91?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    onSubmit?.();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your request has been submitted. We&apos;ll get back to you within 24 hours with your comprehensive digital marketing audit.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fffaf4] text-black py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
              Business Website (optional)
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              placeholder="https://yourbusiness.com"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
              WhatsApp Number *
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              placeholder="+91 98765 43210"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            {ctaText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
