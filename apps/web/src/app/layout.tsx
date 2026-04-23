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
    default: 'HV ENTERPRISE LTD | Professional Fencing in BC',
    template: '%s | HV ENTERPRISE LTD',
  },
  description:
    'Expert fencing installation in cedar, vinyl, aluminum, chain link, and more. Serving homeowners and businesses across the Okanagan, Kamloops, and Lower Mainland with warranties and craftsmanship you can actually feel.',
  keywords: [
    'fencing',
    'cedar fence',
    'vinyl fence',
    'aluminum fence',
    'chain link fence',
    'Okanagan fencing',
    'Kamloops fencing',
    'fence installation',
    'Kelowna fencing',
    'fence contractor',
    'HV ENTERPRISE LTD',
  ],
  authors: [{ name: 'HV ENTERPRISE LTD' }],
  creator: 'HV ENTERPRISE LTD',
  metadataBase: new URL('https://www.allfences.ca'),
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.allfences.ca',
    siteName: 'HV ENTERPRISE LTD',
    title: 'HV ENTERPRISE LTD | Professional Fencing in BC',
    description:
      'Expert fencing installation in cedar, vinyl, aluminum, chain link, and more. Serving homeowners and businesses across British Columbia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HV ENTERPRISE LTD | Professional Fencing in BC',
    description:
      'Expert fencing installation across British Columbia with warranties and craftsmanship you can actually feel.',
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
