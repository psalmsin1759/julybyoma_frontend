"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type SizeContextType = {
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
  availableSizes: string[];
  setAvailableSizes: (sizes: string[]) => void;
};

const SizeContext = createContext<SizeContextType | undefined>(undefined);

export const SizeProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);
  

  return (
    <SizeContext.Provider
      value={{
        selectedSize,
        setSelectedSize,
        availableSizes,
        setAvailableSizes,
      }}
    >
      {children}
    </SizeContext.Provider>
  );
};

export const useSize = (): SizeContextType => {
  const context = useContext(SizeContext);
  if (!context) {
    throw new Error("useSize must be used within a SizeProvider");
  }
  return context;
};
