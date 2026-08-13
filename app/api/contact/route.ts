import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, vehicle, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const resend = getResend();
  if (!resend) {
    console.error(
      "RESEND_API_KEY is not set — contact form cannot send email."
    );
    return NextResponse.json(
      { error: "Email is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  try {
    await resend.emails.send({
      from: "Luxe Auto Accessories <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO ?? "Sales.luxeauto@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        `Vehicle: ${vehicle || "-"}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 }
    );
  }
}
