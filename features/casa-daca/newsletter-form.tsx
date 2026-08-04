"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, locale: "es", source: "landing" })
    });
    const data = await response.json();

    setMessage(data.message);
    setLoading(false);
    if (response.ok) setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-2xl">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <Input
          required
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="correo@ejemplo.com"
          aria-label="Correo electronico"
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Enviando" : "Quiero formar parte"}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Button>
      </div>
      <p className="mt-4 min-h-6 text-sm text-sand/58" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
