"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Award, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function Founder() {
  const whatsappUrl =
    "https://wa.me/919643903008?text=Hi%20Manoj%20Sir%2C%20mujhe%20apne%20business%20growth%20ke%20liye%20guidance%20chahiye";

  return (
    <section id="founder" className="relative py-24 sm:py-32 overflow-hidden bg-[#FFFBEB]">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-[#FEF3C7] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-[#F59E0B]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-white border border-gray-100 shadow-[0_12px_45px_rgba(0,0,0,0.06)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Founder Photo Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative group">
                {/* Subtle Amber Glow behind Photo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-500" />

                {/* Photo Container with Gold Border */}
                <div className="relative w-64 h-72 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#F59E0B] shadow-[0_10px_30px_rgba(245,158,11,0.2)] bg-slate-100">
                  <Image
                    src="/images/manoj.jpg"
                    alt="Manoj Chaurasia - Founder & Growth Leader"
                    fill
                    className="object-cover object-top transition-all duration-500"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Badge Overlay */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-white border border-[#F59E0B]/60 shadow-lg flex items-center gap-2 whitespace-nowrap">
                  <Award className="w-4 h-4 text-[#D97706]" />
                  <span className="text-xs sm:text-sm font-bold text-[#101828] tracking-wide">
                    20+ Years Expertise
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Founder Description Column */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border border-amber-200/80 text-[#92400E] text-xs font-semibold mb-4">
                <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                <span>Leadership & Vision</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101828] tracking-tight">
                Led by <span className="gold-gradient-text">Manoj Chaurasia</span>
              </h2>

              <p className="mt-2 text-sm sm:text-base font-bold text-[#D97706]">
                20+ Years of Expertise in Lead Generation & Business Growth
              </p>

              {/* Core Statement from Prompt */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#FFF8E7] border-l-4 border-l-[#F59E0B] border-amber-100">
                <p className="text-base sm:text-lg text-[#101828] leading-relaxed italic">
                  &ldquo;Ye project unke leadership me MSME ke liye banaya gaya hai - taaki chhote aur madhyam vyapariyon ko online customer laane ke liye kisi technical jhamela ya mehengi agency ke chakkar me na padna pade.&rdquo;
                </p>
              </div>

              {/* Credibility Points */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475467]">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Seedha WhatsApp par enquiries, no fake promises</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475467]">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Indian MSME mindset aur market ki gehraai se samajh</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475467]">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Zero tech fear - sab kuch humari expert team handle karti hai</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475467]">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Roz ki lead aur business revenue par 100% focus</span>
                </div>
              </div>

              {/* No Form, ONLY WhatsApp CTA */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-black bg-[#FBBF24] hover:bg-[#FFC233] shadow-[0_4px_20px_rgba(251,191,36,0.35)] hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5 text-black fill-black/20" />
                  <span>Manoj Sir Se WhatsApp Par Direct Baat Karein</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </a>

                <span className="text-xs text-[#475467] font-medium">
                  No forms to fill. Direct 1-on-1 guidance.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
