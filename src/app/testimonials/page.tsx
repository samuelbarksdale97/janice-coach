
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Quote } from "lucide-react";
import { ExpandableText } from "@/components/shared/expandable-text";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials',
};

const testimonials = [
    {
        quote: `Working with Mrs. Janice Brown-Taylor has been one of the greatest privileges of my career at Pension Benefit Guaranty Corporation ("PBGC"), a federal government agency. From her years as a senior executive at PBGC to her rise as Deputy Chief in the Office of Benefit Administration, she has always embodied exceptional leadership, integrity, and strategic vision.

She took me under her wing at a pivotal point in my development. While I was completing a leadership program at Graduate School USA, she personally sought a detail assignment for me at the Federal Trade Commission. That opportunity shaped the trajectory of my career and positioned me to contribute meaningfully as part of the management team at the agency.

Throughout the years, she has been my go-to advisor - someone I trust to help me navigate complex decisions, strengthen my leadership skills, and grow with confidence. Her guidance is grounded in authenticity, empathy, and a deep understanding of organizational dynamics.

I credit much of my growth as a leader to Janice’s coaching, encouragement, and unwavering commitment to helping others reach their full potential. Any professional who has the opportunity to work with her as a coach will gain not only a thought partner, but a genuine champion for their success.`,
        name: "~ Nega Teshome",
        title: "MSF, CPA",
        long: true,
    },
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
        quote: `I have been coached by Janice Brown-Taylor for more than ten years, and her guidance has had a profound and lasting impact on both my professional growth and my personal well-being. Throughout this time, she has consistently helped me gain clarity during pivotal moments, sharpen my thinking, and make decisions that have genuinely shaped the direction of my career.

Her coaching played a key role in helping me earn multiple promotions and step confidently into larger leadership roles. She supported me in strengthening my communication, developing a more strategic mindset, and building the presence needed to succeed in high-visibility situations. Many of the breakthroughs I’ve experienced leading to moments that expanded my confidence and helped me see my true capabilities were the direct result of our conversations.

What sets Janice apart is her ability to understand challenges on both a professional and personal level. She listens deeply, asks thoughtful and perceptive questions, and helps me see patterns, options, and solutions that I often could not identify on my own. Her guidance has helped me navigate difficult decisions, challenging workplace dynamics, and periods of uncertainty with far greater clarity and confidence.

Janice’s influence reaches beyond my career. Through her coaching, I’ve learned how to manage stress more intentionally, establish healthier boundaries, and cultivate habits that support a more balanced, sustainable life. These shifts have had a lasting impact and continue to shape how I approach each day.

What I appreciate most is the combination of insight, honesty, and genuine care she brings to every conversation. She challenges me when I need it, supports me when it matters, and consistently helps me grow in ways that are both meaningful and practical. I strongly recommend her to anyone seeking a coach who can create real, measurable progress. Her ability to support both personal and professional transformation is exceptional, and the impact of her coaching stays with you long after each session ends.`,
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
        <section className="pt-28 md:pt-36 pb-12 md:pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary animate-glide-up md:animate-none">
                What My Clients Say
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground animate-glide-up md:animate-none" style={{ animationDelay: '100ms' }}>
                Real stories of transformation and growth from leaders and professionals I've had the pleasure to work with.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className="flex flex-col text-center bg-muted border-none shadow-lg md:animate-glide-up" style={{ animationDelay: `${150 * (index + 1)}ms` }}>
                  <CardContent className="p-8 flex-grow">
                    <Quote className="h-8 w-8 text-secondary/50 mx-auto mb-4" />
                    {testimonial.long ? (
                      <ExpandableText text={testimonial.quote} />
                    ) : (
                      <blockquote className="italic text-muted-foreground text-center">"{testimonial.quote}"</blockquote>
                    )}
                  </CardContent>
                  <div className="p-6 pt-0">
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    {testimonial.title && <p className="text-sm text-secondary font-semibold">{testimonial.title}</p>}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-muted md:animate-glide-up [animation-delay:200ms]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <blockquote className="text-2xl md:text-3xl font-headline font-medium text-primary">
                      "Deliberately seek the company of people who influence you to think and act on building the life you desire."
                    </blockquote>
                    <p className="mt-4 text-lg text-secondary font-semibold italic">~ Napoleon Hill</p>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
