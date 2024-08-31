'use client';

import { FC } from 'react'
import { useAppSelector } from '@/hooks/useAppSelector';
import { RootState } from '@/store/store';
import { addToCart, removeFromCart } from '@/store/cartSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { Product } from '@/types/product';
import Image from 'next/image';

const css = {
  container: `
    h-[80%] border-t border-b
    border-black my-6 overflow-y-auto
    w-full
  `,
  wrapper: `
    flex items-center w-full px-4
  `,
  img: `
    w-[20%] h-16 overflow-hidden
    mb-4 relative
  `,
  title: `
    text-[13px]
  `,
  quantityWrapper: `
    flex items-center ml-auto
  `,
  button: `
    transform active:scale-95
    transition-transform w-8 h-8
    p-1 border border-black
    rounded-lg flex items-center
    justify-center
  `,
};

const SidebarMiddle: FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product: Product, quantity: number) => {
    if (quantity > 1) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  return (
    <div className={css.container}>
      {cartItems?.length > 0 && cartItems?.map(({ product, quantity }) => (
        <div key={product.id} className={css.wrapper}>
          <div className={css.img}>
            <Image
              src={product.images[0]}
              alt='product-image'
              layout='fill'
              objectFit='contain'
              priority
              className='absolute inset-0'
            />
          </div>
          <p className={css.title}>{product.title.slice(0, 15) + '...'}</p>
          <div className={css.quantityWrapper}>
            <button
              onClick={() => handleRemoveFromCart(product, quantity)}
              className={css.button}
            >
              -
            </button>
            <p className='mx-2'>{quantity}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className={css.button}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SidebarMiddle;
