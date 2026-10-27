"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, MapPin, ArrowUpRight, Shield } from "lucide-react";

export default function Footer() {
  const whatsappUrl =
    "https://wa.me/919643903008?text=Hi%20UXGen%2C%20mujhe%20apne%20business%20ke%20liye%20baat%20karni%20hai";

  return (
    <footer className="relative bg-[#0A0F1D] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-300">
      {/* Subtle Amber Glow */}
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#F59E0B]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="rounded-xl overflow-hidden border border-[#FBBF24]/50 shadow-[0_2px_10px_rgba(251,191,36,0.2)] flex-shrink-0">
                <Image
                  src="/images/uxgen-logo.jpg"
                  alt="UXGen Marketing Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                UXGen <span className="text-[#FBBF24]">Marketing</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              India ke MSME business owners ka apna Digital Growth Partner. Hum aapko digital presence, roz ka fresh content, performance ads aur WhatsApp automation se seedha customers dete hain.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-200/90 pt-1">
              <Shield className="w-4 h-4 text-[#FBBF24]" />
              <span>Reliable. Transparent. Direct WhatsApp Leads.</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#problem" className="hover:text-white transition-colors">
                  Problem (Nuksaan Kyun?)
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-white transition-colors">
                  Our 4 Pillars
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services (Expertise)
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-white transition-colors">
                  Leadership (Manoj Chaurasia)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp Column */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
              Direct Helpline
            </p>
            <p className="text-xs text-slate-400">
              Kisi bhi sawaal ke liye bejhijhak WhatsApp par connect karein.
            </p>

            <div className="pt-2 space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-[#FBBF24]/50 text-sm font-semibold text-white transition-all group"
              >
                <MessageSquare className="w-4 h-4 text-[#FBBF24]" />
                <span>+91 96439 03008</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>New Delhi, India • Serving MSMEs Pan India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Attribution & Copyright (Mandatory requirement) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            <span className="text-slate-200 font-semibold">UXGen Marketing</span> is the project of{" "}
            <span className="text-slate-200 font-semibold">UXGen Technologies Pvt. Ltd.</span>
          </p>
          <p>
            &copy; {new Date().getFullYear() || 2026} UXGen Technologies Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
