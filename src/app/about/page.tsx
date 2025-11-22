
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

const values = [
    { name: "Personal Development", description: "A commitment to continuous learning and self-improvement." },
    { name: "Empathy", description: "Understanding and responding to the feelings and perspectives of others." },
    { name: "Service", description: "A focus on helping others and contributing to a greater good." },
    { name: "Authenticity", description: "Being genuine and transparent in one's communication and actions." },
    { name: "Resilience", description: "Recovering from setbacks and learning from mistakes." }
];

const credentials = [
    "Former Senior Level Executive in Federal Government",
    "Deputy Chief of Benefits Administration, Pension Benefit Guaranty Corporation",
    "BOA Institute for Women’s Entrepreneurship, eCornell University",
    "Associate Certified Coach (ACC), International Coaching Federation",
    "Executive Leadership Coach for Organizational Well-Being (Level 2), George Mason University",
    "Positive Leadership Program, University of Michigan, Ross School of Business",
    "Project Management Professional (PMP), Project Management Institute"
];

const decisionInfluences = [
    "I engage in ongoing learning and development.",
    "I am sensitive to my client's identity, environment, experiences, values and beliefs.",
    "I partner with the client to establish an overall coaching plan and goals.",
    "I seek to understand my client's identity, environment, experiences, values and beliefs. I show support, empathy and concern for the client.",
    "I demonstrate openness and transparency to display vulnerability and build trust with the client.",
    "I am fully conscious and present with the client, employing a style that is open, flexible, grounded and confident.",
    "I partner with the client to transform learning and insight into action, and I promote client autonomy in the coaching process."
];

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <section className="w-full pt-28 md:pt-36 pb-12 md:pb-16 lg:pb-20 bg-background">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                            <div className="space-y-4 animate-glide-up text-center lg:text-left">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary font-headline">
                                    Meet Your Coach
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                                    Hello! I'm Janice Brown-Taylor, a certified leadership coach with a passion for helping individuals navigate the complexities of life with confidence and clarity. With over two decades of experience in professional development and corporate leadership, I blend mindful leadership, emotional intelligence, and well-being strategies with coaching techniques with real-world experience.
                                </p>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                                    I began my coaching career 25 years ago, marking a pivotal moment in my professional life. That experience taught me the immense value of having someone by your side while navigating change and overcoming challenges. My goal today is to be that person for you - listening to what matters to you, encouraging growth, and celebrating every step forward. The time we spend together gaining clarity, building confidence, and strengthening resilience will yield lasting benefits.
                                </p>
                            </div>
                             <div className="flex justify-center animate-glide-up">
                                {aboutImage && (
                                    <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]">
                                        <Image
                                            src={aboutImage.imageUrl}
                                            alt={aboutImage.description}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                                            data-ai-hint={aboutImage.imageHint}
                                            priority
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-16 lg:py-20 bg-muted relative z-10 animate-glide-up">
                    <div className="container px-4 md:px-6">
                        <Card className="bg-background border-none shadow-none">
                            <CardContent className="p-0">
                                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                    <div className="text-center md:text-left">
                                        <h3 className="text-2xl md:text-3xl font-headline text-primary font-bold pl-4">My Coaching Philosophy</h3>
                                        <p className="mt-4 text-muted-foreground leading-relaxed pl-4">
                                            I believe coaching is a collaborative partnership built on trust and authenticity. My approach is not to give you the answers, but to empower you to find your own. Together, we'll uncover your strengths, clarify your values, and design an actionable roadmap to achieve your goals.
                                        </p>
                                    </div>
                                    <div className="pl-4 text-center md:text-left">
                                        <h4 className="text-xl font-bold text-primary mb-4">Core Principles:</h4>
                                        <ul className="space-y-3 inline-block text-left">
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

                <section className="w-full py-12 md:py-16 lg:py-20 bg-background animate-glide-up">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-12 md:grid-cols-2">
                            <div className="text-center">
                                <h2 className="text-3xl font-headline font-bold text-primary mb-4 text-center">Mission & Vision</h2>
                                <div className="space-y-6 text-muted-foreground">
                                    <div>
                                        <h3 className="text-xl font-bold text-secondary mb-2">Mission</h3>
                                        <p>"We partner with clients to transform life's obstacles into opportunities for growth, self-discovery, and lasting resilience."</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-secondary mb-2">Vision</h3>
                                        <p>"We envision communities where personal transformation is celebrated - where people continually evolve, break through barriers, and live with intentional purpose."</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h2 className="text-3xl font-headline font-bold text-primary mb-4 text-center">As a leadership coach,<br />I value:</h2>
                                <ul className="space-y-4 inline-block">
                                    {values.map((value) => (
                                        <li key={value.name}>
                                            <p className="font-bold text-lg text-primary">{value.name}</p>
                                            <p className="text-muted-foreground">{value.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-16 lg:py-20 bg-muted animate-glide-up">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-headline font-bold text-primary mb-6 text-center">As a leadership coach my values influence my decisions.</h2>
                            <ul className="space-y-4">
                                {decisionInfluences.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle2 className="h-6 w-6 text-secondary mr-4 mt-1 flex-shrink-0" />
                                        <span className="text-muted-foreground text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 lg:hidden animate-glide-up">
                  <div className="flex justify-center">
                    <div className="w-full max-w-lg h-64">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/TYL-FinalLogo_OG.png?alt=media&token=3242b4c3-48cb-4a5d-8c9d-53a1736468a3"
                        alt="Taylor Leadership Coaching Logo"
                        width={1200}
                        height={300}
                        className="w-auto h-full object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>

                <section className="w-full bg-muted pt-8 pb-12 animate-glide-up">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-headline font-bold text-primary text-center mb-8">More About Me</h2>
                        <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground text-center">
                            <p>As a certified leadership coach specializing in organizational well-being, I bring a unique blend of executive experience and coaching mastery to my practice. My Level 2 coaching certificate in Leadership Coaching for Organizational Well-Being from George Mason University, combined with my certificate in Positive Leadership from Michigan’s Ross School of Business, positions me to guide leaders through transformational change that prioritizes both results and human flourishing.</p>
                            <p>With over 30 years of professional experience, I specialize in empowering leaders and teams to unlock their full potential. My coaching approach blends mindful leadership, emotional intelligence, and well-being strategies to create resilient and high-performing individuals and organizations.</p>
                            <p>I am highly skilled at guiding professionals through transformative changes, leveraging my extensive background in organizational realignment, strategic problem-solving, and effective communication. My leadership coaching sessions are tailored to address unique challenges, helping clients navigate complex dynamics and build impactful solutions. Whether you're seeking to enhance your leadership style, foster team collaboration, or achieve personal growth, my coaching brings clarity, direction, and measurable results.</p>
                            <p>As a certified member of the International Coaching Federation (ICF), I offer flexible coaching options, ensuring accessibility and convenience for clients with diverse needs. My commitment to fostering meaningful connections and actionable outcomes sets me apart in the field. With me as your leadership coach, you’re not just investing in your professional development, you’re embracing a transformative journey toward becoming the leader you aspire to be.</p>
                        </div>

                        <div className="max-w-4xl mx-auto mt-12 text-center">
                            <h3 className="text-2xl font-headline font-bold text-primary text-center mb-6">Certifications and Credentials</h3>
                            <ul className="space-y-3 text-center">
                                {credentials.map((cred, index) => (
                                    <li key={index} className="text-muted-foreground">{cred}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="py-8 md:py-12 bg-background animate-glide-up">
                    <div className="container mx-auto px-4">
                      <div className="max-w-3xl mx-auto text-center">
                        <blockquote className="text-2xl md:text-3xl font-headline font-medium text-primary">
                          "To lead people, walk beside them."
                        </blockquote>
                        <p className="mt-4 text-lg text-secondary font-semibold italic">— Lao Tzu</p>
                      </div>
                    </div>
                  </section>
            </main>
            <Footer />
        </>
    );
}
