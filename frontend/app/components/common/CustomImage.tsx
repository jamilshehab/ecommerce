"use client";

import Image, { ImageProps } from "next/image";

type SafeImageProps = ImageProps & {
  fallbackSrc?: string;
};

export default function CustomImage({
  src,
  fallbackSrc = "/placeholder.jpg",
  ...props
}: SafeImageProps) {
  const safeSrc =
    typeof src === "string" && src.trim().length > 0 ? src : fallbackSrc;

  return <Image {...props} src={safeSrc} />;
}
