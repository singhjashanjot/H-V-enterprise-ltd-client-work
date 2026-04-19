// ─── Navigation ─────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Services ───────────────────────────────────────────
export interface FencingService {
  id: string;
  title: string;
  description: string;
  href: string;
  image?: string;
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

// ─── Gallery ────────────────────────────────────────────
export interface GalleryProject {
  id: string;
  title: string;
  category: string;
  image: string;
  video?: string;
  location?: string;
  description?: string;
}

// ─── Service Areas ──────────────────────────────────────
export interface ServiceRegion {
  province: string;
  cities: string[];
}

// ─── Contact / Quote ────────────────────────────────────
export interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  fenceType: string;
  projectType: 'residential' | 'commercial';
  estimatedLength: string;
  message: string;
  hasExistingFence: boolean;
  needsRemoval: boolean;
}

// ─── Testimonials ───────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

// ─── Company ────────────────────────────────────────────
export interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

// ─── Site Metadata ──────────────────────────────────────
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
}
