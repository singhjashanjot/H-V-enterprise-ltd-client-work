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
    id: 'cedar-fencing',
    title: 'Cedar Fencing',
    description: 'Classic, natural beauty with excellent durability and weather resistance.',
    href: '/services/cedar-fencing',
    image: '/images/services/cedar.jpg',
  },
  {
    id: 'vinyl-fences',
    title: 'Vinyl Fences',
    description: 'Low maintenance, long-lasting fencing in various styles and colors.',
    href: '/services/vinyl-fences',
    image: '/images/services/vinyl.jpg',
  },
  {
    id: 'corrugated-metal-wood-frame',
    title: 'Corrugated Metal with Wood Frame',
    description: 'Modern industrial aesthetic combining metal panels with warm wood framing.',
    href: '/services/corrugated-metal-wood-frame',
    image: '/images/services/metal-wood.jpg',
  },
  {
    id: 'corrugated-metal',
    title: 'Corrugated Metal',
    description: 'Sleek, contemporary metal fencing for a modern look.',
    href: '/services/corrugated-metal',
    image: '/images/services/full-metal.jpg',
  },
  {
    id: 'metal-fences',
    title: 'Metal Fences',
    description: 'Strong and secure ornamental metal fencing options.',
    href: '/services/metal-fences',
    image: '/images/services/ornamental.jpg',
  },
  {
    id: 'chain-link-fences',
    title: 'Chain Link Fences',
    description: 'Affordable, durable fencing perfect for security and boundaries.',
    href: '/services/chain-link-fences',
    image: '/images/services/chain-link.jpg',
  },
  {
    id: 'aluminum-fences',
    title: 'Aluminum Fences',
    description: 'Rust-free, elegant fencing with minimal maintenance required.',
    href: '/services/aluminum-fences',
    image: '/images/services/aluminum.jpg',
  },
  {
    id: 'composite-fence',
    title: 'Composite Fence',
    description: 'Eco-friendly material combining wood fibers and recycled plastic.',
    href: '/services/composite-fence',
    image: '/images/services/composite.jpg',
  },
  {
    id: 'custom-cedar-fences',
    title: 'Custom Cedar Fences',
    description: 'Bespoke cedar designs tailored to your unique vision and property.',
    href: '/services/custom-cedar-fences',
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
    province: 'Okanagan / Kamloops',
    cities: [
      'Kelowna',
      'West Kelowna',
      'Lake Country',
      'Vernon',
      'Salmon Arm',
      'Peachland',
      'Summerland',
      'Penticton',
      'Oliver',
      'Osoyoos',
      'Kamloops',
    ],
  },
  {
    province: 'Lower Mainland',
    cities: [
      'Vancouver',
      'Surrey',
      'Burnaby',
      'Richmond',
      'Langley',
      'Coquitlam',
      'Delta',
      'New Westminster',
      'Maple Ridge',
      'Abbotsford',
    ],
  },
];

// ─── Gallery Projects ───────────────────────────────────
export const galleryProjects: GalleryProject[] = [
  {
    id: 'gallery-1',
    title: 'Premium Western Red Cedar',
    category: 'Cedar',
    image: '/images/gallery/cedar-premium.jpg',
    location: 'Kelowna, BC',
  },
  {
    id: 'gallery-2',
    title: 'Architectural Aluminum',
    category: 'Aluminum',
    image: '/images/gallery/aluminum-arch.jpg',
    location: 'West Kelowna, BC',
  },
  {
    id: 'gallery-3',
    title: 'Custom Lattice Detailing',
    category: 'Cedar',
    image: '/images/gallery/lattice-detail.jpg',
    location: 'Vernon, BC',
  },
  {
    id: 'gallery-4',
    title: 'Durable Privacy Vinyl',
    category: 'Vinyl',
    image: '/images/gallery/vinyl-privacy.jpg',
    location: 'Penticton, BC',
  },
  {
    id: 'gallery-5',
    title: 'Industrial Grade Security',
    category: 'Metal',
    image: '/images/gallery/industrial-security.jpg',
    location: 'Kamloops, BC',
  },
  {
    id: 'gallery-6',
    title: 'Ornate Estate Gating',
    category: 'Metal',
    image: '/images/gallery/estate-gate.jpg',
    location: 'Lake Country, BC',
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
    location: 'Salmon Arm, BC',
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
