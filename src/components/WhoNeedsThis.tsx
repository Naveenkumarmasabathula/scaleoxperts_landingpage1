'use client'

import React from 'react';
import { TrendingDown, Target, Users, BarChart3, Search, MessageCircle, Vibrate as Strategy, DollarSign, CheckCircle } from 'lucide-react';

const WhoNeedsThis: React.FC = () => {
  const problems = [
    { icon: TrendingDown, text: "Have No or Low Online Visibility", color: "bg-red-100 text-red-600" },
    { icon: BarChart3, text: "Have Poor ROI from Current Marketing Efforts", color: "bg-orange-100 text-orange-600" },
    { icon: Users, text: "Lack of In-House Expertise", color: "bg-blue-100 text-blue-600" },
    { icon: Target, text: "Get Leads, But No Conversions", color: "bg-green-100 text-green-600" },
    { icon: Search, text: "Are Not Ranking on Google", color: "bg-purple-100 text-purple-600" },
    { icon: MessageCircle, text: "Your Social Media Feels Dead", color: "bg-pink-100 text-pink-600" },
    { icon: Strategy, text: "You Need a Strategy, Not Just Services", color: "bg-indigo-100 text-indigo-600" },
    { icon: DollarSign, text: "Have Budget Constraints", color: "bg-yellow-100 text-yellow-600" }
  ];

  const targetAudience = [
    "Founders of Startups",
    "MSMEs wanting to grow digitally",
    "Ecommerce/D2C & B2B, local businesses",
    "Coaches, consultants & solopreneurs",
    "Anyone spending on digital without clarity"
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+919999999999?text=I need the free Digital Marketing audit. I fit the criteria mentioned on your website.', '_blank');
  };

  return (
    <div className="bg-orange-gradient py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            WHO NEEDS THIS SERVICE?
          </h2>
          <p className="text-xl text-orange-100">
            You need our Digital Marketing Service if you:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className=" border-4 border-gray-800 bg-[#fffaf4] text-black p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${problem.color}`}>
                <problem.icon className="w-6 h-6" />
              </div>
              <p className="text-gray-800 font-medium leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#fffaf4] text-black p-8 sm:p-12 rounded-2xl shadow-sm mb-12">
          <h3 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-8">
            Who Is This For?
          </h3>
          <p className="text-xl text-center text-orange-500 mb-8">
            This Free Audit is Best For…
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {targetAudience.map((audience, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium">{audience}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-gray-800 mb-6">
              If any of this sounds like you! You need to take our Free Digital Marketing audit.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-orange-600 text-white font-bold py-4 px-8 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Claim free audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoNeedsThis;