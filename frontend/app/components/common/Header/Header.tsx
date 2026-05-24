"use client";

import { useCartStore } from "@/app/lib/zustand/zustand";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiShoppingBag, FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const { cart, openCart } = useCartStore();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
        {/* LEFT NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-800">
          <Link href="/" className="hover:opacity-60 transition">
            Home
          </Link>

          <Link href="/about" className="hover:opacity-60 transition">
            About Us
          </Link>

          <Link href="/shop" className="hover:opacity-60 transition">
            Shop
          </Link>
          {/* ABOUT DROPDOWN */}
        </nav>

        {/* CENTER LOGO */}
        <div className="flex justify-center">
          <Link href="/">
            <h1 className="text-black font-extrabold text-3xl sm:text-5xl tracking-tight">
              SELF
            </h1>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-end items-center gap-6 text-sm text-gray-800">
          <Link
            href="/careers"
            className="hover:opacity-60 transition hidden sm:block"
          >
            Careers
          </Link>

          <Link
            href="/franchise"
            className="hover:opacity-60 transition hidden sm:block"
          >
            Franchise
          </Link>

          <Link
            href="/contact"
            className="hover:opacity-60 transition hidden sm:block"
          >
            Contact
          </Link>

          <button
            onClick={openCart}
            className="relative hover:opacity-60 transition"
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
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <p className="text-gray-400 mt-2">About Us</p>

            <Link href="/mission" onClick={() => setMenuOpen(false)}>
              Mission
            </Link>

            <Link href="/vision" onClick={() => setMenuOpen(false)}>
              Vision
            </Link>

            <Link href="/our-story" onClick={() => setMenuOpen(false)}>
              Our Story
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

            <Link href="/contact-info" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
