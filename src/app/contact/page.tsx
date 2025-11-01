
import { Mail, Phone, MapPin } from 'lucide-react';
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <section className="py-16 md:py-24 bg-muted">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md-text-5xl font-headline font-bold text-primary">
                                Get In Touch
                            </h1>
                            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                                Ready to take the next step? I'd love to hear from you. Fill out the form or use the contact details below.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                            <div className="bg-background rounded-lg p-8 md:p-12 border">
                                <h2 className="text-3xl font-headline text-primary mb-6">Send a Message</h2>
                                <ContactForm />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-headline text-primary">Contact Information</h3>
                                    <p className="mt-2 text-muted-foreground">
                                        For inquiries, bookings, or a friendly chat, here's how you can reach me.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-primary text-primary-foreground p-3 rounded-full">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-bold">Email</h4>
                                            <p className="text-muted-foreground">Reach out anytime for a prompt response.</p>
                                            <a href="mailto:hello@evolvingdoor.com" className="text-primary hover:underline font-semibold">
                                                hello@evolvingdoor.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-primary text-primary-foreground p-3 rounded-full">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-bold">Phone</h4>
                                            <p className="text-muted-foreground">Available for calls Mon-Fri, 9am-5pm.</p>
                                            <a href="tel:+1234567890" className="text-primary hover:underline font-semibold">
                                                +1 (234) 567-890
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-primary text-primary-foreground p-3 rounded-full">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-bold">Location</h4>
                                            <p className="text-muted-foreground">Available for virtual sessions worldwide.</p>
                                            <p className="font-semibold text-primary">Remote / Online</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
