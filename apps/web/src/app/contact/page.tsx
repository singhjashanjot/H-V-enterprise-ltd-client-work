import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Header, Footer } from '@/components/layout';
import { Badge } from '@hv/ui';
import { siteConfig } from '@hv/constants';
import { QuoteForm } from '@/components/features/contact/quote-form';
import { AnimateOnScroll } from '@/components/common/animate-on-scroll';

export const metadata: Metadata = {
  title: 'Contact & Free Quote',
  description: 'Get a free fencing quote from HV ENTERPRISE LTD. Contact our experts for professional consultation.',
};

const tips = [
  'Measure your perimeter as accurately as possible to ensure material precision.',
  'Note any significant elevation changes or rocky terrain in your yard.',
  'Photos of the current fence or landscape help our designers visualize the foundation.',
  'Mention if you require old fence removal and disposal services.',
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <AnimateOnScroll>
              <Badge variant="durability" className="mb-6">Get in Touch</Badge>
              <h1 className="max-w-3xl font-display text-headline-lg text-on-surface">
                Contact & Free Quote.
              </h1>
            </AnimateOnScroll>

            {/* Contact Info Row */}
            <AnimateOnScroll delay={0.1}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 rounded-xl bg-surface-container-low p-5 transition-colors hover:bg-surface-container">
                  <Phone className="h-5 w-5 text-primary-container" />
                  <div>
                    <p className="label text-on-surface-variant">Phone</p>
                    <p className="font-body text-sm font-medium text-on-surface">{siteConfig.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 rounded-xl bg-surface-container-low p-5 transition-colors hover:bg-surface-container">
                  <Mail className="h-5 w-5 text-primary-container" />
                  <div>
                    <p className="label text-on-surface-variant">Email</p>
                    <p className="font-body text-sm font-medium text-on-surface">{siteConfig.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-xl bg-surface-container-low p-5">
                  <MapPin className="h-5 w-5 text-primary-container" />
                  <div>
                    <p className="label text-on-surface-variant">Coverage</p>
                    <p className="font-body text-sm font-medium text-on-surface">Canada · 22+ Cities</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-surface-container-low p-5">
                  <Clock className="h-5 w-5 text-primary-container" />
                  <div>
                    <p className="label text-on-surface-variant">Hours</p>
                    <p className="font-body text-sm font-medium text-on-surface">{siteConfig.hours.weekday}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Form + Tips */}
        <section className="bg-surface-container-low py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Tips Sidebar */}
              <div className="lg:col-span-1">
                <AnimateOnScroll>
                  <h2 className="font-display text-xl font-semibold text-on-surface">Before You Request</h2>
                  <p className="mt-2 font-body text-sm text-on-surface-variant">
                    Want a detailed estimate? Fill out our Quote Request below.
                  </p>
                  <ul className="mt-6 flex flex-col gap-4">
                    {tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary-container" />
                        <span className="font-body text-sm text-on-surface-variant">{tip}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Immediate Assistance */}
                  <div className="mt-8 rounded-xl bg-primary-container p-6">
                    <h3 className="font-display text-sm font-semibold text-on-primary">Immediate Assistance</h3>
                    <p className="mt-1 font-body text-xs text-on-primary/80">
                      Need help measuring? Call our technical team for a quick walkthrough over the phone.
                    </p>
                    <a
                      href="tel:+16046185783"
                      className="mt-3 inline-flex items-center gap-2 font-body text-sm font-medium text-on-primary underline"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {siteConfig.phone}
                    </a>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Quote Form */}
              <div className="lg:col-span-2">
                <AnimateOnScroll delay={0.1}>
                  <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-ambient-sm">
                    <h2 className="font-display text-xl font-semibold text-on-surface">Request a Free Quote</h2>
                    <p className="mt-2 font-body text-sm text-on-surface-variant">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                    <QuoteForm />
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
