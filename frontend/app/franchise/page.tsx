"use client";
import Breadcrumb from "../components/common/BreadCrumb";
import {
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
} from "react-icons/hi2";
export default function FranchisePage() {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden">
      <Breadcrumb items={[{ label: "Franchise" }]} />

      {/* HERO */}
      <section className="relative py-20 md:py-32 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm">
              SELF Franchise Opportunity
            </span>

            <h1 className="mt-8 text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
              Build a<span className="block">SELF Franchise</span>
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl">
              Join a growing premium lifestyle brand and bring SELF to your
              city. We provide the system, brand identity, and support you bring
              the ambition.
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap gap-4">
              <button className="px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-black text-white font-medium hover:scale-[1.02] transition">
                Apply for Franchise
              </button>

              <button className="px-6 py-3 md:px-8 md:py-4 rounded-2xl border border-zinc-300 bg-white font-medium hover:bg-zinc-50 transition">
                Download Brochure
              </button>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="rounded-[2rem] border border-zinc-200 bg-white shadow-xl p-6 md:p-10">
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl bg-zinc-900 text-white p-5 md:p-6">
                <p className="text-sm text-zinc-300">Global Vision</p>
                <h3 className="mt-3 text-3xl md:text-4xl font-black">2026+</h3>
              </div>

              <div className="rounded-3xl bg-zinc-100 p-5 md:p-6">
                <p className="text-sm text-zinc-500">Brand Standard</p>
                <h3 className="mt-3 text-3xl md:text-4xl font-black text-zinc-900">
                  Premium
                </h3>
              </div>

              <div className="col-span-2 rounded-3xl border border-zinc-200 p-6 md:p-8 bg-white">
                <p className="uppercase tracking-[0.15em] md:tracking-[0.3em] text-xs text-zinc-500">
                  Franchise Model
                </p>

                <h3 className="mt-4 text-xl md:text-2xl font-semibold leading-relaxed">
                  A scalable business system built for modern lifestyle retail.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SELF */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-zinc-500 font-semibold tracking-[0.15em] md:tracking-[0.3em] uppercase text-sm">
            Why SELF
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black">
            A Brand Built for Scale
          </h2>

          <p className="mt-6 text-zinc-600 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            SELF is designed as a modern premium lifestyle brand with strong
            identity, repeatable systems, and high customer loyalty.
          </p>

          <div className="mt-14 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Strong Brand Identity",
                desc: "Minimal, premium aesthetic that stands out in any market.",
                icon: <HiOutlineSparkles />,
              },
              {
                title: "Operational Support",
                desc: "Training, systems, and continuous operational guidance.",
                icon: <HiOutlineShieldCheck />,
              },
              {
                title: "Scalable Growth",
                desc: "A model designed to expand across cities and regions.",
                icon: <HiOutlineChartBar />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-[2rem] border border-zinc-200 bg-white p-6 md:p-10 shadow-sm hover:-translate-y-2 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center mx-auto text-2xl text-zinc-900">
                  {item.icon}
                </div>

                <h3 className="mt-6 md:mt-8 text-xl md:text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-600 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <span className="text-zinc-500 font-semibold tracking-[0.15em] md:tracking-[0.3em] uppercase text-sm">
              Process
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black">
              How It Works
            </h2>
          </div>

          <div className="mt-14 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Submit your franchise application and business background.",
              },
              {
                step: "02",
                title: "Review",
                desc: "Our team evaluates location, fit, and business potential.",
              },
              {
                step: "03",
                title: "Launch",
                desc: "We onboard you with full branding, training, and setup.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-[2rem] bg-white border border-zinc-200 p-6 md:p-10 shadow-sm"
              >
                <p className="text-zinc-400 font-bold text-sm tracking-[0.15em] md:tracking-[0.2em]">
                  {item.step}
                </p>

                <h3 className="mt-5 md:mt-6 text-xl md:text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-600 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-black text-white p-8 md:p-16 text-center">
          <span className="uppercase tracking-[0.15em] md:tracking-[0.3em] text-sm text-zinc-400">
            Start Your Journey
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
            Bring SELF To Your City
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Partner with us and become part of a growing premium lifestyle brand
            built for the future of retail.
          </p>

          <button className="mt-8 md:mt-10 px-6 py-3 md:px-10 md:py-5 rounded-2xl bg-white text-black font-semibold hover:scale-[1.03] transition">
            Apply Now
          </button>
        </div>
      </section>
    </main>
  );
}
