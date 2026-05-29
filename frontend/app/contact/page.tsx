import Breadcrumb from "../components/common/BreadCrumb";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="bg-white">
      <Breadcrumb items={[{ label: "Contact" }]} />

      <section className="min-h-screen px-6 py-24 flex items-center justify-center">
        <div className="max-w-5xl w-full">
          {/* HEADER */}

          <div className="grid md:grid-cols-2 gap-16">
            {/* LEFT INFO */}
            <div className="space-y-10">
              {/* EMAIL */}
              <div className="border-b pb-6">
                <p className="text-xs tracking-widest text-gray-400 uppercase">
                  Email
                </p>
                <p className="mt-2 text-lg text-gray-800">info@selflondon.co</p>
              </div>

              {/* OUTLETS */}
              <div className="border-b pb-6">
                <p className="text-xs tracking-widest text-gray-400 uppercase">
                  Outlets
                </p>
                <div className="mt-3 text-gray-700 space-y-1">
                  <p>Iraq Mall</p>
                  <p>Dijlah Village</p>
                </div>
              </div>

              {/* OFFICES */}
              <div className="border-b pb-6">
                <p className="text-xs tracking-widest text-gray-400 uppercase">
                  Offices
                </p>
                <div className="mt-3 text-gray-700 space-y-1">
                  <p>Baghdad – Al Mansour</p>
                  <p>Beirut – Hamra Street</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 pt-6">
                Response time: 24–48 hours
              </p>
            </div>

            {/* RIGHT FORM (SOFT LUXURY STYLE) */}
            <div className="bg-light rounded-3xl p-10">
              <h2 className="text-2xl text-slate-700  font-light mb-8">
                Send a message
              </h2>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
