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
    image: '/images/gallery/Image1.jpeg',
  },
  {
    id: 'vinyl-fences',
    title: 'Vinyl Fences',
    description: 'Low maintenance, long-lasting fencing in various styles and colors.',
    href: '/services/vinyl-fences',
    image: '/images/gallery/Image5.jpeg',
  },
  {
    id: 'corrugated-metal-wood-frame',
    title: 'Corrugated Metal with Wood Frame',
    description: 'Modern industrial aesthetic combining metal panels with warm wood framing.',
    href: '/services/corrugated-metal-wood-frame',
    image: '/images/gallery/Image17.png',
  },
  {
    id: 'corrugated-metal',
    title: 'Corrugated Metal',
    description: 'Sleek, contemporary metal fencing for a modern look.',
    href: '/services/corrugated-metal',
    image: '/images/gallery/Image10.jpeg',
  },
  {
    id: 'metal-fences',
    title: 'Metal Fences',
    description: 'Strong and secure ornamental metal fencing options.',
    href: '/services/metal-fences',
    image: '/images/gallery/Image8.jpeg',
  },
  {
    id: 'chain-link-fences',
    title: 'Chain Link Fences',
    description: 'Affordable, durable fencing perfect for security and boundaries.',
    href: '/services/chain-link-fences',
    image: '/images/gallery/Image13.png',
  },
  {
    id: 'aluminum-fences',
    title: 'Aluminum Fences',
    description: 'Rust-free, elegant fencing with minimal maintenance required.',
    href: '/services/aluminum-fences',
    image: '/images/gallery/Image14.png',
  },
  {
    id: 'composite-fence',
    title: 'Composite Fence',
    description: 'Eco-friendly material combining wood fibers and recycled plastic.',
    href: '/services/composite-fence',
    image: '/images/gallery/Image18.png',
  },
  {
    id: 'custom-cedar-fences',
    title: 'Custom Cedar Fences',
    description: 'Bespoke cedar designs tailored to your unique vision and property.',
    href: '/services/custom-cedar-fences',
    image: '/images/gallery/Image2.jpeg',
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
    title: 'Cedar Privacy Fence',
    category: 'Cedar',
    image: '/images/gallery/Image1.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'gallery-2',
    title: 'Custom Cedar Installation',
    category: 'Cedar',
    image: '/images/gallery/Image2.jpeg',
    location: 'West Kelowna, BC',
  },
  {
    id: 'gallery-3',
    title: 'Cedar Board-on-Board',
    category: 'Cedar',
    image: '/images/gallery/Image3.jpeg',
    location: 'Vernon, BC',
  },
  {
    id: 'gallery-4',
    title: 'Cedar Picket Fence',
    category: 'Cedar',
    image: '/images/gallery/Image4.jpeg',
    location: 'Penticton, BC',
  },
  {
    id: 'gallery-5',
    title: 'Vinyl Privacy Fence',
    category: 'Vinyl',
    image: '/images/gallery/Image5.jpeg',
    location: 'Kamloops, BC',
  },
  {
    id: 'gallery-6',
    title: 'White Vinyl Fence',
    category: 'Vinyl',
    image: '/images/gallery/Image6.jpeg',
    location: 'Lake Country, BC',
  },
  {
    id: 'gallery-7',
    title: 'Vinyl Panel Installation',
    category: 'Vinyl',
    image: '/images/gallery/Image7.jpeg',
    location: 'Salmon Arm, BC',
  },
  {
    id: 'gallery-8',
    title: 'Metal Security Fence',
    category: 'Metal',
    image: '/images/gallery/Image8.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'gallery-9',
    title: 'Ornamental Metal Fence',
    category: 'Metal',
    image: '/images/gallery/Image9.jpeg',
    location: 'West Kelowna, BC',
  },
  {
    id: 'gallery-10',
    title: 'Steel Panel Fence',
    category: 'Metal',
    image: '/images/gallery/Image10.jpeg',
    location: 'Penticton, BC',
  },
  {
    id: 'gallery-11',
    title: 'Chain Link with Privacy Screen',
    category: 'Chain Link',
    image: '/images/gallery/Image13.png',
    location: 'Lake Country, BC',
  },
  {
    id: 'gallery-12',
    title: 'Aluminum Estate Fence',
    category: 'Aluminum',
    image: '/images/gallery/Image14.png',
    location: 'Kelowna, BC',
  },
  {
    id: 'gallery-13',
    title: 'Aluminum Pool Fence',
    category: 'Aluminum',
    image: '/images/gallery/Image15.png',
    location: 'West Kelowna, BC',
  },
  {
    id: 'gallery-14',
    title: 'Aluminum Picket Fence',
    category: 'Aluminum',
    image: '/images/gallery/Image16.png',
    location: 'Penticton, BC',
  },
  {
    id: 'gallery-15',
    title: 'Corrugated Metal with Wood Frame',
    category: 'Metal',
    image: '/images/gallery/Image17.png',
    location: 'Salmon Arm, BC',
  },
  {
    id: 'gallery-16',
    title: 'Composite Privacy Fence',
    category: 'Composite',
    image: '/images/gallery/Image18.png',
    location: 'Kamloops, BC',
  },
  {
    id: 'gallery-17',
    title: 'Composite Panel Fence',
    category: 'Composite',
    image: '/images/gallery/Image19.png',
    location: 'Vernon, BC',
  },
  {
    id: 'gallery-18',
    title: 'Custom Composite Design',
    category: 'Composite',
    image: '/images/gallery/Image20.png',
    location: 'Kelowna, BC',
  },
  // ─── New H&V project photos ──────────────────────────
  {
    id: 'hv-1',
    title: 'Corrugated Metal & Cedar Frame',
    category: 'Metal',
    image: '/images/gallery/hv-1.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'hv-2',
    title: 'Metal Panel with Cedar Border',
    category: 'Metal',
    image: '/images/gallery/hv-2.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'hv-3',
    title: 'Black Corrugated Metal Fence',
    category: 'Metal',
    image: '/images/gallery/hv-3.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'hv-4',
    title: 'Cedar Hillside Privacy Fence',
    category: 'Cedar',
    image: '/images/gallery/hv-4.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'hv-5',
    title: 'Custom Cedar Board Fence',
    category: 'Cedar',
    image: '/images/gallery/hv-5.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'hv-6',
    title: 'White Vinyl Privacy Fence',
    category: 'Vinyl',
    image: '/images/gallery/hv-6.jpeg',
    location: 'Kelowna, BC',
  },
  // ─── New H&V project videos ──────────────────────────
  {
    id: 'hv-video-1',
    title: 'Fence Installation in Progress',
    category: 'Metal',
    image: '/images/gallery/hv-1.jpeg',
    video: '/videos/hv-video-1.mp4',
    location: 'Kelowna, BC',
  },
  {
    id: 'hv-video-2',
    title: 'Cedar Fence Build Walkthrough',
    category: 'Cedar',
    image: '/images/gallery/hv-4.jpeg',
    video: '/videos/hv-video-2.mp4',
    location: 'Kelowna, BC',
  },
  {
    id: 'hv-video-3',
    title: 'Metal Panel Fence Project',
    category: 'Metal',
    image: '/images/gallery/hv-3.jpeg',
    video: '/videos/hv-video-3.mp4',
    location: 'Kelowna, BC',
  },
  // ─── Wood gallery (images + videos) ─────────────────
  {
    id: 'wood-1',
    title: 'Wood Privacy Fence 1',
    category: 'Wood',
    image: '/images/gallery/wood1.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'wood-2',
    title: 'Wood Privacy Fence 2',
    category: 'Wood',
    image: '/images/gallery/wood2.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'wood-3',
    title: 'Wood Privacy Fence 3',
    category: 'Wood',
    image: '/images/gallery/wood3.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'wood-4',
    title: 'Wood Privacy Fence 4',
    category: 'Wood',
    image: '/images/gallery/wood4.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'wood-5',
    title: 'Wood Privacy Fence 5',
    category: 'Wood',
    image: '/images/gallery/wood5.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'wood-6',
    title: 'Wood Privacy Fence 6',
    category: 'Wood',
    image: '/images/gallery/wood6.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'wood-7',
    title: 'Wood Privacy Fence 7',
    category: 'Wood',
    image: '/images/gallery/wood7.jpeg',
    location: 'Kelowna, BC',
  },
  {
    id: 'wood-video-1',
    title: 'Wood Fence Build Video 1',
    category: 'Wood',
    image: '/images/gallery/wood1.jpeg',
    video: '/images/gallery/wood-video-1.mp4',
    location: 'Kelowna, BC',
  },
  {
    id: 'wood-video-2',
    title: 'Wood Fence Build Video 2',
    category: 'Wood',
    image: '/images/gallery/wood2.jpeg',
    video: '/images/gallery/wood-video-2.mp4',
    location: 'Kelowna, BC',
  },
  {
    id: 'wood-video-3',
    title: 'Wood Fence Build Video 3',
    category: 'Wood',
    image: '/images/gallery/wood3.jpeg',
    video: '/images/gallery/wood-video-3.mp4',
    location: 'Kelowna, BC',
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
