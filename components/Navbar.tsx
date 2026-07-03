"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Monogram from "./Monogram";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${
        scrolled
          ? "bg-obsidian/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-gradient-to-b from-obsidian/60 to-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-3 group">
          <Monogram size={38} />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-ivory group-hover:text-gold transition-colors duration-300">
              Signature Detail
            </span>
            <span className="text-[9px] uppercase tracking-widest2 text-silver-dim">
              Montreal
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs uppercase tracking-widest2 font-medium transition-colors duration-300 ${
                  active ? "text-gold" : "text-silver hover:text-ivory"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-gold">
            Book Now
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ivory p-2 -mr-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-obsidian/98 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-widest2 font-medium ${
                    pathname === link.href ? "text-gold" : "text-silver"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-gold mt-2 w-full">
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
