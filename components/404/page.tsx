'use client';

const css = {
  container: `
    min-h-screen flex items-center justify-center
  `,
  title: `
    text-3xl
  `,
};

const Page404 = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>404</p>
    </div>
  );
};

export default Page404
