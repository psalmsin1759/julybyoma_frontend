"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { FiSearch } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { Menu, menuData } from "@/constants/data";
import Link from "next/link";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import MobileMenu from "./MobileMenu";
import CartModal from "@/components/cart/CartModal";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className=" flex justify-between items-center relative">
    
      <nav className="hidden md:flex items-center">
        <ul className="flex gap-6 text-md font-semibold">
          {menuData.map((menu: Menu, index: number) => (
            <li key={index} className="hover:underline">
              <Link href={menu.path}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      
      <div className="flex items-center gap-2">
        <button
          className="sm:block md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <IoIosMenu />}
        </button>
        <Logo type="light" />
      </div>

     
      <div className="flex gap-2 md:gap-4 items-center text-md md:text-xl">
        <FiSearch className="cursor-pointer text-md md:text-2xl" />
        <button
          onClick={() => setCartOpen(true)}
          className="flex items-center gap-1"
        >
          <BsBagCheck className="cursor-pointer text-md md:text-2xl" />
          <span className="font-medium">Cart ({cartCount})</span>
        </button>
      </div>

     
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            menuData={menuData}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cartOpen && <CartModal  onClose={() => setCartOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}
