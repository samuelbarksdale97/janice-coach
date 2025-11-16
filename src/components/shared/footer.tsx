"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from "lucide-react";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 pt-8 pb-12 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
                <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/TYL-FinalLogo_BLU.png?alt=media&token=48d51385-c610-491c-9523-b9e5fcc42edd"
                    alt="Taylor Leadership Coaching Logo"
                    width={400}
                    height={100}
                    className="w-auto h-48"
                />
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto md:mx-0">
                Guiding you through life's transitions with professional coaching and support.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
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
          
          <div>
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
          &copy; {currentYear ? currentYear : new Date().getFullYear()} Taylor Leadership Coaching. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
