import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, vehicle, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "Luxe Auto Accessories <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO ?? "info@luxeautoaccessories.com.au",
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
