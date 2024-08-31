'use client';

import { Product } from "@/types/product";
import { Fragment } from "react";
import ProductCard from "./product-card";

type Props = {
  products: Product[];
};

const css = {
  container: `
    grid grid-cols-1 sm:grid-cols-2
    md:grid-cols-3 lg:grid-cols-4
    xl:grid-cols-5 gap-5
  `,
};

export default function ProductList(props: Props) {
  const { products } = props;
  return (
    <section className={css.container}>
      {products?.map((product) => (
        <Fragment key={product.id}>
          <ProductCard product={product} />
        </Fragment>
      ))}
    </section>
  );
};
