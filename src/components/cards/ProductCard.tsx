import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Product } from "@/constants/data";

interface ProductProps {
  product: Product;
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <motion.div
        className="w-full h-[200px] md:h-[350px] relative overflow-hidden rounded-xl group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* First Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-500 ${
            product.imageAlt
              ? "group-hover:opacity-0" // fade out if second image exists
              : "group-hover:scale-105" // otherwise just zoom
          }`}
        />

        {/* Second Image (only if available) */}
        {product.imageAlt && (
          <Image
            src={product.imageAlt}
            alt={`${product.name} alternate`}
            fill
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
      </motion.div>

      <h3 className="text-base font-semibold text-center">{product.name}</h3>
      <p className="text-sm text-gray-500 text-center">
        ₦{product.price.toLocaleString()}
      </p>
    </div>
  );
}
