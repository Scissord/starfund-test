'use client';

import { FC } from 'react'
import { useAppSelector } from '@/hooks/useAppSelector';
import { RootState } from '@/store/store';

const SidebarBottom: FC = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="p-4 bg-gray-100 border-t w-full">
      <div className="flex justify-between items-center">
        <span>Total Items:</span>
        <span>{totalQuantity}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Total Price:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default SidebarBottom;
