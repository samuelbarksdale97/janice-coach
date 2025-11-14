
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
        quote: "Working with Jane was a game-changer. I gained the clarity and confidence I needed to successfully pivot in my career. Her guidance was invaluable.",
        name: "Alex Johnson",
        title: "Marketing Director",
        image: PlaceHolderImages.find(img => img.id === 'testimonial1')
    },
    {
        quote: "I was feeling stuck and uninspired. The coaching sessions helped me rediscover my passion and create an actionable plan for my personal and professional growth.",
        name: "Samantha Lee",
        title: "Founder, Creative Co.",
        image: PlaceHolderImages.find(img => img.id === 'testimonial2')
    },
    {
        quote: "The leadership coaching I received was transformative. I learned how to lead more authentically and effectively, which has had a huge impact on my team's morale and performance.",
        name: "Michael Chen",
        title: "Engineering Manager",
        image: PlaceHolderImages.find(img => img.id === 'testimonial3')
    }
];

const ctaImage = PlaceHolderImages.find(img => img.id === 'hero');


export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-28 md:pt-40 pb-12 md:pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-glide-up">
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                What My Clients Say
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                Real stories of transformation and growth from leaders and professionals I've had the pleasure to work with.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="flex flex-col text-center bg-muted border-none shadow-lg">
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

        <section id="cta" className="py-12 md:py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Write Your Own Success Story?</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Let's connect. A complimentary discovery call is the perfect place to start exploring what's possible for you.
                </p>
                <Button asChild size="lg" className="mt-8 font-bold bg-background text-primary hover:bg-background/90">
                    <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                        Schedule Your Free Call <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </Button>
            </div>
          </section>
      </main>
      <Footer />
    </>
  );
}
