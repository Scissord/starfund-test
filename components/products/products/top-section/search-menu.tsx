'use client';

import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { RefObject } from "react";
import Image from "next/image";

type Props = {
  searchResultsRef: RefObject<HTMLDivElement>;
  searchProducts: Product[];
};

const css = {
  searchMenu: `
    absolute top-12 px-2 z-10 bg-white
    border border-black min-h-[5vh]
    max-h-[72vh] overflow-y-auto w-[40%]
  `,
  wrapper: `
    flex flex-col divide-y divide-black
  `,
  item: `
    flex flex-col sm:flex-row items-center
    gap-3 hover:bg-gray-100 cursor-pointer
  `,
  img: `
    w-[50%] sm:w-[10%] h-16 overflow-hidden
    mb-4 relative
  `,
};

export default function SearchMenu(props: Props) {
  const { searchResultsRef, searchProducts } = props;

  const router = useRouter();

  return (
    <div
      ref={searchResultsRef}
      className={css.searchMenu}
    >
      <div className={css.wrapper}>
        {searchProducts.map((product: Product, index: number) => (
          <div
            key={product.id}
            onClick={() => router.push(`/products/${product.id}`)}
            className={css.item}
          >
            <div className={css.img}>
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
  );
};
