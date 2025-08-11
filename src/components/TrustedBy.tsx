"use client";

import React from "react";
import Image from "next/image";

const TrustedBySection = () => {
  const companies = [
    { name: "Apar Industries", logo: "/companies/aparindustries.webp" },
    { name: "Dental Clinic", logo: "/companies/dentalclinic.webp" },
    { name: "Divija Builders", logo: "/companies/divijabuilders.webp" },
    { name: "F3 Fast Food", logo: "/companies/f3fastfood.webp" },
    { name: "Funkieez", logo: "/companies/funkieez.webp" },
    { name: "Green Asian Restaurant", logo: "/companies/greenasianrestaurant.webp" },
    { name: "Mgr Builders", logo: "/companies/mgrbuilders.webp" },
    { name: "NKS Food", logo: "/companies/nksfood.webp" },
    { name: "Prime", logo: "/companies/prime.webp" },
    { name: "Sandy Foods", logo: "/companies/sandyfoods.webp" },
    { name: "Smart Wonders Edu", logo: "/companies/smartwondersedu.webp" },
    { name: "Steel Wave", logo: "/companies/steelwave.webp" },
    { name: "SteelX", logo: "/companies/steelx.webp" },
    { name: "Vishwakarma", logo: "/companies/vishwakarma.webp" },
  ];

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="mt-12">
      <p className="text-xl mb-6 opacity-90 text-center ">Trusted by</p>

      <div className="relative overflow-hidden">
        <div className="flex items-center gap-8 animate-slide pause">
          {duplicatedCompanies.map((company, index) => (
            <div key={`${company.name}-${index}`} className="flex-shrink-0">
              <div className=" transition-all duration-300">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={80}
                  height={32}
                  className="h-10 w-24  object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  priority
                />
                <span className="text-sm text-white/50">
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
