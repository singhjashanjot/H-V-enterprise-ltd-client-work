'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { Badge } from '@hv/ui';
import { AnimateOnScroll } from '@/components/common/animate-on-scroll';

const capabilities = [
  'Fully Licensed & Insured',
  'Free Detailed Consultations',
  'Premium Grade Materials',
  'Transparent Fixed Pricing',
];

export function AboutHero() {
  return (
    <section className="bg-background py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <AnimateOnScroll>
              <Badge variant="durability" className="mb-6">About H&V Enterprise</Badge>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h1 className="font-display text-headline-lg text-on-surface">
                Rooted in Canadian durability.
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="mt-6 font-body text-body-lg text-on-surface-variant">
                H&V Enterprise Ltd combines precision engineering with artisanal craftsmanship to secure and beautify your landscape. Our mission is rooted in the belief that security shouldn&apos;t sacrifice style.
              </p>
              <p className="mt-4 font-body text-body-lg text-on-surface-variant">
                We treat every perimeter as a piece of functional architecture, designed to withstand the harsh Canadian winters while elevating the visual appeal of your property.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <ul className="mt-8 flex flex-col gap-3">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary-container" />
                    <span className="font-body text-sm font-medium text-on-surface">{cap}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.2}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-container">
                <Image
                  src="/images/about-team.jpg"
                  alt="H&V Enterprise team on a fencing project site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-primary-container p-6 text-center shadow-ambient">
                <p className="font-display text-3xl font-bold text-on-primary">10+</p>
                <p className="font-body text-xs uppercase tracking-[0.06em] text-on-primary/80">Years of Excellence</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
