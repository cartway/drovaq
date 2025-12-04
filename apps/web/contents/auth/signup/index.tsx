'use client';
import { jwtDecode, motion, useInView, useRouter } from '@repo/ui';
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
  type SignupFormType,
  signupFormSchema,
} from '@repo/ui/form';
import { useToast } from '@repo/ui/hooks';
import {
  ChevronRight,
  Eye,
  EyeOff,
  Loader2,
  LogIn,
  UserPlus,
} from '@repo/ui/icons';
import {
  logIn,
  resendConfirmationEmail,
  signUp,
  SignupPayload,
  SupabaseJWTPayload,
} from '@repo/ui/services';

import Link from 'next/link';
import React, { FC, useState } from 'react';

export const SignupPageContent = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const onSubmit = async (data: SignupFormType) => {
    try {
      const payload: SignupPayload = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
      };
      await signUp(payload, 'customer', window.location.origin);
      toast({
        variant: 'default',
        title: '✅ Account created',
        description: `Please check your email for a verification link.`,
      });
      router.push('/auth/login');

      form.reset();
    } catch (error: any) {
      toast({
        title: '❌ Failed',
        description: error.message ? error.message : 'Sign up failed',
        variant: 'destructive',
      });
    }
  };
  const form = useForm<SignupFormType>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
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
          <h1 className='font-headline text-2xl font-bold'>
            Create your account
          </h1>
          <p className='text-muted-foreground mt-2'>
            Start managing your dispatch operations today
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <UserPlus className='h-5 w-5' />
              Sign Up
            </CardTitle>
            <CardDescription>
              Fill in your details to create a new account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='John'
                            data-testid='input-first-name'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Doe'
                            data-testid='input-last-name'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className='relative'>
                          <Input
                            type={isShowPassword ? 'text' : 'password'}
                            placeholder='At least 8 characters'
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

                <FormField
                  control={form.control}
                  name='confirmPassword'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className='relative'>
                          <Input
                            type={isShowConfirmPassword ? 'text' : 'password'}
                            placeholder='Confirm your password'
                            data-testid='input-confirm-password'
                            {...field}
                          />
                          <Button
                            type='button'
                            variant='ghost'
                            size='icon'
                            className='absolute top-0 right-0 h-full px-3'
                            onClick={() =>
                              setIsShowConfirmPassword(!isShowConfirmPassword)
                            }
                            data-testid='button-toggle-confirm-password'>
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
                  disabled={form.formState.isSubmitting}
                  data-testid='button-signup'>
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                      Creating account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className='flex flex-col gap-4'>
            <div className='text-muted-foreground text-center text-sm'>
              Already have an account?{' '}
              <Link
                href='/login'
                className='text-primary hover:underline'
                data-testid='link-login'>
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>

        <p className='text-muted-foreground mt-6 text-center text-xs'>
          By creating an account, you agree to our{' '}
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
