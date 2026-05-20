import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-20 bg-[#111] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-extrabold text-xl tracking-tight">SELF</h3>
          <p className="text-white/60 mt-4 text-sm">
            A refined approach to beauty and skincare.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3 text-sm">
          <p className="font-medium">Explore</p>
          <p className="text-white/60">Shop</p>
          <p className="text-white/60">About</p>
          <p className="text-white/60">Contact</p>
        </div>

        {/* Contact */}
        <div className="space-y-3 text-sm">
          <p className="font-medium">Contact</p>
          <p className="text-white/60">hello@selfbeauty.com</p>
          <p className="text-white/60">+961 00 000 000</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-white/40 text-xs mt-12">
        © 2026 SELF. All rights reserved. Developed by{" "}
        <Link
          href="mailto:shehabjamil20@gmail.com"
          className="text-white/60 hover:text-white"
        >
          Jamil Shehab
        </Link>
      </div>
    </footer>
  );
}
