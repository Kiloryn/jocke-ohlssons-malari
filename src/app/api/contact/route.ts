import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: unknown;
  contact?: unknown;
  msg?: unknown;
  // Honeypot (should stay empty)
  companyWebsite?: unknown;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function missingEnv(...keys: string[]) {
  return keys.filter((key) => !process.env[key] || !String(process.env[key]).trim());
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  const name = asTrimmedString(data.name);
  const contact = asTrimmedString(data.contact);
  const msg = asTrimmedString(data.msg);
  const companyWebsite = asTrimmedString(data.companyWebsite);

  // Honeypot hit: pretend success.
  if (companyWebsite) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!name || !contact || !msg) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Basic size limits (prevents spam / mail bloat).
  if (name.length > 120 || contact.length > 180 || msg.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "Payload too large" },
      { status: 400 }
    );
  }

  const missing = missingEnv(
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "CONTACT_TO_EMAIL",
    "CONTACT_FROM_EMAIL"
  );

  if (missing.length) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Contact email is not configured yet. Please call instead for now.",
      },
      { status: 501 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const subject = `Offertförfrågan – ${name}`;
  const text = `Namn: ${name}\nKontakt: ${contact}\n\nMeddelande:\n${msg}\n`;

  try {
    await transporter.sendMail({
      to: process.env.CONTACT_TO_EMAIL,
      from: process.env.CONTACT_FROM_EMAIL,
      replyTo: contact.includes("@") ? contact : undefined,
      subject,
      text,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to send message" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
