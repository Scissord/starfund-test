'use client';

import { useEffect, useRef, useState } from "react";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import SearchInput from "@/components/ui/search-input";
import Image from "next/image";
import IconShoppingCard from '@/components/icons/shopping-cart-icon';
import Sidebar from "../sidebar";
import { useAppSelector } from "@/hooks/useAppSelector";
import { RootState } from "@/store/store";

type Props = {
  search: string;
  page: number | string;
  searchProducts: Product[];
  setSearchProducts: ([]) => void;
  searchLoading: boolean;
};

export default function TopSection(props: Props) {
  const {
    page, search, searchProducts,
    setSearchProducts, searchLoading
  } = props;

  const router = useRouter();

  const searchResultsRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState<string>(search);
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);

  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
    <section className="relative flex items-center justify-between gap-3">
      <SearchInput
        value={value}
        setValue={setValue}
        page={page}
        search={search}
        loading={searchLoading}
        placeholder="Search products..."
      />
      <button
        onClick={() => setIsSidebarActive(true)}
        className='transform active:scale-95 transition-transform p-2 border border-black rounded-full flex items-center justify-center relative'
      >
        <span>{totalQuantity}</span>
        <IconShoppingCard/>
      </button>
      {isSidebarActive && (
        <div
          className={`
            fixed right-0 top-0 ml-auto h-[100vh] bg-neutral-200
            w-[300px] z-10 lg:flex flex-col items-center rounded-tl-md
            rounded-bl-md transition-width duration-300
          `}
        >
          <Sidebar setIsSidebarActive={setIsSidebarActive}/>
        </div>
      )}
      {searchProducts.length > 0 && (
        <div
          ref={searchResultsRef}
          className="absolute top-12 px-2 z-10 bg-white border border-black min-h-[5vh] max-h-[72vh] overflow-y-auto w-[40%]"
        >
          <div className="flex flex-col divide-y divide-black">
            {searchProducts.map((product: Product, index: number) => (
              <div key={product.id} className="flex items-center gap-3">
                <div className={`w-[10%] h-16 overflow-hidden mb-4 relative`}>
                  <Image
                    src={product.images[0]}
                    alt='product-image'
                    layout='fill'
                    objectFit='contain'
                    priority
                    className='absolute inset-0'
                  />
                </div>
                <div className="w-[20%]">
                  <p className="">{product.title}</p>
                </div>
                <div className="w-[70%]">
                  <p className="">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
