"use client";

import { useState, FormEvent } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // For static export, open mailto as fallback
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    window.location.href = `mailto:sabrina@feld.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    )}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl font-medium text-gray-900 mb-2">Thank you!</p>
        <p className="text-gray-600">
          Your message is being prepared in your email client.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-sm text-base md:text-sm bg-white focus:outline-none focus:border-buttercup transition-colors"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-sm text-base md:text-sm bg-white focus:outline-none focus:border-buttercup transition-colors"
          />
        </div>
      </div>
      <div>
        <input type="hidden" name="name" id="nameHidden" />
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-base md:text-sm bg-white focus:outline-none focus:border-buttercup transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-base md:text-sm bg-white focus:outline-none focus:border-buttercup transition-colors resize-none"
        />
      </div>
      <Button type="submit" variant="primary" noIcon>
        Send Message
      </Button>
    </form>
  );
}
