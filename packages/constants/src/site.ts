import type { SiteConfig } from '@hv/types';

export const siteConfig: SiteConfig = {
  name: 'H&V Enterprise Ltd',
  description:
    'Expert fencing installation in cedar, vinyl, aluminum, chain link, and more. Serving homeowners and businesses across Canada with warranties and craftsmanship you can actually feel.',
  url: 'https://hv-enterprise.ca',
  phone: '+1 (800) 555-0199',
  email: 'hello@hv-enterprise.ca',
  address: {
    street: '1234 Timber Lane',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M5V 2L1',
    country: 'Canada',
  },
  socialLinks: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
  hours: {
    weekday: 'Mon - Fri: 8:00 AM - 6:00 PM',
    saturday: 'Sat: By Appointment Only',
    sunday: 'Sun: Closed',
  },
};
