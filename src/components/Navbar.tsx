"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "Services", href: "#services" },
    { name: "Founder", href: "#founder" },
  ];

  const whatsappUrl = "https://wa.me/919643903008?text=Hi%20UXGen%2C%20mujhe%20apne%20business%20ko%20grow%20karna%20hai";

  return (
    <header className="fixed top-0 sm:top-3 left-0 right-0 z-50 px-3 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl sm:rounded-full bg-[#0F172A]/95 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 ${
            scrolled ? "shadow-[0_10px_35px_rgba(0,0,0,0.4)] border-amber-500/20" : ""
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="rounded-xl overflow-hidden border border-[#FBBF24]/50 shadow-[0_2px_10px_rgba(251,191,36,0.2)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#FBBF24] flex-shrink-0">
              <Image
                src="/images/uxgen-logo.jpg"
                alt="UXGen Marketing Logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                UXGen <span className="text-[#FBBF24] font-extrabold">Marketing</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-amber-200/90 font-semibold">
                MSME Digital Growth Partner
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 hover:scale-105 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#FBBF24] after:to-[#F59E0B] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-black bg-[#FBBF24] hover:bg-[#FFC233] shadow-[0_0_20px_rgba(255,194,51,0.3)] hover:shadow-[0_0_25px_rgba(255,194,51,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 text-black fill-black/20" />
              <span className="tracking-wide">WhatsApp Par Baat Karein</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 border border-white/10 text-white hover:text-[#FBBF24] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#0F172A]/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-[#FBBF24] transition-colors py-2 border-b border-white/10 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-black bg-[#FBBF24] hover:bg-[#FFC233] shadow-[0_0_20px_rgba(255,194,51,0.3)] text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Par Baat Karein</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
