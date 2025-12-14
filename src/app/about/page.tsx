
import Image from "next/image";
import { CheckCircle2, Award, Eye, Rocket, HandHeart, Sparkles, UserRound, ShieldCheck, Star, Zap, Brain, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const aboutImage = PlaceHolderImages.find(img => img.id === 'about');
const paulImage = PlaceHolderImages.find(img => img.id === 'paul');
const jeylaImage = PlaceHolderImages.find(img => img.id === 'jeyla');

const credentials = [
    "Former Senior Level Executive in Federal Government, Deputy Chief of Benefits Administration, Pension Benefit Guaranty Corporation",
    "BOA Institute for Women’s Entrepreneurship, eCornell University",
    "Associate Certified Coach (ACC), International Coaching Federation",
    "Executive Leadership Coach for Organizational Well-Being (Level 2), George Mason University",
    "Positive Leadership Program, University of Michigan, Ross School of Business",
    "Project Management Professional (PMP), Project Management Institute"
];

const teamMembers = [
    {
        name: "Janice Brown-Taylor",
        title: "Founder & Leadership Coach",
        image: aboutImage,
        bio: [
            "Hello! I'm Janice Brown-Taylor, a certified leadership coach with a passion for helping individuals navigate the complexities of life with confidence and clarity. With over two decades of experience in professional development and corporate leadership, I blend mindful leadership, emotional intelligence, and well-being strategies with coaching techniques with real-world experience.",
            "I began my coaching career 25 years ago, marking a pivotal moment in my personal and professional life. That experience taught me the immense value of having someone by your side while navigating change and overcoming challenges. My goal today is to be that person for you - listening to what matters to you, encouraging growth, and celebrating every step forward. The time we spend together gaining clarity, building confidence, and strengthening resilience will yield lasting benefits.",
            "On a personal note, I married my high school sweetheart, and I am the proud mother of soon to be three Maryland college graduates and my tuxedo cat, Angus. My well-being activities include meditation, water aerobics, walking and traveling."
        ],
        details: [
            {
                title: "More About Me",
                sections: [
                    {
                        subheading: "My Background",
                        paragraphs: [
                            "As a strategic executive with over two decades of federal sector leadership, specializing in large-scale benefits administration and IT program management. I served as Deputy Chief of Benefits Administration at the Pension Benefit Guaranty Corporation, overseeing a $126M program that delivered $6 billion in annual pension payments to 1.4 million retirees across 5,000+ plans. My career achievements include eliminating case processing backlogs, directing an $80M+ IT modernization, and contributing to PBGC's #1 ranking in Best Places to Work among small federal agencies for consecutive years.",
                            "I previously led enterprise IT operations as Customer Success Program Manager at the Federal Trade Commission, managing a $22M budget and directing initiatives that earned the Chairman's Award for Distinguished Service.",
                            "I hold a master’s Certificate in Project Management from George Washington University and a Bachelor of Science in Mathematics from Alcorn State University. I’m a certified Project Management Professional (PMP) and Associate Certified Coach (ACC), with expertise spanning strategic planning, regulatory compliance, and leadership development."
                        ]
                    },
                    {
                        subheading: "My Approach",
                        paragraphs: [
                            "I blend mindful leadership, emotional intelligence, and well-being strategies to develop resilient, high-performing leaders and teams. My coaching is practical and tailored—addressing your unique challenges while building sustainable solutions for organizational realignment, strategic problem-solving, and effective communication.",
                            "My coaching expertise spans generations and settings. Whether guiding executives through organizational change or mentoring five young scouts to achieve Eagle rank, I apply the same proven approach: developing resilient leaders who create positive impact. My work with Delta Sigma Theta Sorority, Inc. and as a master-level Scout leader reinforces my belief that leadership development is about service, character, and empowering others to reach their highest potential."
                        ]
                    },
                    {
                        subheading: "What I Offer",
                        paragraphs: [
                            "Whether you're refining your leadership style, strengthening team collaboration, or navigating significant transition, my coaching brings clarity, direction, and measurable outcomes. As a certified International Coaching Federation (ICF) member, I offer flexible coaching options designed to fit your schedule and needs."
                        ]
                    },
                    {
                        subheading: "The Result",
                        paragraphs: [
                            "Working with me means more than professional development—it's a transformative partnership toward finding your purpose and becoming the leader you aspire to be."
                        ]
                    }
                ]
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
];

const values = [
    {
        icon: <UserRound className="h-6 w-6 text-secondary" />,
        title: "Personal Development",
        description: "A commitment to continuous learning and self-improvement."
    },
    {
        icon: <HandHeart className="h-6 w-6 text-secondary" />,
        title: "Empathy",
        description: "Understanding and responding to the feelings and perspectives of others."
    },
    {
        icon: <Award className="h-6 w-6 text-secondary" />,
        title: "Service",
        description: "A focus on helping others and contributing to a greater good."
    },
    {
        icon: <Sparkles className="h-6 w-6 text-secondary" />,
        title: "Authenticity",
        description: "Being genuine and transparent in one’s communication and actions."
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-secondary" />,
        title: "Resilience",
        description: "Recovering from setbacks and learning from mistakes."
    }
];

const clientOutcomes = [
    "Enhanced leadership effectiveness and confidence",
    "Improved well-being and sustainable performance practices",
    "Stronger stakeholder and team relationships",
    "Measurable improvements in team performance and engagement",
    "Alignment between values, purpose, and professional practice",
];

const whyWorkWithUs = [
    { title: "Real Executive Experience", description: "Senior federal executive background" },
    { title: "Proven Methodology", description: "Evidence-based coaching in organizational well-being" },
    { title: "Results-Oriented", description: "Focus on actionable outcomes and measurable progress" },
    { title: "Holistic Approach", description: "Integration of strategic thinking with human-centered leadership" },
];

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
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-secondary font-headline mb-2">
                                    {member.name}
                                </h2>
                                <h3 className="text-xl font-semibold text-primary mb-6">{member.title}</h3>
                                
                                {member.image && (
                                    <div className="relative float-left w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] mr-6 mb-4 shape-outside-rectangle">
                                        <Image
                                            src={member.image.imageUrl}
                                            alt={member.image.description}
                                            fill
                                            className={cn("rounded-lg object-cover shadow-2xl", member.name === 'Paul' ? 'object-[center_20%]' : member.name === 'Jeyla Brown' ? 'object-top' : 'object-top')}
                                            sizes="(max-width: 640px) 250px, 300px"
                                            data-ai-hint={member.image.imageHint}
                                            priority={index === 0}
                                        />
                                    </div>
                                )}
                                
                                <div className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed space-y-4 text-justify">
                                    {member.bio.map((paragraph, pIndex) => (
                                         <p key={pIndex}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="clear-both">
                                {member.details.map((detail, dIndex) => (
                                    <div key={dIndex} className="mt-12 md:mt-16">
                                        {detail.title === "Certifications and Credentials" ? (
                                             <div className="text-center max-w-3xl mx-auto">
                                                <h3 className="text-3xl font-headline text-primary font-bold">{detail.title}</h3>
                                                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left">
                                                    {detail.list && detail.list.map((credential, cIndex) => (
                                                        <li key={cIndex} className="flex items-start">
                                                            <Award className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                                                            <span className="text-muted-foreground">{credential}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : detail.title === "More About Me" ? (
                                            <div className="max-w-4xl mx-auto">
                                                <h3 className="text-3xl font-headline text-primary font-bold text-center mb-8">{detail.title}</h3>
                                                {detail.sections?.map(section => (
                                                    <div key={section.subheading} className="mb-8">
                                                        <h4 className="text-2xl font-bold text-secondary mb-4 text-center">{section.subheading}</h4>
                                                        {section.paragraphs.map((p, i) => (
                                                            <p key={i} className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mb-4 text-justify">{p}</p>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <Card className="bg-transparent border-none shadow-none">
                                                <CardContent className="p-0">
                                                    <div className="text-center max-w-3xl mx-auto">
                                                        <h3 className="text-3xl md:text-4xl font-headline text-primary font-bold">{detail.title}</h3>
                                                        {detail.content && (
                                                            <p className="mt-4 text-muted-foreground leading-relaxed max-w-prose mx-auto md:text-lg">
                                                                {detail.content}
                                                            </p>
                                                        )}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )
                                        }
                                    </div>
                                ))}
                            </div>
                            {index < teamMembers.length - 1 && <Separator className="my-12 md:my-20" />}
                        </section>
                    ))}
                </div>

                <section className="w-full py-12 md:py-16 lg:py-20 bg-background animate-glide-up [animation-delay:350ms]">
                    <div className="container px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                            <Card className="text-center shadow-lg border-primary/20">
                                <CardHeader className="items-center">
                                    <Rocket className="h-10 w-10 text-secondary mb-2" />
                                    <CardTitle className="text-2xl font-headline text-primary">Our Mission</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">"We partner with clients to transform life's obstacles into opportunities for growth, self-discovery, and lasting resilience."</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center shadow-lg border-primary/20">
                                <CardHeader className="items-center">
                                    <Eye className="h-10 w-10 text-secondary mb-2" />
                                    <CardTitle className="text-2xl font-headline text-primary">Our Vision</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">"We envision communities where personal transformation is celebrated - where people continually evolve, break through barriers, and live with intentional purpose."</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>


                <section className="w-full py-12 md:py-16 lg:py-20 bg-muted animate-glide-up [animation-delay:400ms] mt-20">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-headline font-bold text-primary">Our <span className="italic text-secondary">Values</span></h2>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <ul className="space-y-6">
                                {values.map((value) => (
                                    <li key={value.title} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 pt-1">
                                            {value.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-headline text-xl text-primary font-semibold">{value.title}</h4>
                                            <p className="text-muted-foreground">{value.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                
                <section className="w-full py-12 md:py-16 lg:py-20 bg-background animate-glide-up [animation-delay:450ms]">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-headline font-bold text-primary mb-6 text-center">Why Work With Us?</h2>
                            <ul className="space-y-6">
                                {whyWorkWithUs.map(reason => (
                                    <li key={reason.title}>
                                        <h4 className="font-bold text-secondary text-lg">{reason.title}</h4>
                                        <p className="text-muted-foreground">{reason.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <Separator className="my-12 md:my-16" />

                        <div className="max-w-3xl mx-auto">
                             <h2 className="text-3xl font-headline font-bold text-primary mb-6 text-center">Client Outcomes</h2>
                             <ul className="space-y-4">
                                {clientOutcomes.map(outcome => (
                                    <li key={outcome} className="flex items-start">
                                        <Star className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-muted-foreground">{outcome}</span>
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
