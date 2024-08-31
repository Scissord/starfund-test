import { NextResponse } from 'next/server';
import { Product } from '@/types/product';
import productMapper from '@/utils/productMapper';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const page = parseInt(url.searchParams.get('page') || '0');
    const sortBy = url.searchParams.get('sortBy') || '';
    const order = url.searchParams.get('order') || '';
    const skip = (page - 1) * limit;

    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`);
    const data = await response.json();
    const products = await productMapper(data);

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
