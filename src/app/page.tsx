
import type { Metadata } from 'next';
import { HomePageContent } from '@/app/home-page-content';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return <HomePageContent />;
}
