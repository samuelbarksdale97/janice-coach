
import Image from "next/image";
import { CheckCircle2, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const aboutImage = PlaceHolderImages.find(img => img.id === 'about');
const paulImage = PlaceHolderImages.find(img => img.id === 'paul');
const jeylaImage = PlaceHolderImages.find(img => img.id === 'jeyla');

const philosophyPoints = [
    'Empowerment through self-awareness',
    'Action-oriented goal setting',
    'Holistic approach to well-being',
    'Creating sustainable change'
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

const teamMembers = [
    {
        name: "Janice Brown-Taylor",
        title: "Founder & Leadership Coach",
        image: aboutImage,
        bio: [
            "Hello! I'm Janice Brown-Taylor, a certified leadership coach with a passion for helping individuals navigate the complexities of life with confidence and clarity. With over two decades of experience in professional development and corporate leadership, I blend mindful leadership, emotional intelligence, and well-being strategies with coaching techniques with real-world experience.",
            "I began my coaching career 25 years ago, marking a pivotal moment in my professional life. That experience taught me the immense value of having someone by your side while navigating change and overcoming challenges. My goal today is to be that person for you - listening to what matters to you, encouraging growth, and celebrating every step forward. The time we spend together gaining clarity, building confidence, and strengthening resilience will yield lasting benefits.",
        ],
        details: [
            {
                title: "My Coaching Philosophy",
                content: "I believe coaching is a collaborative partnership built on trust and authenticity. My approach is not to give you the answers, but to empower you to find your own. Together, we'll uncover your strengths, clarify your values, and design an actionable roadmap to achieve your goals.",
                list: philosophyPoints,
                listTitle: "Core Principles:"
            },
            {
                title: "Certifications and Credentials",
                list: credentials
            }
        ]
    },
    {
        name: "Paul",
        title: "Mentor & Coach",
        image: paulImage,
        bio: [
            "Paul is a civil and environmental engineer driven by a passion for sustainability and a deep commitment to developing the next generation of leaders and problem-solvers. He graduated from the University of Maryland, College Park in 2022 with a bachelor's degree in civil engineering, where his interest in innovative and sustainable design took root.",
            "At the heart of Paul's professional identity is his role as a mentor and coach. For the past eight years, he has dedicated himself to guiding high school students from around the world, helping them develop critical leadership skills and cultivate innovative solutions to pressing global challenges. Through this mentorship work, Paul has honed his ability to inspire young minds, foster collaborative problem-solving, and empower the next generation to become environmental stewards. His coaching philosophy centers on building confidence, encouraging creative thinking, and developing the skills needed to address complex environmental issues.",
            "Paul applies this same mentorship mindset to his current role as a water resource engineer, where he designs water and sewer systems that improve quality of life for communities across the United States. His work—from designing floodwalls to mitigate coastal flooding risks to developing sustainable solutions in land development projects—demonstrates his commitment to both engineering innovation and knowledge transfer. Paul views each project as an opportunity to model best practices in environmental stewardship and to guide communities in adapting to the challenges posed by climate change and severe weather events.",
            "Whether he's coaching students, collaborating with colleagues, or engaging with communities, Paul brings the same enthusiasm for teamwork and shared growth that he finds in sports, both as a player and a fan."
        ],
        details: []
    },
    {
        name: "Jeyla Brown",
        title: "Mentor & Coach",
        image: jeylaImage,
        bio: [
            "Jeyla Brown is a dedicated mentor and coach with over six years of experience empowering high school students to achieve academic excellence and reach their college and career goals. She graduated from the University of Maryland, College Park in 2021 with a bachelor's degree in economics, where she specialized in sales, marketing, and data analytics. As a proud Banneker-Key Scholar (2021) and alumna of the Ron Brown Scholar Program, Jeyla brings both personal experience and proven strategies to her mentorship work.",
            "At the core of Jeyla's practice is her commitment to individualized student success. As a math teacher and SAT/ACT exam prep tutor, she creates personalized coaching strategies that help each student unlock their full potential. Her approach is particularly informed by her extensive experience supporting students with disabilities and diverse learning needs, ensuring that every student receives empathetic, tailored guidance that builds both competence and confidence.",
            "Jeyla's mentorship extends beyond the classroom to comprehensive college readiness coaching. She guides students through every phase of the college journey—from test preparation and application strategy to scholarship navigation and the transition to college life. Her coaching in professional development helps students and young professionals build strong personal brands through resume writing, social media optimization, and strategic networking.",
            "Drawing on her background in data analytics and digital marketing, Jeyla brings a research-driven approach to her coaching practice. She uses measurable insights to track student progress, celebrate growth, and continuously refine her strategies for optimal outcomes. Whether helping a student improve their math skills, achieve their target SAT score, craft a compelling college essay, or prepare for their professional future, Jeyla's coaching creates long-term success through personalized support, strategic guidance, and genuine investment in each student's journey."
        ],
        details: []
    }
]


export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <section className="w-full pt-28 md:pt-40 pb-12 md:pb-16 lg:pb-20 bg-background animate-glide-up">
                    <div className="container px-4 md:px-6 text-center">
                         <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary font-headline">
                            Meet the Mentor, Coaches, and Leadership Consultants
                        </h1>
                    </div>
                </section>

                <div className="container px-4 md:px-6 space-y-20">
                    {teamMembers.map((member, index) => (
                        <section key={member.name} className="w-full animate-glide-up" style={{animationDelay: `${200 * (index + 1)}ms`}}>
                             <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                                <div className={`space-y-4 text-center lg:text-left ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                     <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-secondary font-headline">
                                        {member.name}
                                    </h2>
                                    <h3 className="text-xl font-semibold text-primary">{member.title}</h3>
                                    {member.bio.map((paragraph, pIndex) => (
                                         <p key={pIndex} className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mx-auto lg:mx-0">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                 <div className={`flex justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                    {member.image && (
                                        <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]">
                                            <Image
                                                src={member.image.imageUrl}
                                                alt={member.image.description}
                                                fill
                                                className={cn("object-cover", member.name === 'Paul' ? 'object-[center_20%]' : 'object-top')}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                                                data-ai-hint={member.image.imageHint}
                                                priority={index === 0}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {member.details.map((detail, dIndex) => (
                                <div key={dIndex} className="mt-12 md:mt-16">
                                    {detail.title === "Certifications and Credentials" ? (
                                        <div className="text-center">
                                            <h3 className="text-3xl font-headline text-primary font-bold">{detail.title}</h3>
                                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                                                {detail.list && detail.list.map((credential, cIndex) => (
                                                    <Card key={cIndex} className={cn(
                                                        "bg-muted border-primary/20 shadow-lg text-center flex flex-col items-center justify-center p-6",
                                                        (cIndex === detail.list.length - 1 && detail.list.length % 3 === 1) ? 'lg:col-start-2' : ''
                                                    )}>
                                                        <Award className="h-10 w-10 text-secondary mb-4" />
                                                        <p className="font-semibold text-primary leading-snug">{credential}</p>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                         <Card className="bg-muted border-none shadow-none">
                                            <CardContent className="p-8 md:p-12">
                                                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                                    <div className="text-center">
                                                        <h3 className="text-2xl md:text-3xl font-headline text-primary font-bold">{detail.title}</h3>
                                                        {detail.content && (
                                                            <p className="mt-4 text-muted-foreground leading-relaxed max-w-prose mx-auto">
                                                                {detail.content}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div className="pl-4 text-center md:text-left">
                                                        {detail.listTitle && <h4 className="text-xl font-bold text-primary mb-4">{detail.listTitle}</h4>}
                                                        <ul className="space-y-3 inline-block text-left">
                                                            {detail.list && detail.list.map((point, pIndex) => (
                                                                <li key={pIndex} className="flex items-start">
                                                                    <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                                                                    <span className="text-muted-foreground">{point}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>
                            ))}
                            {index < teamMembers.length - 1 && <Separator className="my-12 md:my-20" />}
                        </section>
                    ))}
                </div>


                <section className="w-full py-12 md:py-16 lg:py-20 bg-muted animate-glide-up [animation-delay:400ms] mt-20">
                    <div className="container px-4 md:px_6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-headline font-bold text-primary mb-6 text-center">As leadership coaches our <span className="text-secondary">values</span> influence our decisions.</h2>
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

                <section className="py-12 md:py-20 bg-background animate-glide-up [animation-delay:500ms]">
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
