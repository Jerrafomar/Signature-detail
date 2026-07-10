import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Monogram from "./Monogram";
import GoldSeam from "./GoldSeam";

const TikTokIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.6 5.82c-1.02-.9-1.6-2.16-1.6-3.6V2h-3.4v14.4a2.6 2.6 0 1 1-1.84-2.49v-3.5a6.02 6.02 0 0 0-1.16-.11A6.05 6.05 0 1 0 14.6 16.4V9.13a7.03 7.03 0 0 0 4.4 1.54V7.3c-.86 0-1.68-.24-2.4-.7-.36-.23-.7-.5-1-.78Z" />
  </svg>
);

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "Luxury Car Detailing" },
  { href: "/services", label: "Ceramic Coating" },
  { href: "/services", label: "Aircraft Cabin Detailing" },
  { href: "/services", label: "Paint Protection" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Monogram size={42} />
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl text-ivory">
                  Signature Detail
                </span>
                <span className="text-[9px] uppercase tracking-widest2 text-silver-dim mt-1">
                  Montreal, Quebec
                </span>
              </div>
            </Link>
            <p className="body-copy mt-6 max-w-sm text-sm">
              Luxury detailing for exotic cars and private aircraft. Precision,
              professionalism and premium results — every time.
            </p>
            <GoldSeam className="mt-8" />
          </div>

          <div>
            <h4 className="eyebrow mb-5">Navigate</h4>
            <ul className="space-y-3">
              {siteLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-silver hover:text-gold transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.href}
                    className="text-sm text-silver hover:text-gold transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-silver">
            <a
              href="mailto:info@signaturedetail.ca"
              className="flex items-center gap-2 hover:text-gold transition-colors duration-300"
            >
              <Mail size={14} className="text-gold" />
              info@signaturedetail.ca
            </a>
            <a
              href="tel:+15147069774"
              className="flex items-center gap-2 hover:text-gold transition-colors duration-300"
            >
              <Phone size={14} className="text-gold" />
              (514) 706-9774
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-gold" />
              Montreal, Quebec
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-silver hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-silver hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-silver hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center md:text-left text-xs text-silver-dim">
          © {new Date().getFullYear()} Signature Detail. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
