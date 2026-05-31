"use client";

import React, { useState } from "react";
import PhoneNumberInput from "./common/PhoneInput";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: undefined as string | undefined,
    inquiryType: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const inquiryOptions = [
    { value: "", label: "Select Inquiry Type" },
    { value: "general", label: "General Inquiry" },
    { value: "partnership", label: "Partnership" },
    { value: "wholesale", label: "Wholesale" },
    { value: "custom", label: "Custom Order" },
    { value: "support", label: "Support" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors: any = {};

    if (!form.name || form.name.length < 2) {
      newErrors.name = "Please enter your full name";
    }

    if (!form.email || !form.email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.phone || form.phone.length < 8) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!form.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
    }

    if (!form.subject || form.subject.length < 3) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message || form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Submitted Inquiry:", form);
  };

  const inputClass =
    "w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-black transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-10 max-w-2xl  ">
      {/* HEADER */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Contact Us
        </h2>
        <p className="text-gray-500 text-sm">
          Fill out the form below and we’ll get back to you shortly.
        </p>
      </div>

      {/* NAME */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* PHONE */}
      <div className="border-b border-gray-300 focus-within:border-black transition">
        <PhoneNumberInput
          value={form.phone}
          onChange={(value) => setForm({ ...form, phone: value })}
          country="LB"
          international
          placeholder="Phone Number *"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      {/* INQUIRY TYPE */}
      <div>
        <select
          name="inquiryType"
          value={form.inquiryType}
          onChange={handleChange}
          className={inputClass}
        >
          {inquiryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.inquiryType && (
          <p className="text-red-500 text-xs mt-1">{errors.inquiryType}</p>
        )}
      </div>

      {/* SUBJECT */}
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject *"
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
        )}
      </div>

      {/* MESSAGE */}
      <div>
        <textarea
          rows={5}
          name="message"
          placeholder="Your Message *"
          value={form.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-black transition resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* BUTTON */}
      <div className=" ">
        <button
          type="submit"
          className="px-8 cursor-pointer py-3 border border-black rounded-full text-sm tracking-wide uppercase hover:bg-black hover:text-white transition"
        >
          Send Inquiry
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
