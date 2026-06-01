import Breadcrumb from "../components/common/BreadCrumb";
import Link from "next/link";
import {
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { H2, H3 } from "../components/ui/Typography";

export default function CareersPage() {
  const jobs = [
    {
      title: "Sales & Operations Officer",
      type: "Full Time",
      location: "Beirut, Lebanon",
      description:
        "Lead customer operations, coordinate logistics, and support growth initiatives while delivering a premium client experience.",
    },
    {
      title: "Creative Content Specialist",
      type: "Remote",
      location: "Hybrid",
      description:
        "Create engaging visual and social content aligned with the   SELF brand identity and audience growth strategy.",
    },
    {
      title: "Customer Experience Associate",
      type: "Full Time",
      location: "Beirut, Lebanon",
      description:
        "Provide exceptional support and ensure a seamless experience across every customer interaction.",
    },
  ];

  return (
    <main className="text-zinc-900 overflow-hidden">
      <Breadcrumb items={[{ label: "Careers" }]} />

      {/* HERO */}
      <section className="relative py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm">
              Join The SELF Team
            </span>

            <div className="my-4">
              <H2>
                <span className="text-primary">
                  Build Your Future With SELF
                </span>
              </H2>
            </div>

            <p className="mt-6 md:mt-8 text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl">
              At SELF, we believe premium brands are built by passionate people.
              We’re creating a modern experience driven by creativity,
              innovation, and attention to detail.
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap gap-4">
              <Link
                href="#open-positions"
                className="border px-5 py-3 rounded-4xl border-black text-white  bg-black hover:text-black hover:bg-white transition inline-block"
              >
                Explore Open Roles
              </Link>

              <Link
                href="/about"
                className="border px-5 py-3 rounded-4xl border-zinc-300 bg-white text-zinc-700 font-medium hover:bg-zinc-100 transition inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[2rem] border border-zinc-200 bg-white shadow-xl p-6 md:p-10">
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl bg-zinc-900 text-white p-5 md:p-6">
                <p className="text-sm !text-white">Team Members</p>
                <h3 className="mt-3 text-3xl md:text-4xl font-black">25+</h3>
              </div>

              <div className="rounded-3xl bg-zinc-100 p-5 md:p-6">
                <p className="text-sm text-zinc-500">Growth Focused</p>
                <h3 className="mt-3 text-3xl md:text-4xl font-black text-zinc-900">
                  100%
                </h3>
              </div>

              <div className="col-span-2 rounded-3xl border border-zinc-200 bg-white p-6 md:p-8">
                <H3>
                  <span className=" ">Why Join SELF</span>
                </H3>

                <div className="my-2">
                  <p>
                    A premium environment where creativity meets opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28 px-6 bg-light">
        <div className="max-w-7xl mx-auto text-center">
          <H3>
            <span className="text-gray-400"> Our Culture</span>
          </H3>

          <div className="my-4">
            <H2>
              <span className="primary">A Culture of Creativity & Growth</span>
            </H2>
          </div>

          <div className="mt-14 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Creative Freedom",
                desc: "Bring ideas to life in an environment that values innovation and originality.",
                icon: <HiOutlineLightBulb />,
              },
              {
                title: "Growth Opportunities",
                desc: "Work on impactful projects while continuously developing your professional skills.",
                icon: <HiOutlineRocketLaunch />,
              },
              {
                title: "Premium Experience",
                desc: "Be part of a modern brand focused on quality, aesthetics, and customer satisfaction.",
                icon: <HiOutlineSparkles />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-[2rem] border border-light bg-white p-6 md:p-10 shadow-sm hover:-translate-y-2 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-light flex items-center justify-center text-2xl text-zinc-900 mx-auto">
                  {item.icon}
                </div>

                <h3 className="mt-6 md:mt-8 text-xl md:text-2xl  ">
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

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="py-20 md:py-28 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="my-4 text-center">
            <H2>
              <span className="text-primary">Open Positions</span>
            </H2>
          </div>
          <p className="   text-center  ">
            Explore exciting opportunities and become part of a team shaping the
            future of premium brand experiences.
          </p>

          <div className="mt-14 md:mt-16 space-y-6">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="group rounded-[2rem] border border-zinc-200 bg-white p-6 md:p-8 hover:shadow-xl transition"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div>
                    <div className="flex flex-wrap gap-3 mb-5">
                      <span className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-700 text-sm font-medium">
                        {job.type}
                      </span>

                      <span className="px-4 py-2 rounded-full border border-zinc-200 text-zinc-600 text-sm font-medium">
                        {job.location}
                      </span>
                    </div>

                    <H3>
                      <span className="!text-primary">{job.title}</span>
                    </H3>

                    <p className="mt-4 text-zinc-600 leading-relaxed max-w-2xl text-sm md:text-base">
                      {job.description}
                    </p>
                  </div>

                  <Link
                    href={`/careers/${job.title}/apply`}
                    className="border px-5 py-3 rounded-4xl border-black text-black hover:bg-black hover:text-white transition inline-block"
                  >
                    View Role
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-black text-white p-8 md:p-16 text-center">
          <H3>
            <span className="text-white"> Start Your Journey</span>
          </H3>

          <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-black leading-tight ">
            Ready To Grow With SELF?
          </h2>

          <p className="mt-6 !text-white max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            We’re always looking for ambitious people ready to contribute,
            innovate, and create meaningful experiences.
          </p>

          <Link
            href="mailto:careers@  SELF.com"
            className="border px-5 py-3  my-7 rounded-4xl border-black text-black bg-white  transition inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
}
