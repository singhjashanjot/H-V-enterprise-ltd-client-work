import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Shield, Palette, Wrench, BadgeCheck, Building2, ArrowRight } from 'lucide-react';
import { Header, Footer } from '@/components/layout';
import { Button, Badge } from '@hv/ui';
import { serviceDetailsRecord } from '@hv/constants';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/common/animate-on-scroll';
import { CtaBanner } from '@/components/features/home/cta-banner';

export async function generateStaticParams() {
  return Object.keys(serviceDetailsRecord).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = serviceDetailsRecord[resolvedParams.slug];
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.hero.badge,
    description: service.hero.description,
  };
}

const featureIcons: Record<string, React.ElementType> = {
  Shield, Palette, Wrench, BadgeCheck, Building2,
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = serviceDetailsRecord[resolvedParams.slug];
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-background py-20 md:py-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <AnimateOnScroll>
                <Badge variant="durability" className="mb-6">{service.hero.badge}</Badge>
                <h1 className="max-w-4xl font-display text-headline-lg text-on-surface">
                  {service.hero.title}
                </h1>
                <p className="mt-6 max-w-xl font-body text-body-lg text-on-surface-variant">
                  {service.hero.description}
                </p>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button size="lg">
                      Get a Quote
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
            
            <div className="lg:col-span-5 relative hidden lg:block">
              <AnimateOnScroll delay={0.2}>
                <div className="w-full translate-x-12 xl:translate-x-24 relative">
                  
                  {/* Main Hero Image */}
                  <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                    <Image 
                      src={service.hero.image.src} 
                      alt={service.hero.image.alt} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111210]/40 to-transparent"></div>
                  </div>

                  {/* Top Left Decorative Image */}
                  {service.galleryImages[0] && (
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-20 w-20 xl:h-28 xl:w-28 rounded-xl overflow-hidden shadow-xl border-4 border-background z-10 hidden md:block">
                      <Image 
                        src={service.galleryImages[0].src} 
                        alt="" 
                        fill 
                        className="object-cover" 
                        sizes="120px"
                      />
                    </div>
                  )}

                  {/* Bottom Left Decorative Image */}
                  {service.galleryImages[1] && (
                    <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 h-24 w-24 xl:h-32 xl:w-32 rounded-xl overflow-hidden shadow-xl border-4 border-background z-10 hidden md:block">
                      <Image 
                        src={service.galleryImages[1].src} 
                        alt="" 
                        fill 
                        className="object-cover" 
                        sizes="160px"
                      />
                    </div>
                  )}

                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Installed Gallery */}
        <section className="bg-surface-container-low py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <AnimateOnScroll>
              <h2 className="font-display text-headline-md text-on-surface">{service.galleryTitle}</h2>
              <p className="mt-2 font-body text-body-lg text-on-surface-variant">{service.galleryDescription}</p>
            </AnimateOnScroll>
            <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-3">
              {service.galleryImages.map((img) => (
                <StaggerItem key={img.label}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-container">
                    <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-on-background/60 to-transparent p-4">
                      <p className="font-body text-sm font-medium text-surface">{img.label}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Engineered for Performance & Styles */}
        <section className="bg-surface-container-lowest py-16 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">
            
            {/* Left Side: Features */}
            <AnimateOnScroll>
              <div>
                <Badge variant="durability" className="mb-6 w-fit">{service.featuresBadge}</Badge>
                <h2 className="mb-12 font-display text-headline-md text-on-surface">{service.featuresTitle}</h2>
                
                <div className="space-y-12">
                  {service.features.map((feature) => {
                    const Icon = featureIcons[feature.icon] || Shield;
                    return (
                      <div key={feature.title} className="group flex gap-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container transition-colors group-hover:bg-primary-container">
                          <Icon className="h-6 w-6 text-primary-container transition-colors group-hover:text-on-primary" />
                        </div>
                        <div>
                          <h3 className="mb-2 font-display text-lg font-semibold text-on-surface">{feature.title}</h3>
                          <p className="max-w-md font-body text-body-lg text-on-surface-variant">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right Side: Available Styles */}
            <AnimateOnScroll>
              <div className="rounded-[2rem] bg-surface-container-low p-8 lg:p-12">
                <h3 className="label mb-10 text-center text-primary-container">{service.stylesTitle}</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {service.styles.map((style) => (
                    <div key={style.id} className="rounded-xl border border-transparent bg-surface-container-lowest p-6 shadow-ambient transition-all hover:-translate-y-1 hover:border-primary-container">
                      <div className="relative mb-4 h-40 overflow-hidden rounded-lg bg-surface-container">
                        <Image src={style.image} alt={style.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                      </div>
                      <h4 className="mb-1 font-display text-sm font-semibold text-on-surface">{style.title}</h4>
                      <p className="font-body text-xs text-on-surface-variant">{style.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
            
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
