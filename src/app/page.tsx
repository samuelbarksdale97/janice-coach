
'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Brain, Zap, Target, PlayCircle } from "lucide-react";
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
      
      <div className="flex flex-col min-h-dvh">
        <main className="flex-1">
        <section id="home-container" className="w-full bg-background flex justify-center">
            <div className="w-full max-w-7xl">
                <section id="home" className="relative w-full h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
                    <Header />
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
                    <div className="relative z-10 p-4 max-w-4xl mx-auto animate-glide-up flex flex-col items-center">
                        
                        <h1 className="text-3xl md:text-5xl font-headline font-bold tracking-tight text-shadow-lg mt-8">
                            What possibilities would open up if you led as <span className="italic text-secondary">yourself</span> - and not as the version others expect?
                        </h1>
                        
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg" variant="outline" className="font-bold border-white text-white bg-transparent hover:bg-white/10 hover:text-white">
                                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">Let's Talk</a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="font-bold border-white text-white bg-transparent hover:bg-white/10 hover:text-white tracking-wider">
                                <Link href="/services">
                                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
              </div>
          </section>

          <section id="logo-display" className="py-8 md:py-12 bg-muted">
            <div className="container mx-auto px-4">
              <div className="flex justify-center -my-8 md:-my-12">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/TYL-FinalLogo_HRZ%20OG.png?alt=media&token=16336bba-a715-4140-8631-4067db3359ad"
                  alt="Taylor Leadership Coaching Horizontal Logo"
                  width={1200}
                  height={300}
                  className="w-full max-w-4xl h-auto"
                />
              </div>
            </div>
          </section>

          <section id="about-intro" className="py-8 md:py-12 bg-background">
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
                          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">A Guide for Your <span className="text-secondary">Journey</span></h2>
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

          <section id="philosophy" className="py-8 md:py-12 bg-background">
              <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">My Coaching Philosophy</h2>
                      <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
                          Guiding you towards self-discovery and empowerment with a process built on trust, action, and holistic well-being.
                      </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {philosophyPoints.map((point) => (
                          <Card key={point.title} className="bg-muted border-none shadow-lg text-center">
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

          <section id="quote" className="py-8 md:py-12 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <blockquote className="text-2xl md:text-3xl font-headline font-medium text-primary">
                  "The only impossible journey is the one you never begin."
                </blockquote>
                <p className="mt-4 text-lg text-secondary font-semibold italic">— Tony Robbins</p>
              </div>
            </div>
          </section>
          
          <section id="video-feature" className="py-8 md:py-12 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">A Glimpse Into Coaching</h2>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
                        Watch this short video to understand my approach and how we can work together to achieve your goals.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black group cursor-pointer">
                        <Image
                            src="https://picsum.photos/seed/video/1280/720"
                            alt="Video placeholder"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint="coaching video"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <PlayCircle className="h-20 w-20 text-white/80 transform transition-transform duration-300 group-hover:scale-110" />
                        </div>
                    </div>
                </div>
            </div>
          </section>

          <section id="cta" className="py-8 md:py-12 bg-primary text-primary-foreground">
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
