"use client";

import { Home, Briefcase, Phone } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import Image from "next/image";

export default function Header() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Services", url: "#services", icon: Briefcase },
    { name: "Testimonials", url: "#testimonials", icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur" style={{ backgroundColor: "hsla(var(--background) / 0.95)", backdropFilter: "blur(4px)" }} role="banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center">
          {/* Left: Brand */}
          <div className="flex-1 flex items-center min-w-0">
            <Image className="gap-2 object-contain" src="/plain.webp" alt="ScaleOxperts" width={40} height={40} />
            <h1 className="text-2xl font-bold text-primary truncate">ScaleOxperts</h1>
          </div>

          {/* Center: NavBar (Desktop Only, absolutely centered and vertically aligned) */}
          <div className="hidden md:flex absolute left-1/2 inset-y-0 -translate-x-1/2 items-center">
            <NavBar items={navItems} className="!relative !top-0 !left-0 !-translate-x-0 !mb-0 !sm:pt-0" />
          </div>

          {/* Right: Book Call Button */}
          <div className="flex-1 flex justify-end items-center">
            <button className="hidden md:block bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              <a href="https://cal.com/scaleoxperts-zmmvor/30min" target="_blank" rel="noopener noreferrer">Book Call</a>
            </button>
            {/* Mobile Book Call Button */}
            <button className="md:hidden bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              <a href="https://cal.com/scaleoxperts-zmmvor/30min" target="_blank" rel="noopener noreferrer">Book Call</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}