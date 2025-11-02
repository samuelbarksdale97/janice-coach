
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <section className="py-12 md:py-20 bg-background">
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
            </main>
            <Footer />
        </>
    );
}
