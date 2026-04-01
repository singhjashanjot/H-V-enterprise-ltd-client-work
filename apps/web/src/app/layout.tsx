import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import '@/styles/globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'H&V Enterprise Ltd | Professional Canadian Fencing',
    template: '%s | H&V Enterprise Ltd',
  },
  description:
    'Expert fencing installation in cedar, vinyl, aluminum, chain link, and more. Serving homeowners and businesses across Canada with warranties and craftsmanship you can actually feel.',
  keywords: [
    'fencing',
    'cedar fence',
    'vinyl fence',
    'aluminum fence',
    'chain link fence',
    'Canadian fencing',
    'fence installation',
    'Toronto fencing',
    'fence contractor',
    'H&V Enterprise',
  ],
  authors: [{ name: 'H&V Enterprise Ltd' }],
  creator: 'H&V Enterprise Ltd',
  metadataBase: new URL('https://hv-enterprise.ca'),
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://hv-enterprise.ca',
    siteName: 'H&V Enterprise Ltd',
    title: 'H&V Enterprise Ltd | Professional Canadian Fencing',
    description:
      'Expert fencing installation in cedar, vinyl, aluminum, chain link, and more. Serving homeowners and businesses across Canada.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'H&V Enterprise Ltd | Professional Canadian Fencing',
    description:
      'Expert fencing installation across Canada with warranties and craftsmanship you can actually feel.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#263D2A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-body text-on-surface antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
