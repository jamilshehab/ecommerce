"use client";

import React, { useState } from "react";
import PhoneNumberInput from "./common/PhoneInput";
import { toast } from "react-toastify";
const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: undefined as string | undefined,
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: undefined as string | undefined,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors: any = {};

    if (!form.name || form.name.length < 2) {
      newErrors.name = "Name is too short";
    }

    if (!form.email || !form.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (!form.phone || form.phone.length < 8) {
      newErrors.phone = "Phone number is too short";
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

    toast.success("Message sent!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 ">
      {/* NAME */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-400 py-3 focus:outline-none focus:border-black transition"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-400 py-3 focus:outline-none focus:border-black transition"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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

      {/* MESSAGE */}
      <div>
        <textarea
          rows={5}
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-gray-400 py-3 focus:outline-none focus:border-black transition resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="mt-6 text-sm tracking-wide text-black uppercase border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
