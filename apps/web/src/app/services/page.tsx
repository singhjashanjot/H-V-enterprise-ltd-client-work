import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Header, Footer } from '@/components/layout';
import { Section, Button, Badge } from '@hv/ui';
import { fencingServices, materials } from '@hv/constants';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/common/animate-on-scroll';
import { CtaBanner } from '@/components/features/home/cta-banner';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Browse our complete range of fencing solutions — from natural cedar to modern corrugated metal.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <AnimateOnScroll>
              <div className="flex flex-col items-center text-center">
                <Badge variant="durability" className="mb-6">Our Services</Badge>
                <h1 className="max-w-3xl font-display text-headline-lg text-on-surface">
                  Fencing solutions for every need.
                </h1>
                <p className="mt-6 max-w-2xl font-body text-body-lg text-on-surface-variant">
                  Browse our complete range of fencing solutions — from natural cedar to modern corrugated metal. Click any category to explore styles, photos, and get a quote.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Service Cards */}
        <section className="bg-surface-container-low py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            {/* Large featured cards */}
            <StaggerContainer className="grid gap-6 md:grid-cols-2">
              {fencingServices.slice(0, 2).map((service) => (
                <StaggerItem key={service.id}>
                  <Link href={service.href} className="group block">
                    <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image src={service.image || '/images/placeholder.jpg'} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-display text-xl font-semibold text-on-surface">{service.title}</h3>
                        <p className="mt-2 font-body text-sm text-on-surface-variant">{service.description}</p>
                        <span className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-medium text-primary-container group-hover:text-primary">
                          Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Smaller grid */}
            <StaggerContainer className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {fencingServices.slice(2).map((service) => (
                <StaggerItem key={service.id}>
                  <Link href={service.href} className="group block h-full">
                    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-surface-container-lowest transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image src={service.image || '/images/placeholder.jpg'} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-display text-base font-semibold text-on-surface">{service.title}</h3>
                        <p className="mt-1.5 font-body text-sm text-on-surface-variant">{service.description}</p>
                        <span className="mt-auto inline-flex items-center gap-1.5 pt-3 font-body text-sm font-medium text-primary-container group-hover:text-primary">
                          Explore → 
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Materials Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <AnimateOnScroll>
              <span className="label text-primary-container">Material Guide</span>
              <h2 className="mt-3 font-display text-headline-md text-on-surface">Know your materials.</h2>
            </AnimateOnScroll>
            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {materials.map((material) => (
                <StaggerItem key={material.id}>
                  <div className="rounded-xl bg-surface-container-low p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient-sm">
                    <h3 className="font-display text-sm font-semibold text-on-surface">{material.title}</h3>
                    <p className="mt-2 font-body text-xs leading-relaxed text-on-surface-variant">{material.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
