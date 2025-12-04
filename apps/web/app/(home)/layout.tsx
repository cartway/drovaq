import { Footer, Navigation } from '@repo/ui/components';

import type { Metadata } from 'next';

import '../globals.css';

export const metadata: Metadata = {
  title: 'Cartway',
  description: 'Fast & Reliable Delivery Right to Your Doorstep',
  // icons: {
  //   icon: "/favicon.svg",
  // },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <Navigation />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};
export default RootLayout;
