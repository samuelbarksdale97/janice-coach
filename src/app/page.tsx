
import type { Metadata } from 'next';
import { HomePageContent } from '@/app/home-page-content';

export const metadata: Metadata = {
  title: 'Taylor Your Leadership Coaching',
};

export default function Home() {
  return <HomePageContent />;
}
