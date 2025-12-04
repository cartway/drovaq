// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import {
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardFooter,
// } from '@repo/ui/components';

// import {
//   ArrowRight,
//   Calculator,
//   TrendingUp,
//   Clock,
//   Banknote,
//   BarChart3,
//   CheckCircle2,
//   Sparkles,
//   Target,
//   Zap,
//   Users,
//   Package,
// } from 'lucide-react';
// import { motion, useInView } from 'framer-motion';
// import teamImage from '@assets/Screenshot_2025-12-02_at_20.33.30_1764704013648.png';

// function AnimatedCounter({
//   target,
//   prefix = '',
//   suffix = '',
//   duration = 2000,
// }: {
//   target: number;
//   prefix?: string;
//   suffix?: string;
//   duration?: number;
// }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef<HTMLSpanElement>(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (!isInView) return;

//     let startTime: number;
//     const animate = (currentTime: number) => {
//       if (!startTime) startTime = currentTime;
//       const elapsed = currentTime - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const easeOut = 1 - Math.pow(1 - progress, 3);
//       setCount(Math.floor(easeOut * target));

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       }
//     };
//     requestAnimationFrame(animate);
//   }, [isInView, target, duration]);

//   return (
//     <span ref={ref}>
//       {prefix}
//       {count.toLocaleString()}
//       {suffix}
//     </span>
//   );
// }

// export default function Impact() {
//   const [fleetSize, setFleetSize] = useState([15]);
//   const [deliveriesPerDay, setDeliveriesPerDay] = useState([50]);
//   const [avgDeliveryFee, setAvgDeliveryFee] = useState([500]);
//   const [podPercentage, setPodPercentage] = useState([60]);

//   const monthlyDeliveries = deliveriesPerDay[0] * 26;
//   const monthlyRevenue = monthlyDeliveries * avgDeliveryFee[0];
//   const podRevenue = monthlyRevenue * (podPercentage[0] / 100);

//   const podLeakageRate = 0.05;
//   const laborHoursSaved = 65;
//   const laborCostPerHour = 2000;
//   const efficiencyGain = 0.15;

//   const recoveredPodLeakage = podRevenue * podLeakageRate;
//   const laborTimeSaved = laborHoursSaved * laborCostPerHour;
//   const efficiencyGains = monthlyRevenue * efficiencyGain;

//   const totalMonthlyBenefit =
//     recoveredPodLeakage + laborTimeSaved + efficiencyGains;
//   const drovaqCost = 25000;
//   const netMonthlyBenefit = totalMonthlyBenefit - drovaqCost;
//   const roi = ((netMonthlyBenefit / drovaqCost) * 100).toFixed(0);

//   const transformationStats = [
//     {
//       icon: Banknote,
//       value: '2.4M',
//       prefix: '₦',
//       label: 'Revenue Recovered',
//       description: 'From untracked POD payments in 6 months',
//       color: 'text-emerald-600',
//       bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
//     },
//     {
//       icon: Clock,
//       value: '80',
//       suffix: '%',
//       label: 'Faster Reconciliation',
//       description: 'Daily closing reduced from 3 hours to 30 minutes',
//       color: 'text-blue-600',
//       bgColor: 'bg-blue-100 dark:bg-blue-900/30',
//     },
//     {
//       icon: TrendingUp,
//       value: '40',
//       suffix: '%',
//       label: 'Efficiency Gain',
//       description: 'More deliveries with the same fleet size',
//       color: 'text-purple-600',
//       bgColor: 'bg-purple-100 dark:bg-purple-900/30',
//     },
//     {
//       icon: Users,
//       value: '2',
//       suffix: 'x',
//       label: 'Fleet Growth',
//       description: 'Scaled from 15 to 45 riders without chaos',
//       color: 'text-amber-600',
//       bgColor: 'bg-amber-100 dark:bg-amber-900/30',
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <div className='flex flex-col'>
//       <section className='from-primary/5 to-background bg-gradient-to-b py-20 md:py-28'>
//         <div className='container mx-auto px-4 md:px-6'>
//           <motion.div
//             className='mx-auto mb-16 max-w-3xl text-center'
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}>
//             <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400'>
//               <CheckCircle2 className='h-4 w-4' />
//               Case Study: Cartway Dispatch
//             </div>
//             <h1
//               className='mt-3 mb-6 text-4xl font-bold md:text-5xl'
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
//               The Transformation That{' '}
//               <span className='text-primary'>Built Drovaq</span>
//             </h1>
//             <p className='text-muted-foreground text-lg leading-relaxed'>
//               Our own dispatch company, Cartway, was the testing ground for
//               Drovaq. Here's what happened when we ate our own cooking.
//             </p>
//           </motion.div>

//           <motion.div
//             className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'
//             variants={containerVariants}
//             initial='hidden'
//             whileInView='visible'
//             viewport={{ once: true }}>
//             {transformationStats.map((stat, index) => (
//               <motion.div key={index} variants={itemVariants}>
//                 <Card className='hover-elevate hover:border-primary/20 h-full border-2 transition-all duration-300'>
//                   <CardContent className='p-6 text-center'>
//                     <div
//                       className={`h-14 w-14 rounded-2xl ${stat.bgColor} mx-auto mb-4 flex items-center justify-center`}>
//                       <stat.icon className={`h-7 w-7 ${stat.color}`} />
//                     </div>
//                     <p
//                       className='mb-2 text-3xl font-bold md:text-4xl'
//                       style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
//                       <AnimatedCounter
//                         target={parseInt(
//                           stat.value.replace(/\D/g, '') || stat.value
//                         )}
//                         prefix={stat.prefix}
//                         suffix={stat.suffix}
//                       />
//                     </p>
//                     <h3 className='mb-2 font-semibold'>{stat.label}</h3>
//                     <p className='text-muted-foreground text-sm'>
//                       {stat.description}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       <section className='py-20 md:py-28'>
//         <div className='container mx-auto px-4 md:px-6'>
//           <div className='grid items-center gap-16 lg:grid-cols-2'>
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}>
//               <span className='text-primary text-sm font-medium tracking-wider uppercase'>
//                 The Insight
//               </span>
//               <h2
//                 className='mt-3 mb-6 text-3xl font-bold md:text-4xl'
//                 style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
//                 We Built This From{' '}
//                 <span className='text-emerald-600'>Real Experience</span>
//               </h2>

//               <div className='relative mb-8'>
//                 <div className='absolute top-0 bottom-0 -left-4 w-1 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-300' />
//                 <blockquote className='text-muted-foreground pl-6 text-lg italic'>
//                   "The problem wasn't the riders. It was the absence of a single
//                   system that controlled operations, inventory, tracking,
//                   payments, and fleet performance."
//                 </blockquote>
//               </div>

//               <p className='text-muted-foreground mb-6'>
//                 We started <strong className='text-foreground'>Cartway</strong>,
//                 a dispatch company that grew rapidly. At scale, we discovered
//                 that tools become scattered, visibility disappears, revenue
//                 leakages grow, and customer experience becomes inconsistent.
//               </p>

//               <p className='text-muted-foreground mb-8'>
//                 That's when we built{' '}
//                 <strong className='text-foreground'>Drovaq</strong> — the
//                 Operating System that solved our own problems first.
//               </p>

//               <div className='inline-flex items-center gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-3'>
//                 <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20'>
//                   <Target className='h-4 w-4 text-amber-600' />
//                 </div>
//                 <div>
//                   <p className='font-semibold text-amber-700 dark:text-amber-400'>
//                     Mobility Company of the Year
//                   </p>
//                   <p className='text-muted-foreground text-sm'>
//                     Ibadan Tech Expo 2024
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className='relative'>
//               <div className='overflow-hidden rounded-2xl border shadow-2xl'>
//                 <img
//                   src={teamImage}
//                   alt='Cartway Team at Ibadan Tech Expo'
//                   className='h-auto w-full object-cover'
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className='bg-muted/30 py-20 md:py-28'>
//         <div className='container mx-auto px-4 md:px-6'>
//           <motion.div
//             className='mx-auto mb-12 max-w-3xl text-center'
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}>
//             <h2
//               className='mb-4 text-3xl font-bold md:text-4xl'
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
//               See Your Potential Savings
//             </h2>
//             <p className='text-muted-foreground text-lg'>
//               Enter your current operation details to see how much Drovaq could
//               save your dispatch business every month.
//             </p>
//           </motion.div>

//           <div className='mx-auto grid max-w-6xl gap-8 lg:grid-cols-2'>
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}>
//               <Card className='h-full'>
//                 <CardHeader>
//                   <CardTitle className='flex items-center gap-3'>
//                     <div className='bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg'>
//                       <Calculator className='text-primary h-5 w-5' />
//                     </div>
//                     <div>
//                       <span>Your Business Details</span>
//                       <p className='text-muted-foreground mt-1 text-sm font-normal'>
//                         Adjust the sliders to match your operation
//                       </p>
//                     </div>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className='space-y-8'>
//                   <div>
//                     <div className='mb-3 flex items-center justify-between'>
//                       <Label className='flex items-center gap-2 text-base'>
//                         <Users className='text-muted-foreground h-4 w-4' />
//                         Number of Riders
//                       </Label>
//                       <span className='text-primary bg-primary/10 rounded-md px-3 py-1 font-semibold'>
//                         {fleetSize[0]}
//                       </span>
//                     </div>
//                     <Slider
//                       value={fleetSize}
//                       onValueChange={setFleetSize}
//                       min={5}
//                       max={100}
//                       step={1}
//                       className='w-full'
//                       data-testid='slider-fleet-size'
//                     />
//                     <div className='text-muted-foreground mt-1 flex justify-between text-xs'>
//                       <span>5 riders</span>
//                       <span>100 riders</span>
//                     </div>
//                   </div>

//                   <div>
//                     <div className='mb-3 flex items-center justify-between'>
//                       <Label className='flex items-center gap-2 text-base'>
//                         <Package className='text-muted-foreground h-4 w-4' />
//                         Deliveries Per Day
//                       </Label>
//                       <span className='text-primary bg-primary/10 rounded-md px-3 py-1 font-semibold'>
//                         {deliveriesPerDay[0]}
//                       </span>
//                     </div>
//                     <Slider
//                       value={deliveriesPerDay}
//                       onValueChange={setDeliveriesPerDay}
//                       min={10}
//                       max={500}
//                       step={5}
//                       className='w-full'
//                       data-testid='slider-deliveries'
//                     />
//                     <div className='text-muted-foreground mt-1 flex justify-between text-xs'>
//                       <span>10/day</span>
//                       <span>500/day</span>
//                     </div>
//                   </div>

//                   <div>
//                     <div className='mb-3 flex items-center justify-between'>
//                       <Label className='flex items-center gap-2 text-base'>
//                         <Banknote className='text-muted-foreground h-4 w-4' />
//                         Average Delivery Fee (₦)
//                       </Label>
//                       <span className='text-primary bg-primary/10 rounded-md px-3 py-1 font-semibold'>
//                         ₦{avgDeliveryFee[0]}
//                       </span>
//                     </div>
//                     <Slider
//                       value={avgDeliveryFee}
//                       onValueChange={setAvgDeliveryFee}
//                       min={200}
//                       max={2000}
//                       step={50}
//                       className='w-full'
//                       data-testid='slider-avg-fee'
//                     />
//                     <div className='text-muted-foreground mt-1 flex justify-between text-xs'>
//                       <span>₦200</span>
//                       <span>₦2,000</span>
//                     </div>
//                   </div>

//                   <div>
//                     <div className='mb-3 flex items-center justify-between'>
//                       <Label className='flex items-center gap-2 text-base'>
//                         <BarChart3 className='text-muted-foreground h-4 w-4' />
//                         Pay-On-Delivery Percentage
//                       </Label>
//                       <span className='text-primary bg-primary/10 rounded-md px-3 py-1 font-semibold'>
//                         {podPercentage[0]}%
//                       </span>
//                     </div>
//                     <Slider
//                       value={podPercentage}
//                       onValueChange={setPodPercentage}
//                       min={0}
//                       max={100}
//                       step={5}
//                       className='w-full'
//                       data-testid='slider-pod-percentage'
//                     />
//                     <div className='text-muted-foreground mt-1 flex justify-between text-xs'>
//                       <span>0%</span>
//                       <span>100%</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}>
//               <Card className='border-primary/10 h-full border-2 shadow-xl'>
//                 <CardHeader>
//                   <CardTitle className='flex items-center gap-3'>
//                     <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10'>
//                       <TrendingUp className='h-5 w-5 text-emerald-600' />
//                     </div>
//                     <div>
//                       <span>Your Projected Savings</span>
//                       <p className='text-muted-foreground mt-1 text-sm font-normal'>
//                         Based on your input
//                       </p>
//                     </div>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className='space-y-4'>
//                   <div className='flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-900/20'>
//                     <div className='flex items-center gap-3'>
//                       <CheckCircle2 className='h-5 w-5 text-emerald-600' />
//                       <span className='text-sm'>Recovered POD Leakage</span>
//                     </div>
//                     <span className='font-semibold text-emerald-600'>
//                       +₦{recoveredPodLeakage.toLocaleString()}
//                     </span>
//                   </div>

//                   <div className='flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20'>
//                     <div className='flex items-center gap-3'>
//                       <Clock className='h-5 w-5 text-blue-600' />
//                       <span className='text-sm'>Labor Time Saved (65hrs)</span>
//                     </div>
//                     <span className='font-semibold text-blue-600'>
//                       +₦{laborTimeSaved.toLocaleString()}
//                     </span>
//                   </div>

//                   <div className='flex items-center justify-between rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20'>
//                     <div className='flex items-center gap-3'>
//                       <Zap className='h-5 w-5 text-purple-600' />
//                       <span className='text-sm'>Efficiency Gains (15%)</span>
//                     </div>
//                     <span className='font-semibold text-purple-600'>
//                       +₦{efficiencyGains.toLocaleString()}
//                     </span>
//                   </div>

//                   <div className='border-t pt-4'>
//                     <div className='mb-2 flex items-center justify-between'>
//                       <span className='font-medium'>Total Monthly Benefit</span>
//                       <span className='text-lg font-bold'>
//                         ₦{totalMonthlyBenefit.toLocaleString()}
//                       </span>
//                     </div>
//                     <div className='text-muted-foreground flex items-center justify-between'>
//                       <span className='text-sm'>Drovaq Monthly Cost</span>
//                       <span className='text-sm'>
//                         -₦{drovaqCost.toLocaleString()}
//                       </span>
//                     </div>
//                   </div>

//                   <div className='rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 text-white'>
//                     <div className='mb-2 flex items-center justify-between'>
//                       <span className='font-medium'>Net Monthly Benefit</span>
//                       <span
//                         className='text-3xl font-bold'
//                         style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
//                         ₦{netMonthlyBenefit.toLocaleString()}
//                       </span>
//                     </div>
//                     <div className='flex items-center gap-2 text-emerald-100'>
//                       <Sparkles className='h-4 w-4' />
//                       <span className='text-sm'>
//                         That's a {roi}% return on your investment
//                       </span>
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter>
//                   <a href='/api/login' className='w-full'>
//                     <Button
//                       size='lg'
//                       className='w-full gap-2'
//                       data-testid='button-calculator-join-beta'>
//                       <Sparkles className='h-4 w-4' />
//                       Join Beta & Start Saving{' '}
//                       <ArrowRight className='h-4 w-4' />
//                     </Button>
//                   </a>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className='bg-primary text-primary-foreground py-20'>
//         <div className='container mx-auto px-4 md:px-6'>
//           <motion.div
//             className='mx-auto max-w-3xl text-center'
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}>
//             <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm'>
//               <Sparkles className='h-4 w-4' />
//               Limited Beta Spots
//             </div>
//             <h2
//               className='mb-6 text-3xl font-bold md:text-4xl'
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
//               Ready to Transform Your Dispatch Business?
//             </h2>
//             <p className='mb-8 text-lg opacity-90'>
//               Join the first 100 companies and get unlimited access at the beta
//               price. Grow your fleet with systems that scale.
//             </p>
//             <div className='flex flex-col justify-center gap-4 sm:flex-row'>
//               <a href='/api/login'>
//                 <Button
//                   size='lg'
//                   variant='secondary'
//                   className='w-full gap-2 sm:w-auto'
//                   data-testid='button-impact-join-beta'>
//                   <Sparkles className='h-4 w-4' />
//                   Join Beta Now <ArrowRight className='h-4 w-4' />
//                 </Button>
//               </a>
//               <Link href='/pricing'>
//                 <Button
//                   size='lg'
//                   variant='outline'
//                   className='border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full gap-2 bg-transparent sm:w-auto'
//                   data-testid='button-impact-pricing'>
//                   View Pricing
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }
