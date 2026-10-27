"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Video,
  Target,
  MessageCircle,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Shield,
} from "lucide-react";

export default function Solution() {
  const pillars = [
    {
      number: "Pillar 01",
      icon: Megaphone,
      title: "Digital Presence",
      subtitle: "Google aur Insta ko professional banana",
      desc: "Google Business Profile ko top par rank karwayenge, Instagram aur Website aisi banayenge ki customer dekhte hi impress ho jaye.",
      features: [
        "Google Maps Top 3 Ranking",
        "Verified Professional Instagram",
        "Fast 1-Second Mobile Landing Page",
        "5-Star Customer Review Engine",
      ],
      image: "images/Digital-Presence.jpg", // <-- 01 ka image
    },
    {
      number: "Pillar 02",
      icon: Video,
      title: "Content Engine",
      subtitle: "Aapke business ka roz fresh content",
      desc: "Aapko camera ke aage aane ki tension nahi. Hum aapke business ke liye high-converting reels, videos aur creative posts roz ready karenge.",
      features: [
        "Viral Short Reels & Edits",
        "High Quality Graphic Posts",
        "Customer Story & Case Studies",
        "Roz Brand Recall in Your Local Area",
      ],
      image: "images/Content-Engine.jpg", // <-- 02 ka image
    },
    {
      number: "Pillar 03",
      icon: Target,
      title: "Performance Marketing",
      subtitle: "Meta & Google Ads se direct lead",
      desc: "Hum sirf views nahi late. Aapke sheher ke genuine buyers ko targeted ads dikha kar seedha aapke paas customer bhejte hain.",
      features: [
        "Hyper-Local Pincode Targeting",
        "Meta (Facebook & Insta) Lead Ads",
        "Google High-Intent Search Ads",
        "Lowest Cost Per Genuine Customer",
      ],
      image: "images/Performance-Marketing.jpg", // <-- 03 ka image
    },
    {
      number: "Pillar 04",
      icon: MessageCircle,
      title: "WhatsApp Automation",
      subtitle: "Har lead ka instant auto follow-up",
      desc: "Jaise hi koi customer enquire karega, turant 2 second me auto-reply, rate card ya brochure chala jayega. Ek bhi lead miss nahi hogi.",
      features: [
        "Instant 24/7 Welcome Message",
        "Auto Rate Card & Catalog Share",
        "Automated Follow-up Reminders",
        "Zero Missed Customer Guarantee",
      ],
      image: "images/WhatsApp-Automation.jpg", // <-- 04 ka image
    },
  ];

  return (
    <section id="solution" className="relative py-24 sm:py-32 overflow-hidden bg-[#FFFBEB]">
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-[#FEF3C7] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-amber-200/70 text-[#92400E] text-xs sm:text-sm font-semibold mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>Hum MSME ke Digital Growth Partner Hain</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#101828] tracking-tight"
          >
            Hum Kya Karenge? <span className="gold-gradient-text">Simple Hai</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-xl text-[#475467] leading-relaxed"
          >
            Hum koi fancy agency ki tarah baatein nahi banate. Humare 4 mazboot pillars se aapke paas 
            <span className="text-[#101828] font-semibold"> seedhe khareedne wale customers</span> laate hain.
          </motion.p>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative group rounded-3xl p-7 sm:p-9 bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-amber-200 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl border border-amber-200/60 bg-[#FEF3C7] text-[#D97706] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3.5 py-1 rounded-xl bg-[#FBBF24] text-black font-extrabold text-xs sm:text-sm tracking-wider shadow-sm">
                      {pillar.number}
                    </span>
                  </div>

                  {/* DYNAMIC THUMBNAIL - Ab har card ka alag */}
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full object-cover rounded-xl mb-5 border border-white/10" 
                  />

                  <h3 className="text-2xl font-bold text-[#101828] mb-1.5 group-hover:text-[#D97706] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#D97706] mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-[#475467] text-sm sm:text-base leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 space-y-2.5">
                  {pillar.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#475467]">
                      <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pillar Summary Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-amber-200/70 shadow-[0_10px_35px_rgba(0,0,0,0.04)] text-center flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] border border-amber-200 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-[#D97706]" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-[#101828]">
                Hum Sirf Branding Nahi, Direct Customer Dete Hain
              </p>
              <p className="text-xs sm:text-sm text-[#475467]">
                Aapke phone par roz genuine enquiries ayengi jinhe aap seedha deal me convert kar sakte hain.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/919643903008?text=Hi%20UXGen%2C%20mujhe%204%20pillars%20samajh%20aaye%2C%20apne%20business%20ke%20liye%20baat%20karni%20hai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-black bg-[#FBBF24] hover:bg-[#FFC233] hover:scale-105 transition-all text-sm whitespace-nowrap shadow-[0_4px_16px_rgba(251,191,36,0.3)]"
          >
            <span>Plan Discuss Karein</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}