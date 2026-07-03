import Link from "next/link";
import GoldSeam from "@/components/GoldSeam";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <GoldSeam align="center" />
      <p className="eyebrow mt-5">Error 404</p>
      <h1 className="font-display font-light text-6xl md:text-8xl text-ivory mt-4">
        Off the <span className="italic text-gold">Map</span>
      </h1>
      <p className="body-copy mt-5 max-w-md">
        The page you&apos;re looking for has been moved, renamed, or never
        existed. Let&apos;s get you back on the road.
      </p>
      <Link href="/" className="btn-gold mt-10">
        Return Home
      </Link>
    </section>
  );
}
