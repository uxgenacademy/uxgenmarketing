import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
  const floatingWhatsAppUrl =
    "https://wa.me/919643903008?text=Hi%20UXGen%2C%20mujhe%20apne%20business%20ko%20online%20grow%20karna%20hai";

  return (
    <main className="relative min-h-screen bg-[#FFFBEB] text-[#475467] selection:bg-[#F59E0B] selection:text-black overflow-x-hidden">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Loss Aversion / Problem Section */}
      <Problem />

      {/* Solution - Our 4 Pillars */}
      <Solution />

      {/* Services We Serve Best */}
      <Services />

      {/* Founder Section */}
      <Founder />

      {/* Final Big Glow CTA */}
      <CTA />

      {/* Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Quick Action Button */}
      <aside aria-label="WhatsApp Quick Connect" className="fixed bottom-6 right-6 z-40">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold text-sm shadow-[0_4px_25px_rgba(16,185,129,0.5)] hover:shadow-[0_6px_35px_rgba(16,185,129,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-300/30"
          aria-label="Direct WhatsApp Chat"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
          <MessageCircle className="w-5 h-5 fill-white/20" />
          <span className="hidden sm:inline-block tracking-wide">
            WhatsApp Par Baat Karein
          </span>
        </a>
      </aside>
    </main>
  );
}
