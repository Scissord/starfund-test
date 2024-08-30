import { NextResponse } from 'next/server';
import { Product } from '@/types/product';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const page = parseInt(url.searchParams.get('page') || '0');
    const skip = (page - 1) * limit;

    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
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

    const total = data.total;
    const lastPage = Math.ceil(total / limit);

    return NextResponse.json({
      products,
      lastPage,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.error();
  }
};
