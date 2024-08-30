'use client';

import Pagination from "@/components/ui/pagination";

type Props = {
  page: number | string;
  lastPage: number;
};

export default function BottomSection(props: Props) {
  const { page, lastPage } = props;
  return (
    <section className="flex justify-end gap-3 my-4">
      <Pagination
        page={page}
        lastPage={lastPage}
      />
    </section>
  );
};
