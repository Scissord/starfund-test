'use client';

import Loader from "../ui/loader";
import useProducts from "@/hooks/useProducts";
import useSearchProducts from "@/hooks/useSearchProducts";
import TopSection from "./products/top-section";
import ProductList from "./products/product-list";
import BottomSection from "./products/bottom-section";

const css = {
  loader: `
    flex items-center
    justify-center h-screen
  `,
  container: `
    container mx-auto
    flex flex-col gap-6 my-6
  `,
};

export default function Products() {
  const { loading, page, products, lastPage, sortBy, setSortBy } = useProducts();
  const { search, searchLoading, searchProducts, setSearchProducts } = useSearchProducts();

  if(loading) return <div className={css.loader}><Loader/></div>

  return (
    <div className={css.container}>
      <TopSection
        page={page}
        search={search}
        searchProducts={searchProducts}
        setSearchProducts={setSearchProducts}
        searchLoading={searchLoading}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <ProductList
        products={products}
      />
      <BottomSection
        page={page}
        lastPage={lastPage}
        sortBy={sortBy}
      />
    </div>
  );
};
