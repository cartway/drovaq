import { Provider } from '@repo/ui';
import type { Metadata } from 'next';
import { Inter, Poppins, Space_Grotesk } from 'next/font/google';

import './globals.css';

export const metadata: Metadata = {
  title: 'Drovaq',
  description: 'Drovaq - The Operating System for Dispatch Companies',
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
});
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-body text-cw-text-dark`}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};
export default RootLayout;
