import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Save inquiry to Firestore
    const inquiryRef = await addDoc(collection(db, 'inquiries'), {
      name,
      email,
      phone,
      subject,
      message,
      status: 'new',
      createdAt: new Date(),
    });

    // TODO: Send email notification using your preferred email service
    // Example with nodemailer or SendGrid
    
    /*
    const emailContent = {
      to: process.env.SMTP_USER,
      from: process.env.EMAIL_FROM,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };
    
    // await sendEmail(emailContent);
    */

    return NextResponse.json({
      success: true,
      inquiryId: inquiryRef.id,
      message: 'Your message has been sent successfully!',
    });
  } catch (error: any) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
