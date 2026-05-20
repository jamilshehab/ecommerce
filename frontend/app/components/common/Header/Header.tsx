"use client";

import { useCartStore } from "@/app/lib/zustand/zustand";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart, openCart } = useCartStore();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-black/5 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-white/40 backdrop-blur-md"
      }`}
    >
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 grid grid-cols-3 items-center">
        {/* LEFT NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-800 justify-start">
          <Link href="/" className="hover:opacity-60 transition">
            Home
          </Link>

          <Link href="/shop" className="hover:opacity-60 transition">
            Shop
          </Link>

          {/* <Link href="/about" className="hover:opacity-60 transition">
            About
          </Link> */}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex justify-start">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* CENTER LOGO */}
        <div className="flex justify-center">
          <div className="flex items-center justify-center">
            <h1 className="text-black font-extrabold text-3xl sm:text-5xl tracking-tight">
              SELF
            </h1>
          </div>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4 sm:gap-5 text-gray-800 justify-end">
          <FiSearch className="cursor-pointer hover:opacity-60 transition text-lg" />

          {/* CART ICON */}
          <button
            onClick={openCart}
            className="relative cursor-pointer hover:opacity-60 transition"
          >
            <FiShoppingBag className="text-lg" />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/5 px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4 text-sm text-gray-800">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-60 transition"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-60 transition"
            >
              Shop
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-60 transition"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
