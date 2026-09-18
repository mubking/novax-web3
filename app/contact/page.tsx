"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-end only for now. Wire this to an email service or an
    // /api/contact route (e.g. Resend, Formspree, Nodemailer) to actually send.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-card p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold text-white">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn-accent mt-6"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" type="text" placeholder="Jane Doe" required />
        <Field label="Email" name="email" type="email" placeholder="jane@example.com" required />
      </div>
      <div className="mt-5">
        <Field label="Subject" name="subject" type="text" placeholder="How can we help?" />
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us a bit about your project..."
          className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-muted focus:border-accent"
        />
      </div>
      <button type="submit" className="btn-accent mt-6 w-full sm:w-auto">
        Send Message
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-white">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-muted focus:border-accent"
      />
    </div>
  );
}