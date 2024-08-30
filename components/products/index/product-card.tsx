'use client';

import Image from 'next/image';
import { Product } from '@/types/product';
import { useState } from 'react';
import { addToCart, removeFromCart } from '@/store/cartSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { RootState } from '@/store/store'
import IconShoppingCart from '@/components/icons/shopping-cart-icon';

type Props = {
  product: Product;
};

export default function ProductCard(props: Props) {
  const { product } = props;

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const maxDescriptionLength = 90;

  const existingItem = cartItems.find(item => item.product.id === product.id);
  const quantity = existingItem ? existingItem.quantity : 0;

  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    if (quantity > 1) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  return (
    <div className='col-span-1 border p-4 bg-white rounded shadow-md'>
      <div className='w-full h-48 overflow-hidden mb-4 relative'>
        <Image
          src={product.images[0]}
          alt='product-image'
          layout='fill'
          objectFit='contain'
          priority
          className='absolute inset-0'
        />
      </div>
      <p className='font-semibold h-12'>{product.title}</p>
      <p>
        {isExpanded
          ? product.description
          : product.description.length > maxDescriptionLength
            ? `${product.description.slice(0, maxDescriptionLength)}...`
            : product.description}
      </p>
      {product.description.length > maxDescriptionLength && (
        <button
          onClick={handleToggleDescription}
          className='text-blue-500 hover:text-blue-700 mt-2'
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
      <p className='text-gray-500'>{product.category}</p>
      <p className='font-bold'>${product.price}</p>
      <div className='flex items-center justify-between'>
        <p className='text-yellow-500'>{product.rating} ★</p>
        {quantity > 0 ? (
          <div className='flex items-center'>
            <button
              onClick={handleRemoveFromCart}
              className='transform active:scale-95 transition-transform w-8 h-8 p-1 border border-black rounded-lg flex items-center justify-center'
            >
              -
            </button>
            <p className='mx-2'>{quantity}</p>
            <button
              onClick={handleAddToCart}
              className='transform active:scale-95 transition-transform w-8 h-8 p-1 border border-black rounded-lg flex items-center justify-center'
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className='transform active:scale-95 transition-transform p-2 h-8 border border-black rounded-lg flex items-center justify-center'
          >
            <IconShoppingCart />
          </button>
        )}
      </div>
    </div>
  );
};
