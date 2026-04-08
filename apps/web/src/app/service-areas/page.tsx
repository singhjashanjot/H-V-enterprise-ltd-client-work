import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Home, Building2, ArrowRight } from 'lucide-react';
import { Header, Footer } from '@/components/layout';
import { Button, Badge } from '@hv/ui';
import { serviceRegions } from '@hv/constants';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/common/animate-on-scroll';
import { CtaBanner } from '@/components/features/home/cta-banner';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: 'We install and repair fences across our service regions — residential and commercial.',
};

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-12 lg:px-12">
            
            {/* ─── Left Column — Content ─── */}
            <div className="lg:col-span-6">
              <AnimateOnScroll>
                <Badge variant="durability" className="mb-6">Where We Work</Badge>
                <h1 className="max-w-3xl font-display text-headline-lg text-on-surface">
                  Fencing Services Across British Columbia.
                </h1>
                <p className="mt-6 font-body text-body-lg text-on-surface-variant">
                  We install and repair fences across our service regions — residential and commercial. Can&apos;t see your city? Contact us, we may still cover it.
                </p>
                <div className="mt-6">
                  <Link href="/contact" className="font-body text-sm font-medium text-primary-container underline underline-offset-4 transition-colors hover:text-primary">
                    Don&apos;t see your city? Contact us — we may still serve your area.
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>

            {/* ─── Right Column — Map ─── */}
            <div className="lg:col-span-6">
              <AnimateOnScroll delay={0.2}>
                <div className="relative h-[400px] overflow-hidden rounded-2xl border border-outline-variant/30 bg-[#EAE6E0] shadow-inner md:h-[500px]">
                  <Image
                    src="/images/service-area-map.png"
                    alt="Service area map of British Columbia"
                    fill
                    className="object-cover opacity-50 mix-blend-multiply grayscale"
                  />
                  {/* Decorative Map Markers */}
                  <div className="absolute left-1/3 top-1/2 animate-pulse rounded-full border-2 border-white bg-primary-container p-1.5 shadow-lg" />
                  <div className="absolute left-1/2 top-1/4 rounded-full border-2 border-white bg-primary-container p-1.5 shadow-lg" />
                  <div className="absolute bottom-1/3 right-1/4 rounded-full border-2 border-white bg-primary-container p-1.5 shadow-lg" />
                </div>
              </AnimateOnScroll>
            </div>

          </div>
        </section>

        {/* Regions Grid */}
        <section className="bg-surface-container-low py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <StaggerContainer className="grid gap-6 lg:grid-cols-3">
              {serviceRegions.map((region) => (
                <StaggerItem key={region.province} className="h-full">
                  <div className="flex h-full flex-col rounded-xl bg-surface-container-lowest p-8 shadow-ambient-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary-container" />
                      <h2 className="font-display text-xl font-semibold text-on-surface">{region.province}</h2>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-2">
                      {region.cities.map((city) => (
                        <span key={city} className="font-body text-sm text-on-surface-variant">{city}</span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Service Types */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <StaggerContainer className="grid gap-6 md:grid-cols-3">
              <StaggerItem>
                <div className="rounded-xl bg-surface-container-low p-8">
                  <Home className="h-8 w-8 text-primary-container" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-on-surface">Residential Projects</h3>
                  <p className="mt-2 font-body text-sm text-on-surface-variant">From private backyard fences to front yard curb appeal — we work with homeowners across all regions.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-xl bg-surface-container-low p-8">
                  <Building2 className="h-8 w-8 text-primary-container" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-on-surface">Commercial Projects</h3>
                  <p className="mt-2 font-body text-sm text-on-surface-variant">Large-scale perimeters, industrial fencing, business boundaries — we have the crew and equipment.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-xl bg-primary-container p-8">
                  <h3 className="font-display text-lg font-semibold text-on-primary">Not in our list?</h3>
                  <p className="mt-2 font-body text-sm text-on-primary/80">Reach out anyway. Our team regularly takes on projects outside listed areas depending on scope.</p>
                  <Link href="/contact" className="mt-4 inline-block">
                    <Button variant="secondary" size="sm" className="border-on-primary/30 text-on-primary hover:bg-on-primary hover:text-primary">
                      Contact Us <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
