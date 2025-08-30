import { useSize } from "@/contexts/SizeProvider";
import React from "react";

interface Props {
  value: string;
}
export default function SizeAttribute({ value }: Props) {
  const { selectedSize, setSelectedSize } = useSize();

  return (
    <button
      onClick={() => setSelectedSize(value)}
      className={`${
        selectedSize === value ? "bg-black text-white" : "bg-white"
      } rounded-4xl px-4 md:px-6 py-2 md:py-4 border border-gray-400 text-gray-400`}
    >
      <span>{value}</span>
    </button>
  );
}
