import type { NewsletterPayload, NewsletterProvider } from "@/types/newsletter";

const endpointByProvider: Partial<Record<NewsletterProvider, string>> = {
  mailchimp:
    process.env.MAILCHIMP_SERVER_PREFIX && process.env.NEWSLETTER_AUDIENCE_ID
      ? `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.NEWSLETTER_AUDIENCE_ID}/members`
      : undefined,
  brevo: "https://api.brevo.com/v3/contacts",
  resend:
    process.env.RESEND_AUDIENCE_ID
      ? `https://api.resend.com/audiences/${process.env.RESEND_AUDIENCE_ID}/contacts`
      : undefined,
  supabase:
    process.env.SUPABASE_URL
      ? `${process.env.SUPABASE_URL}/rest/v1/newsletter_subscribers`
      : undefined
};

export async function subscribeToNewsletter(payload: NewsletterPayload) {
  const provider = (process.env.NEWSLETTER_PROVIDER ??
    "console") as NewsletterProvider;

  if (!payload.email || !payload.email.includes("@")) {
    return { ok: false, message: "Ingresa un correo valido." };
  }

  if (provider === "console") {
    console.info("Newsletter subscription", payload);
    return { ok: true, message: "Gracias. Te escribiremos con calma." };
  }

  const endpoint = endpointByProvider[provider];
  const apiKey = process.env.NEWSLETTER_API_KEY;

  if (!endpoint || !apiKey) {
    return {
      ok: false,
      message: "El servicio de newsletter aun no esta configurado."
    };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: buildHeaders(provider, apiKey),
    body: JSON.stringify(buildBody(provider, payload))
  });

  return {
    ok: response.ok,
    message: response.ok
      ? "Gracias. Te escribiremos con calma."
      : "No pudimos registrar tu correo. Intentalo de nuevo."
  };
}

function buildHeaders(
  provider: NewsletterProvider,
  apiKey: string
): Record<string, string> {
  if (provider === "mailchimp") {
    return {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`user:${apiKey}`).toString("base64")}`
    };
  }

  if (provider === "supabase") {
    return {
      "Content-Type": "application/json",
      apikey: apiKey,
      Authorization: `Bearer ${apiKey}`,
      Prefer: "return=minimal"
    };
  }

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
    "api-key": apiKey
  };
}

function buildBody(provider: NewsletterProvider, payload: NewsletterPayload) {
  if (provider === "mailchimp") {
    return {
      email_address: payload.email,
      status: "subscribed",
      tags: ["Casa DACA", payload.source ?? "landing"]
    };
  }

  if (provider === "brevo") {
    return {
      email: payload.email,
      listIds: process.env.BREVO_LIST_ID
        ? [Number(process.env.BREVO_LIST_ID)]
        : undefined,
      attributes: {
        LOCALE: payload.locale ?? "es",
        SOURCE: payload.source ?? "landing"
      }
    };
  }

  if (provider === "resend") {
    return {
      email: payload.email,
      unsubscribed: false
    };
  }

  return {
    email: payload.email,
    locale: payload.locale ?? "es",
    source: payload.source ?? "landing"
  };
}
