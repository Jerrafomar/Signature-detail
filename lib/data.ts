export type ServiceItem = {
  title: string;
  description: string;
  features: string[];
  comingSoon?: boolean;
};

export type ServiceGroup = {
  category: string;
  kicker: string;
  image: string;
  items: ServiceItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    category: "Luxury Car Detailing",
    kicker: "For the Road",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    items: [
      {
        title: "Interior Deep Cleaning",
        description:
          "A meticulous, hand-finished restoration of every surface within the cabin — from headliner to footwell.",
        features: ["Steam extraction", "Alcantara & suede care", "Odor neutralization"],
      },
      {
        title: "Exterior Wash",
        description:
          "A contactless, multi-stage hand wash system engineered to protect delicate paintwork and finishes.",
        features: ["pH-neutral foam bath", "Two-bucket hand wash", "Spot-free rinse"],
      },
      {
        title: "Paint Protection",
        description:
          "Layered protective films and sealants that shield your vehicle's finish from the elements and time.",
        features: ["Self-healing PPF", "UV & chemical resistance", "Gloss enhancement"],
      },
      {
        title: "Leather Treatment",
        description:
          "Conditioning and restoration for fine leather interiors, preserving suppleness for years to come.",
        features: ["pH-balanced cleansers", "Deep conditioning", "Colour & grain matching"],
      },
      {
        title: "Ceramic Coating",
        description:
          "A permanent, hydrophobic nano-ceramic shield delivering unmatched depth, gloss and protection.",
        features: ["9H hardness layer", "5-year durability", "Extreme hydrophobicity"],
        comingSoon: true,
      },
    ],
  },
  {
    category: "Private Aircraft Cabin Detailing",
    kicker: "For the Sky",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1600&auto=format&fit=crop",
    items: [
      {
        title: "Complete Interior Cleaning",
        description:
          "Comprehensive cabin sanitation performed to aviation-grade standards, discreetly and efficiently.",
        features: ["Cabin, cockpit & galley", "Carpet & upholstery care", "Trace-residue free"],
      },
      {
        title: "Leather Care",
        description:
          "Specialized treatment for aircraft-grade leather seating, restoring texture and preventing premature wear.",
        features: ["Aviation-approved products", "Crack prevention", "Uniform finish"],
      },
      {
        title: "Glass Cleaning",
        description:
          "Streak-free clarity across windshields and cabin windows using non-abrasive, aircraft-safe compounds.",
        features: ["Anti-static finish", "Scratch-safe method", "Optical clarity"],
      },
      {
        title: "Surface Sanitization",
        description:
          "Hospital-grade disinfection of high-touch surfaces for the safety and comfort of every passenger.",
        features: ["EPA-listed disinfectants", "High-touch focus", "Odor-free formulas"],
      },
      {
        title: "Executive Finish",
        description:
          "A final white-glove inspection and polish, ensuring the cabin presents as it did the day it was delivered.",
        features: ["White-glove inspection", "Trim & metal polish", "Cabin staging"],
      },
    ],
  },
];

export type GalleryCategory = "SUVs" | "Exotic Cars";

export type GalleryItem = {
  id: number;
  category: GalleryCategory;
  title: string;
  image: string;
  span: "tall" | "wide" | "normal";
};

export const galleryCategories: GalleryCategory[] = ["SUVs", "Exotic Cars"];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "SUVs",
    title: "BMW X6 M — Exterior Detail",
    image: "/images/gallery/bmw-x6m-front.jpg",
    span: "normal",
  },
  {
    id: 2,
    category: "SUVs",
    title: "BMW X6 M — Full Detail",
    image: "/images/gallery/bmw-x6m-rear.jpg",
    span: "wide",
  },
  {
    id: 3,
    category: "SUVs",
    title: "BMW X6 M — Interior Detail",
    image: "/images/gallery/bmw-x6m-interior.jpg",
    span: "tall",
  },
  {
    id: 4,
    category: "Exotic Cars",
    title: "Porsche 911 GT3 — Exterior Detail",
    image: "/images/gallery/porsche-gt3-front.jpg",
    span: "tall",
  },
  {
    id: 5,
    category: "Exotic Cars",
    title: "Porsche 911 GT3 — Full Detail",
    image: "/images/gallery/porsche-gt3-rear.jpg",
    span: "normal",
  },
  {
    id: 6,
    category: "Exotic Cars",
    title: "Porsche 911 GT3 — Interior Detail",
    image: "/images/gallery/porsche-gt3-interior.jpg",
    span: "normal",
  },
  {
    id: 7,
    category: "Exotic Cars",
    title: "Lamborghini Urus — Exterior Detail",
    image: "/images/gallery/lamborghini-urus-front.jpg",
    span: "wide",
  },
  {
    id: 8,
    category: "Exotic Cars",
    title: "Lamborghini Urus — Full Detail",
    image: "/images/gallery/lamborghini-urus-rear.jpg",
    span: "normal",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Signature Detail treats every vehicle in our collection as though it were their own. The attention to detail is unlike anything else in Montreal.",
    name: "M. Lavoie",
    role: "Private Collector",
  },
  {
    quote:
      "They detailed the cabin of our G650 before a transatlantic charter. Every surface, every stitch, was immaculate. True professionals.",
    name: "J. Whitfield",
    role: "Flight Operations Director",
  },
  {
    quote:
      "From the first call to the final walkaround, the experience felt genuinely first-class. This is what luxury service should be.",
    name: "A. Chartrand",
    role: "Automotive Enthusiast",
  },
];

export const coreValues = [
  {
    title: "Luxury",
    description:
      "Every engagement is delivered with the polish and discretion expected by owners of exceptional machines.",
  },
  {
    title: "Precision",
    description:
      "No surface is overlooked. Our process is methodical, repeatable, and held to an exacting standard.",
  },
  {
    title: "Trust",
    description:
      "Your vehicle or aircraft is handled with the same care we would give our own — always.",
  },
  {
    title: "Reliability",
    description:
      "We arrive when we say we will, and we finish to the standard we promised. Every time.",
  },
];
