
"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type FormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const result = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!result.success) {
    return {
      success: false,
      message: "Please correct the errors below.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = result.data;

  try {
    // Here is where you would integrate with Firestore
    // For now, we'll just log to the console
    console.log("Contact form submitted successfully:");
    console.log({ name, email, message });
    
    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
      errors: null,
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "Something went wrong on our end. Please try again later.",
      errors: null,
    };
  }
}
