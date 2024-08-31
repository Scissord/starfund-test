import { Product } from "@/types/product"

type Data = {
  products: Product[],
};

export default async function productMapper(data: Data) {
  const products: Product[] = data.products.map((product: Product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    category: product.category,
    images: product.images,
    rating: product.rating,
  }));

  return products
};
