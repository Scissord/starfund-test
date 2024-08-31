'use client';

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Loader from "../ui/loader";
import useProduct from "@/hooks/useProduct";
import ProductCard from "../products/products/product-card";

const css = {
  loader: `
    flex items-center
    justify-center h-screen
  `,
  container: `
    min-h-screen flex
    items-center justify-center
  `,
  back: `
    absolute top-5 left-5 transform
    active:scale-95 transition-transform
    w-8 h-8 p-1 border border-black
    rounded-lg flex items-center justify-center
  `
};

export default function Products() {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { product } = useProduct(id);

  if(!product) return <div className={css.loader}><Loader/></div>

  return (
    <div className={css.container}>
      <button
        onClick={() => router.back()}
        className={css.back}
      >
        &#8592;
      </button>
      <ProductCard product={product} />
    </div>
  );
};