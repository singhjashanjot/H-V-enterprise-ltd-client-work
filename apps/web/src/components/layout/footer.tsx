import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { siteConfig, footerQuickLinks, footerServiceLinks, footerLegalLinks } from '@hv/constants';

export function Footer() {
  return (
    <footer className="bg-[#111210] text-surface">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-fixed-dim to-primary-fixed">
                <span className="font-display text-lg font-bold text-primary">AF</span>
              </div>
              <span className="font-display text-base font-semibold tracking-tight text-surface">
                HV ENTERPRISE LTD
              </span>
            </div>
            <p className="mt-4 font-body text-sm leading-relaxed text-surface-dim">
              Premium Canadian craftsmanship for fences that stand the test of time and weather.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {siteConfig.socialLinks.facebook && siteConfig.socialLinks.facebook !== '#' && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface/10 transition-colors hover:bg-primary-container"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              )}
              {siteConfig.socialLinks.instagram && siteConfig.socialLinks.instagram !== '#' && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface/10 transition-colors hover:bg-primary-container"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {siteConfig.socialLinks.linkedin && siteConfig.socialLinks.linkedin !== '#' && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface/10 transition-colors hover:bg-primary-container"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-label-md uppercase tracking-[0.06em] text-surface-dim">
              Quick Links
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-surface/70 transition-colors hover:text-primary-fixed-dim"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-label-md uppercase tracking-[0.06em] text-surface-dim">
              Services
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-surface/70 transition-colors hover:text-primary-fixed-dim"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-label-md uppercase tracking-[0.06em] text-surface-dim">
              Contact Us
            </h4>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-fixed-dim" />
                <span className="font-body text-sm text-surface/70">
                  {siteConfig.address.street}, {siteConfig.address.city},{' '}
                  {siteConfig.address.province} {siteConfig.address.postalCode}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 font-body text-sm text-surface/70 transition-colors hover:text-primary-fixed-dim"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary-fixed-dim" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 font-body text-sm text-surface/70 transition-colors hover:text-primary-fixed-dim"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary-fixed-dim" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-surface/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 md:flex-row md:px-8 lg:px-12">
          <p className="font-body text-xs text-surface/50">
            © {new Date().getFullYear()} HV ENTERPRISE LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLegalLinks
              .filter((link) => link.href !== '#')
              .map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body text-xs text-surface/50 transition-colors hover:text-surface/80"
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
