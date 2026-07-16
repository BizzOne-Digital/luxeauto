"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-card">
        <p className="mb-2 font-heading text-xl font-semibold">Message Sent</p>
        <p className="leading-relaxed text-neutral-500">
          Thanks for reaching out — our team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className={inputClasses}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className={inputClasses}
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          className={inputClasses}
        />
        <input
          name="vehicle"
          type="text"
          placeholder="Vehicle Make & Model"
          className={inputClasses}
        />
      </div>
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={6}
        className={cn(inputClasses, "resize-none leading-relaxed")}
      />

      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}

      <Button
        type="submit"
        variant="primary"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
