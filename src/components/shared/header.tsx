"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from '@/lib/utils';
import { Logo } from "@/components/icons";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

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
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="3" y1="15" x2="21" y2="15"></line>
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
            <Button asChild className="rounded-full" size="lg">
                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">Let's Talk</a>
            </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button className="p-2">
                  <CustomMenuIcon className="h-6 w-6"/>
                  <span className="sr-only">Open menu</span>
              </button>
            </DialogTrigger>
            <DialogContent className="mobile-menu-overlay p-0">
               <DialogTitle>
                  <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
                </DialogTitle>
                <DialogDescription>
                  <VisuallyHidden>A list of links to navigate the site.</VisuallyHidden>
                </DialogDescription>
                
                <div className="flex justify-between items-center p-4">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="sr-only">Evolving Door Home</span>
                  </Link>
                  <DialogClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </DialogClose>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-1">
                  <nav className="flex flex-col items-center space-y-8">
                      {navItems.map((item) => (
                         <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "text-4xl font-headline transition-colors hover:text-primary",
                              pathname === item.href ? "text-primary" : "text-foreground"
                            )}
                          >
                            {item.label}
                          </Link>
                      ))}
                  </nav>
                </div>

                <div className="p-4 pb-8">
                  <Button asChild className="w-full rounded-full" size="lg">
                      <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Let's Talk</a>
                  </Button>
                </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
