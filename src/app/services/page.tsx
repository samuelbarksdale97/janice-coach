import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Heart, Check, Users, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Individual Coaching',
    icon: <User className="h-10 w-10 text-primary" />,
    price: '$150',
    frequency: 'per session',
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
    price: '$550',
    frequency: '4-session pack',
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
    price: '$75',
    frequency: 'per workshop',
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

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <header className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Coaching Services
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Invest in yourself with programs designed to bring clarity, purpose, and momentum to your life and career.
          </p>
        </div>
      </header>
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {services.map((service) => (
              <Card 
                key={service.title} 
                className={`flex flex-col h-full shadow-lg transition-all duration-300 ${service.popular ? 'border-primary border-2 shadow-primary/20 transform lg:-translate-y-4' : 'hover:shadow-2xl hover:-translate-y-1'}`}
              >
                {service.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 font-bold text-sm">Most Popular</div>
                )}
                <CardHeader className="items-center text-center p-6">
                  {service.icon}
                  <CardTitle className="mt-4 font-headline text-2xl">{service.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{service.price}</span>
                    <span className="text-muted-foreground text-sm">/{service.frequency}</span>
                  </div>
                  <CardDescription className="mt-2 h-12">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6">
                  <Button asChild className="w-full font-bold" variant={service.popular ? 'default' : 'secondary'}>
                    <Link href="/contact">{service.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Card className="inline-block bg-muted border-none p-8">
              <h3 className="text-2xl font-headline text-primary">Not sure where to start?</h3>
              <p className="mt-2 text-muted-foreground">Let's chat about your goals and find the perfect fit.</p>
              <Button asChild className="mt-6">
                <Link href="/contact">
                  Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
