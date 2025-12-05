import { createClientServer } from '@repo/ui/utils';
import { Metadata } from 'next';

import { HomePageContent } from '@/contents/home';
import { LandingPageContent } from '@/contents/home/landing';

export const metadata: Metadata = {
  title: 'Drovaq - The Operating System for Dispatch Companies',
};

const HomePage = async ({ params, searchParams }: PageProps<'/'>) => {
  const supabase = await createClientServer();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    <LandingPageContent />;
  }
  return <HomePageContent />;
};

export default HomePage;
