import { Metadata } from 'next';

import { LoginPageContent } from '@/contents/auth/login';

export const metadata: Metadata = {
  title: 'Login | Drovaq',
};

const LoginPage = ({ params, searchParams }: PageProps<'/auth/login'>) => {
  return <LoginPageContent />;
};

export default LoginPage;
