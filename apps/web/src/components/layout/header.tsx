'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { cn } from '@hv/utils';
import { mainNavItems } from '@hv/constants';
import { Button } from '@hv/ui';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-container">
            <span className="font-display text-lg font-bold text-on-primary">H&V</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-base font-semibold tracking-tight text-on-surface">
              H&V Enterprise
            </span>
            <span className="block font-body text-[10px] uppercase tracking-[0.08em] text-on-surface-variant">
              Canadian Fencing
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNavItems.map((item) => (
            <div key={item.label} className="relative">
              {item.children ? (
                <div
                  className="group relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 rounded-lg px-3 py-2 font-body text-sm font-medium transition-colors hover:bg-surface-container hover:text-primary',
                      pathname === item.href || pathname.startsWith(item.href + '/')
                        ? 'text-primary'
                        : 'text-on-surface-variant'
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown */}
                  {servicesOpen && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="w-56 animate-slide-down rounded-lg bg-surface-container-lowest p-2 shadow-ambient">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-md px-3 py-2 font-body text-sm text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-primary"
                            onClick={() => setServicesOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'rounded-lg px-3 py-2 font-body text-sm font-medium transition-colors hover:bg-surface-container hover:text-primary',
                    pathname === item.href ? 'text-primary' : 'text-on-surface-variant'
                  )}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+18005550199"
            className="flex items-center gap-2 font-body text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">(800) 555-0199</span>
          </a>
          <Link href="/contact">
            <Button size="sm">Get a Quote</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-surface-container lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-on-surface" />
          ) : (
            <Menu className="h-5 w-5 text-on-surface" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="animate-slide-down border-t border-outline-variant/10 bg-surface-container-lowest px-5 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {mainNavItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-lg px-4 py-3 font-body text-sm font-medium transition-colors hover:bg-surface-container-low',
                    pathname === item.href ? 'text-primary' : 'text-on-surface'
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 flex flex-col gap-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-lg px-4 py-2 font-body text-sm text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-4 pt-4">
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full" size="md">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
