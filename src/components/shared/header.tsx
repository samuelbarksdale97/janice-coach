"use client";

import React from 'react';
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Logo } from "@/components/icons";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';


const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close sheet on navigation
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Evolving Door</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                onClick={(e) => handleScroll(e, item.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                  {item.label}
              </a>
            ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <SheetTitle>
                        <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
                    </SheetTitle>
                    <nav className="flex flex-col space-y-4 mt-8">
                        {navItems.map((item) => (
                           <a
                              key={item.href}
                              href={item.href}
                              onClick={(e) => handleScroll(e, item.href)}
                              className="text-lg font-medium"
                            >
                              {item.label}
                            </a>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
