"use client";

import React from "react";
import PhoneInput from "react-phone-number-input/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactSchema } from "../lib/validation/contact";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("VALID DATA:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* NAME */}
      <div>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="w-full bg-transparent border-b border-gray-400 py-3 focus:outline-none focus:border-black transition"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full bg-transparent border-b border-gray-400 py-3 focus:outline-none focus:border-black transition"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* PHONE */}
      <div className="w-full border border-slate-300 rounded-xl p-3 focus-within:border-black">
        <PhoneInput
          international
          defaultCountry="LB"
          value={watch("phone")}
          onChange={(value) =>
            setValue("phone", value || "", { shouldValidate: true })
          }
          placeholder="Phone Number *"
          className="w-full outline-none"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* MESSAGE */}
      <div>
        <textarea
          rows={5}
          placeholder="Message"
          {...register("message")}
          className="w-full bg-transparent border-b border-gray-400 py-3 focus:outline-none focus:border-black transition resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
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
