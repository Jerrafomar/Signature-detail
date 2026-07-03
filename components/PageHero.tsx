"use client";

import { motion } from "framer-motion";
import GoldSeam from "./GoldSeam";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
};

export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative h-[56vh] min-h-[420px] w-full overflow-hidden flex items-end">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-obsidian/70" />
      <div className="absolute inset-0 bg-fade-black" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10 pb-14 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <GoldSeam />
          <p className="eyebrow mt-5">{eyebrow}</p>
          <h1 className="font-display font-light text-5xl sm:text-6xl md:text-7xl text-ivory mt-4">
            {title}
          </h1>
          {description && (
            <p className="body-copy mt-5 max-w-xl">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
