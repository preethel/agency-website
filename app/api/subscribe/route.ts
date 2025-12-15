import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = schema.parse(body);

    // In a real application, you would:
    // 1. Connect to your email service (e.g., SendGrid, Mailchimp)
    // 2. Add the email to your mailing list
    // 3. Send a confirmation email

    // For now, we'll just log it and return success
    console.log("Newsletter subscription:", email);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid email address", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
