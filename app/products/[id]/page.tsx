import { Metadata, Viewport } from "next";
import Product from "@/components/product/product";

export const metadata: Metadata = {
  title: { default: 'Product Test App', template: '%s | Product Test App' },
  description: 'Explore a variety of products in our product catalog.',
  applicationName: 'Product Test App',
  openGraph: {
    url: 'http://localhost:3000/products',
    title: 'Product Test App',
    description: 'Explore a variety of products in our product catalog.',
    images: {
      url: 'https://example.com/og-image-products.jpg',
      alt: 'Product Test App OG Image',
    },
    // locale: 'en_US',
  },
  twitter: {
    creator: '@scissxrd',
    card: 'summary_large_image',
    title: 'Product Test App',
    description: 'Explore a variety of products in our product catalog.',
    // image: 'https://example.com/og-image-products.jpg',
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

export default Product;
