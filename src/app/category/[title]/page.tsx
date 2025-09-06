"use client";
import ProductCard from "@/components/cards/ProductCard";
import BreadCrumb from "@/components/shared/BreadCrumb";
import { Product, products } from "@/constants/data";
import { motion, Variants } from "framer-motion";
import React, { use } from "react";
import { MdFilterList, MdSort } from "react-icons/md";

interface Props {
  params: Promise<{ title: string }>;
}

export default function CategoryPage({ params }: Props) {
  const { title } = use(params);

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.3,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: "easeOut" as any,
      },
    }),
  };

  return (
    <div className=" min-h-screen">
      <BreadCrumb title="Category" subtitle={title} />
      <h1 className="text-2xl md:text-6xl font-extrabold mt-6 md:mt-10">
        {decodeURIComponent(title).replace(/[^a-zA-Z0-9\s]/g, "")}
      </h1>

      <div className="flex justify-between mt-4 md:mt-6 border-b border-gray-300 pb-4 md:pb-6">
        <button className="flex gap-2 items-center bg-black rounded text-white uppercase px-4 py-2 text-sm md:text-md">
          <MdFilterList /> Filters
        </button>
        <button className="flex gap-2 items-center border-2 border-black rounded text-black uppercase px-4 py-2 text-sm md:text-md">
          <MdSort /> Sort By
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 md:mt-10 gap-6  border-gray-300 pb-4 md:pb-10">
        {products.map((product: Product) => (
          <motion.div
            key={product.id}
           /*  custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants} */
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
