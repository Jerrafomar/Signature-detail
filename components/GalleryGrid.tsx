"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/lib/data";

const heightForSpan: Record<string, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  normal: "aspect-square",
};

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return galleryItems;
    return galleryItems.filter((g) => g.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {(["All", ...galleryCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative px-5 py-2.5 text-xs uppercase tracking-widest2 font-medium border transition-all duration-400 ease-luxury ${
              active === cat
                ? "border-gold text-gold bg-gold/5"
                : "border-white/15 text-silver hover:border-silver/50 hover:text-ivory"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 break-inside-avoid"
            >
              <div className="group relative overflow-hidden border border-white/10">
                <div className={`relative w-full ${heightForSpan[item.span]}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                    className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-luxury">
                  <p className="text-[10px] uppercase tracking-widest2 text-gold">
                    {item.category}
                  </p>
                  <p className="font-display text-lg text-ivory mt-1">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-silver mt-16">
          No pieces in this category yet.
        </p>
      )}
    </div>
  );
}
