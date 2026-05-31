import Image from "next/image";
import HeroSwiper from "./sections/home/Hero";
import BrandStory from "./sections/home/BrandStory";
import FeaturedProducts from "./sections/home/FeaturedProducts";
import CredibilityStrip from "./sections/home/CredibilityStrip";
import Testimonials from "./sections/home/Testimonials";
import CTA from "./sections/home/Cta";
import Instagram from "./components/social/Instagram";
import SwiperVersionTwo from "./sections/home/SwiperVersionTwo";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className=" ">
      <SwiperVersionTwo />
      <BrandStory />
      <FeaturedProducts />
      <CredibilityStrip />
      <Testimonials />
      <CTA />
    </div>
  );
}
