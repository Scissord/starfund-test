'use client';

import { Product } from "@/types/product";
import ProductCard from "./product-card";
import { Fragment } from "react";

type Props = {
  products: Product[];
};

export default function ProductList(props: Props) {
  const { products } = props;
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {products?.map((product, i) => (
        <Fragment key={product.id}>
          <ProductCard product={product} />
        </Fragment>
      ))}
    </section>
  );
};
