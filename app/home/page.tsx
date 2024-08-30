'use client';

import Head from "next/head";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center gap-3">
      <Head>
        <title>Product Test App</title>
        <meta name="description" content="Explore a variety of products in our product catalog." />
        <meta property="og:title" content="Product Test App" />
        <meta property="og:description" content="Explore a variety of products in our product catalog." />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="http://localhost:3000" />
        <meta property="og:site_name" content="Product Test App" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Product Test App" />
        <meta name="twitter:description" content="Explore a variety of products in our product catalog." />
        <meta name="twitter:image" content="https://example.com/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <p className="text-3xl">Welcome to Product Test App</p>
      <Link
        href={'/products'}
        className={'transform active:scale-95 transition-transform border border-black p-4 h-7 flex items-center justify-center rounded-lg'}
      >
        Continue
      </Link>
    </div>
  );
};

export default HomePage
