import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // In a production environment, you would:
    // 1. Send email using EmailJS, SendGrid, or similar service
    // 2. Store in database for record keeping
    // 3. Add spam protection (honeypot, rate limiting, etc.)

    // For now, we'll simulate successful email sending
    console.log('Contact form submission:', { name, email, subject, message });

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}