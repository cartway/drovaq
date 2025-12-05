import { Metadata } from 'next';

import { ForgotPasswordContent } from '@/contents/auth/forgot-password';

export const metadata: Metadata = {
  title: 'Forgot Passoword | Drovaq',
};

const LoginPage = ({
  params,
  searchParams,
}: PageProps<'/auth/forgot-password'>) => {
  return <ForgotPasswordContent />;
};

export default LoginPage;
