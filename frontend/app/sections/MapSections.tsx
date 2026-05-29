"use client";

import dynamic from "next/dynamic";

// IMPORTANT: dynamic import prevents SSR crash
const MapClient = dynamic(() => import("../components/FullWidthMap"), {
  ssr: false,
  loading: () => <div className="w-full h-[70vh] bg-gray-100 animate-pulse" />,
});

export default function MapSection() {
  return (
    <section className="w-full">
      <MapClient />
    </section>
  );
}
