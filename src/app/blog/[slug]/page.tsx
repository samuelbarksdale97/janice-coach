
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const blogPosts = [
    {
      slug: 'finding-clarity-in-chaos',
      title: '5 Steps to Finding Clarity in the Midst of Chaos',
      category: 'Personal Growth',
      date: 'October 26, 2023',
      excerpt: 'Life can feel overwhelming. Learn five practical steps to cut through the noise, focus your mind, and find a clear path forward.',
      image: PlaceHolderImages.find(img => img.id === 'blog1'),
      content: `
        <p>In the relentless pace of modern life, it's easy to feel adrift in a sea of obligations, notifications, and decisions. This feeling of being overwhelmed, or what we might call 'chaos,' can cloud our judgment and sap our energy. But it is possible to find a lighthouse in the storm. Here are five practical steps to help you find clarity and regain control.</p>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4 text-primary">1. Practice Mindful Pausing</h3>
        <p>The first step to managing chaos is to stop adding to it. Throughout your day, take intentional, short breaks. This isn't about scrolling through social media, but about truly disconnecting. Close your eyes, take three deep breaths, and just be present for 60 seconds. This simple act can break the cycle of reactivity and give you a moment to reset.</p>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4 text-primary">2. The 'Brain Dump' Technique</h3>
        <p>When your mind is cluttered, it's like trying to work on a messy desk. A 'brain dump' is the process of externalizing all your thoughts. Take a piece of paper and write down everything that's on your mind—tasks, worries, ideas, frustrations. Don't organize it, just get it out. This frees up mental bandwidth and allows you to see what you're dealing with more objectively.</p>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4 text-primary">3. Identify Your 'One Thing'</h3>
        <p>From your brain dump list, ask yourself: "What is the one thing that, by doing it, will make everything else easier or unnecessary?" This question, popularized by Gary Keller, helps you prioritize. Instead of trying to tackle twenty things at once, focus your energy on the single most impactful task. This creates momentum and a sense of accomplishment.</p>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4 text-primary">4. Set Clear Boundaries</h3>
        <p>Chaos often stems from a lack of boundaries. This means learning to say 'no' to requests that don't align with your priorities, scheduling focused work time without interruptions, and protecting your personal time. A boundary is not a wall; it's a filter that allows you to direct your energy where it matters most.</p>
        <h3 class="font-headline text-2xl font-bold mt-8 mb-4 text-primary">5. Reconnect with Your 'Why'</h3>
        <p>Clarity isn't just about what you do; it's about why you do it. When you feel lost, reconnect with your core values and long-term goals. Are your daily actions aligned with the person you want to be and the life you want to live? This bigger-picture perspective can help you make sense of the daily chaos and make choices that lead you toward your desired future.</p>
        <p class="mt-6">By integrating these five steps into your life, you can begin to navigate the chaos not as a victim, but as a calm, focused captain of your own ship.</p>
        `
    },
    {
      slug: 'mastering-the-career-pivot',
      title: 'Mastering the Career Pivot: A Guide for Aspiring Changers',
      category: 'Career',
      date: 'October 15, 2023',
      excerpt: 'Thinking about a career change? This guide breaks down the process into manageable steps, from self-assessment to landing your new role.',
      image: PlaceHolderImages.find(img => img.id === 'blog2'),
      content: '<p>Content coming soon!</p>'
    },
    {
      slug: 'the-power-of-mindful-mornings',
      title: 'The Power of Mindful Mornings: Transform Your Day',
      category: 'Wellness',
      date: 'September 30, 2023',
      excerpt: 'How you start your day sets the tone for everything that follows. Discover a simple morning routine to boost productivity and well-being.',
      image: PlaceHolderImages.find(img => img.id === 'blog3'),
      content: '<p>Content coming soon!</p>'
    }
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="flex-1">
                <article className="container mx-auto px-4 py-8 md:py-12">
                    <div className="max-w-3xl mx-auto">
                        <header className="mb-8 text-center">
                            <p className="text-secondary font-semibold text-sm mb-2">{post.category.toUpperCase()}</p>
                            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{post.title}</h1>
                            <p className="text-muted-foreground mt-4 text-sm">{post.date}</p>
                        </header>

                        {post.image && (
                            <div className="relative aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
                                <Image
                                    src={post.image.imageUrl}
                                    alt={post.image.description}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 896px"
                                    priority
                                    data-ai-hint={post.image.imageHint}
                                />
                            </div>
                        )}
                        
                        <div 
                            className="prose dark:prose-invert lg:prose-xl max-w-none text-muted-foreground"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}

// Helper to generate static pages for each blog post
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
      slug: post.slug,
    }));
}
