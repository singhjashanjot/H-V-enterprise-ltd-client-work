'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@hv/ui';
import { AnimateOnScroll } from '@/components/common/animate-on-scroll';

const regionData = {
  'Eastern Canada': [
    'Toronto',
    'Ottawa',
    'Mississauga',
    'Vaughan',
    'Markham',
    'Oshawa',
    'Hamilton',
    'Brampton',
    'Richmond Hill',
    'Oakville',
    'Burlington',
    'Barrie',
  ],
  'Western Canada': [
    'Vancouver',
    'Surrey',
    'Burnaby',
    'Richmond',
    'Langley',
    'Coquitlam',
    'Calgary',
    'Edmonton',
    'Kelowna',
    'Victoria',
  ],
};

type RegionKey = keyof typeof regionData;

export function ServiceAreasPreview() {
  const [activeRegion, setActiveRegion] = useState<RegionKey>('Eastern Canada');

  const cities = regionData[activeRegion];
  const totalCities = Object.values(regionData).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <section className="bg-surface-container-low py-16 md:py-20 lg:py-[100px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-10 lg:gap-16 lg:px-12">
        {/* ─── Left Column ─── */}
        <div className="flex flex-col gap-6 lg:col-span-4">
          <AnimateOnScroll>
            <Badge variant="durability" className="mb-2 w-fit">
              WHERE WE WORK
            </Badge>

            <h2 className="font-display text-headline-md text-on-surface">
              You expect a quality fence. We exceed expectations.
            </h2>

            <p className="mt-1 max-w-lg font-body text-body-lg text-on-surface-variant">
              From coast to coast, we bring our specialized fencing expertise to neighborhoods near you.
            </p>

            {/* Region Tabs */}
            <div className="mt-2 flex gap-1 rounded-full bg-surface-container p-1 w-fit">
              {(Object.keys(regionData) as RegionKey[]).map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`rounded-full px-5 py-2 font-body text-sm font-bold transition-all duration-200 ${
                    activeRegion === region
                      ? 'bg-white text-on-surface shadow-sm'
                      : 'text-on-surface/50 hover:text-on-surface/70'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* City Pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="rounded-full bg-[#EAE6E0] px-4 py-2 font-body text-xs font-bold uppercase tracking-wider text-primary-container"
                >
                  {city}
                </span>
              ))}
            </div>

            {/* Stats + Contact Link */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="font-display text-3xl font-black text-on-surface">
                  {totalCities}+
                </span>
                <span className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Cities Covered
                </span>
              </div>
              <Link
                href="/contact"
                className="ml-8 border-b-2 border-primary/20 pb-0.5 font-body text-sm font-bold text-primary-container transition-all hover:border-primary"
              >
                Don&apos;t see yours? Contact us →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ─── Right Column — Map ─── */}
        <div className="lg:col-span-6">
          <AnimateOnScroll>
            <div className="relative h-[400px] overflow-hidden rounded-2xl border border-outline-variant/30 bg-[#EAE6E0] shadow-inner md:h-[500px]">
              <Image
                src="/images/service-area-map.png"
                alt="Service area map of Canada"
                fill
                className="object-cover opacity-50 grayscale mix-blend-multiply"
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
  );
}
