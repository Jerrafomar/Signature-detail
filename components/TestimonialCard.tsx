import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data";

export default function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <div className="card-luxury p-8 md:p-10 h-full flex flex-col">
      <Quote size={26} strokeWidth={1} className="text-gold" />
      <p className="font-display text-xl md:text-2xl font-light italic text-ivory mt-6 leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-sm text-ivory font-medium">{name}</p>
        <p className="text-xs uppercase tracking-widest2 text-gold mt-1">
          {role}
        </p>
      </div>
    </div>
  );
}
