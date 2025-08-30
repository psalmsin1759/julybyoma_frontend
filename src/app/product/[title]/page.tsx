"use client";
import React, { use, useEffect, useState } from "react";
import { Product, products } from "@/constants/data";
import BreadCrumb from "@/components/shared/BreadCrumb";
import Image from "next/image";
import SizeAttribute from "@/components/cards/SizeAttribute";
import { MdStraighten } from "react-icons/md";
import { useModal } from "@/contexts/ModalContext";
import { useSize } from "@/contexts/SizeProvider";
import { FiHeart } from "react-icons/fi";
import { AccordionItem } from "@/components/ui/AccordionItem";
import RelatedProducts from "@/components/products/RelatedProducts";

interface Props {
  params: Promise<{ title: string }>;
}

const sizes: string[] = ["6", "8", "10", "12", "14", "16"];

export default function ProductPage({ params }: Props) {
  const { title } = use(params);
  console.log(title);
  const [product, setProduct] = useState<Product | null>(null);
  const { openModal } = useModal();
  const { selectedSize } = useSize();
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const name = decodeURIComponent(title).replace(/[^a-zA-Z0-9\s]/g, "");
    console.log(name);
    const filteredProduct = products.find((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    setProduct(filteredProduct || null);
  }, [title]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity == 1) return;
    setQuantity((prev) => prev - 1);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <BreadCrumb title="Product" subtitle={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-8 gap-6 md:gap-16">
        <div className="w-full relative">
          <div className=" w-full h-[500px]">
            <Image
              fill
              className="object-cover rounded-xl"
              alt={product.name}
              src={product.image}
            />
          </div>

          <div className="w-full mt-4 flex">
            <div className="w-[150px] h-[150px]">
              <Image
                fill
                className="object-cover rounded-xl"
                alt={product.name}
                src={product.imageAlt!}
              />
            </div>
            
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 md:gap-3">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-sm text-gray-500 text-center">
            {product.discountedPrice ? (
              <div className="flex gap-2">
                <del className="text-red-500">
                  ₦{product.price.toLocaleString()}
                </del>
                <span>₦{product.discountedPrice.toLocaleString()}</span>
              </div>
            ) : (
              `₦${product.price.toLocaleString()}`
            )}
          </p>
          <p>{product.description}</p>
          <div className="w-full py-4 md:py-6">
            <div className="flex justify-between">
              <span className="text-gray-400">Size *</span>
              <button
                onClick={() => openModal("sizeChart")}
                className="flex items-center gap-2 p-2 "
              >
                <MdStraighten size={20} className="text-gray-700" />
                <span className="underline">Size Chart</span>
              </button>
            </div>

            <div className="flex gap-2 mt-4">
              {sizes.map((size, index) => (
                <SizeAttribute key={index} value={size} />
              ))}
            </div>
          </div>
          <div className="">
            <span className="text-gray-400">Quantity *</span>
            <div className=" w-[150px] border border-gray-300 flex justify-between rounded text-md md:text-lg  px-4 py-2 mt-4">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
          </div>
          <div className="w-full flex gap-4 h-14 mt-4 text-md md:text-lg">
            <button className="w-full h-full rounded bg-black text-white">
              Add to cart
            </button>
            <button className="h-full border border-black px-4 py-2 rounded">
              <FiHeart />
            </button>
          </div>
          <div className="w-full max-w-2xl mx-auto  rounded-2xl  divide-y divide-gray-800 mt-4">
            <AccordionItem
              title="Payment & Delivery"
              content="We accept all major credit/debit cards, PayPal, and bank transfers. Orders are processed within 24 hours and delivered within 3-7 business days depending on your location."
            />
            <AccordionItem
              title="Shipping & Returns"
              content="We offer free shipping on orders over N100. Returns are accepted within 14 days of delivery. Items must be in original condition and packaging."
            />
          </div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
}
