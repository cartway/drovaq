'use client';

import { ProgressProvider } from '@bprogress/next/app';

import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/toaster';

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      disableTransitionOnChange>
      <ProgressProvider
        height='4px'
        color={'#650bff'}
        options={{ showSpinner: false }}
        shallowRouting>
        {children}
      </ProgressProvider>
      <Toaster />
    </ThemeProvider>
  );
};

export default Provider;
