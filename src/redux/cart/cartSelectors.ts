import { RootState } from "../store";
import { shippingMethod } from "@/constants/data";

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartSubtotal = (state: RootState) =>
  state.cart.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );


export const selectShippingMethod = (state: RootState) => state.cart.shippingMethod;


export const selectShippingCost = (state: RootState) => {
  const method = shippingMethod.find((m) => m.name === state.cart.shippingMethod);
  return method ? method.amount : 0;
};


export const selectDiscount = (state: RootState) => state.cart.discount;


export const selectCartTotal = (state: RootState) => {
  const subtotal = selectCartSubtotal(state);
  const shipping = selectShippingCost(state);
  const discount = selectDiscount(state);
  return subtotal + shipping - discount;
};
