"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "@/redux/cart/cartSelectors";
import { ScrollArea } from "../ui/scroll-area";
import CartModalItem from "./CartModalItem";

interface CartModalProps {
  onClose: () => void;
}

export default function CartModal({ onClose }: CartModalProps) {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);

  return (
    <div className="fixed inset-0 z-50 flex">
     
      <div className="flex-1 bg-black/50" onClick={onClose} />

     
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="w-[80%] sm:w-96 bg-white rounded-2xl md:m-3 flex flex-col shadow-xl fixed right-0 top-0 h-full"
      >
       
        <div className="border-b flex justify-between items-center gap-4 p-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <div className="bg-primary flex items-center justify-center rounded-full w-8 h-8 text-xl text-white">
              <span>{cartCount}</span>
            </div>
          </div>
          <button onClick={onClose}>
            <IoMdClose className="text-xl" />
          </button>
        </div>

       
        <div className="flex-1 overflow-hidden">
          {cartItems.length > 0 ? (
            <ScrollArea className="h-full px-4">
              {cartItems.map((cartItem, index) => (
                <CartModalItem key={index} cartItem={cartItem} />
              ))}
            </ScrollArea>
          ) : (
            <div className="h-full flex flex-col justify-center items-center gap-3 px-4">
              <Image
                src={"/images/emptycart.png"}
                alt="empty cart"
                className="w-20 sm:w-24 md:w-28 h-auto"
                width={100}
                height={100}
              />
              <p className="text-gray-500 font-semibold">Your cart is empty.</p>
              <Link href={"/"} className="button">
                Explore Collections
              </Link>
            </div>
          )}
        </div>


        <div className="border-t p-4 bg-white sticky bottom-0 pb-4">
          <div className="w-full flex justify-between mb-3">
            <h3 className="text-xl md:text-2xl font-semibold">Subtotal</h3>
            <h3 className="text-lg md:text-xl font-semibold">
              ₦{cartTotal.toLocaleString()}
            </h3>
          </div>
          <button
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold mb-2"
            onClick={onClose}
          >
            <Link href={"/checkout"}>Checkout</Link> 
          </button>
        </div>
      </motion.div>
    </div>
  );
}
