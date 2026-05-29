import Apply from "@/app/components/Apply";
import Link from "next/link";

export default function ApplyPage({ params }: { params?: { slug?: string } }) {
  const slug = params?.slug ?? "";

  return (
    <main className="min-h-screen bg-secondary text-zinc-900 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        {/* BACK */}

        {/* HEADER */}
        <div className="mt-6">
          <p className="text-sm tracking-[0.3em] uppercase text-zinc-500">
            Apply for role
          </p>

          <p className="mt-4 text-zinc-600">
            Fill in your details below and we’ll get back to you if your profile
            matches our team needs.
          </p>
        </div>

        <Apply />
      </div>
    </main>
  );
}
