
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GitFork, CalendarCheck, Waypoints, Rocket } from 'lucide-react';

const servicesCards = [
    {
      title: 'Individual Coaching',
      description: 'One-on-one sessions tailored to your unique goals, challenges, and aspirations, helping you unlock your full potential.',
      image: PlaceHolderImages.find(img => img.id === 'service1'),
      cta: 'Book a Session'
    },
    {
      title: 'Career Transition Package',
      description: 'A focused program to navigate career changes, from exploration to landing your dream job with confidence and clarity.',
      image: PlaceHolderImages.find(img => img.id === 'service2'),
      cta: 'Start Your Transition',
      popular: true
    },
    {
      title: 'Group Workshops',
      description: 'Join a community of like-minded individuals in our themed monthly workshops for collaborative growth and learning.',
      image: PlaceHolderImages.find(img => img.id === 'service3'),
      cta: 'View Workshops'
    }
  ];

const howItWorksSteps = [
    {
        icon: <GitFork className="w-12 h-12 text-primary" />,
        step: "Step 1",
        title: "Explore Services",
        description: "Discover the coaching package that best aligns with your personal or professional goals."
    },
    {
        icon: <CalendarCheck className="w-12 h-12 text-primary" />,
        step: "Step 2",
        title: "Book a Discovery Call",
        description: "Schedule a complimentary call to discuss your aspirations and see if we're a good fit."
    },
    {
        icon: <Waypoints className="w-12 h-12 text-primary" />,
        step: "Step 3",
        title: "Create Your Plan",
        description: "Together, we'll create a customized coaching plan tailored to your unique path."
    },
    {
        icon: <Rocket className="w-12 h-12 text-primary" />,
        step: "Step 4",
        title: "Start Your Transformation",
        description: "Begin your coaching journey with consistent support and actionable steps toward your goals."
    },
]

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <section className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16">
                            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                                Coaching Services
                            </h1>
                            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                                Invest in yourself with programs designed to bring clarity, purpose, and momentum to your life and career.
                            </p>
                        </div>
                
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {servicesCards.map((service) => (
                                <Card 
                                    key={service.title} 
                                    className="flex flex-col bg-muted overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                >
                                    {service.image && (
                                        <div className="aspect-h-2 aspect-w-3 relative">
                                            <Image
                                                src={service.image.imageUrl}
                                                alt={service.image.description}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                data-ai-hint={service.image.imageHint}
                                            />
                                        </div>
                                    )}
                                    <CardHeader className="p-6">
                                        <CardTitle className="font-headline text-2xl text-primary">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow p-6 pt-0">
                                        <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
                                    </CardContent>
                                    <CardFooter className="p-6 bg-background">
                                        <Button asChild className="w-full font-bold" variant="secondary">
                                            <Link href="/contact">Learn More</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary sm:text-5xl">How It Works</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                My coaching process is designed to be clear, supportive, and transformative.
                                    <br />
                                    <span className="text-secondary font-semibold">Here’s how we can begin our journey together.</span>
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
                            {howItWorksSteps.map((step) => (
                                <div key={step.step} className="flex flex-col items-center space-y-3 text-center">
                                    {step.icon}
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold uppercase tracking-wider text-secondary">{step.step}</p>
                                        <h3 className="text-xl font-bold font-headline text-primary">{step.title}</h3>
                                        <p className="text-muted-foreground text-sm">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
