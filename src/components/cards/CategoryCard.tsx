import React from "react";
import Image from "next/image";
import { Data } from "@/constants/data";
import { motion } from "framer-motion";

interface CategoryProps {
  category: Data;
}

export default function CategoryCard({ category }: CategoryProps) {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <motion.div
        className="w-full h-[200px] md:h-[350px] relative overflow-hidden rounded-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={category.imagePath!}
          alt={category.title}
          fill
          className="object-cover"
        />
      </motion.div>

      <h3 className="text-base font-semibold text-center">{category.title}</h3>
      <p className="text-sm text-gray-500 text-center">{category.subtitle}</p>
    </div>
  );
}
