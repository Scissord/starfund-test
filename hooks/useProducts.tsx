'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/types/product";

const limit = 10;

const useProducts = () => {
  const searchParams = useSearchParams();

  const page = searchParams.get('page') || '1';

  const [lastPage, setLastPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    fetchProducts();
  }, [page, sortBy]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?limit=${limit}&page=${page}${sortBy}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts(data.products);
      setLastPage(data.lastPage);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
      } else {
        console.error("An unexpected error occurred:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    lastPage,
    page,
    sortBy,
    setSortBy
  };
};

export default useProducts;
