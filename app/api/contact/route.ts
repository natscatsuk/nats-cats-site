import { NextResponse } from "next/server";
import { NATS_CATS_INBOX, resend } from "@/lib/email";

type ContactRequestBody = {
  fullName?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
};

type ContactResponseBody =
  | { success: true }
  | { success: false; error: string };

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = await request.json();
  } catch {
    const errorBody: ContactResponseBody = {
      success: false,
      error: "Invalid request body.",
    };
    return NextResponse.json(errorBody, { status: 400 });
  }

  const { fullName, email, phone, topic, message } = body;

  if (!fullName || !fullName.trim()) {
    const errorBody: ContactResponseBody = {
      success: false,
      error: "Please provide your full name.",
    };
    return NextResponse.json(errorBody, { status: 400 });
  }

  if (!email || !email.trim()) {
    const errorBody: ContactResponseBody = {
      success: false,
      error: "Please provide your email address.",
    };
    return NextResponse.json(errorBody, { status: 400 });
  }

  if (!message || !message.trim()) {
    const errorBody: ContactResponseBody = {
      success: false,
      error: "Please add a short message.",
    };
    return NextResponse.json(errorBody, { status: 400 });
  }

  const subject = `New contact message from ${fullName}`;

  const plainTextLines: string[] = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : undefined,
    topic ? `Topic: ${topic}` : undefined,
    "",
    "Message:",
    message.trim(),
  ].filter((line): line is string => Boolean(line));

  try {
    await resend.emails.send({
      from: "Nat's Cats <no-reply@natscats.local>",
      to: [NATS_CATS_INBOX],
      subject,
      replyTo: email,
      text: plainTextLines.join("\n"),
    });

    const successBody: ContactResponseBody = { success: true };
    return NextResponse.json(successBody, { status: 200 });
  } catch (error) {
    console.error("Error sending contact form email:", error);
    const errorBody: ContactResponseBody = {
      success: false,
      error:
        "Something went wrong sending your message. Please try again in a moment.",
    };
    return NextResponse.json(errorBody, { status: 500 });
  }
}


