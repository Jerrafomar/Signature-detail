type MonogramProps = {
  size?: number;
  ringed?: boolean;
  className?: string;
};

export default function Monogram({ size = 44, ringed = true, className = "" }: MonogramProps) {
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {ringed && (
        <span className="absolute inset-0 rounded-full border border-gold/50" />
      )}
      {ringed && (
        <span className="absolute inset-[3px] rounded-full border border-gold/20" />
      )}
      <span
        className="font-display italic text-gold"
        style={{ fontSize: size * 0.42, lineHeight: 1 }}
      >
        SD
      </span>
    </div>
  );
}
