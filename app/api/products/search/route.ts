import { NextResponse } from 'next/server';
import productMapper from '@/utils/productMapper';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';
    const encodedSearch = encodeURIComponent(search);

    const response = await fetch(`https://dummyjson.com/products/search?q=${encodedSearch}`);
    const data = await response.json();

    const products = await productMapper(data);

    return NextResponse.json({
      products,
    });
  } catch (error) {
    console.error('Error search products:', error);
    return NextResponse.error();
  }
};