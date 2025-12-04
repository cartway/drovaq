import { Metadata } from 'next';

import { LandingPageContent } from '@/contents/home/landing';

export const metadata: Metadata = {
  title: 'Drovaq - The Operating System for Dispatch Companies',
};

const HomePage = ({ params, searchParams }: PageProps<'/'>) => {
  return <LandingPageContent />;
};

export default HomePage;
