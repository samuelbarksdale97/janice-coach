'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Feather, Briefcase, Heart, CheckCircle2, Mail, Phone, MapPin, Check, Users, User, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ContactForm } from "./contact/contact-form";

// Hero Data
const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

// About Data
const aboutImage = PlaceHolderImages.find(img => img.id === 'about');
const philosophyPoints = [
    'Empowerment through self-awareness',
    'Action-oriented goal setting',
    'Holistic approach to well-being',
    'Creating sustainable change'
];

// Services Data
const servicesCards = [
  {
    title: 'Individual Coaching',
    icon: <User className="h-10 w-10 text-primary" />,
    description: 'One-on-one sessions tailored to your unique goals, challenges, and aspirations.',
    features: [
      'Personalized goal-setting',
      'Weekly 60-minute sessions',
      'Unlimited email support',
      'Custom action plans',
    ],
    cta: 'Book a Session'
  },
  {
    title: 'Career Transition Package',
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    description: 'A focused program to navigate career changes, from exploration to landing your dream job.',
    features: [
      'Resume & LinkedIn review',
      'Interview preparation',
      'Salary negotiation strategies',
      'Long-term career planning',
    ],
    cta: 'Start Your Transition',
    popular: true
  },
  {
    title: 'Group Workshops',
    icon: <Users className="h-10 w-10 text-primary" />,
    description: 'Join a community of like-minded individuals in our themed monthly workshops.',
    features: [
      'Topics like "Mindfulness" & "Goal Setting"',
      'Peer support and networking',
      'Interactive exercises',
      'Cost-effective learning',
    ],
    cta: 'View Workshops'
  }
];

// Blog Data
const blogPosts = [
  {
    slug: 'finding-clarity-in-chaos',
    title: '5 Steps to Finding Clarity in the Midst of Chaos',
    category: 'Personal Growth',
    date: 'October 26, 2023',
    excerpt: 'Life can feel overwhelming. Learn five practical steps to cut through the noise, focus your mind, and find a clear path forward.',
    image: PlaceHolderImages.find(img => img.id === 'blog1')
  },
  {
    slug: 'mastering-the-career-pivot',
    title: 'Mastering the Career Pivot: A Guide for Aspiring Changers',
    category: 'Career',
    date: 'October 15, 2023',
    excerpt: 'Thinking about a career change? This guide breaks down the process into manageable steps, from self-assessment to landing your new role.',
    image: PlaceHolderImages.find(img => img.id === 'blog2')
  },
  {
    slug: 'the-power-of-mindful-mornings',
    title: 'The Power of Mindful Mornings: Transform Your Day',
    category: 'Wellness',
    date: 'September 30, 2023',
    excerpt: 'How you start your day sets the tone for everything that follows. Discover a simple morning routine to boost productivity and well-being.',
    image: PlaceHolderImages.find(img => img.id === 'blog3')
  }
];

export default function Home(props:any) {
  // Prevent Next.js from complaining about enumerating params
  if (props.params) {
    return null;
  }
  
  return (
    <>
      <Header />
      
      <div className="flex flex-col min-h-dvh">
        <main className="flex-1">
          <section id="home" className="relative w-full h-[80vh] flex items-center justify-center text-center text-white">
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
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 p-4 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-shadow-lg">
                Open the Door to Your Future
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-shadow">
                Professional life coaching to help you navigate change, discover your potential, and create the life you've always wanted.
              </p>
              <Button asChild size="lg" className="mt-8 font-bold">
                <Link href="#contact">
                  Begin Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

          <section id="about" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
                  <div className="md:col-span-2">
                    {aboutImage && (
                      <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl">
                        <Image
                          src={aboutImage.imageUrl}
                          alt={aboutImage.description}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                          data-ai-hint={aboutImage.imageHint}
                        />
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-3">
                    <h2 className="text-3xl font-headline text-primary font-bold">Meet Your Coach</h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      Hello! I'm Jane Doe, a certified life coach with a passion for helping individuals navigate the complexities of life with confidence and clarity. With over a decade of experience in personal development and corporate leadership, I blend proven coaching techniques with real-world wisdom.
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      My journey into coaching began after my own transformative experience with a coach during a pivotal career change. It was then I realized the profound impact of having a dedicated guide and supporter. My mission is to be that person for you—to listen, to challenge, and to celebrate your growth every step of the way.
                    </p>
                  </div>
                </div>

                <div className="mt-20 md:mt-28">
                  <Card className="bg-muted border">
                    <CardContent className="p-8 md:p-12">
                      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-headline text-primary font-bold">My Coaching Philosophy</h3>
                          <p className="mt-4 text-muted-foreground leading-relaxed">
                            I believe coaching is a collaborative partnership built on trust and authenticity. My approach is not to give you the answers, but to empower you to find your own. Together, we'll uncover your strengths, clarify your values, and design an actionable roadmap to achieve your goals.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-primary mb-4">Core Principles:</h4>
                          <ul className="space-y-3">
                            {philosophyPoints.map((point, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
          </section>

          <section id="services" className="py-16 md:py-24 bg-muted">
           <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                      Coaching Services
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                      Invest in yourself with programs designed to bring clarity, purpose, and momentum to your life and career.
                  </p>
              </div>
        
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {servicesCards.map((service) => (
                  <Card 
                      key={service.title} 
                      className={`flex flex-col h-full shadow-lg transition-all duration-300 bg-background ${service.popular ? 'border-primary border-2 shadow-primary/20 transform lg:-translate-y-4' : 'hover:shadow-2xl hover:-translate-y-1'}`}
                  >
                      {service.popular && (
                      <div className="bg-primary text-primary-foreground text-center py-2 font-bold text-sm">Most Popular</div>
                      )}
                      <CardHeader className="items-center text-center p-6">
                      {service.icon}
                      <CardTitle className="mt-4 font-headline text-2xl">{service.title}</CardTitle>
                      <CardDescription className="mt-2 h-16">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow p-6">
                      <ul className="space-y-4">
                          {service.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                          </li>
                          ))}
                      </ul>
                      </CardContent>
                      <CardFooter className="p-6">
                      <Button asChild className="w-full font-bold" variant={service.popular ? 'default' : 'secondary'}>
                          <Link href="#contact">{service.cta}</Link>
                      </Button>
                      </CardFooter>
                  </Card>
                  ))}
              </div>
              </div>
          </section>
          
          <section id="blog" className="py-16 md:py-24 bg-background">
              <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                      <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                          Insights & Inspiration
                      </h1>
                      <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                          Articles and thoughts on personal growth, career development, and living a more intentional life.
                      </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {blogPosts.map((post) => (
                      <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-muted">
                          {post.image && (
                          <Link href={`/blog/${post.slug}`} className="block aspect-video relative">
                              <Image
                              src={post.image.imageUrl}
                              alt={post.image.description}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              data-ai-hint={post.image.imageHint}
                              />
                          </Link>
                          )}
                          <CardHeader>
                          <p className="text-sm text-secondary font-semibold">{post.category.toUpperCase()}</p>
                          <CardTitle className="font-headline text-2xl leading-tight">
                              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                              {post.title}
                              </Link>
                          </CardTitle>
                          <p className="text-sm text-muted-foreground pt-1">{post.date}</p>
                          </CardHeader>
                          <CardContent className="flex-grow">
                          <p className="text-muted-foreground">{post.excerpt}</p>
                          </CardContent>
                          <CardFooter>
                          <Button asChild variant="link" className="p-0 text-primary font-bold">
                              <Link href={`/blog/${post.slug}`}>
                              Read More <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                          </Button>
                          </CardFooter>
                      </Card>
                      ))}
                  </div>
              </div>
          </section>
          
          <section id="contact" className="py-16 md:py-24 bg-muted">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
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
      </div>
    </>
  );
}
