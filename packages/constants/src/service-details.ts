import type { ServiceFeature } from '@hv/types';

export type ServiceDetail = {
  id: string;
  hero: {
    badge: string;
    title: string;
    description: string;
    image: { src: string; alt: string };
  };
  galleryTitle: string;
  galleryDescription: string;
  galleryImages: { src: string; alt: string; label: string }[];
  featuresBadge: string;
  featuresTitle: string;
  features: { icon: string; title: string; description: string }[];
  stylesTitle: string;
  styles: { id: string; title: string; description: string; image: string }[];
};

export const serviceDetailsRecord: Record<string, ServiceDetail> = {
  'cedar-fencing': {
    id: 'cedar-fencing',
    hero: {
      badge: 'Cedar Fencing',
      title: 'Premium Western Red Cedar.',
      description: 'Unmatched natural aesthetics paired with industrial-grade durability. Our premium Western Red Cedar solutions are engineered to withstand the Canadian elements while elevating your property\'s value.',
      image: { src: '/images/gallery/Image1.jpeg', alt: 'Premium Cedar Fence' },
    },
    galleryTitle: 'See It Installed.',
    galleryDescription: 'Real projects across the Okanagan and Lower Mainland.',
    galleryImages: [
      { src: '/images/gallery/Image1.jpeg', alt: 'Cedar Privacy Fence', label: 'Cedar Privacy' },
      { src: '/images/gallery/Image2.jpeg', alt: 'Custom Cedar Installation', label: 'Custom Installation' },
      { src: '/images/gallery/Image3.jpeg', alt: 'Cedar Board-on-Board', label: 'Board-on-Board' },
    ],
    featuresBadge: 'WHY CHOOSE CEDAR?',
    featuresTitle: 'Engineered for Performance.',
    features: [
      {
        icon: 'Shield',
        title: 'Natural Weather Resistance',
        description: 'Naturally containing tannins and oils that repel moisture and resist rot and decay for decades.',
      },
      {
        icon: 'Palette',
        title: 'Fully Customisable',
        description: 'From lattice tops to horizontal slatted modern designs, we tailor every dimension to your landscape.',
      },
      {
        icon: 'Wrench',
        title: 'Expert Installation',
        description: 'Our teams ensure deep-set posts and stainless steel hardware for a fence that never leans.',
      },
      {
        icon: 'BadgeCheck',
        title: 'Workmanship Warranty',
        description: 'Complete peace of mind with our industry-leading guarantee on all structural components.',
      },
      {
        icon: 'Building2',
        title: 'Residential & Commercial',
        description: 'Scalable solutions from single-family homes to large industrial perimeters.',
      },
    ],
    stylesTitle: 'AVAILABLE STYLES',
    styles: [
      {
        id: 'cedar-privacy',
        title: 'Cedar Privacy Fence',
        description: 'Classic vertical boards for maximum seclusion.',
        image: '/images/gallery/Image1.jpeg',
      },
      {
        id: 'board-on-board',
        title: 'Board-on-Board',
        description: 'Staggered overlap design for architectural depth.',
        image: '/images/gallery/Image2.jpeg',
      },
      {
        id: 'cedar-picket',
        title: 'Cedar Picket',
        description: 'Traditional open-air charm for curb appeal.',
        image: '/images/gallery/Image3.jpeg',
      },
      {
        id: 'custom-cedar-style',
        title: 'Custom Cedar',
        description: 'Unique slatted or decorative patterns.',
        image: '/images/gallery/Image4.jpeg',
      },
    ],
  },
  'vinyl-fences': {
    id: 'vinyl-fences',
    hero: {
      badge: 'Vinyl Fences',
      title: 'Low-Maintenance Vinyl.',
      description: 'The ultimate “set it and forget it” solution for privacy and style. Our premium vinyl fences offer the look of painted wood without the hassle of staining, sealing, or painting.',
      image: { src: '/images/gallery/Image6.jpeg', alt: 'Premium Vinyl Fence' },
    },
    galleryTitle: 'Pristine Installations.',
    galleryDescription: 'Flawless vinyl fences built for life.',
    galleryImages: [
      { src: '/images/gallery/Image5.jpeg', alt: 'White Vinyl Privacy Fence', label: 'Solid Privacy' },
      { src: '/images/gallery/Image6.jpeg', alt: 'Vinyl Picket Fence', label: 'Classic Picket' },
      { src: '/images/gallery/Image7.jpeg', alt: 'Vinyl Panel Installation', label: 'Panel Installation' },
    ],
    featuresBadge: 'WHY CHOOSE VINYL?',
    featuresTitle: 'Built for Convenience.',
    features: [
      {
        icon: 'Shield',
        title: 'Zero Maintenance',
        description: 'Never sand, stain, or paint again. A simple wash keeps your fence looking brand new.',
      },
      {
        icon: 'Palette',
        title: 'Color Stability',
        description: 'Engineered with UV inhibitors to prevent fading, cracking, and chalking under the sun.',
      },
      {
        icon: 'Wrench',
        title: 'Flexibility & Strength',
        description: 'Impact-resistant formulation that withstands heavy winds and harsh climates.',
      },
      {
        icon: 'BadgeCheck',
        title: 'Lifetime Limited Warranty',
        description: 'Guaranteed protection against manufacturer defects for as long as you own your home.',
      },
      {
        icon: 'Building2',
        title: 'Pest & Rot Free',
        description: 'Impervious to termites, carpenter ants, and moisture-induced rot.',
      },
    ],
    stylesTitle: 'VINYL STYLES',
    styles: [
      {
        id: 'vinyl-privacy',
        title: 'Full Privacy',
        description: 'Interlocking panels for complete seclusion.',
        image: '/images/gallery/Image5.jpeg',
      },
      {
        id: 'vinyl-semi-privacy',
        title: 'Semi-Privacy',
        description: 'Allows gentle airflow while obscuring sightlines.',
        image: '/images/gallery/Image6.jpeg',
      },
      {
        id: 'vinyl-picket',
        title: 'Picket',
        description: 'Traditional neighborhood charm without the upkeep.',
        image: '/images/gallery/Image7.jpeg',
      },
      {
        id: 'vinyl-ranch',
        title: 'Split Rail Ranch',
        description: 'Perfect for large estates and keeping livestock secure.',
        image: '/images/gallery/Image5.jpeg',
      },
    ],
  },
  'corrugated-metal-wood-frame': {
    id: 'corrugated-metal-wood-frame',
    hero: {
      badge: 'Corrugated Metal with Wood Frame',
      title: 'Corrugated Metal with Wood Frame.',
      description: 'A striking fusion of industrial steel posts and warm, organic cedar or composite panels. The absolute pinnacle of modern architectural design.',
      image: { src: '/images/gallery/Image17.png', alt: 'Premium Hybrid Fence' },
    },
    galleryTitle: 'Architectural Showcases.',
    galleryDescription: 'Stunning hybrid projects that redefine modern fencing.',
    galleryImages: [
      { src: '/images/gallery/Image17.png', alt: 'Corrugated Metal with Cedar Wood Frame', label: 'Corrugated Metal & Cedar' },
      { src: '/images/gallery/Image10.jpeg', alt: 'Steel Panel Fence', label: 'Steel Panel' },
      { src: '/images/gallery/Image8.jpeg', alt: 'Metal Security Fence', label: 'Metal Security' },
    ],
    featuresBadge: 'WHY CHOOSE HYBRID?',
    featuresTitle: 'The Best of Both Worlds.',
    features: [
      {
        icon: 'Shield',
        title: 'Unbreakable Structure',
        description: 'Galvanized steel posts ensure your fence will never warp, rot, or snap in high winds.',
      },
      {
        icon: 'Palette',
        title: 'Striking Contrast',
        description: 'The visual warmth of natural timber juxtaposed against the sleek, modern lines of powder-coated steel.',
      },
      {
        icon: 'Wrench',
        title: 'Modular Repairability',
        description: 'Slip-board systems allow single damaged wood slats to be replaced in seconds.',
      },
      {
        icon: 'BadgeCheck',
        title: 'Longevity',
        description: 'By keeping wood off the ground and utilizing steel framing, the lifespan of the timber is doubled.',
      },
    ],
    stylesTitle: 'HYBRID STYLES',
    styles: [
      {
        id: 'mw-horizontal',
        title: 'Horizontal Steel Frame',
        description: 'Sleek horizontal louvers floating between iron posts.',
        image: '/images/gallery/Image17.png',
      },
      {
        id: 'mw-vertical',
        title: 'Vertical Picture Frame',
        description: 'Traditional wood encapsulated in a modern metal chassis.',
        image: '/images/gallery/Image8.jpeg',
      },
      {
        id: 'mw-corrugated',
        title: 'Corrugated Metal & Timber',
        description: 'Reclaimed aesthetic using corrugated steel panels.',
        image: '/images/gallery/Image10.jpeg',
      },
      {
        id: 'mw-composite',
        title: 'Composite Hybrid',
        description: 'Steel framework with ultra low-maintenance composite.',
        image: '/images/gallery/Image17.png',
      },
    ],
  },
  'corrugated-metal': {
    id: 'corrugated-metal',
    hero: {
      badge: 'Corrugated Metal',
      title: 'Corrugated Metal Fencing.',
      description: 'Robust, contemporary, and nearly indestructible. Our solid metal privacy barriers provide maximum security and a distinct industrial aesthetic.',
      image: { src: '/images/gallery/Image10.jpeg', alt: 'Premium Metal Fence' },
    },
    galleryTitle: 'Industrial Elegance.',
    galleryDescription: 'Bold metal installations for demanding properties.',
    galleryImages: [
      { src: '/images/gallery/Image10.jpeg', alt: 'Corrugated Metal Fence', label: 'Corrugated Privacy' },
      { src: '/images/gallery/Image9.jpeg', alt: 'Steel Panel Fence', label: 'Modern Steel Plate' },
      { src: '/images/gallery/Image8.jpeg', alt: 'Metal Security Fence', label: 'Metal Security' },
    ],
    featuresBadge: 'WHY CHOOSE FULL METAL?',
    featuresTitle: 'Uncompromising Strength.',
    features: [
      {
        icon: 'Shield',
        title: 'Maximum Security',
        description: 'Impenetrable solid barriers that deter trespassers and withstand severe impacts.',
      },
      {
        icon: 'Palette',
        title: 'Industrial Design',
        description: 'A bold, modern statement piece perfect for contemporary homes and commercial properties.',
      },
      {
        icon: 'Wrench',
        title: 'Fire Resistance',
        description: 'Completely non-combustible material, providing essential safety in wildfire-prone regions.',
      },
      {
        icon: 'BadgeCheck',
        title: 'Acoustic Blocking',
        description: 'Excellent sound deflection, making it ideal for properties near busy roadways.',
      },
      {
        icon: 'Building2',
        title: 'Zero Maintenance',
        description: 'Galvanized and powder-coated finishes eliminate rust concerns for decades.',
      },
    ],
    stylesTitle: 'METAL STYLES',
    styles: [
      {
        id: 'fm-corrugated',
        title: 'Corrugated Steel',
        description: 'Wavy industrial panels with massive structural rigidity.',
        image: '/images/gallery/Image10.jpeg',
      },
      {
        id: 'fm-flat',
        title: 'Flat Panel Steel',
        description: 'Sleek, seamless plates for an ultra-minimalist look.',
        image: '/images/gallery/Image9.jpeg',
      },
      {
        id: 'fm-corten',
        title: 'Corten Weathering Steel',
        description: 'Develops a beautiful, protective rusted patina over time.',
        image: '/images/gallery/Image8.jpeg',
      },
      {
        id: 'fm-louvered',
        title: 'Louvered Aluminum',
        description: 'Angled metal slats for privacy and directional airflow.',
        image: '/images/gallery/Image10.jpeg',
      },
    ],
  },
  'metal-fences': {
    id: 'metal-fences',
    hero: {
      badge: 'Metal Fences',
      title: 'Metal Fencing.',
      description: 'The elegant look of traditional wrought iron, upgraded with modern galvanized steel or aluminum to prevent rust and provide lasting security.',
      image: { src: '/images/gallery/Image9.jpeg', alt: 'Premium Ornamental Fence' },
    },
    galleryTitle: 'Timeless Elegance.',
    galleryDescription: 'Estate-quality perimeters and secure pool enclosures.',
    galleryImages: [
      { src: '/images/gallery/Image9.jpeg', alt: 'Ornamental Metal Fence', label: 'Estate Enclosures' },
      { src: '/images/gallery/Image8.jpeg', alt: 'Metal Security Fence', label: 'Metal Security' },
      { src: '/images/gallery/Image10.jpeg', alt: 'Steel Panel Fence', label: 'Steel Panels' },
    ],
    featuresBadge: 'WHY CHOOSE ORNAMENTAL?',
    featuresTitle: 'Classic Beauty, Modern Tech.',
    features: [
      {
        icon: 'Shield',
        title: 'High-Visibility Security',
        description: 'Provides a strong physical barrier without obstructing landscape views or sightlines.',
      },
      {
        icon: 'Palette',
        title: 'Architectural Elegance',
        description: 'Instantly increases property value and curb appeal with stately, timeless designs.',
      },
      {
        icon: 'Wrench',
        title: 'Rackable Panels',
        description: 'Easily adjusts to sloping grades and steep terrain without leaving awkward gaps beneath the fence.',
      },
      {
        icon: 'BadgeCheck',
        title: 'E-Coat Protection',
        description: 'Multi-stage coating processes ensure the finish never chips or rusts like old wrought iron.',
      },
    ],
    stylesTitle: 'ORNAMENTAL STYLES',
    styles: [
      {
        id: 'o-flat-top',
        title: 'Flat Top / Pool Code',
        description: 'Smooth top rail perfect for safety and pool enclosures.',
        image: '/images/gallery/Image9.jpeg',
      },
      {
        id: 'o-spear-top',
        title: 'Pressed Spear',
        description: 'Traditional finials for increased security and classic looks.',
        image: '/images/gallery/Image8.jpeg',
      },
      {
        id: 'o-alternating',
        title: 'Alternating Spear',
        description: 'Staggered picket heights for a highly decorative finish.',
        image: '/images/gallery/Image10.jpeg',
      },
      {
        id: 'o-gates',
        title: 'Custom Gates',
        description: 'Matching pedestrian and automated driveway gates.',
        image: '/images/gallery/Image9.jpeg',
      },
    ],
  },
  'chain-link-fences': {
    id: 'chain-link-fences',
    hero: {
      badge: 'Chain Link Fences',
      title: 'Durable Chain Link.',
      description: 'Cost-effective, reliable, and versatile. Whether for a backyard dog run, a commercial perimeter, or a sporting facility, chain link gets the job done.',
      image: { src: '/images/gallery/Image13.png', alt: 'Premium Chain Link Fence' },
    },
    galleryTitle: 'Practical Perimeters.',
    galleryDescription: 'High-utility fencing for every application.',
    galleryImages: [
      { src: '/images/gallery/Image13.png', alt: 'Chain Link with Privacy Screen', label: 'Privacy Inserts' },
      { src: '/images/gallery/Image8.jpeg', alt: 'Metal Security Fence', label: 'Commercial Security' },
      { src: '/images/gallery/Image9.jpeg', alt: 'Ornamental Metal Fence', label: 'Residential Security' },
    ],
    featuresBadge: 'WHY CHOOSE CHAIN LINK?',
    featuresTitle: 'Performance Meets Value.',
    features: [
      {
        icon: 'Shield',
        title: 'Extremely Cost-Effective',
        description: 'The most affordable way to secure large perimeters and property lines.',
      },
      {
        icon: 'Palette',
        title: 'Vinyl Coated Options',
        description: 'Available in black, green, or brown vinyl coating to blend seamlessly with landscaping.',
      },
      {
        icon: 'Wrench',
        title: 'Quick Installation',
        description: 'Efficient to install, reducing labor costs and minimizing disruption to your property.',
      },
      {
        icon: 'BadgeCheck',
        title: 'Transparent Security',
        description: 'Keeps pets and children in without blocking sunlight or scenic views.',
      },
    ],
    stylesTitle: 'CHAIN LINK STYLES',
    styles: [
      {
        id: 'cl-galvanized',
        title: 'Traditional Galvanized',
        description: 'The standard silver, rust-resistant commercial zinc coating.',
        image: '/images/gallery/Image13.png',
      },
      {
        id: 'cl-black',
        title: 'Black Vinyl Coated',
        description: 'A premium, unobtrusive look that disappears into the background.',
        image: '/images/gallery/Image13.png',
      },
      {
        id: 'cl-privacy',
        title: 'Privacy Slats',
        description: 'Woven polyethylene inserts to block wind and sight.',
        image: '/images/gallery/Image13.png',
      },
      {
        id: 'cl-high-security',
        title: 'High Security',
        description: 'Heavy gauge wire with optional barbed wire top rails.',
        image: '/images/gallery/Image8.jpeg',
      },
    ],
  },
  'aluminum-fences': {
    id: 'aluminum-fences',
    hero: {
      badge: 'Aluminum Fences',
      title: 'Premium Aluminum.',
      description: 'The ultimate rust-proof metal fence. Lightweight, incredibly strong, and finished with architectural-grade powder coating for lifetime durability.',
      image: { src: '/images/gallery/Image15.png', alt: 'Premium Aluminum Fence' },
    },
    galleryTitle: 'Sophisticated Boundaries.',
    galleryDescription: 'Flawless aluminum for coastal and high-humidity areas.',
    galleryImages: [
      { src: '/images/gallery/Image15.png', alt: 'Aluminum Pool Fence', label: 'Pool Enclosures' },
      { src: '/images/gallery/Image14.png', alt: 'Aluminum Estate Fence', label: 'Property Boundaries' },
      { src: '/images/gallery/Image16.png', alt: 'Aluminum Picket Fence', label: 'Aluminum Picket' },
    ],
    featuresBadge: 'WHY CHOOSE ALUMINUM?',
    featuresTitle: 'Rust-Proof by Nature.',
    features: [
      {
        icon: 'Shield',
        title: '100% Rust-Proof',
        description: 'Because aluminum contains no iron, it simply cannot red-rust, making it perfect near pools or saltwater.',
      },
      {
        icon: 'Palette',
        title: 'Lightweight Strength',
        description: 'Easier on hinges and gates while providing the same security profile as steel.',
      },
      {
        icon: 'Wrench',
        title: 'Powder Coated Finish',
        description: 'A baked-on finish that is immensely tougher than conventional paint.',
      },
      {
        icon: 'BadgeCheck',
        title: 'Environmentally Friendly',
        description: 'Often made from recycled materials and is 100% recyclable at the end of its vast lifespan.',
      },
    ],
    stylesTitle: 'ALUMINUM STYLES',
    styles: [
      {
        id: 'al-pool',
        title: 'Pool Code Compliant',
        description: 'Flush bottom rails and proper spacing to pass rigorous safety codes.',
        image: '/images/gallery/Image15.png',
      },
      {
        id: 'al-horizontal',
        title: 'Modern Horizontal',
        description: 'Wide aluminum planks providing ultra-modern solid privacy.',
        image: '/images/gallery/Image16.png',
      },
      {
        id: 'al-decorative',
        title: 'Decorative Picket',
        description: 'Mimics the aesthetic of ornamental iron without the weight.',
        image: '/images/gallery/Image14.png',
      },
      {
        id: 'al-commercial',
        title: 'Commercial Grade',
        description: 'Thicker pickets and heavier rails for high-traffic environments.',
        image: '/images/gallery/Image15.png',
      },
    ],
  },
  'composite-fence': {
    id: 'composite-fence',
    hero: {
      badge: 'Composite Fence',
      title: 'Eco-Friendly Composite.',
      description: 'Engineered from recycled wood fibers and plastics, composite fencing delivers the warm texture of natural wood with the maintenance-free lifestyle of vinyl.',
      image: { src: '/images/gallery/Image19.png', alt: 'Premium Composite Fence' },
    },
    galleryTitle: 'Next-Generation Privacy.',
    galleryDescription: 'High-performance privacy walls that never warp.',
    galleryImages: [
      { src: '/images/gallery/Image18.png', alt: 'Composite Privacy Fence', label: 'Interlocking Privacy' },
      { src: '/images/gallery/Image19.png', alt: 'Composite Panel Fence', label: 'Composite & Steel Hybrid' },
      { src: '/images/gallery/Image20.png', alt: 'Custom Composite Design', label: 'Modern Horizontal' },
    ],
    featuresBadge: 'WHY CHOOSE COMPOSITE?',
    featuresTitle: 'Innovation in Materials.',
    features: [
      {
        icon: 'Shield',
        title: 'Warp & Rot Proof',
        description: 'Impervious to moisture, meaning it will never warp, bow, or rot like standard lumber.',
      },
      {
        icon: 'Palette',
        title: 'Beautiful Textures',
        description: 'Advanced manufacturing techniques create deep, realistic wood-grain patterns.',
      },
      {
        icon: 'Wrench',
        title: 'Dense & Private',
        description: 'Extremely dense material blocks out noise and provides total visual privacy.',
      },
      {
        icon: 'BadgeCheck',
        title: 'Eco-Friendly',
        description: 'Constructed largely from recycled plastics and reclaimed wood sawdust.',
      },
    ],
    stylesTitle: 'COMPOSITE STYLES',
    styles: [
      {
        id: 'comp-vertical',
        title: 'Vertical Seclusion',
        description: 'Classic vertical privacy board styling.',
        image: '/images/gallery/Image18.png',
      },
      {
        id: 'comp-horizontal',
        title: 'Horizontal Modern',
        description: 'Sleek horizontal boards stacked between aluminum channels.',
        image: '/images/gallery/Image19.png',
      },
      {
        id: 'comp-lattice',
        title: 'Privacy with Lattice',
        description: 'Solid lower section topped with a decorative lattice or glass accent.',
        image: '/images/gallery/Image20.png',
      },
      {
        id: 'comp-colors',
        title: 'Rich Color Options',
        description: 'Available in deep grays, rich browns, and varying earthy tones.',
        image: '/images/gallery/Image18.png',
      },
    ],
  },
  'custom-cedar-fences': {
    id: 'custom-cedar-fences',
    hero: {
      badge: 'Custom Cedar Fences',
      title: 'Custom Cedar Creations.',
      description: 'For unique architectural challenges. We design and build one-of-a-kind timber structures, from intricate pergolas to multi-tiered slatted privacy screens.',
      image: { src: '/images/gallery/Image4.jpeg', alt: 'Premium Custom Cedar' },
    },
    galleryTitle: 'Artisan Woodwork.',
    galleryDescription: 'Masterful cedar craftsmanship for luxury properties.',
    galleryImages: [
      { src: '/images/gallery/Image4.jpeg', alt: 'Cedar Picket Fence', label: 'Cedar Picket' },
      { src: '/images/gallery/Image2.jpeg', alt: 'Custom Cedar Installation', label: 'Custom Installation' },
      { src: '/images/gallery/Image3.jpeg', alt: 'Cedar Board-on-Board', label: 'Board-on-Board' },
    ],
    featuresBadge: 'WHY GO CUSTOM?',
    featuresTitle: 'Limitless Potential.',
    features: [
      {
        icon: 'Shield',
        title: 'Architectural Continuity',
        description: 'We match your fence design directly to your home\'s existing exterior architecture.',
      },
      {
        icon: 'Palette',
        title: 'Unrestricted Design',
        description: 'If you can draw it, our master carpenters can build it.',
      },
      {
        icon: 'Wrench',
        title: 'Premium Grading',
        description: 'We hand-select the finest clear vertical grain cedar for our custom projects.',
      },
      {
        icon: 'BadgeCheck',
        title: 'Exclusive Aesthetic',
        description: 'Ensure your property stands out with a one-of-a-kind boundary.',
      },
    ],
    stylesTitle: 'CUSTOM SPECIALTIES',
    styles: [
      {
        id: 'cc-louvered',
        title: 'Louvered Cedar',
        description: 'Angled cedar slats that block sightlines but permit cool breezes.',
        image: '/images/gallery/Image2.jpeg',
      },
      {
        id: 'cc-pergola',
        title: 'Pergola Integrations',
        description: 'Fencing that scales up into beautiful overhead shade structures.',
        image: '/images/gallery/Image3.jpeg',
      },
      {
        id: 'cc-mixed',
        title: 'Mixed Media',
        description: 'Combining cedar with frosted glass, corrugated steel, or masonry.',
        image: '/images/gallery/Image4.jpeg',
      },
      {
        id: 'cc-baffle',
        title: 'Acoustic Baffles',
        description: 'Deep, thick timber construction designed specifically to diffuse road noise.',
        image: '/images/gallery/Image1.jpeg',
      },
    ],
  },
};
