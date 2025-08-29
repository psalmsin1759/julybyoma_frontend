"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { categories } from "@/constants/data";
import CategoryCard from "../cards/CategoryCard";
import H1 from "../ui/H1";

export default function HomeCategory() {
  // Correctly typed variants
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
      <H1 input="Shop Category" />
      <span className="text-gray-400">View and find what you want</span>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <CategoryCard category={cat} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
