import { Metadata } from 'next';

import { PricingPageContent } from '@/contents/home/pricing';

export const metadata: Metadata = {
  title: 'Drovaq - The Operating System for Dispatch Companies',
};

const PricingPage = ({ params, searchParams }: PageProps<'/pricing'>) => {
  return <PricingPageContent />;
};

export default PricingPage;
