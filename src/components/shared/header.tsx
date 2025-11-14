
"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const desktopNavItems = navItems.filter(item => !["/blog"].includes(item.href));


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

  const isHomePage = pathname === '/';

  return (
    <header className={cn("absolute top-0 z-50 w-full", isHomePage ? "" : "bg-white/80 backdrop-blur-sm shadow-sm")}>
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
            
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
                {desktopNavItems.map((item) => (
                <Link 
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "text-sm font-medium transition-colors",
                        isHomePage 
                          ? (pathname === item.href ? "text-secondary" : "text-white hover:text-secondary")
                          : (pathname === item.href ? "text-secondary" : "text-primary hover:text-secondary")
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
              <button className={cn("p-2", isHomePage ? "text-white" : "text-primary")}>
                  <CustomMenuIcon className="h-6 w-6"/>
                  <span className="sr-only">Open menu</span>
              </button>
            </DialogTrigger>
            <DialogContent className="mobile-menu-overlay p-0">
                <div className="flex h-24 items-center justify-end px-4 border-b">
                  <DialogClose asChild>
                    <button className="p-2">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </button>
                  </DialogClose>
                </div>
                
                <div className="flex flex-1 flex-col items-center justify-center">
                   <VisuallyHidden>
                    <DialogTitle>Mobile Navigation Menu</DialogTitle>
                    <DialogDescription>A list of links to navigate the site.</DialogDescription>
                  </VisuallyHidden>
                  <nav className="flex flex-col items-center space-y-8">
                      {navItems.map((item) => (
                         <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "text-4xl font-headline transition-colors hover:text-secondary",
                              pathname === item.href ? "text-secondary" : "text-primary"
                            )}
                          >
                            {item.label}
                          </Link>
                      ))}
                  </nav>
                </div>

                <div className="p-4 pb-8 border-t">
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
