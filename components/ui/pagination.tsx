'use client';

import { useRouter } from 'next/navigation';

type Props = {
  page: number | string;
  lastPage: number;
  sortBy: string;
};

const css = {
  button: `
    px-4 py-2 bg-blue-500
    text-white rounded
  `
};

export default function Pagination(props: Props) {
  const { page, lastPage, sortBy } = props;

  const router = useRouter();

  const prev = () => {
    const newPage = Math.max(Number(page) - 1, 1)
    router.push(`?page=${newPage}${sortBy}`);
  };

  const next = () => {
    const newPage = Number(page) < lastPage ? Number(page) + 1 : page;
    router.push(`?page=${newPage}${sortBy}`);
  };

  return (
    <>
      <button
        onClick={() => prev()}
        className={css.button}
      >
        «
      </button>
      <button className={css.button}>
        Page {page}
      </button>
      <button
        onClick={() => next()}
        className={css.button}
      >
        »
      </button>
    </>
  );
};
