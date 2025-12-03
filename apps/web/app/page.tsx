import { Metadata } from 'next';

import { LandingPageContent } from '@/contents/home/landing';

export const metadata: Metadata = {
  title: 'Login | Drovaq',
};

const LoginPage = ({ params, searchParams }: PageProps<'/'>) => {
  return <LandingPageContent />;
};

export default LoginPage;
