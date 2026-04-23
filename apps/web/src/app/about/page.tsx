import type { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import { AboutHero } from '@/components/features/about/about-hero';
import { ValuesGrid } from '@/components/features/about/values-grid';
import { ProcessTimeline } from '@/components/features/about/process-timeline';
import { TeamSection } from '@/components/features/about/team-section';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Rooted in Canadian durability, HV ENTERPRISE LTD combines precision engineering with artisanal craftsmanship to secure and beautify your landscape.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <AboutHero />
        <ValuesGrid />
        <ProcessTimeline />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
