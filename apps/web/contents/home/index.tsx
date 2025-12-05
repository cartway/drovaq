'use client';
import { motion, useInView } from '@repo/ui';
import { Button, Card, CardContent } from '@repo/ui/components';
import {
  Truck,
  MapPin,
  CreditCard,
  Package,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  BarChart3,
  Clock,
  Eye,
  Download,
} from '@repo/ui/icons';
import Link from 'next/link';

export const HomePageContent = () => {
  const problems = [
    'How do I automatically receive and assign deliveries?',
    'How do customers track their deliveries in real time?',
    'How do I handle payments and confirmations?',
    'How do I manage customer inventory?',
    'How do I reconcile inventory payments especially POD?',
    'How do I manage my fleet and fleet inventory?',
    'How do I scale operations without confusion?',
  ];

  const solutions = [
    {
      icon: Truck,
      title: 'Fleet Management',
      description:
        'Complete visibility and control over your entire fleet operations',
    },
    {
      icon: MapPin,
      title: 'Real-time Tracking',
      description: 'Live tracking for both dispatch owners and customers',
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Seamless payment handling with confirmation flows',
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Full inventory tracking and POD reconciliation',
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Organize and manage all your customer relationships',
    },
    {
      icon: TrendingUp,
      title: 'Scale with Confidence',
      description: 'Built to grow with your fleet from 10 to 1000+ bikes',
    },
  ];

  const impacts = [
    {
      icon: BarChart3,
      title: 'Operational Efficiency',
      description: 'Streamlined processes across your entire business',
    },
    {
      icon: Shield,
      title: 'Reduced Fraud',
      description: 'Close financial leakages and backdoors',
    },
    {
      icon: Eye,
      title: 'Full Visibility',
      description: 'Complete oversight for owners and customers',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Automate manual processes and save hours daily',
    },
  ];

  const stats = [
    { value: '₦25,000', label: 'Beta Price' },
    { value: '100+', label: 'Target Companies' },
    { value: 'Real-time', label: 'Tracking' },
    { value: '24/7', label: 'Operations' },
  ];

  return (
    <div className='flex flex-col'>
      <section className='relative flex min-h-[90vh] items-center overflow-hidden'>
        <div className='from-primary/5 via-background to-background absolute inset-0 bg-gradient-to-br' />
        <div className='relative z-10 container mx-auto px-4 py-16 md:px-6 md:py-24'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            <div className='flex max-w-xl flex-col gap-6'>
              <div className='bg-primary/10 text-primary inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-sm font-medium'>
                <span className='relative flex h-2 w-2'>
                  <span className='bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
                  <span className='bg-primary relative inline-flex h-2 w-2 rounded-full'></span>
                </span>
                Now in Beta
              </div>

              <h1
                className='text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Powering <span className='text-primary'>Last Mile</span>{' '}
                Deliveries
              </h1>

              <p className='text-muted-foreground text-lg leading-relaxed md:text-xl'>
                The Operating System for Dispatch Companies. Manage your fleet,
                track deliveries, and scale operations with confidence.
              </p>

              <div className='mt-2 flex flex-col gap-4 sm:flex-row'>
                <Link href='/talk-to-sales'>
                  <Button
                    size='lg'
                    className='w-full gap-2 sm:w-auto'
                    data-testid='button-hero-get-started'>
                    Get Started <ArrowRight className='h-4 w-4' />
                  </Button>
                </Link>
                <a href='/public-objects/drovaq-product-brief.pdf' download>
                  <Button
                    size='lg'
                    variant='outline'
                    className='w-full gap-2 sm:w-auto'
                    data-testid='button-hero-download-brief'>
                    <Download className='h-4 w-4' /> Download Brief
                  </Button>
                </a>
              </div>

              <div className='mt-4 flex items-center gap-4 border-t pt-4'>
                <div className='flex -space-x-2'>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className='bg-muted border-background flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-medium'>
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className='text-muted-foreground text-sm'>
                  Join the first{' '}
                  <span className='text-foreground font-medium'>
                    100 companies
                  </span>{' '}
                  using Drovaq
                </p>
              </div>
            </div>

            <div className='relative lg:pl-8'>
              <div className='relative overflow-hidden rounded-2xl border shadow-2xl'>
                <img
                  src={'/generated_images/dispatch_riders_operations_scene.png'}
                  alt='Dispatch operations'
                  className='h-auto w-full object-cover'
                />
                <div className='from-background/60 absolute inset-0 bg-gradient-to-t to-transparent' />
              </div>
              <div className='bg-card absolute -bottom-4 -left-4 rounded-xl border p-4 shadow-lg md:-bottom-6 md:-left-6'>
                <div className='flex items-center gap-3'>
                  <div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg'>
                    <Truck className='text-primary h-6 w-6' />
                  </div>
                  <div>
                    <p className='font-semibold'>Active Deliveries</p>
                    <p className='text-primary text-2xl font-bold'>247</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-muted/30 py-16'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <p
                  className='text-primary text-3xl font-bold md:text-4xl'
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {stat.value}
                </p>
                <p className='text-muted-foreground mt-1 text-sm'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 md:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid items-center gap-16 lg:grid-cols-2'>
            <div>
              <span className='text-primary text-sm font-medium tracking-wider uppercase'>
                The Problem
              </span>
              <h2
                className='mt-3 mb-6 text-3xl font-bold md:text-4xl'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                When operations break at scale
              </h2>
              <p className='text-muted-foreground mb-8 text-lg'>
                When a dispatch company grows beyond 10 to 20 bikes, operations
                break. We experienced this firsthand while building Cartway.
              </p>

              <div className='space-y-4'>
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className='bg-destructive/5 border-destructive/10 flex items-start gap-3 rounded-lg border p-4'>
                    <div className='bg-destructive/10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                      <span className='text-destructive text-sm font-medium'>
                        ?
                      </span>
                    </div>
                    <p className='text-sm'>{problem}</p>
                  </div>
                ))}
              </div>

              <p className='mt-8 text-lg font-medium'>
                The truth is simple: Most dispatch companies cannot scale
                because their systems cannot scale.
              </p>
            </div>

            <div>
              <span className='text-primary text-sm font-medium tracking-wider uppercase'>
                The Solution
              </span>
              <h2
                className='mt-3 mb-6 text-3xl font-bold md:text-4xl'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                One system for everything
              </h2>
              <p className='text-muted-foreground mb-8 text-lg'>
                Drovaq is the Operating System for dispatch companies. A single
                platform that brings structure, automation and visibility to
                your entire business.
              </p>

              <div className='grid gap-4 sm:grid-cols-2'>
                {solutions.map((solution, index) => (
                  <Card
                    key={index}
                    className='hover-elevate transition-all duration-200'>
                    <CardContent className='p-5'>
                      <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-lg'>
                        <solution.icon className='text-primary h-5 w-5' />
                      </div>
                      <h3 className='mb-1 font-semibold'>{solution.title}</h3>
                      <p className='text-muted-foreground text-sm'>
                        {solution.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-muted/30 py-20 md:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='mx-auto mb-16 max-w-2xl text-center'>
            <span className='text-primary text-sm font-medium tracking-wider uppercase'>
              Dashboard
            </span>
            <h2
              className='mt-3 mb-4 text-3xl font-bold md:text-4xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Everything in one place
            </h2>
            <p className='text-muted-foreground text-lg'>
              A powerful dashboard that gives you complete visibility and
              control over your dispatch operations.
            </p>
          </div>

          <div className='relative mx-auto max-w-5xl overflow-hidden rounded-2xl border shadow-2xl'>
            <img
              src={'/generated_images/dashboard_interface_mockup.png'}
              alt='Drovaq Dashboard'
              className='h-auto w-full'
            />
          </div>
        </div>
      </section>

      <section className='py-20 md:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='mx-auto mb-16 max-w-2xl text-center'>
            <span className='text-primary text-sm font-medium tracking-wider uppercase'>
              Impact
            </span>
            <h2
              className='mt-3 mb-4 text-3xl font-bold md:text-4xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Transform your business
            </h2>
            <p className='text-muted-foreground text-lg'>
              Drovaq makes running a dispatch company predictable and scalable.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {impacts.map((impact, index) => (
              <Card
                key={index}
                className='hover-elevate text-center transition-all duration-200'>
                <CardContent className='p-8'>
                  <div className='bg-primary/10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl'>
                    <impact.icon className='text-primary h-7 w-7' />
                  </div>
                  <h3 className='mb-2 text-lg font-semibold'>{impact.title}</h3>
                  <p className='text-muted-foreground text-sm'>
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-primary text-primary-foreground py-20 md:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2
              className='mb-6 text-3xl font-bold md:text-4xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Join the first 100 companies
            </h2>
            <p className='mb-8 text-lg opacity-90'>
              Get unlimited access at the beta price of ₦25,000/month. Build a
              dispatch business that can scale confidently.
            </p>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <Link href='/talk-to-sales'>
                <Button
                  size='lg'
                  variant='secondary'
                  className='w-full gap-2 sm:w-auto'
                  data-testid='button-cta-get-started'>
                  Start with Drovaq <ArrowRight className='h-4 w-4' />
                </Button>
              </Link>
              <Link href='/pricing'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full gap-2 bg-transparent sm:w-auto'
                  data-testid='button-cta-view-pricing'>
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
