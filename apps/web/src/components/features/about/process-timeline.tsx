'use client';

import { processSteps } from '@hv/constants';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/common/animate-on-scroll';

export function ProcessTimeline() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <AnimateOnScroll>
          <div className="text-center">
            <span className="label text-primary-container">Our Process</span>
            <h2 className="mt-3 font-display text-headline-md text-on-surface">
              From consultation to completion.
            </h2>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <StaggerItem key={step.step}>
              <div className="relative">
                {/* Step number */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container font-display text-lg font-bold text-on-primary">
                  {step.step}
                </div>

                <h3 className="mt-4 font-display text-base font-semibold text-on-surface">{step.title}</h3>
                <p className="mt-2 font-body text-sm text-on-surface-variant">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
