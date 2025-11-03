
import Link from "next/link";
import { Logo } from "@/components/icons";
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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
                <Logo className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline text-lg">Evolving Door</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto md:mx-0">
                Guiding you through life's transitions with professional coaching and support.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-headline text-lg font-semibold mb-4">Quick Links</h4>
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
          &copy; {currentYear} Evolving Door. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
