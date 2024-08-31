'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/types/product";

const limit = 10;

const useSearchProducts = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('search') || '';

  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchSearchProducts();
  }, [search]);

  const fetchSearchProducts = async () => {
    if (search) {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/search?search=${search}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch search products");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message)
        } else {
          console.error("An unexpected error occurred:", err);
        }
      } finally {
        setLoading(false);
      }
    } else {
      setProducts([]);
    }
  };

  return {
    searchLoading: loading,
    searchProducts: products,
    setSearchProducts: setProducts,
    search
  };
};

export default useSearchProducts;
