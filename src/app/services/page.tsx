
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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
            </main>
            <Footer />
        </>
    );
}
