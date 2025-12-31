'use client';

import { useState } from 'react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export function ContactFormClient() {
  const [formState, setFormState] = useState({
    message: '',
    errors: null as any,
    success: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const validatedFields = contactSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      setFormState({
        message: 'Please correct the errors below.',
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const { name, email, message } = validatedFields.data;
      console.log('New contact form submission:', { name, email, message });

      setFormState({
        message: 'Thank you for your message! I will get back to you soon.',
        errors: null,
        success: true,
      });
      
      // Reset form
      e.currentTarget.reset();
    } catch (e) {
      setFormState({
        message: 'An unexpected error occurred. Please try again.',
        errors: null,
        success: false,
      });
    }
    
    setIsSubmitting(false);
  };

  return { formState, handleSubmit, isSubmitting };
}
