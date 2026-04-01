import { Header, Footer } from '@/components/layout';
import { HomeHero } from '@/components/features/home/hero';
import { ServicesGrid } from '@/components/features/home/services-grid';
import { TrustSection } from '@/components/features/home/trust-section';
import { ServiceAreasPreview } from '@/components/features/home/service-areas-preview';
import { CtaBanner } from '@/components/features/home/cta-banner';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <HomeHero />
        <ServicesGrid />
        <TrustSection />
        <ServiceAreasPreview />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
