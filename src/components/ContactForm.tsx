"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const projectTypes = [
  "Structural Steel Erection",
  "Pre-Engineered Metal Building",
  "General Contracting",
  "Construction Consulting",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      site: "modolith.com",
      name: `${(form.elements.namedItem("firstName") as HTMLInputElement).value} ${(form.elements.namedItem("lastName") as HTMLInputElement).value}`,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement)
        .value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      source: "contact-page",
    };

    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h3 className="font-[family-name:var(--font-heading)] mb-2 text-2xl font-bold">
          Message Sent!
        </h3>
        <p className="text-gray-600">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-dark transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-1.5 block text-sm font-semibold text-dark"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className={inputClass}
            placeholder="John"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-1.5 block text-sm font-semibold text-dark"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className={inputClass}
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-semibold text-dark"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-semibold text-dark"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="projectType"
          className="mb-1.5 block text-sm font-semibold text-dark"
        >
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          className={`${inputClass} cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service...
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-semibold text-dark"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-interact flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-bold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "sending" ? (
          "Sending..."
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-center text-sm font-semibold text-red-600">
          Something went wrong. Please try again or call us at (832) 519-8584.
        </p>
      )}
    </form>
  );
}
