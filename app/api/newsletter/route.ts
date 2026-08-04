import { NextResponse } from "next/server";
import { subscribeToNewsletter } from "@/services/newsletter";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await subscribeToNewsletter({
      email: String(body.email ?? "").trim().toLowerCase(),
      locale: body.locale === "en" ? "en" : "es",
      source: String(body.source ?? "landing")
    });

    return NextResponse.json(result, { status: result.ok ? 200 : 400 });
  } catch {
    return NextResponse.json(
      { ok: false, message: "No pudimos procesar tu solicitud." },
      { status: 400 }
    );
  }
}
