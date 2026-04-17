'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Heart, Paintbrush } from 'lucide-react';
import { Button, Badge } from '@hv/ui';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/common/animate-on-scroll';

const heroFeatures = [
  { icon: Shield, label: 'Craftsmanship Warranty', text: 'Workmanship you can trust long after the last post is set.' },
  { icon: Heart, label: 'Exceptional Service', text: 'Clear communication and full respect for your property.' },
  { icon: Paintbrush, label: 'Customised Solutions', text: 'Designed to match your vision, terrain, and local codes.' },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28 lg:py-36">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-fixed/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text Column — 7 cols (asymmetric per design system) */}
          <div className="lg:col-span-7">
            <AnimateOnScroll>
              <Badge variant="durability" className="mb-6">
                Every fence backed by our craftsmanship guarantee
              </Badge>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h1 className="font-display text-headline-lg text-on-surface">
                Expert installation in cedar, vinyl, aluminum, chain link,{' '}
                <span className="text-primary-container">and more.</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="mt-6 max-w-xl font-body text-body-lg text-on-surface-variant">
                Serving homeowners and businesses across British Columbia — with warranties and craftsmanship you can actually feel.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="secondary" size="lg">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Image Column — 5 cols */}
          <div className="relative lg:col-span-5">
            <AnimateOnScroll delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-container">
                <Image
                  src="/images/gallery/Image1.jpeg"
                  alt="Premium cedar fence installation by H&V Enterprise in a Canadian backyard"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Floating stat card */}
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-surface/80 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="label text-primary-container">Projects Completed</span>
                      <p className="font-display text-2xl font-bold text-on-surface">500+</p>
                    </div>
                    <div className="h-12 w-px bg-outline-variant/20" />
                    <div>
                      <span className="label text-primary-container">Satisfaction</span>
                      <p className="font-display text-2xl font-bold text-on-surface">100%</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Trust Features Row */}
        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-24">
          {heroFeatures.map((feature) => (
            <StaggerItem key={feature.label}>
              <div className="flex items-start gap-4 rounded-xl bg-surface-container-low p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-container/10">
                  <feature.icon className="h-5 w-5 text-primary-container" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-on-surface">{feature.label}</h3>
                  <p className="mt-1 font-body text-sm text-on-surface-variant">{feature.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
