"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type HeroItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
};

const heroItems: HeroItem[] = [
  {
    id: 1,
    title: "Bespoke Elegance",
    description:
      "Discover the art of tailor-made fashion at JulyByOma. Each outfit is designed to celebrate your individuality, offering timeless elegance with a modern touch.",
    image: "/images/hero/o_slider1.png",
    thumbnail: "/images/hero/o_slider1.png",
  },
  {
    id: 2,
    title: "Made-to-Order Dresses",
    description:
      "From glamorous evening gowns to chic cocktail dresses, our made-to-order pieces are crafted with precision to ensure a perfect fit for your most memorable moments.",
    image: "/images/hero/o_slider2.png",
    thumbnail: "/images/hero/o_slider2.png",
  },
  {
    id: 3,
    title: "Redefining Wardrobe Classics",
    description:
      "Experience comfort and sophistication with our bespoke pants and skirts. Each piece is carefully designed to enhance your silhouette and elevate your everyday style.",
    image: "/images/hero/o_slider1.png",
    thumbnail: "/images/hero/o_slider1.png",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroItems.length);
    }, 5000); // Change every 5s

    return () => clearInterval(interval);
  }, []);

  const activeItem = heroItems[activeIndex];

  return (
    <section className="section bg-gray-100 p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* LEFT CONTENT */}
      <div className="space-y-6">
        <AnimatePresence mode="wait">
          <motion.h1
            key={activeItem.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            {activeItem.title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={activeItem.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            {activeItem.description}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="bg-primary text-white px-4 py-2 rounded-3xl">Order Now</button>
        </motion.div>

        {/* Thumbnails */}
        <div className="flex gap-4 mt-6">
          {heroItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`w-[80px] h-[80px] relative rounded-xl overflow-hidden border-2 transition 
                ${activeIndex === index ? "border-primary" : "border-gray-200"}`}
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
        <div className="hidden md:block mb-[150px]"></div>
      </div>

      {/* RIGHT IMAGE */}

      <div className="hidden md:block">
        <div className="relative flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            {/* Main image wrapper to fix size */}
            <div className="w-[500px] h-[500px] relative">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      </div>
    </section>
  );
}
