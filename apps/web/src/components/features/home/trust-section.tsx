'use client';

import { Award, Sparkles, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { trustSignals } from '@hv/constants';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/common/animate-on-scroll';

const iconMap: Record<string, React.ElementType> = {
  Award,
  Sparkles,
  MessageSquare,
  Clock,
  ShieldCheck,
};

export function TrustSection() {
  return (
    <section className="bg-on-background py-16 text-surface md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <AnimateOnScroll>
          <div className="text-center">
            <span className="label text-primary-fixed-dim">Why Choose Us</span>
            <h2 className="mt-3 font-display text-headline-md text-surface">
              Built Different. Built to Last.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-body-lg text-surface/70">
              Projects completed across British Columbia with 100% satisfaction rating.
            </p>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:mt-16">
          {trustSignals.map((signal) => {
            const IconComponent = iconMap[signal.icon] || Award;
            return (
              <StaggerItem key={signal.title}>
                <div className="rounded-xl bg-surface/5 p-6 text-center transition-colors hover:bg-surface/10">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/20">
                    <IconComponent className="h-5 w-5 text-primary-fixed-dim" />
                  </div>
                  <h3 className="mt-4 font-display text-sm font-semibold text-surface">
                    {signal.title}
                  </h3>
                  <p className="mt-2 font-body text-xs text-surface/60">{signal.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Quote */}
        <AnimateOnScroll delay={0.3}>
          <blockquote className="mt-16 text-center">
            <p className="mx-auto max-w-3xl font-display text-xl italic text-surface/80 md:text-2xl">
              &ldquo;A fence isn&rsquo;t just a boundary — it&rsquo;s security, privacy, and lasting value for your Canadian home.&rdquo;
            </p>
          </blockquote>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
