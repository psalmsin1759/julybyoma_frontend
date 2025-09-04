import { removeFromCart, updateQuantity, CartItem } from '@/redux/cart/cartSlice';
import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { FiTrash2 } from "react-icons/fi"; 

interface CartItemProps {
  cartItem: CartItem;
}

export default function CartModalItem({ cartItem }: CartItemProps) {
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    if (cartItem.quantity > 1) {
      dispatch(updateQuantity({
        productId: cartItem.product.id.toString(),
        variant: cartItem.variant!,
        quantity: cartItem.quantity - 1,
      }));
    } else {
      dispatch(removeFromCart({
        productId: cartItem.product.id.toString(),
        variant: cartItem.variant!,
      }));
    }
  };

  const increaseQuantity = () => {
    dispatch(updateQuantity({
      productId: cartItem.product.id.toString(),
      variant: cartItem.variant!,
      quantity: cartItem.quantity + 1,
    }));
  };

  const deleteItem = () => {
    dispatch(removeFromCart({
      productId: cartItem.product.id.toString(),
      variant: cartItem.variant!,
    }));
  };

  return (
    <div className="w-full p-4 flex gap-2 border-b border-gray-200">
     
      <div className="relative w-[60px] md:w-[70px] h-[70px] md:h-[80px]">
        <Image
          src={cartItem.product.image}
          alt={cartItem.product.name}
          fill
          className="object-cover transition-all duration-500 rounded"
        />
      </div>

     
      <div className="w-full flex justify-between gap-2 md:gap-3">
        <div>
          <h4 className="text-sm md:text-md font-semibold">
            {cartItem.product.name}
          </h4>
          <div>
            <span className="text-gray-400 text-sm md:text-md">
              Size: {cartItem.variant}
            </span>
          </div>

        
          <div className="w-[100px] border border-gray-300 flex justify-between items-center rounded text-sm md:text-md px-2 py-1 mt-1">
            <button onClick={decreaseQuantity} className="px-2">-</button>
            <span>{cartItem.quantity}</span>
            <button onClick={increaseQuantity} className="px-2">+</button>
          </div>
        </div>

       
        <div className="flex flex-col items-end justify-between">
          <h3 className="text-sm md:text-md font-semibold">
            ₦{(cartItem.product.price * cartItem.quantity).toLocaleString()}
          </h3>
          <button
            onClick={deleteItem}
            className="text-red-500 hover:text-red-700 mt-2 flex items-center gap-1 text-xs md:text-sm"
          >
            <FiTrash2 className="w-4 h-4" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
