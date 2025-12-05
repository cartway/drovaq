'use client';

import { motion } from '@repo/ui';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components';
import {
  useForm,
  zodResolver,
  forgotPasswordSchema,
  ForgotPasswordFormType,
} from '@repo/ui/form';
import { useToast } from '@repo/ui/hooks';
import {
  ArrowLeft,
  Eye,
  EyeOff,
  KeyRound,
  Loader2,
  Mail,
  CheckCircle,
} from '@repo/ui/icons';
import { resetPasswordforEmail } from '@repo/ui/services';
// import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';

// import { apiRequest } from '@/lib/queryClient';

export const ForgotPasswordContent = () => {
  // const router = useRouter();
  const { toast } = useToast();
  // const [step, setStep] = useState<'email' | 'reset' | 'success'>('email');
  // const [resetToken, setResetToken] = useState('');
  // const [isShowPassword, setIsShowPassword] = useState(false);
  // const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const emailForm = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  // const resetForm = useForm<ResetPasswordInput>({
  //   resolver: zodResolver(resetPasswordSchema),
  //   defaultValues: {
  //     token: '',
  //     password: '',
  //     confirmPassword: '',
  //   },
  // });

  // const requestResetMutation = useMutation({
  //   mutationFn: async (data: ForgotPasswordInput) => {
  //     const res = await apiRequest('POST', '/api/auth/forgot-password', data);
  //     return res.json();
  //   },
  //   onSuccess: (data: any) => {
  //     if (data.token) {
  //       setResetToken(data.token);
  //       resetForm.setValue('token', data.token);
  //     }
  //     toast({
  //       title: 'Reset code generated',
  //       description: 'Use the code shown to reset your password.',
  //     });
  //     setStep('reset');
  //   },
  //   onError: (error: any) => {
  //     toast({
  //       title: 'Request failed',
  //       description: error.message || 'Could not process your request',
  //       variant: 'destructive',
  //     });
  //   },
  // });

  // const resetPasswordMutation = useMutation({
  //   mutationFn: async (data: ResetPasswordInput) => {
  //     const res = await apiRequest('POST', '/api/auth/reset-password', data);
  //     return res.json();
  //   },
  //   onSuccess: () => {
  //     toast({
  //       title: 'Password reset successful!',
  //       description: 'You can now log in with your new password.',
  //     });
  //     setStep('success');
  //   },
  //   onError: (error: any) => {
  //     toast({
  //       title: 'Reset failed',
  //       description: error.message || 'Could not reset password',
  //       variant: 'destructive',
  //     });
  //   },
  // });

  const onEmailSubmit = async (data: ForgotPasswordFormType) => {
    try {
      await resetPasswordforEmail(data.email, window.location.origin);
      toast({
        variant: 'default',
        title: '✅ Reset mail sent',
        description: 'Check your email for a password reset link',
      });
    } catch (error: any) {
      toast({
        title: '❌ Failed',
        description: error.message
          ? error.message
          : 'Failed to send reset mail',
        variant: 'destructive',
      });
    }
  };

  // const onResetSubmit = (data: ResetPasswordInput) => {
  //   resetPasswordMutation.mutate(data);
  // };

  return (
    <div className='bg-background flex min-h-screen items-center justify-center px-4 py-12'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full max-w-md'>
        <div className='mb-8 text-center'>
          <Link href='/' className='mb-4 inline-flex items-center gap-2'>
            <div className='bg-primary flex h-10 w-10 items-center justify-center rounded-lg'>
              <span className='text-primary-foreground text-xl font-bold'>
                D
              </span>
            </div>
            <span className='font-headline text-2xl font-bold'>Drovaq</span>
          </Link>
          <h1 className='font-headline text-2xl font-bold'>
            Forgot your password?
            {/* {step === 'reset' && 'Reset your password'}
            {step === 'success' && 'Password reset complete'} */}
          </h1>
          <p className='text-muted-foreground mt-2'>
            Enter your email to receive a reset link
            {/* {step === 'reset' && 'Enter your new password'}
            {step === 'success' && 'Your password has been updated'} */}
          </p>
        </div>

        {/* {step === 'email' && ( */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Mail className='h-5 w-5' />
              Enter your email
            </CardTitle>
            <CardDescription>A code will be sent to you</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...emailForm}>
              <form
                onSubmit={emailForm.handleSubmit(onEmailSubmit)}
                className='space-y-4'>
                <FormField
                  control={emailForm.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type='email'
                          placeholder='john@example.com'
                          data-testid='input-email'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type='submit'
                  className='w-full'
                  disabled={emailForm.formState.isSubmitting}
                  data-testid='button-request-reset'>
                  {emailForm.formState.isSubmitting ? (
                    <>
                      <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                      Sending...
                    </>
                  ) : (
                    'Send Reset Link'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <Link
              href='/auth/login'
              className='text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm'
              data-testid='link-back-to-login'>
              <ArrowLeft className='h-4 w-4' />
              Back to login
            </Link>
          </CardFooter>
        </Card>
        {/* )} */}

        {/* {step === 'reset' && (
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <KeyRound className='h-5 w-5' />
                Create new password
              </CardTitle>
              <CardDescription>
                Your reset code:{' '}
                <code className='bg-muted rounded px-2 py-1 font-mono'>
                  {resetToken}
                </code>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...resetForm}>
                <form
                  onSubmit={resetForm.handleSubmit(onResetSubmit)}
                  className='space-y-4'>
                  <FormField
                    control={resetForm.control}
                    name='token'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reset Code</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter reset code'
                            data-testid='input-reset-token'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={resetForm.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <div className='relative'>
                            <Input
                              type={isShowPassword ? 'text' : 'password'}
                              placeholder='At least 8 characters'
                              data-testid='input-new-password'
                              {...field}
                            />
                            <Button
                              type='button'
                              variant='ghost'
                              size='icon'
                              className='absolute top-0 right-0 h-full px-3'
                              onClick={() =>
                                setIsShowPassword(!isShowPassword)
                              }>
                              {isShowPassword ? (
                                <EyeOff className='h-4 w-4' />
                              ) : (
                                <Eye className='h-4 w-4' />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={resetForm.control}
                    name='confirmPassword'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm New Password</FormLabel>
                        <FormControl>
                          <div className='relative'>
                            <Input
                              type={isShowConfirmPassword ? 'text' : 'password'}
                              placeholder='Confirm your password'
                              data-testid='input-confirm-new-password'
                              {...field}
                            />
                            <Button
                              type='button'
                              variant='ghost'
                              size='icon'
                              className='absolute top-0 right-0 h-full px-3'
                              onClick={() =>
                                setIsShowConfirmPassword(!isShowConfirmPassword)
                              }>
                              {isShowConfirmPassword ? (
                                <EyeOff className='h-4 w-4' />
                              ) : (
                                <Eye className='h-4 w-4' />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type='submit'
                    className='w-full'
                    disabled={resetPasswordMutation.isPending}
                    data-testid='button-reset-password'>
                    {resetPasswordMutation.isPending ? (
                      <>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                        Resetting...
                      </>
                    ) : (
                      'Reset Password'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter>
              <Button
                variant='ghost'
                onClick={() => setStep('email')}
                className='flex items-center gap-2'
                data-testid='button-back-to-email'>
                <ArrowLeft className='h-4 w-4' />
                Try a different email
              </Button>
            </CardFooter>
          </Card>
        )} */}

        {/* {step === 'success' && (
          <Card>
            <CardContent className='pt-6'>
              <div className='text-center'>
                <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30'>
                  <CheckCircle className='h-8 w-8 text-green-600 dark:text-green-400' />
                </div>
                <h3 className='mb-2 text-lg font-semibold'>
                  Password Updated!
                </h3>
                <p className='text-muted-foreground mb-6'>
                  Your password has been successfully reset. You can now log in
                  with your new password.
                </p>
                <Button
                  onClick={() => setLocation('/login')}
                  className='w-full'
                  data-testid='button-go-to-login'>
                  Go to Login
                </Button>
              </div>
            </CardContent>
          </Card>
        )} */}
      </motion.div>
    </div>
  );
};
