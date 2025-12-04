import { Metadata } from 'next';

import { SignupPageContent } from '@/contents/auth/signup';

// import LoginPageContent from '@/contents/auth/login';

export const metadata: Metadata = {
  title: 'Signup | Drovaq',
};

const SignupPage = () => {
  return <SignupPageContent />;
};

export default SignupPage;
