export type NewsletterProvider =
  | "console"
  | "mailchimp"
  | "brevo"
  | "resend"
  | "supabase";

export type NewsletterPayload = {
  email: string;
  locale?: "es" | "en";
  source?: string;
};
