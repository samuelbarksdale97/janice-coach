
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please correct the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const { name, email, message } = validatedFields.data;
    // Here is where you would integrate with a service like Firestore
    // For now, we'll just log to the console
    console.log('New contact form submission:', { name, email, message });

    return {
      message: 'Thank you for your message! I will get back to you soon.',
      errors: null,
      success: true,
    };
  } catch (e) {
    return {
      message: 'An unexpected error occurred. Please try again.',
      errors: null,
      success: false,
    };
  }
}
