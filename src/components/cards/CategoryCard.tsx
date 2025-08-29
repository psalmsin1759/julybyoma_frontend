import React from "react";
import Image from "next/image";
import { Data } from "@/constants/data";
import { motion } from "framer-motion";
import Link from "next/link";

interface CategoryProps {
  category: Data;
}

export default function CategoryCard({ category }: CategoryProps) {
  return (
    <Link href={`/category/${category.title}`}>
    <div className="w-full flex flex-col items-center gap-2">
      <motion.div
        className="relative w-full h-[200px] md:h-[350px] overflow-hidden rounded-xl group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={category.imagePath!}
          alt={category.title}
          fill
          className="object-cover"
        />

       
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-medium">Shop now</span>
        </div>
      </motion.div>

      <h3 className="text-base font-semibold text-center">{category.title}</h3>
      <p className="text-sm text-gray-500 text-center">{category.subtitle}</p>
    </div>
    </Link>
  );
}
