import type {
  FencingService,
  ServiceFeature,
  CompanyValue,
  ProcessStep,
  ServiceRegion,
  GalleryProject,
} from '@hv/types';

// ─── Fencing Service Catalog ────────────────────────────
export const fencingServices: FencingService[] = [
  {
    id: 'cedar',
    title: 'Premium Cedar',
    description: 'Classic durability with natural resistance to decay and insects.',
    href: '/services/cedar',
    image: '/images/services/cedar.jpg',
  },
  {
    id: 'vinyl',
    title: 'Low-Maintenance Vinyl',
    description: "The ultimate 'set it and forget it' solution for privacy and style.",
    href: '/services/vinyl',
    image: '/images/services/vinyl.jpg',
  },
  {
    id: 'metal-wood',
    title: 'Metal & Wood',
    description: 'A unique industrial-meets-organic aesthetic.',
    href: '/services/metal-wood',
    image: '/images/services/metal-wood.jpg',
  },
  {
    id: 'full-metal',
    title: 'Full Metal',
    description: 'Robust and contemporary privacy barriers.',
    href: '/services/full-metal',
    image: '/images/services/full-metal.jpg',
  },
  {
    id: 'ornamental',
    title: 'Ornamental',
    description: 'Classic beauty with modern security features.',
    href: '/services/ornamental',
    image: '/images/services/ornamental.jpg',
  },
  {
    id: 'chain-link',
    title: 'Chain Link',
    description: 'Cost-effective security for any size property.',
    href: '/services/chain-link',
    image: '/images/services/chain-link.jpg',
  },
  {
    id: 'aluminum',
    title: 'Aluminum',
    description: 'Rust-proof elegance that lasts a lifetime.',
    href: '/services/aluminum',
    image: '/images/services/aluminum.jpg',
  },
  {
    id: 'composite',
    title: 'Composite',
    description: 'Eco-friendly beauty with zero-maintenance.',
    href: '/services/composite',
    image: '/images/services/composite.jpg',
  },
  {
    id: 'custom-cedar',
    title: 'Custom Cedar',
    description: 'Tailored designs for unique architectural needs.',
    href: '/services/custom-cedar',
    image: '/images/services/custom-cedar.jpg',
  },
];

// ─── Cedar Fencing Styles ───────────────────────────────
export const cedarStyles = [
  {
    id: 'cedar-privacy',
    title: 'Cedar Privacy Fence',
    description: 'Classic vertical boards for maximum seclusion.',
    image: '/images/cedar/privacy.jpg',
  },
  {
    id: 'board-on-board',
    title: 'Board-on-Board',
    description: 'Staggered overlap design for architectural depth.',
    image: '/images/cedar/board-on-board.jpg',
  },
  {
    id: 'cedar-picket',
    title: 'Cedar Picket',
    description: 'Traditional open-air charm for curb appeal.',
    image: '/images/cedar/picket.jpg',
  },
  {
    id: 'custom-cedar-style',
    title: 'Custom Cedar',
    description: 'Unique slatted or decorative patterns.',
    image: '/images/cedar/custom.jpg',
  },
];

// ─── Cedar Features ─────────────────────────────────────
export const cedarFeatures: ServiceFeature[] = [
  {
    icon: 'Shield',
    title: 'Natural Weather Resistance',
    description:
      'Naturally containing tannins and oils that repel moisture and resist rot and decay for decades.',
  },
  {
    icon: 'Palette',
    title: 'Fully Customisable',
    description:
      'From lattice tops to horizontal slatted modern designs, we tailor every dimension to your landscape.',
  },
  {
    icon: 'Wrench',
    title: 'Expert Installation',
    description:
      'Our teams ensure deep-set posts and stainless steel hardware for a fence that never leans.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Workmanship Warranty',
    description:
      'Complete peace of mind with our industry-leading guarantee on all structural components.',
  },
  {
    icon: 'Building2',
    title: 'Residential & Commercial',
    description: 'Scalable solutions from single-family homes to large industrial perimeters.',
  },
];

// ─── Company Values ─────────────────────────────────────
export const companyValues: CompanyValue[] = [
  {
    icon: 'ShieldCheck',
    title: 'Quality First',
    description:
      "We don't cut corners. From the depth of the posts to the grade of the steel, every detail is engineered for durability.",
  },
  {
    icon: 'Users',
    title: 'Customer Focus',
    description:
      'Your vision is our blueprint. We maintain open communication throughout the entire construction process.',
  },
  {
    icon: 'Hammer',
    title: 'Expert Craftsmanship',
    description:
      'Our team consists of veteran builders who take pride in the tangible results of their labor.',
  },
  {
    icon: 'Receipt',
    title: 'Honest Pricing',
    description:
      'No hidden fees, no surprise costs. We provide clear, itemized quotes that we stand by.',
  },
];

// ─── Process Steps ──────────────────────────────────────
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Free Consultation',
    description:
      'We visit your site, measure precisely, and discuss your stylistic goals and budget requirements.',
  },
  {
    step: 2,
    title: 'Custom Design',
    description:
      'Our designers create a tailored plan including materials and layout options for your approval.',
  },
  {
    step: 3,
    title: 'Installation',
    description:
      'Our expert crew executes the build with precision, maintaining a clean and safe job site at all times.',
  },
  {
    step: 4,
    title: 'Final Walkthrough',
    description:
      'We review every post and panel with you to ensure the final result meets our 100% satisfaction standard.',
  },
];

// ─── Trust Signals ──────────────────────────────────────
export const trustSignals = [
  { icon: 'Award', title: 'Licensed & Insured', description: 'Full peace of mind for every job.' },
  {
    icon: 'Sparkles',
    title: 'Clean Job Sites',
    description: 'We respect your property, always.',
  },
  {
    icon: 'MessageSquare',
    title: 'Free Consultations',
    description: 'No pressure, just expert advice.',
  },
  {
    icon: 'Clock',
    title: '10+ Years Experience',
    description: 'A decade of Canadian craftsmanship.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Workmanship Warranty',
    description: 'Guaranteed long-term durability.',
  },
];

// ─── Service Regions ────────────────────────────────────
export const serviceRegions: ServiceRegion[] = [
  {
    province: 'Ontario',
    cities: [
      'Toronto',
      'Mississauga',
      'Brampton',
      'Hamilton',
      'Ottawa',
      'Markham',
      'Vaughan',
      'Richmond Hill',
      'Oakville',
      'Burlington',
      'Oshawa',
      'Barrie',
    ],
  },
  {
    province: 'British Columbia',
    cities: [
      'Vancouver',
      'Surrey',
      'Burnaby',
      'Richmond',
      'Langley',
      'Coquitlam',
      'Kelowna',
      'Victoria',
    ],
  },
  {
    province: 'Alberta',
    cities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Airdrie', 'St. Albert'],
  },
];

// ─── Gallery Projects ───────────────────────────────────
export const galleryProjects: GalleryProject[] = [
  {
    id: 'gallery-1',
    title: 'Premium Western Red Cedar',
    category: 'Cedar',
    image: '/images/gallery/cedar-premium.jpg',
    location: 'Toronto, ON',
  },
  {
    id: 'gallery-2',
    title: 'Architectural Aluminum',
    category: 'Aluminum',
    image: '/images/gallery/aluminum-arch.jpg',
    location: 'Vancouver, BC',
  },
  {
    id: 'gallery-3',
    title: 'Custom Lattice Detailing',
    category: 'Cedar',
    image: '/images/gallery/lattice-detail.jpg',
    location: 'Mississauga, ON',
  },
  {
    id: 'gallery-4',
    title: 'Durable Privacy Vinyl',
    category: 'Vinyl',
    image: '/images/gallery/vinyl-privacy.jpg',
    location: 'Calgary, AB',
  },
  {
    id: 'gallery-5',
    title: 'Industrial Grade Security',
    category: 'Metal',
    image: '/images/gallery/industrial-security.jpg',
    location: 'Edmonton, AB',
  },
  {
    id: 'gallery-6',
    title: 'Ornate Estate Gating',
    category: 'Ornamental',
    image: '/images/gallery/estate-gate.jpg',
    location: 'Oakville, ON',
  },
  {
    id: 'gallery-7',
    title: 'Low-Maintenance Composite',
    category: 'Composite',
    image: '/images/gallery/composite.jpg',
    location: 'Surrey, BC',
  },
  {
    id: 'gallery-8',
    title: 'Traditional Post & Rail',
    category: 'Cedar',
    image: '/images/gallery/post-rail.jpg',
    location: 'Hamilton, ON',
  },
  {
    id: 'gallery-9',
    title: 'Minimalist Boundary Wall',
    category: 'Metal',
    image: '/images/gallery/minimalist-wall.jpg',
    location: 'Richmond, BC',
  },
];

// ─── Materials Data ─────────────────────────────────────
export const materials = [
  {
    id: 'cedar-wood',
    title: 'Cedar Wood',
    description:
      'Natural rot resistance with a warm, organic character that ages beautifully into silver-grey.',
  },
  {
    id: 'vinyl-pvc',
    title: 'Vinyl (PVC)',
    description:
      'Ultra-durable, weather-proof material that looks like painted wood but never requires maintenance.',
  },
  {
    id: 'aluminum-material',
    title: 'Aluminum',
    description:
      'Rust-proof security with rackable panels that follow uneven terrain perfectly for a seamless look.',
  },
  {
    id: 'chain-link-material',
    title: 'Chain Link',
    description:
      'Cost-effective boundary defining with high visibility. Available in vinyl-coated finishes.',
  },
  {
    id: 'composite-material',
    title: 'Composite',
    description:
      'Engineered from wood fibers and recycled plastics for maximum density and sound dampening.',
  },
];
