import React from "react";

const ContactForm = () => {
  return (
    <form className="space-y-8" >
      <div>
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-transparent border-b border-gray-400 py-3 focus:outline-none focus:border-black transition"
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-transparent border-b border-gray-400 py-3 focus:outline-none focus:border-black transition"
        />
      </div>

      <div>
        <textarea
          rows={5}
          placeholder="Message"
          className="w-full bg-transparent border-b border-gray-400 py-3 focus:outline-none focus:border-black transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-6 text-sm tracking-wide text-black   uppercase border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
