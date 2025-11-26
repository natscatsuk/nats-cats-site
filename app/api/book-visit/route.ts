import { NextResponse } from "next/server";
import { NATS_CATS_INBOX, resend } from "@/lib/email";

type BookingRequestBody = {
  fullName?: string;
  email?: string;
  phone?: string;
  area?: string;
  cats?: string;
  visitType?: string;
  dates?: string;
  details?: string;
};

type BookingResponseBody =
  | { success: true }
  | { success: false; error: string };

export async function POST(request: Request) {
  let body: BookingRequestBody;

  try {
    body = await request.json();
  } catch {
    const errorBody: BookingResponseBody = {
      success: false,
      error: "Invalid request body.",
    };
    return NextResponse.json(errorBody, { status: 400 });
  }

  const { fullName, email, phone, area, cats, visitType, dates, details } =
    body;

  if (!fullName || !fullName.trim()) {
    const errorBody: BookingResponseBody = {
      success: false,
      error: "Please provide your full name.",
    };
    return NextResponse.json(errorBody, { status: 400 });
  }

  if (!email || !email.trim()) {
    const errorBody: BookingResponseBody = {
      success: false,
      error: "Please provide your email address.",
    };
    return NextResponse.json(errorBody, { status: 400 });
  }

  if (!visitType || !visitType.trim()) {
    const errorBody: BookingResponseBody = {
      success: false,
      error: "Please choose a visit type.",
    };
    return NextResponse.json(errorBody, { status: 400 });
  }

  if (!dates || !dates.trim()) {
    const errorBody: BookingResponseBody = {
      success: false,
      error: "Please share your preferred dates.",
    };
    return NextResponse.json(errorBody, { status: 400 });
  }

  const subject = `New booking enquiry from ${fullName}`;

  const plainTextLines: string[] = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : undefined,
    area ? `Area: ${area}` : undefined,
    cats ? `Number of cats: ${cats}` : undefined,
    `Visit type: ${visitType}`,
    `Preferred dates: ${dates}`,
    "",
    "Additional details:",
    details?.trim() || "—",
  ].filter((line): line is string => Boolean(line));

  try {
    await resend.emails.send({
      from: "Nat's Cats <no-reply@natscats.local>",
      to: [NATS_CATS_INBOX],
      subject,
      replyTo: email,
      text: plainTextLines.join("\n"),
    });

    const successBody: BookingResponseBody = { success: true };
    return NextResponse.json(successBody, { status: 200 });
  } catch (error) {
    console.error("Error sending booking enquiry email:", error);
    const errorBody: BookingResponseBody = {
      success: false,
      error:
        "Something went wrong sending your enquiry. Please try again in a moment.",
    };
    return NextResponse.json(errorBody, { status: 500 });
  }
}


