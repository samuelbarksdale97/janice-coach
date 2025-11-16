
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GitFork, CalendarCheck, Waypoints, Rocket, CheckCircle2, ArrowRight, Search } from 'lucide-react';

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
        icon: <CalendarCheck className="w-16 h-16 text-primary" />,
        step: "Step 1",
        title: "Book a Discovery Call",
        description: "Schedule a complimentary call to discuss your aspirations and see if we're a good fit."
    },
    {
        icon: <Waypoints className="w-16 h-16 text-primary" />,
        step: "Step 2",
        title: "Create Your Plan",
        description: "Together, we'll create a customized coaching plan tailored to your unique path."
    },
    {
        icon: <Rocket className="w-16 h-16 text-primary" />,
        step: "Step 3",
        title: "Start Your Transformation",
        description: "Begin your coaching journey with consistent support and actionable steps toward your goals."
    },
]

const whoIsThisForPoints = [
    "A successful professional wondering, 'What’s next for me?'",
    "Feeling the pull to align your career with your true purpose.",
    "Ready to stop just 'doing' and start truly 'being' in your work and life."
];

const contactImage = PlaceHolderImages.find(img => img.id === 'contact');

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <section className="w-full pt-28 md:pt-36 pb-12 bg-background">
                    <div className="container grid gap-10 lg:grid-cols-2 lg:gap-16 items-center px-4 md:px-6">
                        <div className="space-y-4 text-center lg:text-left animate-glide-up">
                            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-wide">
                                Coaching Services
                            </h1>
                            <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-muted-foreground">
                                <span className="text-secondary">Invest in yourself</span> with programs designed to bring clarity, purpose, and momentum to your life and career.
                            </p>
                        </div>
                        <div className="flex justify-center animate-glide-up">
                            {contactImage && (
                                <div className="aspect-video relative rounded-lg overflow-hidden shadow-2xl w-full">
                                    <Image
                                        src={contactImage.imageUrl}
                                        alt={contactImage.description}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        data-ai-hint={contactImage.imageHint}
                                        priority
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-glide-up">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-headline font-bold tracking-wide text-primary sm:text-5xl">Your Coaching Journey</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                My coaching process is designed to be clear, supportive, and transformative.
                                    <br />
                                    <span className="text-secondary font-semibold">Here’s how we can begin our journey together.</span>
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-3 md:grid-cols-3">
                            {howItWorksSteps.map((step, index) => (
                                <div 
                                    key={step.step} 
                                    className="flex flex-col items-center space-y-3 text-center animate-glide-up"
                                    style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'backwards' }}
                                >
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
                <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
                    <div className="container px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-headline font-bold text-primary text-center md:text-left">Is This For You?</h2>
                                <ul className="space-y-4">
                                    {whoIsThisForPoints.map((point, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle2 className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-muted-foreground text-lg">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center">
                                <ArrowRight className="h-12 w-12 text-primary rotate-90 md:rotate-0 mb-4 md:hidden" />
                                <p className="text-xl text-muted-foreground max-w-md mb-6">
                                    If this sounds like you, let's connect. You don't need to have it all figured out.
                                </p>
                                <Button asChild size="lg" variant="outline" className="font-bold border-primary text-primary hover:bg-primary/5">
                                    <Link href="/contact">Start the Conversation</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-20 bg-muted">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {servicesCards.map((service) => (
                                <Card 
                                    key={service.title} 
                                    className="flex flex-col bg-background overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
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
                                    <CardFooter className="p-6 bg-muted/50">
                                        <Button asChild className="w-full font-bold" variant="secondary">
                                            <Link href="/contact">Learn More</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
