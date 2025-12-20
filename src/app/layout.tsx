import type { Metadata } from 'next';
import { EB_Garamond, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'Taylor Leadership Coaching',
  description: 'Guiding you through life\'s transitions with professional coaching and support.',
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/TYL-FinalLogo_GLD.png?alt=media&token=edf6b10c-4dca-41b8-8e62-9ed961262133',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-body antialiased", ptSans.variable, ebGaramond.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
