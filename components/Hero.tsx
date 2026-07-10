"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GoldSeam from "./GoldSeam";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/images/gallery/bmw-x6m-front.jpg"
        alt="BMW X6 M freshly detailed by Signature Detail in Montreal"
        fill
        priority
        sizes="100vw"
        quality={80}
        className="object-cover scale-105"
      />
      <div className="absolute inset-0 bg-obsidian/60" />
      <div className="absolute inset-0 bg-fade-black" />
      <div className="absolute inset-0 bg-fade-black-top opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <GoldSeam align="center" />
          <p className="eyebrow mt-5">Montreal &mdash; By Appointment</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6"
        >
          <span className="block font-display font-light text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] text-ivory">
            Signature <span className="italic text-gold">Detail</span>
          </span>
          <span className="block font-body font-normal text-lg sm:text-xl md:text-2xl text-silver mt-5 tracking-wide">
            Premium Mobile Auto Detailing in Montreal
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-silver text-base sm:text-lg font-light tracking-wide leading-relaxed"
        >
          We provide meticulous interior and exterior detailing with one
          goal: making your vehicle look its absolute best. Whether it&apos;s
          your daily driver or your weekend car, every vehicle receives the
          same attention to detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/contact" className="btn-gold w-full sm:w-auto">
            Book Now
          </Link>
          <Link href="/services" className="btn-outline w-full sm:w-auto">
            View Services
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-silver-dim"
      >
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
