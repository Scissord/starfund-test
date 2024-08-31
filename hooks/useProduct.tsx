'use client';

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

const useProduct = (id: string) => {

  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if(id) fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`
      );

      if (!response.ok) {
        router.push('/404');
        throw new Error("Failed to fetch product");
      };

      const data = await response.json();
      setProduct(data.product);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
      } else {
        console.error("An unexpected error occurred:", err);
      }
    }
  };

  return {
    product
  };
};

export default useProduct;
