'use client';

import { useEffect, useRef, useState } from "react";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import Sidebar from "../sidebar";
import LeftBlock from "./top-section/left-block";
import RightBlock from "./top-section/right-block";
import SearchMenu from "./top-section/search-menu";

type Props = {
  search: string;
  page: number | string;
  searchProducts: Product[];
  setSearchProducts: ([]) => void;
  searchLoading: boolean;
  sortBy: string;
  setSortBy: (val: string) => void;
};

const css = {
  container: `
    relative flex-col sm:flex-row
    flex items-center
    justify-between gap-3
  `,
  sidebar: `
    fixed right-0 top-0 ml-auto h-[100vh] bg-neutral-200
    w-[300px] z-10 lg:flex flex-col items-center rounded-tl-md
    rounded-bl-md transition-width duration-300
  `,
};

export default function TopSection(props: Props) {
  const {
    page, search,
    searchProducts,
    setSearchProducts,
    searchLoading,
    sortBy, setSortBy
  } = props;

  const router = useRouter();

  const searchResultsRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState<string>(search);
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchResultsRef.current && !searchResultsRef.current.contains(event.target as Node)) {
        setSearchProducts([]);
        setValue("");
        router.push(`?page=${page}`);
      };
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [router, setSearchProducts]);

  return (
    <section className={css.container}>
      <LeftBlock
        value={value}
        setValue={setValue}
        page={page}
        search={search}
        searchLoading={searchLoading}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <RightBlock
        setIsSidebarActive={setIsSidebarActive}
      />
      {isSidebarActive && (
        <div
          className={css.sidebar}
        >
          <Sidebar setIsSidebarActive={setIsSidebarActive}/>
        </div>
      )}
      {searchProducts.length > 0 && (
        <SearchMenu
          searchResultsRef={searchResultsRef}
          searchProducts={searchProducts}
        />
      )}
    </section>
  );
};
