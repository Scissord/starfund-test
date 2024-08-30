import { NextResponse } from 'next/server';
import { Product } from '@/types/product';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';
    const encodedSearch = encodeURIComponent(search);

    const response = await fetch(`https://dummyjson.com/products/search?q=${encodedSearch}`);
    const data = await response.json();

    const products: Product[] = data.products.map((product: any) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      images: product.images,
      rating: product.rating,
    }));

    return NextResponse.json({
      products,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.error();
  }
};