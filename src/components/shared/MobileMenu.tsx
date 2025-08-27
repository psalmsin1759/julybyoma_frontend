"use client";
import React from "react";
import Link from "next/link";
import { Menu } from "@/constants/data";
import { motion } from "framer-motion";
import Logo from "./Logo";

interface MobileMenuProps {
  menuData: Menu[];
  onClose: () => void;
}

export default function MobileMenu({ menuData, onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-50 flex">
     
      <div className="flex-1 bg-black/50" onClick={onClose} />

     
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="w-3/4 max-w-xs bg-white p-6 flex flex-col gap-6 shadow-xl fixed left-0 top-0 h-full"
      >
        <Logo type="light" />
        <div className="flex flex-col gap-6 text-lg font-semibold">
          {menuData.map((menu: Menu, index: number) => (
            <Link
              key={index}
              href={menu.path}
              className="hover:text-primary transition"
              onClick={onClose}
            >
              {menu.title}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
