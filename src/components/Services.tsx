"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Scissors,
  Stethoscope,
  Building2,
  UtensilsCrossed,
  HeartHandshake,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const niches = [
    {
      id: "coaching-schools",
      icon: GraduationCap,
      category: "Coaching & Schools",
      tagline: "Admission Enquiry Badhayein",
      desc: "Local area ke parents aur students tak high-converting ads aur reels. Direct WhatsApp par session booking aur admission calls.",
      stat: "3x More Admissions",
      href: "#",
      image: "/images/coaching-schools.jpg", // <-- 1
    },
    {
      id: "salon-parlour",
      icon: Scissors,
      category: "Unisex Saloons & Parlours",
      tagline: "Daily Booking Full Karein",
      desc: "Men's salons aur beauty parlours ke liye weekend slots aur bridal/groom packages ki advance booking machine.",
      stat: "100% Chair Occupancy",
      href: "#",
      image: "/images/salon-parlour.jpg", // <-- 2
    },
    {
      id: "doctors-clinics",
      icon: Stethoscope,
      category: "Doctors & Clinics",
      tagline: "Patient Appointment Badhayein",
      desc: "Local health queries par aapka clinic #1 dikhega. WhatsApp par direct appointment booking aur reminder system.",
      stat: "40+ Weekly Appointments",
      href: "#",
      image: "/images/doctors-clinics.jpg", // <-- 3
    },
    {
      id: "real-estate",
      icon: Building2,
      category: "Real Estate & Builders",
      tagline: "Genuine Buyer Leads Payein",
      desc: "Bina kisi timepass leads ke, verified budget wale property buyers aur site visit seekers seedha WhatsApp par.",
      stat: "High-Ticket Verified Leads",
      href: "#",
      image: "/images/real-estate.jpg", // <-- 4
    },
    {
      id: "restaurant-cafe",
      icon: UtensilsCrossed,
      category: "Restaurant & Cafe",
      tagline: "Zomato se Zyada Direct Order Layein",
      desc: "Zomato/Swiggy ka high commission bachayein. Apne local area ke foodies ko reels aur offers se direct loyal customer banayein.",
      stat: "Save 25-30% Commission",
      href: "#",
      image: "/images/restaurant-cafe.jpg", // <-- 5
    },
    {
      id: "ngo-foundation",
      icon: HeartHandshake,
      category: "NGO & Foundation",
      tagline: "Donor aur Volunteer Jodein",
      desc: "Aapke nek kaam ki authentic stories banakar national aur international level par trust banayein aur donations generate karein.",
      stat: "Active Donor Network",
      href: "#",
      image: "/images/ngo-foundation.jpg", // <-- 6
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-[#FFFDF5]">
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#FEF3C7] blur-3xl pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-amber-200/70 text-[#92400E] text-xs sm:text-sm font-semibold mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>Niche Focused Growth Engines</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#101828] tracking-tight"
          >
            In Business Ke Liye <span className="text-[#F59E0B]">Hum Expert Hain</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-xl text-[#475467] leading-relaxed"
          >
            Apna business chunein, dekhein hum aapke liye kya kar sakte hain. Har business ki alag strategy aur guaranteed WhatsApp leads.
          </motion.p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {niches.map((niche, index) => {
            const Icon = niche.icon;
            return (
              <motion.div
                key={niche.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-amber-300 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* DYNAMIC THUMBNAIL - Ab har card ka alag image */}
                <div className="relative w-full h-full overflow-hidden bg-[#FEF3C7]">
                  <img
                    src={niche.image}
                    alt={niche.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                </div>

                <div className="relative z-10 p-7 sm:p-8 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl border border-amber-200/60 bg-[#FEF3C7] text-[#D97706] flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text- font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FEF3C7] border border-amber-200/50 text-[#92400E]">
                        {niche.stat}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#101828] mb-1.5 group-hover:text-[#D97706] transition-colors">
                      {niche.category}
                    </h3>

                    <p className="text-sm font-semibold text-[#D97706] mb-3.5">
                      {niche.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                      {niche.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                    <a
                      href={niche.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#101828] group-hover:text-[#D97706] transition-colors"
                    >
                      <span>Explore Strategy</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href={`https://wa.me/919643903008?text=Hi%20UXGen%2C%20mujhe%20${encodeURIComponent(
                        niche.category
                      )}%20ke%20liye%20growth%20plan%20chahiye`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text- font-bold px-3.5 py-1.5 rounded-lg bg-[#FEF3C7] hover:bg-[#FDE68A] border border-amber-200 text-[#92400E] transition-colors"
                    >
                      Book Strategy
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center text-sm text-[#475467]"
        >
          <span>Aapka business list me nahi hai? </span>
          <a
            href="https://wa.me/919643903008?text=Hi%20UXGen%2C%20mera%20business%20alag%20niche%20hai%2C%20kya%20aap%20help%20kar%20sakte%20hain%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D97706] underline underline-offset-4 hover:text-[#B45309] font-bold"
          >
            WhatsApp par bataiye, hum custom blueprint banayenge &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}