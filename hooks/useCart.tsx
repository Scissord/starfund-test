'use client';

import { RootState } from "@/store/store";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { addToCart, removeFromCart } from "@/store/cartSlice";
import { Product } from "@/types/product";

const useCart = (product: Product | null) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  let quantity = 0;
  let handleAddToCart = () => {};
  let handleRemoveFromCart = () => {};

  if (product) {
    // find product in cart
    const existingProduct = cartItems.find(item => item.product.id === product.id);
    // quantity of the specific product
    quantity = existingProduct ? existingProduct.quantity : 0;

    handleAddToCart = () => {
      dispatch(addToCart(product));
    };

    handleRemoveFromCart = () => {
      if (quantity > 1) {
        dispatch(removeFromCart(product.id));
      } else {
        dispatch(removeFromCart(product.id));
      }
    };
  };

  // quantity of all products
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  // price of all products
  const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return {
    totalQuantity,
    totalPrice,
    quantity,
    handleAddToCart,
    handleRemoveFromCart,
    cartItems
  };
};

export default useCart;
