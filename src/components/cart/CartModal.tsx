"use client";
import React from "react";
import { motion } from "framer-motion";

interface CartModalProps {
  onClose: () => void;
}

export default function CartModal({ onClose }: CartModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="flex-1 bg-black/50"
        onClick={onClose}
      />

      {/* Sidebar (Cart Drawer) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="w-[80%] sm:w-96 bg-white p-6 flex flex-col shadow-xl fixed right-0 top-0 h-full"
      >
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        {/* Cart items placeholder */}
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
          <p className="text-gray-500">Your cart is empty.</p>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t">
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
