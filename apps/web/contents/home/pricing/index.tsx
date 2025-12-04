'use client';
import { motion } from '@repo/ui';
import {
  Button,
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@repo/ui/components';

import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Sparkles,
  Zap,
  Building,
} from '@repo/ui/icons';
import Link from 'next/link';
import React from 'react';

export const PricingPageContent = () => {
  const features = [
    'Automated delivery management',
    'Real-time fleet tracking',
    'Customer delivery tracking',
    'Payment & confirmation flows',
    'Inventory management',
    'POD reconciliation',
    'Fleet performance analytics',
    'Customer management',
    'Mobile apps for riders',
    'Priority support',
  ];

  const includedApps = [
    {
      name: 'Dispatch Owner App',
      description: 'Full operations control',
      icon: Building,
    },
    {
      name: 'Customer & Vendor Portal',
      description: 'Self-service tracking',
      icon: Users,
    },
    {
      name: 'Agent & Partner App',
      description: 'Extended network support',
      icon: Zap,
    },
    {
      name: 'Riders App',
      description: 'Mobile-first delivery',
      icon: Sparkles,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='flex flex-col'>
      <section className='from-primary/5 to-background bg-gradient-to-b py-20 md:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <motion.div
            className='mx-auto mb-16 max-w-3xl text-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <span className='text-primary text-sm font-medium tracking-wider uppercase'>
              Beta Pricing
            </span>
            <h1
              className='mt-3 mb-6 text-4xl font-bold md:text-5xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Join the First <span className='text-primary'>100 Companies</span>
            </h1>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              Lock in your beta price today. Get unlimited access to the full
              platform and help shape the future of dispatch management.
            </p>
          </motion.div>

          <motion.div
            className='mx-auto max-w-lg'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className='border-primary/20 relative overflow-hidden border-2 shadow-xl'>
              <div className='from-primary to-primary absolute top-0 right-0 left-0 h-1 bg-gradient-to-r via-emerald-500' />
              <CardHeader className='pt-8 pb-4 text-center'>
                <div className='mb-4 flex items-center justify-center gap-3'>
                  <div className='bg-primary/10 text-primary flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium'>
                    <Sparkles className='h-4 w-4' />
                    Beta Launch Offer
                  </div>
                  <div className='flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600'>
                    <Users className='h-4 w-4' />
                    Limited Spots
                  </div>
                </div>
                <CardTitle className='text-2xl'>Complete Platform</CardTitle>
                <CardDescription>
                  Everything you need to run your dispatch
                </CardDescription>
              </CardHeader>
              <CardContent className='pb-6 text-center'>
                <div className='mb-6'>
                  <span
                    className='text-5xl font-bold md:text-6xl'
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    ₦25,000
                  </span>
                  <span className='text-muted-foreground text-lg'>/month</span>
                </div>
                <p className='text-muted-foreground mb-8 text-sm'>
                  Unlimited access to all core features
                </p>

                <div className='space-y-3 text-left'>
                  {features.map((feature, index) => (
                    <div key={index} className='flex items-center gap-3'>
                      <CheckCircle2 className='h-5 w-5 shrink-0 text-emerald-500' />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className='flex flex-col gap-4 pb-8'>
                <a href='/api/login' className='w-full'>
                  <Button
                    size='lg'
                    className='cta-glow w-full cursor-pointer gap-2 text-lg'
                    data-testid='button-pricing-get-started'>
                    <Sparkles className='h-5 w-5' />
                    Join Beta <ArrowRight className='h-5 w-5' />
                  </Button>
                </a>
                <p className='text-muted-foreground text-center text-xs'>
                  No credit card required to start
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className='bg-muted/30 py-20'>
        <div className='container mx-auto px-4 md:px-6'>
          <motion.div
            className='mx-auto mb-12 max-w-2xl text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span className='text-primary text-sm font-medium tracking-wider uppercase'>
              Included Apps
            </span>
            <h2
              className='mt-3 mb-4 text-3xl font-bold md:text-4xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Everything You Need
            </h2>
            <p className='text-muted-foreground text-lg'>
              One subscription includes all the apps for your entire operation.
            </p>
          </motion.div>

          <motion.div
            className='mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}>
            {includedApps.map((app, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className='hover-elevate h-full text-center transition-all duration-300'>
                  <CardContent className='p-6'>
                    <div
                      className={`h-12 w-12 rounded-xl ${index === 0 ? 'bg-emerald-100 dark:bg-emerald-900/30' : index === 1 ? 'bg-blue-100 dark:bg-blue-900/30' : index === 2 ? 'bg-purple-100 dark:bg-purple-900/30' : 'bg-amber-100 dark:bg-amber-900/30'} mx-auto mb-4 flex items-center justify-center`}>
                      <app.icon
                        className={`h-6 w-6 ${index === 0 ? 'text-emerald-600' : index === 1 ? 'text-blue-600' : index === 2 ? 'text-purple-600' : 'text-amber-600'}`}
                      />
                    </div>
                    <h3 className='mb-1 font-semibold'>{app.name}</h3>
                    <p className='text-muted-foreground text-sm'>
                      {app.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className='py-20 md:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <motion.div
            className='mx-auto max-w-4xl'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <Card className='overflow-hidden border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100 shadow-xl dark:border-emerald-800 dark:from-emerald-900/30 dark:to-emerald-800/20'>
              <CardContent className='p-8 text-center md:p-12'>
                <h3
                  className='mb-4 text-2xl font-bold md:text-3xl'
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Want to See Your Potential Savings?
                </h3>
                <p className='text-muted-foreground mx-auto mb-6 max-w-xl'>
                  Use our ROI calculator to see exactly how much Drovaq could
                  save your dispatch business every month. Real numbers based on
                  your actual operations.
                </p>
                <Link href='/impact'>
                  <Button
                    size='lg'
                    className='gap-2 bg-emerald-600 transition-all duration-300 hover:scale-105 hover:bg-emerald-700 hover:shadow-lg'
                    data-testid='button-savings-calculator'>
                    Calculate Your Savings <ArrowRight className='h-4 w-4' />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className='bg-muted/30 py-16'>
        <div className='container mx-auto px-4 md:px-6'>
          <motion.div
            className='grid gap-8 md:grid-cols-3'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}>
            <motion.div
              variants={itemVariants}
              className='flex items-start gap-4'>
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30'>
                <Shield className='h-6 w-6 text-emerald-600' />
              </div>
              <div>
                <h3 className='mb-1 font-semibold'>No Hidden Fees</h3>
                <p className='text-muted-foreground text-sm'>
                  The price you see is the price you pay. No surprise charges.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className='flex items-start gap-4'>
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30'>
                <Clock className='h-6 w-6 text-blue-600' />
              </div>
              <div>
                <h3 className='mb-1 font-semibold'>Cancel Anytime</h3>
                <p className='text-muted-foreground text-sm'>
                  No long-term contracts. Cancel whenever you need.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className='flex items-start gap-4'>
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30'>
                <Users className='h-6 w-6 text-purple-600' />
              </div>
              <div>
                <h3 className='mb-1 font-semibold'>Unlimited Users</h3>
                <p className='text-muted-foreground text-sm'>
                  Add as many team members as you need at no extra cost.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className='bg-primary text-primary-foreground py-20'>
        <div className='container mx-auto px-4 md:px-6'>
          <motion.div
            className='mx-auto max-w-3xl text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm'>
              <Sparkles className='h-4 w-4' />
              Limited Beta Spots Available
            </div>
            <h2
              className='mb-6 text-3xl font-bold md:text-4xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Join the First 100 Companies
            </h2>
            <p className='mb-8 text-lg opacity-90'>
              Get unlimited access at the beta price. Build a dispatch business
              that can scale confidently.
            </p>
            <a href='/api/login'>
              <Button
                size='lg'
                variant='secondary'
                className='gap-2 transition-all duration-300 hover:scale-105'
                data-testid='button-pricing-cta'>
                <Sparkles className='h-4 w-4' />
                Join Beta Now <ArrowRight className='h-4 w-4' />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
