'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Card } from '@hv/ui';
import { fencingServices } from '@hv/constants';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/common/animate-on-scroll';

export function ServicesGrid() {
  return (
    <section className="bg-surface-container-low py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <AnimateOnScroll>
          <div className="max-w-2xl">
            <span className="label text-primary-container">Our Fencing Solutions</span>
            <h2 className="mt-3 font-display text-headline-md text-on-surface">
              From classic cedar to modern corrugated metal — every style, every property, every budget.
            </h2>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fencingServices.map((service) => (
            <StaggerItem key={service.id}>
              <Link href={service.href} className="group block h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-surface-container-lowest transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                    <Image
                      src={service.image || '/images/placeholder.jpg'}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-on-surface">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 font-body text-sm text-on-surface-variant">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 font-body text-sm font-medium text-primary-container transition-colors group-hover:text-primary">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
