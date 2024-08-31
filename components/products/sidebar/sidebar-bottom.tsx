'use client';

import { FC } from 'react'
import useCart from '@/hooks/useCart';

const css = {
  container: `
    p-4 bg-gray-100 border-t w-full
  `,
  wrapper: `
    flex justify-between items-center
  `,
};

const SidebarBottom: FC = () => {
  const {
    totalQuantity,
    totalPrice
  } = useCart(null);

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <span>Total Items:</span>
        <span>{totalQuantity}</span>
      </div>
      <div className={css.wrapper}>
        <span>Total Price:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default SidebarBottom;
