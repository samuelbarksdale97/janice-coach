
import type { Metadata } from 'next';
import { HomePageContent } from '@/app/home-page-content';

export const metadata: Metadata = {
  title: 'Taylor Leadership Coaching',
};

export default function Home() {
  return <HomePageContent />;
}
