import React from "react";
import { products, Product } from "@/constants/data";
import { motion, Variants } from "framer-motion";
import ProductCard from "../cards/ProductCard";

export default function Featured() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: "easeOut" as any,
      },
    }),
  };
  return (
    <section className="flex flex-col gap-2 section items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg md:text-3xl font-bold"
      >
        Featured Products
      </motion.h1>

      <span className="text-gray-400 max-w-xl text-center">
        Discover our handpicked selection of styles curated just for you. From
        timeless essentials to statement pieces, explore what’s trending and
        find your perfect match.
      </span>

      <div className="w-full grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.slice(0,8).map((product: Product, index) => (
          <motion.div
            key={product.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
