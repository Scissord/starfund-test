'use client';

import SearchInput from "@/components/ui/search-input";
import Select from "@/components/ui/select";
import { useRouter } from "next/navigation";

type Props = {
  value: string;
  setValue: (value: string) => void;
  page: string | number;
  search: string;
  searchLoading: boolean;
  sortBy: string;
  setSortBy: (value: string) => void;
};

// should create table in db
const options = [
  { value: "", label: "No filters" },
  { value: "&sortBy=price&order=asc", label: "Low price first" },
  { value: "&sortBy=price&order=desc", label: "High price first" },
  { value: "&sortBy=rating&order=asc", label: "Low rating first" },
  { value: "&sortBy=rating&order=desc", label: "High rating first" },
];

const css = {
  left: `
    flex flex-col sm:flex-row
    items-center gap-3 w-[50%]
  `,
};

export default function LeftBlock(props: Props) {
  const {
    value, setValue, page,
    search, searchLoading,
    sortBy, setSortBy
  } = props;

  const router = useRouter();

  return (
    <div className={css.left}>
      <SearchInput
        value={value}
        setValue={setValue}
        page={page}
        search={search}
        loading={searchLoading}
        placeholder="Search products..."
      />
      <Select
        value={sortBy}
        options={options}
        onChange={(val: string) => {
          setSortBy(val);
          router.push(`?page=${1}${val}`);
        }}
      />
    </div>
  )
};
