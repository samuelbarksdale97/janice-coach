import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const aboutImage = PlaceHolderImages.find(img => img.id === 'about');

export default function AboutPage() {
  const philosophyPoints = [
    'Empowerment through self-awareness',
    'Action-oriented goal setting',
    'Holistic approach to well-being',
    'Creating sustainable change'
  ];

  return (
    <div className="bg-background">
      <header className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Your Partner in Personal Transformation
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Learn about the passion, philosophy, and person dedicated to helping you unlock your best self.
          </p>
        </div>
      </header>

      <main className="py-16 md:py-24">
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
            <Card className="bg-muted border-none">
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
                          <CheckCircle2 className="h-5 w-5 text-secondary-foreground mr-3 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-20 md:mt-28">
            <h2 className="text-3xl font-headline font-bold text-primary">Ready to Start Your Journey?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              If you're ready to make a meaningful change in your life, I'm here to help.
            </p>
            <Button asChild size="lg" className="mt-8 font-bold">
              <Link href="/contact">
                Schedule a Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
