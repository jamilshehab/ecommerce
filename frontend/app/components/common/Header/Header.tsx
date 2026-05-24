"use client";

import { useCartStore } from "@/app/lib/zustand/zustand";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* DESKTOP LEFT NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-800">
          <Link href="/" className="hover:opacity-60 transition">
            Home
          </Link>

          <Link href="/about" className="hover:opacity-60 transition">
            About
          </Link>

          <Link href="/shop" className="hover:opacity-60 transition">
            Shop
          </Link>
        </nav>

        {/* LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link href="/">
            <Image
              src="/images/logo/logo.png"
              alt="SELF Logo"
              width={100}
              height={40}
            />
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 md:gap-6 text-sm text-gray-800">
          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/careers" className="hover:opacity-60 transition">
              Careers
            </Link>

            <Link href="/franchise" className="hover:opacity-60 transition">
              Franchise
            </Link>

            <Link href="/contact" className="hover:opacity-60 transition">
              Contact
            </Link>
          </div>

          {/* CART */}
          <button
            onClick={openCart}
            className="relative hover:opacity-60 transition"
          >
            <FiShoppingBag className="text-xl" />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-black/5 px-6 py-6">
          <div className="flex flex-col gap-5 text-sm text-gray-800">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link href="/shop" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>

            <Link href="/careers" onClick={() => setMenuOpen(false)}>
              Careers
            </Link>

            <Link href="/franchise" onClick={() => setMenuOpen(false)}>
              Franchise
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
