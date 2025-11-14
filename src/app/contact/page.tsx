
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ContactForm } from "./contact-form";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <section className="w-full pb-12 md:py-16 lg:py-20 bg-muted">
                    <div className="container mx-auto px-4">
                        <div className="text-center animate-glide-up">
                            <div className="flex justify-center">
                                <Image
                                    src="https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/TYL-FinalLogo_OG.png?alt=media&token=99c92684-e816-40f5-913c-68a85e686891"
                                    alt="Taylor Leadership Coaching Logo"
                                    width={400}
                                    height={200}
                                    className="w-auto h-auto max-w-sm"
                                />
                            </div>
                            <h1 className="text-4xl md-text-5xl font-headline font-bold text-primary mt-4">
                                Get In Touch
                            </h1>
                            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                                Ready to take the next step? I'd love to hear from you. Fill out the form or use the contact details below.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 items-start mt-12">
                            <div className="bg-background rounded-lg p-8 md:p-12 border">
                                <h2 className="text-3xl font-headline text-primary mb-6 text-center md:text-left">Send a Message</h2>
                                <ContactForm />
                            </div>

                            <div className="space-y-8 animate-glide-up">
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
                <section id="cta-contact" className="relative w-full py-12 md:py-16 flex items-center justify-center text-center text-white">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/66DE1BF3-BDE0-4914-8627-C4042EA7389A_1_201_a.jpeg?alt=media&token=85b33495-73c1-4311-979e-06a364978908"
                        alt="A person standing on a mountain peak looking out at the sunrise."
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 p-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight text-shadow-lg">
                        Ready to Start Now?
                    </h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-shadow">
                        The simplest way to begin is by booking a complimentary discovery call or exploring the packages to see what's right for you.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" variant="outline" className="font-bold border-white text-white bg-transparent hover:bg-white/10 hover:text-white">
                            <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">Let's Talk</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="font-bold border-white text-white bg-transparent hover:bg-white/10 hover:text-white">
                            <Link href="/services">Explore Coaching Packages</Link>
                        </Button>
                    </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
