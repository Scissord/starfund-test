'use client';

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useSearchParams } from 'next/navigation';
import TopSection from "./index/top-section";
import ProductList from "./index/product-list";
import BottomSection from "./index/bottom-section";
import Loader from "../ui/loader";

const limit = 10;

export default function Products() {
  const searchParams = useSearchParams();

  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || '1';
  const [lastPage, setLastPage] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  const [products, setProducts] = useState<Product[]>([]);
  const [searchProducts, setSearchProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?limit=${limit}&page=${page}`
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
    }

    fetchProducts();
  }, [page]);

  useEffect(() => {
    async function fetchSearchProducts() {
      if (search) {
        setSearchLoading(true);
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/search?search=${search}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch search products");
          }

          const data = await response.json();
          setSearchProducts(data.products);
        } catch (err) {
          if (err instanceof Error) {
            console.log(err.message)
          } else {
            console.error("An unexpected error occurred:", err);
          }
        } finally {
          setSearchLoading(false);
        }
      } else {
        setSearchProducts([]);
      }
    }

    fetchSearchProducts();
  }, [search]);

  if(loading) return <div className="flex items-center justify-center h-screen"><Loader/></div>

  return (
    <div className="container mx-auto flex flex-col gap-6 my-6">
      <TopSection
        page={page}
        search={search}
        searchProducts={searchProducts}
        setSearchProducts={setSearchProducts}
        searchLoading={searchLoading}
      />
      <ProductList
        products={products}
      />
      <BottomSection
        page={page}
        lastPage={lastPage}
      />
    </div>
  );
};