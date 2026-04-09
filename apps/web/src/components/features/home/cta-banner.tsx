'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@hv/ui';
import { AnimateOnScroll } from '@/components/common/animate-on-scroll';

export function CtaBanner() {
  return (
    <section className="bg-[#304834] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="font-display text-headline-md text-on-primary">
              Ready to build your perfect fence?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-body-lg text-on-primary/80">
              Free consultation. Transparent quote. No pressure. Join 500+ satisfied Canadians today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-on-primary/30 text-on-primary hover:bg-on-primary hover:text-primary"
                >
                  Get Your Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+16046185783">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-on-primary/80 hover:bg-on-primary/10 hover:text-on-primary"
                >
                  Call (604) 618-5783
                </Button>
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
