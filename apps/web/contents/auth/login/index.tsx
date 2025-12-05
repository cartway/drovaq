'use client';

// import { useMutation } from '@tanstack/react-query';

// import { apiRequest, queryClient } from '@/lib/queryClient';
import { motion, useInView, useRouter } from '@repo/ui';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  Input,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  Textarea,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  ToastAction,
} from '@repo/ui/components';
import {
  useForm,
  z,
  zodResolver,
  loginSchema,
  type LoginType,
} from '@repo/ui/form';
import { useToast } from '@repo/ui/hooks';
import { ChevronRight, Eye, EyeOff, Loader2, LogIn } from '@repo/ui/icons';
import {
  logIn,
  resendConfirmationEmail,
  SupabaseJWTPayload,
} from '@repo/ui/services';
import { jwtDecode } from 'jwt-decode';

import Link from 'next/link';
import React, { FC, useState } from 'react';

export const LoginPageContent = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onSubmit = async (formData: LoginType) => {
    const res = await logIn(formData);

    if (!res.success) {
      // Special case - email not confirmed
      if (res.message === 'Email not confirmed') {
        toast({
          title: '❌ Failed',
          description: res.message,
          variant: 'destructive',
          duration: 10000,
          action: (
            <ToastAction
              altText='Resend'
              onClick={() =>
                resendConfirmationEmail(formData.email, window.location.origin)
              }>
              Resend
            </ToastAction>
          ),
        });
        return;
      }

      // General auth failure
      toast({
        title: '❌ Failed',
        description: res.message || 'Failed to login',
        variant: 'destructive',
      });

      return;
    }

    // =====================
    // SUCCESSFUL LOGIN
    // =====================
    const user = res.session;

    toast({
      variant: 'default',
      title: '✅ Logged in',
    });
    if (!user?.session?.access_token) {
      throw new Error('User is ot logged in');
    }

    const { user_role } = jwtDecode<SupabaseJWTPayload>(
      user.session.access_token
    );

    if (
      user_role === 'customer' ||
      user_role === 'vendor' ||
      user_role === 'rider'
    ) {
      router.push(`/${user_role}/home`);
    } else {
      router.push('/dashboard');
    }
  };
  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

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
          <h1 className='font-headline text-2xl font-bold'>Welcome back</h1>
          <p className='text-muted-foreground mt-2'>
            Log in to your Drovaq account
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <LogIn className='h-5 w-5' />
              Log In
            </CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-4'>
                <FormField
                  control={form.control}
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

                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <div className='flex items-center justify-between'>
                        <FormLabel>Password</FormLabel>
                        <Link
                          href='/forgot-password'
                          className='text-primary text-sm hover:underline'
                          data-testid='link-forgot-password'>
                          Forgot password?
                        </Link>
                      </div>
                      <FormControl>
                        <div className='relative'>
                          <Input
                            type={isShowPassword ? 'text' : 'password'}
                            placeholder='Enter your password'
                            data-testid='input-password'
                            {...field}
                          />
                          <Button
                            type='button'
                            variant='ghost'
                            size='icon'
                            className='absolute top-0 right-0 h-full px-3'
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            data-testid='button-toggle-password'>
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

                <Button
                  type='submit'
                  className='w-full'
                  disabled={form.formState.isSubmitting}
                  data-testid='button-submit-login'>
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Logging
                      in
                    </>
                  ) : (
                    <>
                      Log In <ChevronRight width={20} height={20} />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className='flex flex-col gap-4'>
            <div className='text-muted-foreground text-center text-sm'>
              Don&apos;t have an account?{' '}
              <Link
                href='/auth/signup'
                className='text-primary hover:underline'
                data-testid='link-signup'>
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>

        <p className='text-muted-foreground mt-6 text-center text-xs'>
          By logging in, you agree to our{' '}
          <Link href='/terms' className='underline'>
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href='/terms' className='underline'>
            Privacy Policy
          </Link>
        </p>
      </motion.div>
    </div>
  );
};
