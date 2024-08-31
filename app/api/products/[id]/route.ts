import { NextResponse } from 'next/server';
import { Product } from '@/types/product';
import productMapper from '@/utils/productMapper';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1];

    if (!id) return NextResponse.json({ message: 'ID is required' }, { status: 400 });

    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();

    if (data.message) {
      return NextResponse.json({}, { status: 404 });
    };

    return NextResponse.json({
      product: data
    });
  } catch (error) {
    console.error('Error id products:', error);
    return NextResponse.error();
  }
};
