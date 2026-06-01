import Apply from "@/app/components/Apply";
import Breadcrumb from "@/app/components/common/BreadCrumb";
import { H2, H3 } from "@/app/components/ui/Typography";

export default function ApplyPage({ params }: { params?: { slug?: string } }) {
  const slug = params?.slug ?? "";

  return (
    <main className="    ">
      <Breadcrumb
        items={[
          { label: "Careers", href: "/careers" },
          { label: "HR & Sales Executive" },
        ]}
      />
      <section className="py-20 bg-light">
        <div className="max-w-6xl   mx-auto container relative ">
          <H3>
            <span className="text-gray-400">Careers · Hiring</span>
          </H3>

          <div className="mt-4">
            <H2>
              <span className="text-primary">HR & Sales Executive</span>
            </H2>
          </div>

          <div className="mt-4">
            <p className="mt-4 text-zinc-600 leading-8">
              We’re looking for a driven HR & Sales professional to help us grow
              relationships, manage talent, and represent our brand with clarity
              and confidence.
            </p>
          </div>

          {/* META */}
          <div className="mt-8 flex flex-wrap gap-2 text-sm">
            <span className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white">
              Full Time
            </span>
            <span className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white">
              Lebanon
            </span>
            <span className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white">
              On-site / Hybrid
            </span>
          </div>

          {/* CONTENT */}
          <div className="mt-14 space-y-10">
            <div>
              <H3>
                <span className="text-gray-400">About</span>
              </H3>
              <p className="mt-4 text-zinc-600 leading-8">
                This role blends people management and client acquisition.
                You’ll be responsible for building strong internal culture while
                also supporting business growth through sales initiatives.
              </p>
            </div>

            <div>
              <H3>
                <span className="text-gray-400">Responsibilities</span>
              </H3>
              <ul className="mt-4 space-y-3 text-zinc-600">
                <li>• Manage recruitment and onboarding processes</li>
                <li>• Build and maintain client relationships</li>
                <li>• Support sales strategy and outreach</li>
                <li>• Coordinate with internal teams</li>
              </ul>
            </div>

            <div>
              <H3>
                <span className="text-gray-400">Qualifications</span>
              </H3>
              <div className="mt-4">
                <ul className=" space-y-3 text-zinc-600">
                  <li>• 2+ years in HR or Sales</li>
                  <li>• Strong communication skills</li>
                  <li>• Professional negotiation & presentation skills</li>
                  <li>• Fluent in English & Arabic preferred</li>
                </ul>
              </div>
            </div>
          </div>

          {/* BOTTOM FOOTER (fixes empty space issue) */}
          <div className="mt-16 pt-10 border-t border-zinc-200">
            <p className="text-sm text-zinc-500">
              We review every application carefully and respond within 5–7
              business days.
            </p>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <div className="container max-w-6xl  relative mx-auto">
        <Apply />
      </div>
    </main>
  );
}
