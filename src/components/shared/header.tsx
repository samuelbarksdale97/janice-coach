
"use client";

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
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

const desktopNavItems = navItems.filter(item => !["/", "/blog"].includes(item.href));


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

  const mobileNavItems = navItems.filter(item => item.href !== "/blog");

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
            <Image 
                src="https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/TYL-FinalLogo_OG.png?alt=media&token=34929a84-cf53-49b9-858d-f9673e79cdda"
                alt="Taylor Leadership Coaching Logo"
                width={200}
                height={53}
                className="w-auto h-20"
            />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
                {desktopNavItems.map((item) => (
                <Link 
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === item.href ? "text-primary" : "text-white"
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
              <button className="p-2 text-white">
                  <CustomMenuIcon className="h-6 w-6"/>
                  <span className="sr-only">Open menu</span>
              </button>
            </DialogTrigger>
            <DialogContent className="mobile-menu-overlay p-0">
                <div className="flex h-24 items-center justify-between px-4 border-b">
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
                    <Image 
                        src="https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/TYL-FinalLogo_OG.png?alt=media&token=34929a84-cf53-49b9-858d-f9673e79cdda"
                        alt="Taylor Leadership Coaching Logo"
                        width={200}
                        height={53}
                        className="w-auto h-20"
                    />
                  </Link>
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
                              "text-4xl font-headline transition-colors hover:text-primary",
                              pathname === item.href ? "text-primary" : "text-foreground"
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
