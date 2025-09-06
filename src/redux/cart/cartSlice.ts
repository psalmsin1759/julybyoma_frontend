import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/constants/data";

export interface CartItem {
  product: Product;
  quantity: number;
  variant: string;
}

interface CartState {
  items: CartItem[];
  shippingMethod: string; 
  discount: number;      
}

const initialState: CartState = {
  items: [],
  shippingMethod: "Lagos Island", 
  discount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; quantity: number; variant: string }>
    ) => {
      const { product, quantity, variant } = action.payload;

      const existingItem = state.items.find(
        (item) => item.product.id === product.id && item.variant === variant
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ product, quantity, variant });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ productId: string; variant: string }>) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.product.id.toString() === action.payload.productId &&
            item.variant === action.payload.variant
          )
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; variant: string; quantity: number }>
    ) => {
      const item = state.items.find(
        (i) =>
          i.product.id.toString() === action.payload.productId &&
          i.variant === action.payload.variant
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    setShippingMethod: (state, action: PayloadAction<string>) => {
      state.shippingMethod = action.payload;
    },
    applyDiscount: (state, action: PayloadAction<number>) => {
      state.discount = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  setShippingMethod,
  applyDiscount,
} = cartSlice.actions;
export default cartSlice.reducer;
