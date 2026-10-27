"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserX, TrendingDown, Smartphone, AlertTriangle, ArrowRight } from "lucide-react";

export default function Problem() {
  const cards = [
    {
      icon: UserX,
      title: "Customer Badal Gaya Hai",
      highlight: "90% Log Online Check Karte Hain",
      description:
        "Aaj 90% customer Aapke Website/LandingPage/Digital Shop, Google / Facebook, Instagram, Youtube, LinkedIn par dekh kar hi dukaan aata hai. Aap wahan nahi dikhe to wo seedha aapke padosi ki dukaan chala gaya.",
      impact: "Aapki dukaan ka customer koi aur le gaya.",
      badgeText: "Lost Footfall",
      iconColor: "text-[#FBBF24]",
      image: "images/Customer-Badal-Gaya-Hai.jpg", // <-- Yahan apni image ka URL
    },
    {
      icon: TrendingDown,
      title: "Roz Ka Nuksaan",
      highlight: "10-20 Customers Lost Daily",
      description:
        "Bina Google Profile aur Ads ke aap roz 10-20 customer chhod rahe ho. Ye mahine ke lakhon rupaye ka direct revenue loss hai jo aap notice bhi nahi kar paate.",
      impact: "Mahine ka ₹1,00,000+ ka invisible loss.",
      badgeText: "Daily Revenue Leak",
      iconColor: "text-[#FBBF24]",
      image: "images/Roz-Ka-Nuksaan.jpg", // <-- 2nd card ka alag image
    },
    {
      icon: Smartphone,
      title: "Bharosa Online Banta Hai",
      highlight: "Reviews & Reels Se Trust Banta Hai",
      description:
        "Bina Reels, Reviews aur Website ke customer ko bharosa nahi aata. Naya customer hamesha usi par vishwas karta hai jo internet par active aur professional dikhta hai.",
      impact: "Bina online presence ke trust zero rehta hai.",
      badgeText: "Zero Online Trust",
      iconColor: "text-[#FBBF24]",
      image: "images/Bharosa-Online-Banta-Hai.jpg", // <-- 3rd card ka alag image
    },
  ];

  return (
    <section id="problem" className="relative py-24 sm:py-32 overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-[#F59E0B]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-amber-400/30 text-[#FBBF24] text-xs sm:text-sm font-semibold mb-4"
          >
            <AlertTriangle className="w-4 h-4 text-[#FBBF24]" />
            <span>Kadi Sachhai: The Cost of Waiting</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Agar Aap Aapne Business ko Online Nahi Le Kar Gaye, <br className="hidden sm:inline" />
            To <span className="text-[#FBBF24]">Nuksaan Pakka Hai</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Pehle ke samay mein business zyadatar word-of-mouth aur purane references par chalta tha. Lekin aaj ka buyer koi bhi faisla lene se pehle apna mobile nikal kar aapko aur aapke business ko online check karta hai. Agar aapka <b>Google Business Profile</b> properly optimized nahi hai, <b>Google Reviews</b> nahi hain, ek dedicated <b>Landing Page / Digital Shop</b> missing hai, aur aap <b>Social Media (Facebook, Instagram, YouTube, LinkedIn)</b> par active nahi hain, toh aap un naye customers ko kho rahe hain jo roz online search kar rahe hain. Aaj hi apne business ko digital face dein aur aage badhein.
          </motion.p>
        </div>

        {/* 3 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-3xl p-7 sm:p-8 bg-[#1E293B]/70 backdrop-blur border border-white/[0.08] hover:border-amber-400/40 shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-amber-400/20 flex items-center justify-center text-[#FBBF24] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text- font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {card.badgeText}
                    </span>
                  </div>

                  {/* DYNAMIC IMAGE - Ab har card ka alag */}
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-48 object-cover rounded-xl mb-5 border border-white/10" 
                  />

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#FBBF24] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-bold text-[#FBBF24] uppercase tracking-wide mb-4">
                    {card.highlight}
                  </p>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-rose-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    {card.impact}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner same */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 p-6 sm:p-7 rounded-2xl bg-[#1E293B] border border-white/10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Kahi aapka business bhi roz yahi galti to nahi kar raha?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Bina kisi heavy software ya technical team ke, ye sab 7 din me theek ho sakta hai.
            </p>
          </div>
          <a
            href="https://wa.me/919643903008?text=Hi%20UXGen%2C%20mujhe%20apna%20business%20check%20karwana%20hai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FBBF24] hover:bg-[#FFC233] text-black text-sm font-bold shadow-[0_0_20px_rgba(255,194,51,0.3)] transition-all whitespace-nowrap hover:scale-105"
          >
            <span>Free Audit Karwayein</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}