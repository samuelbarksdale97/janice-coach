
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import { ExpandableText } from "@/components/shared/expandable-text";

const testimonials = [
    {
        quote: "I am so grateful to have Janice as my coach. Janice accepted me as a client at a time when I was stressed and overwhelmed and needed a calming voice to help me navigate the troubled waters and valley experiences in my life. Janice has been more than a coach. She has been the voice of reasoning when I needed strength and guidance. She helped me to find my voice and she helped me to realize everything I needed was already within me. I just needed to dig deeper to find the answers and to face new opportunities with courage and resilience.",
        name: "~ Laodecea Seay",
        title: "Assistant Director of Transfer Students",
    },
    {
        quote: "Having Janice as my coach has truly been transformative. Her authenticity, wisdom, and genuine care show up in every session. She listens deeply, asks questions that matter, and guides you toward clarity in the most thoughtful and practical ways. Her experience shines through every insight, and her sincerity makes every interaction meaningful. I’m deeply grateful for the positive impact Janice has had on my life.",
        name: "~ Olivia Rinaldi",
        title: "Management/Program Analyst",
    },
    {
        quote: "“I have been coached by Janice Brown-Taylor for more than ten years, and her guidance has had a profound and lasting impact on both my professional growth and my personal well-being. Throughout this time, she has consistently helped me gain clarity during pivotal moments, sharpen my thinking, and make decisions that have genuinely shaped the direction of my career.”\n“Her coaching played a key role in helping me earn multiple promotions and step confidently into larger leadership roles. She supported me in strengthening my communication, developing a more strategic mindset, and building the presence needed to succeed in high-visibility situations. Many of the breakthroughs I’ve experienced leading to moments that expanded my confidence and helped me see my true capabilities were the direct result of our conversations.”\n“What sets Janice apart is her ability to understand challenges on both a professional and personal level. She listens deeply, asks thoughtful and perceptive questions, and helps me see patterns, options, and solutions that I often could not identify on my own. Her guidance has helped me navigate difficult decisions, challenging workplace dynamics, and periods of uncertainty with far greater clarity and confidence.”\n“Janice’s influence reaches beyond my career. Through her coaching, I’ve learned how to manage stress more intentionally, establish healthier boundaries, and cultivate habits that support a more balanced, sustainable life. These shifts have had a lasting impact and continue to shape how I approach each day.”\n“What I appreciate most is the combination of insight, honesty, and genuine care she brings to every conversation. She challenges me when I need it, supports me when it matters, and consistently helps me grow in ways that are both meaningful and practical. I strongly recommend her to anyone seeking a coach who can create real, measurable progress. Her ability to support both personal and professional transformation is exceptional, and the impact of her coaching stays with you long after each session ends.”",
        name: "~ Shabbir Kundi",
        title: "Supervisory Management Analyst",
        long: true,
    }
];

const ctaImage = PlaceHolderImages.find(img => img.id === 'hero');


export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-28 md:pt-36 pb-12 md:pb-20 bg-background animate-glide-up">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                What My Clients Say
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                Real stories of transformation and growth from leaders and professionals I've had the pleasure to work with.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="flex flex-col text-center bg-muted border-none shadow-lg">
                  <CardContent className="p-8 flex-grow">
                    {testimonial.long ? (
                      <ExpandableText text={testimonial.quote} />
                    ) : (
                      <blockquote className="italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                    )}
                  </CardContent>
                  <div className="p-6 pt-0">
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-secondary font-semibold">{testimonial.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-muted animate-glide-up [animation-delay:200ms]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <blockquote className="text-2xl md:text-3xl font-headline font-medium text-primary">
                      "Deliberately seek the company of people who influence you to think and act on building the life you desire."
                    </blockquote>
                    <p className="mt-4 text-lg text-secondary font-semibold italic">— Napoleon Hill</p>
                </div>
            </div>
        </section>

        <section id="cta" className="py-12 md:py-20 bg-primary text-primary-foreground animate-glide-up [animation-delay:300ms]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold italic">20 years coaching leaders from first-time managers to C-suite executives.</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                Let's <span className="font-bold text-secondary">unlock</span> what's holding you back. Most leadership problems aren't about strategy - <br /> they're about people. Let's fix the real issue.
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
