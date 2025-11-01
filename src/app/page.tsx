'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";

// Hero Data
const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

export default function Home(props:any) {
  // Prevent Next.js from complaining about enumerating params
  if (props.params) {
    const keys = Object.keys(props.params);
    if (keys.length > 0) {
      return null;
    }
  }
  
  return (
    <>
      <Header />
      
      <div className="flex flex-col min-h-dvh">
        <main className="flex-1">
          <section id="home" className="relative w-full h-[80vh] flex items-center justify-center text-center text-white">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 p-4 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-shadow-lg">
                Open the Door to Your Future
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-shadow">
                Professional life coaching to help you navigate change, discover your potential, and create the life you've always wanted.
              </p>
              <Button asChild size="lg" className="mt-8 font-bold">
                <Link href="/contact">
                  Begin Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
