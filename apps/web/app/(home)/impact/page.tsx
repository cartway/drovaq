import { Metadata } from 'next';

import { ImpactPageContent } from '@/contents/home/impact';

export const metadata: Metadata = {
  title: 'Drovaq - The Operating System for Dispatch Companies',
};

const PricingPage = ({ params, searchParams }: PageProps<'/impact'>) => {
  return <ImpactPageContent />;
};

export default PricingPage;
