
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const aboutImage = PlaceHolderImages.find(img => img.id === 'about');
const philosophyPoints = [
    'Empowerment through self-awareness',
    'Action-oriented goal setting',
    'Holistic approach to well-being',
    'Creating sustainable change'
];

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary font-headline">
                                    Meet Your Coach
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Hello! I'm Jane Doe, a certified life coach with a passion for helping individuals navigate the complexities of life with confidence and clarity. With over a decade of experience in personal development and corporate leadership, I blend proven coaching techniques with real-world wisdom.
                                </p>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    My journey into coaching began after my own transformative experience with a coach during a pivotal career change. It was then I realized the profound impact of having a dedicated guide and supporter. My mission is to be that person for you—to listen, to challenge, and to celebrate your growth every step of the way.
                                </p>
                            </div>
                             <div className="flex justify-center">
                                {aboutImage && (
                                    <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
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
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <Card className="bg-background border-none shadow-none">
                            <CardContent className="p-0">
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
                </section>
            </main>
            <Footer />
        </>
    );
}
