
"use client";

import { useEffect, useRef } from "react";
import { useFormState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type FormState } from "./actions";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormData = z.infer<typeof contactSchema>;

const initialState: FormState = {
  success: false,
  message: "",
  errors: null,
};

export function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { reset, setError, formState: { isSubmitting } } = form;

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      reset();
      formRef.current?.reset();
    } else if (state.message && !state.success) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }

    if (state.errors) {
      if (state.errors.name) {
        setError("name", { type: 'server', message: state.errors.name[0] });
      }
      if (state.errors.email) {
        setError("email", { type: 'server', message: state.errors.email[0] });
      }
      if (state.errors.message) {
        setError("message", { type: 'server', message: state.errors.message[0] });
      }
    }
  }, [state, toast, reset, setError]);

  return (
    <Form {...form}>
      <form ref={formRef} action={formAction} className="space-y-6" onSubmit={form.handleSubmit(() => formRef.current?.requestSubmit())}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Jane Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="jane.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me a little bit about what you're looking to achieve..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
}
