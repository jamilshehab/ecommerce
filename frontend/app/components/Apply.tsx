"use client";

import React, { useState } from "react";
import { HiOutlineArrowUpTray, HiOutlineDocumentText } from "react-icons/hi2";
import PhoneNumberInput from "./common/PhoneInput";
const Apply = () => {
  const [loading, setLoading] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: undefined as string | undefined,
    portfolio: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SIMULATED CV AUTO-FILL
  // Later you can connect this to AI/API parsing
  const handleCVUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setCvFile(file);

    setLoading(true);

    // Fake delay for premium UX feel
    setTimeout(() => {
      const fakeName = file.name.replace(".pdf", "").replace(/[-_]/g, " ");

      setForm((prev) => ({
        ...prev,
        fullName: prev.fullName || fakeName,
      }));

      setLoading(false);
    }, 1500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.fullName || form.fullName.length < 2) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.message || form.message.length < 10) {
      newErrors.message = "Tell us a bit more about yourself";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Reset form
    setForm({
      fullName: "",
      email: "",
      phone: undefined,
      portfolio: "",
      message: "",
    });
    setCvFile(null);
  };

  return (
    <section className="min-h-screen bg-secondary px-6 py-20">
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-zinc-500">
            Careers
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            Apply With SELF
          </h1>

          <p className="mt-6 text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Upload your CV and tell us more about yourself. We’re always looking
            for creative and ambitious people.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-14 bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm space-y-8"
        >
          {/* CV UPLOAD */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-4">
              Upload Your CV
            </label>

            <label className="relative flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-zinc-300 bg-zinc-50 p-10 cursor-pointer hover:bg-zinc-100 transition">
              <input
                type="file"
                accept=".pdf"
                onChange={handleCVUpload}
                className="hidden"
              />

              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                <HiOutlineArrowUpTray className="text-2xl text-zinc-800" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-zinc-900">
                Drag & Drop Your CV
              </h3>

              <p className="mt-2 text-sm text-zinc-500">PDF files only</p>

              {loading && (
                <p className="mt-4 text-sm text-black">Reading your CV...</p>
              )}

              {cvFile && !loading && (
                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 border border-zinc-200">
                  <HiOutlineDocumentText className="text-xl text-zinc-700" />

                  <span className="text-sm text-zinc-700">{cvFile.name}</span>
                </div>
              )}
            </label>
          </div>

          {/* FULL NAME */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border-b border-zinc-300 bg-transparent py-4 focus:outline-none focus:border-black transition"
            />

            {errors.fullName && (
              <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-zinc-300 bg-transparent py-4 focus:outline-none focus:border-black transition"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          {/* PHONE */}
          <div className="w-full   border-slate-300 border-b p-3 focus-within:border-black">
            <PhoneNumberInput
              value={form.phone}
              onChange={(value) => setForm({ ...form, phone: value })}
              country="LB"
              international
              placeholder="Phone Number *"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* PORTFOLIO */}
          <div>
            <input
              type="text"
              name="portfolio"
              placeholder="Portfolio / LinkedIn URL"
              value={form.portfolio}
              onChange={handleChange}
              className="w-full border-b border-zinc-300 bg-transparent py-4 focus:outline-none focus:border-black transition"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about yourself..."
              value={form.message}
              onChange={handleChange}
              className="w-full border-b border-zinc-300 bg-transparent py-4 focus:outline-none focus:border-black transition resize-none"
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-2">{errors.message}</p>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-black py-4 text-white font-medium hover:scale-[1.01] transition"
          >
            Submit Application
          </button>

          <p className="text-center text-xs text-zinc-500 leading-relaxed">
            By submitting this form, you agree that SELF may contact you
            regarding career opportunities.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Apply;
