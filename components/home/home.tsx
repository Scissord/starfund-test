'use client';

import Link from "next/link";

const css = {
  container: `
    min-h-[100vh] flex flex-col
    items-center justify-center gap-3
  `,
  title: `
    text-3xl
  `,
  link: `
    transform active:scale-95
    transition-transform border
    border-black p-4 h-7 flex
    items-center justify-center
    rounded-lg
  `
};

export default function Home() {
  return (
    <div className={css.container}>
      <p className={css.title}>Welcome to Product Test App</p>
      <Link
        href={'/products?page=1'}
        className={css.link}
      >
        Continue
      </Link>
    </div>
  );
};
