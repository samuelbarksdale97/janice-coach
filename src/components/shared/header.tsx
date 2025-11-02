"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { Logo } from "@/components/icons";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const CustomMenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="font-bold font-headline text-lg">Evolving Door</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
                {navItems.map((item) => (
                <Link 
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === item.href ? "text-primary" : "text-muted-foreground"
                    )}
                >
                    {item.label}
                </Link>
                ))}
            </nav>
            <Button asChild size="sm" className="rounded-full">
                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">Let's Talk</a>
            </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <button className="p-2">
                        <CustomMenuIcon className="h-6 w-6"/>
                        <span className="sr-only">Open menu</span>
                    </button>
                </SheetTrigger>
                <SheetContent side="right">
                    <SheetTitle>
                        <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
                    </SheetTitle>
                    <SheetDescription>
                      <VisuallyHidden>A list of links to navigate the site.</VisuallyHidden>
                    </SheetDescription>
                    <nav className="flex flex-col space-y-4 mt-8">
                        {navItems.map((item) => (
                           <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "text-lg font-medium",
                                pathname === item.href ? "text-primary" : "text-foreground"
                              )}
                            >
                              {item.label}
                            </Link>
                        ))}
                    </nav>
                    <Button asChild className="mt-6 w-full rounded-full">
                        <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Let's Talk</a>
                    </Button>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
