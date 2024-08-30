'use client';

import { useRouter } from 'next/navigation';

type Props = {
  page: number | string;
  lastPage: number;
};

export default function Pagination(props: Props) {
  const { page, lastPage } = props;

  const router = useRouter();

  const prev = () => {
    const newPage = Math.max(Number(page) - 1, 1)
    router.push(`?page=${newPage}`);
  };

  const next = () => {
    const newPage = Number(page) < lastPage ? Number(page) + 1 : page;
    router.push(`?page=${newPage}`);
  };

  return (
    <>
      <button
        onClick={() => prev()}
        className={`px-4 py-2 bg-blue-500 text-white rounded`}
      >
        «
      </button>
      <button className={`px-4 py-2 bg-blue-500 text-white rounded`}>
        Page {page}
      </button>
      <button
        onClick={() => next()}
        className={`px-4 py-2 bg-blue-500 text-white rounded`}
      >
        »
      </button>
    </>
  );
};
