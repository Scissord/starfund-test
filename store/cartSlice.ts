import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/product';

interface CartItem {
  product: Product;
  quantity: number;
};

interface CartState {
  items: CartItem[];
};

const loadState = (): CartState => {
  if (typeof window !== 'undefined') {
    const savedState = localStorage.getItem('cart');
    if (savedState) {
      return JSON.parse(savedState);
    }
  }
  return { items: [] };
};

const saveState = (state: CartState) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(state));
  }
};

const initialState: CartState = loadState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const existingItem = state.items.find(item => item.product.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ product, quantity: 1 });
      }
      saveState(state);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.product.id === id);

      if (existingItem) {
        existingItem.quantity--;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter(item => item.product.id !== id);
        }
      }
      saveState(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
