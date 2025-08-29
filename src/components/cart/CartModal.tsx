"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

interface CartModalProps {
  onClose: () => void;
}

export default function CartModal({ onClose }: CartModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/50" onClick={onClose} />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="w-[80%] sm:w-96 bg-white rounded-2xl md:m-3 p-6 flex flex-col shadow-xl fixed right-0 top-0 h-full"
      >
       
        <div className="border-b flex justify-between items-center gap-4 py-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <div className="bg-primary flex items-center justify-center rounded-full w-8 h-8 text-xl">
              <span>0</span>
            </div>
          </div>
          <button onClick={onClose}>
            <IoMdClose className="text-xl" />
          </button>
        </div>

       
        <div className="flex-1 flex flex-col justify-center items-center gap-3">
          <Image
            src={"/images/emptycart.png"}
            alt="empty cart"
            className="w-20 sm:w-24 md:w-28 h-auto"
            width={100}
            height={100}
          />
          <p className="text-gray-500 font-semibold">Your cart is empty.</p>
          <Link href={"/"} className="button">Explore Collections</Link>
        </div>

       
        <div className="pt-4 border-t">
          <button
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold"
            onClick={onClose}
          >
            Checkout
          </button>
        </div>
      </motion.div>
    </div>
  );
}
