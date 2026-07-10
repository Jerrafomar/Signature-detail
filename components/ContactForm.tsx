"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  vehicle: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulated submission — connect to your form handler / CRM of choice.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
    setForm(initialState);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-luxury p-10 md:p-14 text-center"
      >
        <CheckCircle2 size={40} strokeWidth={1} className="text-gold mx-auto" />
        <h3 className="font-display text-2xl md:text-3xl text-ivory mt-6">
          Request Received
        </h3>
        <p className="body-copy mt-3">
          Thank you. A member of our team will be in touch shortly to confirm
          your appointment details.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline mt-8"
          type="button"
        >
          Send Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
        <Field
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
        <Field
          label="Vehicle / Aircraft"
          name="vehicle"
          placeholder="e.g. Porsche 911, Gulfstream G650"
          value={form.vehicle}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-widest2 text-silver">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about the detailing service you're interested in..."
          className="mt-3 w-full bg-transparent border border-white/15 px-4 py-3 text-ivory placeholder:text-silver-dim/60 text-sm focus:border-gold transition-colors duration-300 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gold w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "submitting" ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Request a Quote
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function Field({ label, name, value, onChange, type = "text", placeholder, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest2 text-silver">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent border border-white/15 px-4 py-3 text-ivory placeholder:text-silver-dim/60 text-sm focus:border-gold transition-colors duration-300"
      />
    </div>
  );
}
