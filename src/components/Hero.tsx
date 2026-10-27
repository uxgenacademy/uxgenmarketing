"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/919643903008?text=Hi%20UXGen%2C%20mujhe%20apne%20business%20ke%20liye%20free%20advice%20chahiye";

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-[#FFFBEB]">
      {/* Large Soft Amber Glow Blob */}
      <div className="absolute -top-20 -left-20 w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] rounded-full bg-[#FEF3C7] blur-3xl pointer-events-none opacity-80" />

      {/* Right Side Dark / Warm Gradient Depth */}
      <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full bg-gradient-to-bl from-[#2D2A1F]/10 via-[#44403C]/5 to-transparent pointer-events-none" />

      {/* Subtle Warm Dots Pattern */}
      <div className="absolute inset-0 bg-warm-dots pointer-events-none opacity-70" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Eyebrow Tag: Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-amber-200/70 shadow-sm mb-6 sm:mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#D97706]" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#92400E]">
            India ke Har Business Owner ke Liye <span className="text-[#B45309] font-bold">Digital Partner</span>
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-ping" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#101828] leading-[1.18] sm:leading-[1.15] max-w-5xl mx-auto"
        >
          Aapka Business <span className="gold-gradient-text">Best Hai</span>, <br className="hidden sm:inline" />
          Par Customer <span className="text-[#F59E0B]">Online Dhoondh</span> Raha Hai.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl md:text-2xl text-[#475467] font-normal max-w-3xl mx-auto leading-relaxed"
        >
          Hum MSME ko Digital se jodte hain -{" "}
          <span className="text-[#101828] font-semibold">Roz Naye Customer</span>, WhatsApp par{" "}
          <span className="text-[#D97706] font-semibold underline decoration-[#F59E0B] underline-offset-4">
            Direct Enquiry
          </span>
          . Koi tech jargon nahi, seedha result.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* Primary CTA: Amber Yellow */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-black bg-[#FBBF24] hover:bg-[#FFC233] shadow-[0_4px_20px_rgba(251,191,36,0.4)] hover:shadow-[0_8px_25px_rgba(251,191,36,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-base sm:text-lg border border-amber-400/40"
          >
            <MessageCircle className="w-5 h-5 text-black fill-black/20" />
            <span>WhatsApp Par Free Advice Lein</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </a>

          {/* Secondary CTA: White Card with Border */}
          <a
            href="#solution"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-black bg-white border border-gray-200 shadow-sm hover:border-amber-400 hover:bg-[#FFFDF5] transition-all duration-300 text-base"
          >
            <Zap className="w-4 h-4 text-[#D97706]" />
            <span>Kaise Kaam Karta Hai Dekhein</span>
          </a>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 sm:mt-16 pt-8 border-t border-amber-200/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {/* Badge 1 */}
          <div className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2 text-[#D97706] mb-1">
              <Users className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-extrabold text-[#101828] tracking-tight">6.3 Cr+</span>
            </div>
            <p className="text-xs sm:text-sm text-[#475467] font-medium">MSME Market Potential</p>
          </div>

          {/* Badge 2 */}
          <div className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2 text-[#D97706] mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-extrabold text-[#101828] tracking-tight">70% Focus</span>
            </div>
            <p className="text-xs sm:text-sm text-[#475467] font-medium">Direct Leads, Not Vanity</p>
          </div>

          {/* Badge 3 */}
          <div className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2 text-emerald-600 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-extrabold text-[#101828] tracking-tight">Instant</span>
            </div>
            <p className="text-xs sm:text-sm text-[#475467] font-medium">WhatsApp Notification</p>
          </div>

          {/* Badge 4 */}
          <div className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2 text-amber-600 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-extrabold text-[#101828] tracking-tight">Zero</span>
            </div>
            <p className="text-xs sm:text-sm text-[#475467] font-medium">Tech Fear / Complexities</p>
          </div>
        </motion.div>

        {/* Live Simulation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 max-w-lg mx-auto p-4 rounded-2xl bg-white border border-amber-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex items-center justify-between gap-3 text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FEF3C7] border border-amber-200 flex items-center justify-center text-[#D97706] shrink-0">
              <MessageCircle className="w-5 h-5 fill-amber-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-xs font-bold text-[#101828]">Naya Customer Enquiry Aayi</p>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] font-bold">
                  Just Now
                </span>
              </div>
              <p className="text-xs text-[#475467] truncate mt-0.5">
                &ldquo;Sir, mujhe aapke services ke baare me detail chahiye...&rdquo;
              </p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-[#B45309] whitespace-nowrap hidden sm:inline-block">
            Auto WhatsApp
          </span>
        </motion.div>
      </div>
    </section>
  );
}
