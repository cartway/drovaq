import { Footer, Navigation } from '@repo/ui/components';
import { createClientServer } from '@repo/ui/utils';
import type { Metadata } from 'next';

import '../globals.css';

export const metadata: Metadata = {
  title: 'Cartway',
  description: 'Fast & Reliable Delivery Right to Your Doorstep',
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const supabase = await createClientServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <Navigation user={user} />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
