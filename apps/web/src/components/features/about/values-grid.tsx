'use client';

import { ShieldCheck, Users, Hammer, Receipt } from 'lucide-react';
import { companyValues } from '@hv/constants';
import { StaggerContainer, StaggerItem } from '@/components/common/animate-on-scroll';

const iconMap: Record<string, React.ElementType> = { ShieldCheck, Users, Hammer, Receipt };

export function ValuesGrid() {
  return (
    <section className="bg-surface-container-low py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((value) => {
            const Icon = iconMap[value.icon] || ShieldCheck;
            return (
              <StaggerItem key={value.title} className="h-full">
                <div className="flex flex-col h-full rounded-xl bg-surface-container-lowest p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container/10">
                    <Icon className="h-5 w-5 text-primary-container" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-on-surface">{value.title}</h3>
                  <p className="mt-2 font-body text-sm text-on-surface-variant">{value.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
