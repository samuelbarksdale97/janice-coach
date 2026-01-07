'use server';

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { Resend } from 'resend';

/**
 * Server Action to handle contact form submissions
 * 1. Saves to Google Sheets
 * 2. Sends email notification to coach
 */

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface SubmissionResult {
  success: boolean;
  message: string;
  errors?: {
    sheets?: string;
    email?: string;
  };
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<SubmissionResult> {
  const errors: { sheets?: string; email?: string } = {};
  let sheetsSuccess = false;
  let emailSuccess = false;

  // Validate environment variables
  const requiredEnvVars = {
    GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    COACH_EMAIL: process.env.COACH_EMAIL,
  };

  const missingVars = Object.entries(requiredEnvVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    console.error('Missing environment variables:', missingVars);
    return {
      success: false,
      message: 'Server configuration error. Please contact support.',
    };
  }

  // 1. Save to Google Sheets
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID!,
      serviceAccountAuth
    );

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // Use first sheet

    // Add row with timestamp
    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      Name: formData.name,
      Email: formData.email,
      Message: formData.message,
    });

    sheetsSuccess = true;
    console.log('✅ Successfully added to Google Sheets');
  } catch (error) {
    console.error('❌ Error saving to Google Sheets:', error);
    errors.sheets = 'Failed to save to database';
  }

  // 2. Send email notification
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Taylor Your Leadership Coaching <noreply@yourdomain.com>', // Update with your verified domain
      to: [process.env.COACH_EMAIL!],
      subject: `New Contact Form Inquiry from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at ${new Date().toLocaleString()}</small></p>
      `,
    });

    if (error) {
      throw error;
    }

    emailSuccess = true;
    console.log('✅ Successfully sent email notification');
  } catch (error) {
    console.error('❌ Error sending email:', error);
    errors.email = 'Failed to send notification email';
  }

  // Determine overall result
  if (sheetsSuccess && emailSuccess) {
    return {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    };
  } else if (sheetsSuccess) {
    return {
      success: true,
      message:
        'Your message was saved, but email notification failed. I will still receive your inquiry.',
      errors,
    };
  } else if (emailSuccess) {
    return {
      success: true,
      message:
        'Your message was sent via email, but database save failed. I will still receive your inquiry.',
      errors,
    };
  } else {
    return {
      success: false,
      message:
        'An error occurred while submitting your message. Please try again or email me directly.',
      errors,
    };
  }
}
