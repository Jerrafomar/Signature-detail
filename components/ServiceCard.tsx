import { Check, LucideIcon } from "lucide-react";
import type { ServiceItem } from "@/lib/data";

type ServiceCardProps = ServiceItem & {
  icon: LucideIcon;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  comingSoon,
}: ServiceCardProps) {
  return (
    <div className="card-luxury p-8 md:p-9 h-full flex flex-col relative">
      {comingSoon && (
        <span className="absolute top-6 right-6 text-[10px] uppercase tracking-widest2 text-gold border border-gold/40 px-3 py-1">
          Coming Soon
        </span>
      )}
      <Icon size={28} strokeWidth={1.25} className="text-gold" />
      <h3 className="font-display text-2xl md:text-[1.7rem] text-ivory mt-6">
        {title}
      </h3>
      <div className="divider-gold my-5" />
      <p className="body-copy text-sm md:text-[0.95rem] flex-1">
        {description}
      </p>
      <ul className="mt-6 space-y-2.5 pt-6 border-t border-white/10">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-xs md:text-sm text-silver">
            <Check size={14} className="text-gold shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
