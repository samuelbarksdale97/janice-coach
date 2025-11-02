
'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Brain, Zap, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const heroImage = PlaceHolderImages.find(img => img.id === 'hero');
const aboutImage = PlaceHolderImages.find(img => img.id === 'about');

const philosophyPoints = [
    {
        icon: <Heart className="w-8 h-8 text-secondary" />,
        title: 'Empowerment',
        description: 'I believe in empowering you with the tools and insights to create lasting change from within.'
    },
    {
        icon: <Brain className="w-8 h-8 text-secondary" />,
        title: 'Holistic Approach',
        description: 'We look at all areas of your life to create a balanced and fulfilling path forward.'
    },
    {
        icon: <Zap className="w-8 h-8 text-secondary" />,
        title: 'Action-Oriented',
        description: 'Coaching is about momentum. We focus on actionable steps to move you toward your goals.'
    },
    {
        icon: <Target className="w-8 h-8 text-secondary" />,
        title: 'Authenticity',
        description: 'Our partnership is built on a foundation of trust, honesty, and genuine support.'
    }
];

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="flex flex-col min-h-dvh">
        <main className="flex-1">
          <section id="home" className="relative w-full py-20 md:py-32 flex items-center justify-center text-center text-white">
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/Gemini_Generated_Image_c9mzkoc9mzkoc9mz.png?alt=media&token=a8baa9fd-7937-4746-b6d6-84a0243516b2"
                alt="A person standing on a mountain peak looking out at the sunrise."
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 p-4 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-headline font-bold tracking-tight text-shadow-lg">
                    Open the Door to Your Future
                </h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto text-shadow">
                    Professional life coaching to help you navigate change, discover your potential, and create the life you've always wanted.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="font-bold">
                        <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">Let's Talk</a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="font-bold border-white text-white bg-transparent hover:bg-white/10 hover:text-white">
                        <Link href="/services">
                            Learn More <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
          </section>

          <section id="about-intro" className="py-16 md:py-24 bg-background">
              <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="flex justify-center">
                          {aboutImage && (
                              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                                <Image
                                    src={aboutImage.imageUrl}
                                    alt={aboutImage.description}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 320px"
                                    data-ai-hint={aboutImage.imageHint}
                                />
                              </div>
                          )}
                      </div>
                      <div className="text-center md:text-left">
                          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">A Guide for Your Journey</h2>
                          <p className="mt-4 text-lg text-muted-foreground">
                              I'm Jane Doe, a certified life coach dedicated to helping you find clarity and purpose. My mission is to provide a supportive space where you can explore your potential, overcome obstacles, and design a life that truly resonates with you.
                          </p>
                          <Button asChild variant="link" className="mt-4 text-primary font-bold text-lg p-0">
                              <Link href="/about">
                                  Learn More About Me <ArrowRight className="ml-2 h-5 w-5" />
                              </Link>
                          </Button>
                      </div>
                  </div>
              </div>
          </section>

          <section id="philosophy" className="py-16 md:py-24 bg-muted">
              <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">My Coaching Philosophy</h2>
                      <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
                          Guiding you towards self-discovery and empowerment with a process built on trust, action, and holistic well-being.
                      </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {philosophyPoints.map((point) => (
                          <Card key={point.title} className="bg-background border-none shadow-lg text-center">
                              <CardHeader className="items-center">
                                  {point.icon}
                                  <CardTitle className="mt-4 font-headline text-2xl text-primary">{point.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-muted-foreground">{point.description}</p>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </div>
          </section>

          <section id="quote" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <blockquote className="text-2xl md:text-3xl font-headline font-medium text-primary">
                  "The only impossible journey is the one you never begin."
                </blockquote>
                <p className="mt-4 text-lg text-muted-foreground font-semibold">— Tony Robbins</p>
              </div>
            </div>
          </section>

          <section id="cta" className="py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Begin Your Transformation?</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Don't wait another day to start living the life you've imagined. A complimentary discovery call is the first step.
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
      </div>
    </>
  );
}
