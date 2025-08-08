'use client'

import React from 'react';
import { CheckCircle, Clock, Gift, Calendar } from 'lucide-react';

const WhatYouGet: React.FC = () => {
  const auditFeatures = [
    "Review of your website's UX and performance",
    "On-page and Off-page SEO performance check",
    "Google and Facebook ads account audit",
    "Social media presence & content analysis"
  ];

  const bonusFeatures = [
    "Lead funnel gaps",
    "Target audience clarity",
    "Offer positioning review",
    "Growth barriers"
  ];

  const competitorFeatures = [
    "Top 3 competitors' strategy",
    "What they're doing right",
    "Where you can outrank them"
  ];

  const handleUrgentClaim = () => {
    window.open('https://wa.me/+919999999999?text=I want to claim the FREE audit with bonus consultation within 4 hours!', '_blank');
  };

  const handleRegularClaim = () => {
    window.open('https://wa.me/+919999999999?text=I want to claim the FREE Digital Marketing audit worth ₹7,999', '_blank');
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            WHAT YOU GET IN OUR FREE DIGITAL MARKETING AUDIT
          </h2>
          <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
            Claim Digital Marketing audit worth ₹7,999
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Main Audit */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Digital Marketing Audit</h3>
            <ul className="space-y-4">
              {auditFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={handleRegularClaim}
              className="w-full mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Free Audit
            </button>
          </div>

          {/* Attractive Image Placeholder */}
          <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Comprehensive Analysis</h4>
              <p className="text-gray-600 mt-2">Get detailed insights into your digital presence</p>
            </div>
          </div>
        </div>

        {/* Bonus Section */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-2xl mb-12">
          <div className="bg-white p-8 rounded-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold mb-4">
                <Clock className="w-5 h-5" />
                SPECIAL LIMITED TIME BONUS
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Get special bonus if you claim within 4 hours:
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-green-800 mb-4">Business Strategy Audit</h4>
                <ul className="space-y-2">
                  {bonusFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-purple-800 mb-4">Competitor Analysis</h4>
                <ul className="space-y-2">
                  {competitorFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Urgent CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 p-8 rounded-2xl text-white text-center">
          <Gift className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            🎁 Get a FREE 30-Min Growth Consultation if you claim within 4 hours.
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Book your audit now and get a personalized call with our strategist to review your audit live and get tailored suggestions!
          </p>
          <button
            onClick={handleUrgentClaim}
            className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Book My Free Audit Now – Limited Slots
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;