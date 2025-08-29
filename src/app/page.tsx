"use client";
import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import HomeCard from "@/components/home/HomeCard";
import HomeCategory from "@/components/home/HomeCategory";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <HomeCategory />
      <Featured />
      <HomeCard />
    </div>
  );
}
