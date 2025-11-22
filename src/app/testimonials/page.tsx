
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const testimonials = [
    {
        quote: "I am so grateful to have Janice as my coach. Janice accepted me as a client at a time when I was stressed and overwhelmed and needed a calming voice to help me navigate the troubled waters and valley experiences in my life. Janice has been more than a coach. She has been the voice of reasoning when I needed strength and guidance. She helped me to find my voice and she helped me to realize everything I needed was already within me. I just needed to dig deeper to find the answers and to face new opportunities with courage and resilience.",
        name: "Valued Client",
        title: "",
        image: PlaceHolderImages.find(img => img.id === 'testimonial1')
    }
];

const ctaImage = PlaceHolderImages.find(img => img.id === 'hero');


export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-28 md:pt-36 pb-12 md:pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-glide-up">
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                What My Clients Say
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                Real stories of transformation and growth from leaders and professionals I've had the pleasure to work with.
              </p>
            </div>
            <div className="flex justify-center animate-glide-up">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="flex flex-col text-center bg-muted border-none shadow-lg max-w-2xl">
                  <CardContent className="p-8 flex-grow">
                    <blockquote className="text-muted-foreground italic">"{testimonial.quote}"</blockquote>
                  </CardContent>
                  <div className="p-6 pt-0">
                    {testimonial.image && (
                        <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                            <Image
                                src={testimonial.image.imageUrl}
                                alt={`Headshot of ${testimonial.name}`}
                                fill
                                className="object-cover"
                                data-ai-hint={testimonial.image.imageHint}
                            />
                        </div>
                    )}
                    <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                    <p className="text-sm text-secondary font-semibold">{testimonial.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-muted animate-glide-up">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <blockquote className="text-2xl md:text-3xl font-headline font-medium text-primary">
                    "Deliberately seek the company of people who influence you to think and act on building the life you desire."
                    </blockquote>
                    <p className="mt-4 text-lg text-secondary font-semibold italic">— Napoleon Hill</p>
                </div>
            </div>
        </section>

        <section id="cta" className="py-12 md:py-20 bg-primary text-primary-foreground animate-glide-up">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">20 years coaching leaders from first-time managers to C-suite executives.</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                Let's unlock what's holding you back. Most leadership problems aren't about strategy - they're about people. Let's fix the real issue.
                </p>
                <Button asChild size="lg" className="mt-8 font-bold bg-background text-primary hover:bg-background/90">
                    <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                        Free 30-minute consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </Button>
            </div>
          </section>
      </main>
      <Footer />
    </>
  );
}
