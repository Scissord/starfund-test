'use client';

import Pagination from "@/components/ui/pagination";

type Props = {
  page: number | string;
  lastPage: number;
  sortBy: string;
};

const css = {
  container: `
    flex justify-end
    gap-3 my-4
  `
};

export default function BottomSection(props: Props) {
  const { page, lastPage, sortBy } = props;
  return (
    <section className={css.container}>
      <Pagination
        page={page}
        lastPage={lastPage}
        sortBy={sortBy}
      />
    </section>
  );
};
