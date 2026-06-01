import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";

const Instagram = () => {
  return (
    <Link
      href="https://www.instagram.com/  SELF.ldn/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50
             w-14 h-14 rounded-full bg-black text-white
             flex items-center justify-center
             shadow-2xl hover:scale-110 transition duration-300"
    >
      <FaInstagram className="text-2xl" />
    </Link>
  );
};

export default Instagram;
