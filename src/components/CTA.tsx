"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function CTA() {
  const whatsappUrl =
    "https://wa.me/919643903008?text=Hi%20UXGen%2C%20mujhe%20apne%20business%20ke%20liye%20digital%20growth%20chahiye";

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0F172A]">
      {/* Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" />

      {/* Massive Center Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] bg-[#F59E0B]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-8 sm:p-14 md:p-16 bg-[#1E293B]/70 backdrop-blur border border-amber-400/30 shadow-[0_20px_70px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Badge Inside Dark */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E293B] border border-amber-400/30 text-[#FBBF24] text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-[#FBBF24]" />
            <span>Mauka Hath Se Mat Jaane Dijiye</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Ab Sochna Band, <br />
            <span className="text-[#FBBF24]">Customer Lana Start Karein</span>.
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Aapka competitor already roz WhatsApp par naye enquiries le raha hai. 
            Aaj hi humare saath apna digital system set karein aur roz direct enquiries payein.
          </p>

          {/* Big Glow CTA Button: Amber Gold */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-black text-lg sm:text-xl bg-[#FBBF24] hover:bg-[#FFC233] shadow-[0_0_35px_rgba(255,194,51,0.45)] hover:shadow-[0_0_50px_rgba(255,194,51,0.65)] hover:scale-105 active:scale-[0.98] transition-all duration-300 border border-amber-300/40"
            >
              <MessageSquare className="w-6 h-6 text-black fill-black/20" />
              <span>WhatsApp Par Shuruat Karein</span>
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Micro Perks Below Button */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FBBF24]" />
              <span>Instant WhatsApp Connect</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>No Spam • 100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FBBF24]" />
              <span>Zero Tech Knowledge Required</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
