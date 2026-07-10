type GoldSeamProps = {
  align?: "left" | "center";
  className?: string;
};

/**
 * The brand's signature motif: a fine coachline with a rotated diamond
 * marker, echoing the pinstriping and badge details found on the hoods
 * of the vehicles Signature Detail cares for.
 */
export default function GoldSeam({ align = "left", className = "" }: GoldSeamProps) {
  return (
    <div
      className={`flex items-center gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      } ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/80" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold/80" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/80" />
    </div>
  );
}
