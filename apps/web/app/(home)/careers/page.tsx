import { Metadata } from 'next';

import { CareersPageContent } from '@/contents/home/careers';
export const metadata: Metadata = {
  title: 'Drovaq - The Operating System for Dispatch Companies',
};

const PricingPage = () => {
  return <CareersPageContent />;
};

export default PricingPage;
