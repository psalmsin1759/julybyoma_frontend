"use client";
import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import HomeCategory from "@/components/home/HomeCategory";
import CollectionBanner from "@/components/product/CollectionBanner";
import FeaturedProduct from "@/components/product/FeaturedProduct";
import ProductCategoryBanner from "@/components/product/ProductCategoryBanner";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <HomeCategory />
      <Featured />
      <ProductCategoryBanner />
      <FeaturedProduct />
      <CollectionBanner />
    </div>
  );
}
