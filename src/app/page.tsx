import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Feather, Briefcase, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const heroImage = PlaceHolderImages.find(img => img.id === 'hero');
const serviceImage1 = PlaceHolderImages.find(img => img.id === 'service1');
const serviceImage2 = PlaceHolderImages.find(img => img.id === 'service2');
const serviceImage3 = PlaceHolderImages.find(img => img.id === 'service3');

export default function Home() {
  const services = [
    {
      title: "Personal Growth",
      description: "Unlock your potential and build a more fulfilling life.",
      icon: <Feather className="h-8 w-8 text-primary" />,
      image: serviceImage1,
      link: "/services"
    },
    {
      title: "Career Coaching",
      description: "Navigate career transitions and achieve professional goals.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      image: serviceImage2,
      link: "/services"
    },
    {
      title: "Relationship & Wellness",
      description: "Cultivate healthier relationships and improve your well-being.",
      icon: <Heart className="h-8 w-8 text-primary" />,
      image: serviceImage3,
      link: "/services"
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-shadow-lg">
              Open the Door to Your Future
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-shadow">
              Professional life coaching to help you navigate change, discover your potential, and create the life you've always wanted.
            </p>
            <Button asChild size="lg" className="mt-8 font-bold">
              <Link href="/contact">
                Begin Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              Your Guide Through Life's Transitions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              At Evolving Door, we believe that every change is an opportunity for growth. Whether you're facing a career shift, seeking personal development, or looking to improve your well-being, our mission is to provide you with the tools, support, and guidance to thrive.
            </p>
            <Button asChild variant="link" className="mt-4 text-lg text-primary font-bold">
              <Link href="/about">
                Learn More About My Approach <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">How I Can Help</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                Tailored coaching services designed to meet you where you are and get you where you want to be.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <CardHeader className="items-center text-center p-6">
                    {service.icon}
                    <CardTitle className="mt-4 font-headline text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground px-6 pb-6">
                    <p>{service.description}</p>
                    <Button asChild variant="secondary" className="mt-6">
                      <Link href={service.link}>Explore Service</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Evolve?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
              Take the first step towards a more empowered and intentional life. Schedule a free consultation today.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 font-bold">
              <Link href="/contact">
                Book a Free Consultation
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
