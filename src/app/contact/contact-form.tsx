'use client';

import { useState, useRef, FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type FormErrors = {
  name?: string[];
  email?: string[];
  message?: string[];
} | null;

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<FormErrors>(null);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setErrors(null);

    const formData = new FormData(e.currentTarget);
    const validatedFields = contactSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      setErrors(validatedFields.error.flatten().fieldErrors);
      setPending(false);
      return;
    }

    try {
      const { name, email, message } = validatedFields.data;
      console.log('New contact form submission:', { name, email, message });

      toast({
        title: 'Success!',
        description: 'Thank you for your message! I will get back to you soon.',
      });
      
      formRef.current?.reset();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
      });
    }
    
    setPending(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="Jane Doe" />
        {errors?.name && (
          <p className="text-sm font-medium text-destructive">
            {errors.name[0]}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jane.doe@example.com"
        />
         {errors?.email && (
          <p className="text-sm font-medium text-destructive">
            {errors.email[0]}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me a little bit about what you're looking to achieve..."
          className="min-h-[120px]"
        />
         {errors?.message && (
          <p className="text-sm font-medium text-destructive">
            {errors.message[0]}
          </p>
        )}
      </div>
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
