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
  ArrowRight,
  Download,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  Zap,
  Box,
  Target,
  Award,
  Quote,
  Calculator,
} from '@repo/ui/icons';

// import { Truck, MapPin, CreditCard,Paka } from '@repo/ui/icons';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import React from 'react';

export const AnimatedCounter = ({
  target,
  prefix = '',
  suffix = '',
  duration = 2000,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const LandingPageContent = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Live GPS Tracking',
      description:
        'See every rider on a live map. Know exactly where each delivery is in real-time.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
      borderColor: 'border-emerald-200',
    },
    {
      icon: Package,
      title: 'Delivery Status Updates',
      description:
        'Track every delivery from pickup to drop-off. Automated status updates for you and your customers.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-200',
    },
    {
      icon: Box,
      title: 'Customer Inventory',
      description:
        "Manage stock for your customers. Track what's stored, what's moving, and what's been delivered.",
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-200',
    },
    {
      icon: CreditCard,
      title: 'POD & Payment Tracking',
      description:
        'Reconcile cash-on-delivery instantly. No more chasing riders for missing payments.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
      borderColor: 'border-amber-200',
    },
    {
      icon: Users,
      title: 'Fleet Performance',
      description:
        'See which riders perform best. Track delivery times, success rates, and customer ratings.',
      color: 'text-rose-600',
      bgColor: 'bg-rose-100',
      borderColor: 'border-rose-200',
    },
    {
      icon: Zap,
      title: 'Built to Scale',
      description: 'Grow from 10 to 1000+ bikes without chaos or confusion.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      borderColor: 'border-teal-200',
    },
  ];

  const comparisonData = [
    {
      feature: 'Rider Location',
      scattered: 'Call riders to ask where they are',
      drovaq: 'Live GPS map showing all riders in real-time',
      scatteredBad: true,
    },
    {
      feature: 'Delivery Status',
      scattered: 'WhatsApp messages, manual updates',
      drovaq: 'Automatic updates: Pending → Picked Up → Delivered',
      scatteredBad: true,
    },
    {
      feature: 'Customer Inventory',
      scattered: 'Notebooks, memory, Excel chaos',
      drovaq: 'Track stock levels, movements & deliveries per customer',
      scatteredBad: true,
    },
    {
      feature: 'POD Reconciliation',
      scattered: 'Excel sheets, manual counting',
      drovaq: 'Instant COD tracking, automated reports',
      scatteredWarning: true,
    },
    {
      feature: 'Fleet Performance',
      scattered: 'No data, gut feelings',
      drovaq: 'Delivery times, success rates, rider rankings',
      scatteredBad: true,
    },
    {
      feature: 'Customer Tracking',
      scattered: "Customers call asking 'where's my order?'",
      drovaq: 'Self-service tracking links for every delivery',
      scatteredBad: true,
    },
  ];

  const testimonials = [
    {
      quote:
        'Before Drovaq, I spent 3 hours every night reconciling POD payments. Now it takes 30 minutes. The time saved alone is worth the subscription.',
      name: 'Adebayo Ogunlesi',
      role: 'Fleet Owner, 25 bikes',
      avatar: 'AO',
    },
    {
      quote:
        'I used to lose ₦200,000+ monthly to untracked payments. Drovaq helped me recover that money and grow from 12 to 35 riders in 6 months.',
      name: 'Chiamaka Nwosu',
      role: 'Dispatch Company Owner',
      avatar: 'CN',
    },
    {
      quote:
        'My customers can now track their deliveries themselves. I get fewer complaint calls, and my riders are more accountable.',
      name: 'Emmanuel Okwu',
      role: 'Logistics Entrepreneur',
      avatar: 'EO',
    },
  ];

  const stats = [
    {
      value: 20,
      suffix: '+',
      label: 'Bikes Managed',
      description: 'Built for companies scaling beyond',
    },
    {
      value: 1000,
      suffix: '+',
      label: 'Deliveries Handled',
      description: "Through Cartway's operations",
    },
    {
      value: 100,
      label: 'Target Companies',
      description: 'For first 3 months of beta',
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
      <section className='relative flex min-h-[90vh] items-center overflow-hidden'>
        <div className='from-primary/5 via-background to-background absolute inset-0 bg-gradient-to-br' />
        <div className='relative z-10 container mx-auto px-4 py-16 md:px-6 md:py-24'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            <motion.div
              className='flex max-w-xl flex-col gap-6'
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>
              <div className='bg-primary/10 text-primary inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-sm font-medium'>
                <span className='relative flex h-2 w-2'>
                  <span className='bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
                  <span className='bg-primary relative inline-flex h-2 w-2 rounded-full'></span>
                </span>
                Now in Beta — Limited Spots
              </div>

              <h1
                className='text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Stop Losing Money.{' '}
                <span className='text-primary'>Start Scaling.</span>
              </h1>

              <p className='text-muted-foreground text-lg leading-relaxed md:text-xl'>
                The Operating System that turns chaotic dispatch operations into
                a predictable, profitable business. Built by dispatch owners who
                solved their own problems first.
              </p>

              <div className='mt-2 flex flex-col gap-4 sm:flex-row'>
                <a href='/api/login'>
                  <Button
                    size='lg'
                    className='cta-glow w-full gap-2 sm:w-auto'
                    data-testid='button-hero-join-beta'>
                    <Sparkles className='h-4 w-4' />
                    Join Beta <ArrowRight className='h-4 w-4' />
                  </Button>
                </a>
                <a href='/public-objects/drovaq-product-brief.pdf' download>
                  <Button
                    size='lg'
                    variant='outline'
                    className='hover:border-primary hover:text-primary w-full gap-2 transition-all duration-300 sm:w-auto'
                    data-testid='button-hero-download'>
                    <Download className='h-4 w-4' /> Download Brief
                  </Button>
                </a>
              </div>

              <div className='mt-4 flex items-center gap-4 pt-4'>
                <div className='flex -space-x-2'>
                  {['AD', 'CM', 'EO', 'JK'].map((initials, i) => (
                    <div
                      key={i}
                      className='bg-primary/10 border-background flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-medium'>
                      {initials}
                    </div>
                  ))}
                </div>
                <p className='text-muted-foreground text-sm'>
                  Join the first{' '}
                  <span className='text-foreground font-medium'>
                    100 companies
                  </span>{' '}
                  transforming their dispatch business
                </p>
              </div>
            </motion.div>

            <motion.div
              className='relative lg:pl-8'
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <div className='border-primary border-secondary relative overflow-hidden rounded-2xl shadow-2xl'>
                <img
                  src={'/generated_images/dispatch_riders_operations_scene.png'}
                  alt='Dispatch operations'
                  className='h-auto w-full object-cover'
                />
                <div className='from-background/60 absolute inset-0 bg-gradient-to-t to-transparent' />
              </div>
              <motion.div
                className='bg-card absolute -bottom-4 -left-4 rounded-xl border p-4 shadow-lg md:-bottom-6 md:-left-6'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}>
                <div className='flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10'>
                    <TrendingUp className='h-6 w-6 text-emerald-600' />
                  </div>
                  <div>
                    <p className='font-semibold'>Revenue Recovered</p>
                    <p className='text-2xl font-bold text-emerald-600'>
                      ₦2.4M+
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='py-20 md:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <motion.div
            className='grid items-center gap-16 lg:grid-cols-2'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <span className='text-primary text-sm font-medium tracking-wider uppercase'>
                The Insight
              </span>
              <h2
                className='mt-3 mb-6 text-3xl font-bold md:text-4xl'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                We Built This From{' '}
                <span className='text-emerald-600'>Real Experience</span>
              </h2>

              <div className='relative mb-8'>
                <div className='absolute top-0 bottom-0 -left-4 w-1 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-300' />
                <blockquote className='text-muted-foreground pl-6 text-lg italic'>
                  `&quot;`The problem wasn&apos;t the riders. It was that I
                  couldn&apos;t see where they were, what inventory was moving,
                  or which payments were missing — all at once `&quot;`
                </blockquote>
              </div>

              <p className='text-muted-foreground mb-6'>
                We started <strong className='text-foreground'>Cartway</strong>,
                a dispatch company that grew rapidly. At scale, we discovered
                that tools become scattered, visibility disappears, revenue
                leakages grow, and customer experience becomes inconsistent.
              </p>

              <p className='text-muted-foreground mb-8'>
                That&apos;s when we built{' '}
                <strong className='text-foreground'>Drovaq</strong> — the
                Operating System that solved our own problems first.
              </p>

              <div className='inline-flex items-center gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-3'>
                <Award className='h-5 w-5 text-amber-600' />
                <div>
                  <p className='font-semibold text-amber-700'>
                    Mobility Company of the Year
                  </p>
                  <p className='text-muted-foreground text-sm'>
                    Ibadan Tech Expo 2024
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative'>
              <div className='overflow-hidden rounded-2xl border shadow-2xl'>
                <img
                  src={'/Screenshot_2025-12-02_at_20.33.30_1764704013648.png'}
                  alt='Cartway Team at Ibadan Tech Expo'
                  className='h-auto w-full object-cover'
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className='bg-muted/30 py-20 md:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <motion.div
            className='mx-auto mb-16 max-w-2xl text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span className='text-primary text-sm font-medium tracking-wider uppercase'>
              What You Get
            </span>
            <h2
              className='mt-3 mb-4 text-3xl font-bold md:text-4xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Everything You Need to Win
            </h2>
            <p className='text-muted-foreground text-lg'>
              One platform that transforms how you run your dispatch business.
            </p>
          </motion.div>

          <motion.div
            className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}>
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`hover-elevate h-full border-2 transition-all duration-300 ${feature.borderColor}`}>
                  <CardContent className='p-6'>
                    <div
                      className={`h-14 w-14 rounded-2xl ${feature.bgColor} mb-4 flex items-center justify-center`}>
                      <feature.icon className={`h-7 w-7 ${feature.color}`} />
                    </div>
                    <h3 className='mb-2 text-lg font-semibold'>
                      {feature.title}
                    </h3>
                    <p className='text-muted-foreground'>
                      {feature.description}
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
            className='mx-auto mb-12 max-w-3xl text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span className='text-primary text-sm font-medium tracking-wider uppercase'>
              The Clear Choice
            </span>
            <h2
              className='mt-3 mb-4 text-3xl font-bold md:text-4xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Scattered Tools vs. One Operating System
            </h2>
            <p className='text-muted-foreground text-lg'>
              Stop juggling WhatsApp, Excel, and paper notebooks. Get everything
              in one place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className='mb-8 grid gap-4 md:grid-cols-3'>
              <Card className='border-red-200 bg-red-50'>
                <CardContent className='flex items-center gap-3 p-4'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-red-100'>
                    <XCircle className='h-5 w-5 text-red-600' />
                  </div>
                  <div>
                    <p className='font-semibold text-red-700'>WhatsApp</p>
                    <p className='text-muted-foreground text-sm'>
                      No tracking, messages get lost
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className='border-amber-200 bg-amber-50'>
                <CardContent className='flex items-center gap-3 p-4'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100'>
                    <AlertTriangle className='h-5 w-5 text-amber-600' />
                  </div>
                  <div>
                    <p className='font-semibold text-amber-700'>Excel/Sheets</p>
                    <p className='text-muted-foreground text-sm'>
                      Manual entry, human errors
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className='border-red-200 bg-red-50'>
                <CardContent className='flex items-center gap-3 p-4'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-red-100'>
                    <XCircle className='h-5 w-5 text-red-600' />
                  </div>
                  <div>
                    <p className='font-semibold text-red-700'>Multiple Apps</p>
                    <p className='text-muted-foreground text-sm'>
                      Data doesn&apos;t sync
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className='overflow-hidden'>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead>
                    <tr className='bg-muted/50 border-b'>
                      <th className='p-4 text-left font-semibold'>Feature</th>
                      <th className='p-4 text-left font-semibold text-red-600'>
                        <div className='flex items-center gap-2'>
                          <AlertTriangle className='h-4 w-4' />
                          Scattered Tools
                        </div>
                      </th>
                      <th className='text-primary p-4 text-left font-semibold'>
                        <div className='flex items-center gap-2'>
                          <Sparkles className='h-4 w-4' />
                          Drovaq OS
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className='border-b last:border-b-0'>
                        <td className='p-4 font-medium'>{row.feature}</td>
                        <td className='p-4'>
                          <div className='flex items-center gap-2'>
                            {row.scatteredBad ? (
                              <XCircle className='h-4 w-4 shrink-0 text-red-500' />
                            ) : (
                              <AlertTriangle className='h-4 w-4 shrink-0 text-amber-500' />
                            )}
                            <span className='text-muted-foreground text-sm'>
                              {row.scattered}
                            </span>
                          </div>
                        </td>
                        <td className='p-4'>
                          <div className='flex items-center gap-2'>
                            <CheckCircle2 className='h-4 w-4 shrink-0 text-emerald-500' />
                            <span className='text-sm'>{row.drovaq}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className='bg-muted/30 py-20 md:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <motion.div
            className='mx-auto mb-16 max-w-2xl text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span className='text-primary text-sm font-medium tracking-wider uppercase'>
              Testimonials
            </span>
            <h2
              className='mt-3 mb-4 text-3xl font-bold md:text-4xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              What Dispatch Owners Say
            </h2>
            <p className='text-muted-foreground text-lg'>
              Real results from real dispatch business owners.
            </p>
          </motion.div>

          <motion.div
            className='grid gap-6 md:grid-cols-3'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}>
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className='hover-elevate h-full transition-all duration-300'>
                  <CardContent className='p-6'>
                    <Quote className='text-primary/20 mb-4 h-8 w-8' />
                    <p className='text-muted-foreground mb-6 leading-relaxed'>
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className='flex items-center gap-3'>
                      <div className='bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full font-semibold'>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className='font-semibold'>{testimonial.name}</p>
                        <p className='text-muted-foreground text-sm'>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
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
            <Card className='overflow-hidden border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100 shadow-xl'>
              <CardContent className='p-8 md:p-12'>
                <div className='flex flex-col items-center gap-8 md:flex-row'>
                  <div className='flex-1 text-center md:text-left'>
                    <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-700'>
                      <Calculator className='h-4 w-4' />
                      ROI Calculator
                    </div>
                    <h3
                      className='mb-4 text-2xl font-bold md:text-3xl'
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      See How Much You&apos;re Saving
                    </h3>
                    <p className='text-muted-foreground mb-6'>
                      Use our savings calculator to see exactly how much Drovaq
                      could save your dispatch business every month. Real
                      numbers, no guesswork.
                    </p>
                    <Link href='/impact'>
                      <Button
                        size='lg'
                        className='gap-2 bg-emerald-600 transition-all duration-300 hover:scale-105 hover:bg-emerald-700 hover:shadow-lg'
                        data-testid='button-savings-calculator'>
                        Calculate Your Savings{' '}
                        <ArrowRight className='h-4 w-4' />
                      </Button>
                    </Link>
                  </div>
                  <div className='flex-shrink-0'>
                    <div className='rounded-xl border bg-white p-6 shadow-lg'>
                      <p className='text-muted-foreground mb-2 text-sm'>
                        Average Monthly Savings
                      </p>
                      <p
                        className='text-4xl font-bold text-emerald-600'
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        ₦<AnimatedCounter target={233700} />
                      </p>
                      <p className='text-muted-foreground mt-2 text-sm'>
                        Based on 15 riders, 50 deliveries/day
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className='bg-muted/30 py-20 md:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <motion.div
            className='mx-auto mb-16 max-w-3xl text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span className='text-primary text-sm font-medium tracking-wider uppercase'>
              Beta Pricing
            </span>
            <h2
              className='mt-3 mb-4 text-3xl font-bold md:text-4xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Join the First 100 Companies
            </h2>
            <p className='text-muted-foreground text-lg'>
              Lock in your beta price today. Get unlimited access to the full
              platform and help shape the future of dispatch management.
            </p>
          </motion.div>

          <motion.div
            className='mx-auto max-w-lg'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <Card className='border-primary/20 relative overflow-hidden border-2 shadow-xl'>
              <div className='from-primary to-primary absolute top-0 right-0 left-0 h-1 bg-gradient-to-r via-emerald-500' />
              <CardContent className='p-8 text-center'>
                <div className='mb-6 flex items-center justify-center gap-3'>
                  <div className='bg-primary/10 text-primary flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium'>
                    <Sparkles className='h-4 w-4' />
                    Beta Launch Offer
                  </div>
                  <div className='flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600'>
                    <Users className='h-4 w-4' />
                    Limited Spots
                  </div>
                </div>

                <div className='mb-6'>
                  <span
                    className='text-5xl font-bold md:text-6xl'
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    ₦25,000
                  </span>
                  <span className='text-muted-foreground text-lg'>/month</span>
                </div>

                <p className='text-muted-foreground mb-8'>
                  Unlimited access to all core features
                </p>

                <div className='mb-8 space-y-3 text-left'>
                  {[
                    'Automated delivery management',
                    'Real-time fleet tracking',
                    'Customer inventory management',
                    'Payment & POD reconciliation',
                    'Fleet performance analytics',
                    'Online business listing',
                    'Priority support',
                  ].map((feature, index) => (
                    <div key={index} className='flex items-center gap-3'>
                      <CheckCircle2 className='h-5 w-5 shrink-0 text-emerald-500' />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a href='/api/login' className='block'>
                  <Button
                    size='lg'
                    className='cta-glow w-full gap-2 text-lg'
                    data-testid='button-pricing-join-beta'>
                    <Sparkles className='h-5 w-5' />
                    Join Beta Now <ArrowRight className='h-5 w-5' />
                  </Button>
                </a>

                <p className='text-muted-foreground mt-4 text-sm'>
                  No credit card required to start
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className='py-20 md:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <motion.div
            className='mx-auto mb-16 max-w-3xl text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span className='text-primary text-sm font-medium tracking-wider uppercase'>
              Why Drovaq
            </span>
            <h2
              className='mt-3 mb-4 text-3xl font-bold md:text-4xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Built by Dispatch Owners
              <br />
              For Dispatch Owners
            </h2>
            <p className='text-muted-foreground text-lg'>
              We didn&apos;t just study the industry — we built a company in it.
              Drovaq is the tool we wished we had.
            </p>
          </motion.div>

          <motion.div
            className='mx-auto grid max-w-4xl gap-8 md:grid-cols-3'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}>
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className='hover-elevate text-center transition-all duration-300'>
                  <CardContent className='p-8'>
                    <div
                      className={`h-14 w-14 rounded-2xl ${
                        index === 0
                          ? 'bg-emerald-100'
                          : index === 1
                            ? 'bg-blue-100'
                            : 'bg-purple-100'
                      } mx-auto mb-4 flex items-center justify-center`}>
                      {index === 0 ? (
                        <Truck className='h-7 w-7 text-emerald-600' />
                      ) : index === 1 ? (
                        <Package className='h-7 w-7 text-blue-600' />
                      ) : (
                        <Target className='h-7 w-7 text-purple-600' />
                      )}
                    </div>
                    <p
                      className='mb-2 text-3xl font-bold md:text-4xl'
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix || ''}
                      />
                    </p>
                    <h3 className='mb-1 font-semibold'>{stat.label}</h3>
                    <p className='text-muted-foreground text-sm'>
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className='bg-muted/30 py-16'>
        <div className='container mx-auto px-4 md:px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <Card className='border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100'>
              <CardContent className='p-8'>
                <div className='flex flex-col items-center gap-8 md:flex-row'>
                  <div className='flex items-start gap-4'>
                    <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20'>
                      <Award className='h-6 w-6 text-amber-600' />
                    </div>
                    <div>
                      <div className='mb-2 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1 text-sm font-medium text-amber-700'>
                        Competitive Advantage
                      </div>
                      <h3
                        className='mb-2 text-2xl font-bold'
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Mobility Company of the Year
                      </h3>
                      <p className='text-muted-foreground mb-4'>
                        Ibadan Tech Expo 2024
                      </p>
                      <p className='text-muted-foreground text-sm'>
                        Our team started by building Cartway — a dispatch
                        company that won Mobility Company of the Year at Ibadan
                        Tech Expo. This means there&apos;s solid industry
                        knowledge baked into every feature of Drovaq.
                      </p>
                    </div>
                  </div>
                  <div className='shrink-0 space-y-3'>
                    {[
                      'Deep industry knowledge from running Cartway',
                      'Award-winning team (Mobility Company of the Year)',
                      'Built from real operational experience, not theory',
                      'Designed to fix actual dispatch problems',
                      'Simple to use, powerful in production',
                    ].map((point, index) => (
                      <div key={index} className='flex items-center gap-2'>
                        <CheckCircle2 className='h-4 w-4 shrink-0 text-amber-600' />
                        <span className='text-sm'>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className='bg-primary text-primary-foreground py-20 md:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <motion.div
            className='mx-auto max-w-3xl text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm'>
              <Sparkles className='h-4 w-4' />
              The OS for Dispatch Companies
            </div>
            <h2
              className='mb-6 text-3xl font-bold md:text-4xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to Transform
              <br />
              Your Dispatch Business?
            </h2>
            <p className='mb-8 text-lg opacity-90'>
              Join the first 100 companies and get unlimited access at the beta
              price. Grow your fleet with systems that scale.
            </p>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <a href='/api/login'>
                <Button
                  size='lg'
                  variant='secondary'
                  className='w-full gap-2 transition-all duration-300 hover:scale-105 sm:w-auto'
                  data-testid='button-cta-join-beta'>
                  <Sparkles className='h-4 w-4' />
                  Join Beta Now <ArrowRight className='h-4 w-4' />
                </Button>
              </a>
              <Link href={'/pricing'}>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full gap-2 bg-transparent transition-all duration-300 sm:w-auto'
                  data-testid='button-cta-pricing'>
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
