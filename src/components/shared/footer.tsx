import { Instagram, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Evolving Door</span>
          </div>
          <div className="text-center md:text-left text-sm text-muted-foreground">
            &copy; {currentYear} Evolving Door. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button asChild variant="ghost" size="icon">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
