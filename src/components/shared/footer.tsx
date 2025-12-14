
"use client";

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from "lucide-react";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 pt-4 md:pt-8 pb-4 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-center">
            <div className="flex items-center justify-center space-x-2 -my-8 md:-my-12">
                <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/TYL-FinalLogo_BLU_200x200.png?alt=media&token=a37bc18c-9e80-4e7c-8277-97773e452386"
                    alt="Taylor Leadership Coaching Logo"
                    width={400}
                    height={100}
                    className="w-auto h-48 md:h-48"
                />
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Guiding you through life's transitions with professional coaching and support.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-headline text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          &copy; {currentYear} Janice Brown-Taylor Coaching. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
