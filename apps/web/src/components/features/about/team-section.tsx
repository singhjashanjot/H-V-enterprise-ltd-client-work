'use client';

import Image from 'next/image';
import { Clock } from 'lucide-react';
import { AnimateOnScroll } from '@/components/common/animate-on-scroll';

export function TeamSection() {
  return (
    <section className="bg-on-background py-16 text-surface md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateOnScroll>
            <div>
              <span className="label text-primary-fixed-dim">Our Team</span>
              <h2 className="mt-3 font-display text-headline-md text-surface">
                Expert hands on every project.
              </h2>
              <p className="mt-4 font-body text-body-lg text-surface/70">
                Our crew isn&apos;t just skilled labor; they&apos;re craftsmen who take ownership of every post they dig and every panel they secure.
              </p>
              <div className="mt-8 flex items-center gap-4 rounded-xl bg-surface/5 p-5">
                <Clock className="h-6 w-6 text-primary-fixed-dim" />
                <div>
                  <p className="font-display text-sm font-semibold text-surface">Available 6 Days</p>
                  <p className="font-body text-sm text-surface/60">Mon - Sat: 7am to 7pm</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface/10">
              <Image
                src="/images/team-work.jpg"
                alt="H&V Enterprise crew installing a fence"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
