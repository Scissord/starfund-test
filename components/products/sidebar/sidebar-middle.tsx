'use client';

import { FC } from 'react'
import { useAppSelector } from '@/hooks/useAppSelector';
import { RootState } from '@/store/store';
import Image from 'next/image';

const SidebarMiddle: FC = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  return (
    <div className='h-[80%] border-t border-b border-black my-6 overflow-y-auto w-full'>
      {cartItems?.length > 0 && cartItems?.map(({ product, quantity }) => (
        <div key={product.id} className='flex items-center w-full px-4'>
          <div className={`w-[20%] h-16 overflow-hidden mb-4 relative`}>
            <Image
              src={product.images[0]}
              alt='product-image'
              layout='fill'
              objectFit='contain'
              priority
              className='absolute inset-0'
            />
          </div>
          <p>{product.title}</p>
          <p className='ml-auto'>{quantity}</p>
        </div>
      ))}
    </div>
  )
}

export default SidebarMiddle;
