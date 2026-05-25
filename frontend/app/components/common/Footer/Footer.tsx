import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight">SELF</h3>

          <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
            A refined approach to beauty and skincare designed to help you
            explore your natural style with confidence.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
            Quick Links
          </h4>

          <nav className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-5">
            Contact
          </h4>

          <div className="space-y-3 text-sm">
            <Link
              href="mailto:careers@self.com"
              className="text-white/60 transition-colors duration-200 hover:text-white"
            >
              careers@self.com
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p>© 2026 SELF. All rights reserved.</p>

        <Link
          href="mailto:shehabjamil20@gmail.com"
          className="transition-colors duration-200 hover:text-white"
        >
          Developed by Jamil Shehab
        </Link>
      </div>
    </footer>
  );
}
