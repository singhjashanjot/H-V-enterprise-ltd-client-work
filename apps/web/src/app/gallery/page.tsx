import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Badge } from '@hv/ui';
import { galleryProjects } from '@hv/constants';
import { GalleryGrid } from '@/components/features/gallery/gallery-grid';
import { CtaBanner } from '@/components/features/home/cta-banner';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse our real-world installations across Canada, from rugged perimeter security to architectural garden highlights.',
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 flex flex-col items-center text-center">
            <Badge variant="durability" className="mb-6">Our Portfolio</Badge>
            <h1 className="max-w-3xl font-display text-headline-lg text-on-surface">
              Project Gallery.
            </h1>
            <p className="mt-6 max-w-2xl font-body text-body-lg text-on-surface-variant">
              Browse our real-world installations across Canada, from rugged perimeter security to architectural garden highlights.
            </p>
          </div>
        </section>

        <GalleryGrid />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
