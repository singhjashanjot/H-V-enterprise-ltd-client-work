import type { NavItem } from '@hv/types';

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Cedar Fencing', href: '/services/cedar' },
      { label: 'Vinyl Fencing', href: '/services' },
      { label: 'Metal & Wood Hybrid', href: '/services' },
      { label: 'Aluminum Fencing', href: '/services' },
      { label: 'Chain Link', href: '/services' },
      { label: 'Custom Gates', href: '/services' },
    ],
  },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const footerQuickLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/gallery' },
  { label: 'Service Areas', href: '/service-areas' },
];

export const footerServiceLinks: NavItem[] = [
  { label: 'Residential Fencing', href: '/services' },
  { label: 'Commercial Security', href: '/services' },
  { label: 'Custom Woodwork', href: '/services/cedar-fencing' },
  { label: 'Fence Repairs', href: '/contact' },
];

export const footerLegalLinks: NavItem[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Warranty', href: '#' },
];
