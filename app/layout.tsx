import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import Providers from '@/app/providers';
import "./globals.css";

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const APP_NAME = 'Product Test App';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | Product Test App' },
  description: 'Explore a variety of products in our product catalog.',
  applicationName: APP_NAME,
  openGraph: {
    url: 'http://localhost:3000',
    title: APP_NAME,
    description: 'Explore a variety of products in our product catalog.',
    images: {
      url: 'https://example.com/og-image.jpg',
      alt: 'Product Test App OG Image',
    },
    // locale: 'en_US',
  },
  twitter: {
    creator: '@scissxrd',
    card: 'summary_large_image',
    title: APP_NAME,
    description: 'Explore a variety of products in our product catalog.',
    // image: 'https://example.com/og-image.jpg',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body suppressHydrationWarning={true} className={nunito.className}>{children}</body>
      </Providers>
    </html>
  );
};
