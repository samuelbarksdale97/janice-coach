import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import './globals.css';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Evolving Door - Life Coaching',
  description: 'Guiding you through life\'s transitions with professional coaching and support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
