import type { NavItem } from '@hv/types';

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Cedar Fencing', href: '/services/cedar-fencing' },
      { label: 'Vinyl Fences', href: '/services/vinyl-fences' },
      { label: 'Corrugated Metal with Wood Frame', href: '/services/corrugated-metal-wood-frame' },
      { label: 'Metal Fences', href: '/services/metal-fences' },
      { label: 'Chain Link Fences', href: '/services/chain-link-fences' },
      { label: 'Aluminum Fences', href: '/services/aluminum-fences' },
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
  { label: 'Cedar Fencing', href: '/services/cedar-fencing' },
  { label: 'Vinyl Fences', href: '/services/vinyl-fences' },
  { label: 'Metal Fences', href: '/services/metal-fences' },
  { label: 'Chain Link Fences', href: '/services/chain-link-fences' },
];

export const footerLegalLinks: NavItem[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Warranty', href: '#' },
];
