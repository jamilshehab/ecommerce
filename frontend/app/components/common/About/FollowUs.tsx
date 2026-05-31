"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiInstagram } from "react-icons/fi";

import "swiper/css";
import { H2, H3 } from "../../ui/Typography";

const instagramPosts = [
  "/images/instagram/2.jpg",
  "/images/instagram/3.jpg",
  "/images/instagram/5.jpg",
  "/images/instagram/6.jpg",
  "/images/instagram/8.jpg",
  "/images/instagram/7.jpg",
];

export default function InstagramSection() {
  return (
    <section className="py-24 px-6 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TOP CONTENT */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <H3>
              <span className="text-gray-400"> Social Presence</span>
            </H3>
            <div className="mt-4">
              <H2>
                <span className="text-primary">Follow Us on Instagram</span>
              </H2>
            </div>

            <p className="mt-6 text-gray-500 max-w-xl leading-relaxed">
              Discover our latest collections, lifestyle moments, and the world
              behind SELF.
            </p>
          </div>

          <Link
            href="https://www.instagram.com/self.ldn/"
            target="_blank"
            className="group inline-flex items-center gap-3 text-sm border border-black/10 rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all duration-300 w-fit"
          >
            <FiInstagram className="text-lg" />
            <span>Visit Instagram</span>
          </Link>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="overflow-visible"
        >
          {instagramPosts.map((image, index) => (
            <SwiperSlide key={index}>
              {/* WRAPPED IN LINK */}
              <Link
                href="https://www.instagram.com/self.ldn/"
                target="_blank"
                className="block"
              >
                <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-100">
                  <Image
                    src={image}
                    alt="Instagram Post"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />

                  {/* ICON */}
                  <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="bg-white/90 backdrop-blur-md rounded-full p-3">
                      <FiInstagram className="text-black text-lg" />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
