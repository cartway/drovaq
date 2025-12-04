'use client';

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
} from '@repo/ui/components';
// import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, z, zodResolver } from '@repo/ui/form';

// import { useMutation } from '@tanstack/react-query';
// import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@repo/ui/hooks';
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Loader2,
  Send,
  GraduationCap,
  Lightbulb,
  Heart,
  Rocket,
} from '@repo/ui/icons';

import { useState } from 'react';

const applicationFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  role: z.string(),
  coverLetter: z.string().optional(),
  linkedinUrl: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  portfolioUrl: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
});

type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

interface Role {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}

const roles: Role[] = [
  {
    id: 'operations-intern',
    title: 'Operations Intern',
    department: 'Operations',
    type: 'Internship',
    location: 'Lagos, Nigeria',
    description:
      "Join our operations team to help manage and improve dispatch company relationships. You'll work directly with customers to understand their needs and ensure smooth onboarding.",
    requirements: [
      'Currently pursuing or recently completed a degree in Business, Operations, or related field',
      'Strong communication and interpersonal skills',
      'Interest in logistics and supply chain management',
      'Proficiency in Microsoft Office or Google Workspace',
      'Ability to work in a fast-paced startup environment',
    ],
  },
  {
    id: 'product-intern',
    title: 'Product Intern',
    department: 'Product',
    type: 'Internship',
    location: 'Lagos, Nigeria',
    description:
      "Work with our product team to shape the future of dispatch management. You'll help gather user feedback, analyze features, and contribute to product roadmap discussions.",
    requirements: [
      'Currently pursuing or recently completed a degree in Product Design, Business, or related field',
      'Strong analytical and problem-solving skills',
      'Interest in user experience and product development',
      'Basic understanding of software development processes',
      'Excellent written and verbal communication skills',
    ],
  },
  {
    id: 'tech-intern',
    title: 'Tech Intern',
    department: 'Engineering',
    type: 'Internship',
    location: 'Lagos, Nigeria (Remote OK)',
    description:
      "Join our engineering team to build the operating system for dispatch companies. You'll work on real features that impact thousands of deliveries daily.",
    requirements: [
      'Currently pursuing or recently completed a degree in Computer Science or related field',
      'Proficiency in at least one programming language (JavaScript, Python, etc.)',
      'Understanding of web development fundamentals',
      'Familiarity with Git and version control',
      'Eagerness to learn and grow in a startup environment',
    ],
  },
  {
    id: 'marketing-intern',
    title: 'Marketing Intern',
    department: 'Marketing',
    type: 'Internship',
    location: 'Lagos, Nigeria',
    description:
      "Help us spread the word about Drovaq. You'll create content, manage social media, and help develop marketing strategies for the dispatch industry.",
    requirements: [
      'Currently pursuing or recently completed a degree in Marketing, Communications, or related field',
      'Strong writing and content creation skills',
      'Experience with social media platforms',
      'Creative thinking and attention to detail',
      'Interest in B2B marketing and the logistics industry',
    ],
  },
];

const values = [
  {
    icon: GraduationCap,
    title: 'Learn Fast',
    description:
      "We're a startup. You'll learn more in 3 months than in a year elsewhere.",
  },
  {
    icon: Lightbulb,
    title: 'Real Impact',
    description:
      'Your work will directly affect how dispatch companies operate across Nigeria.',
  },
  {
    icon: Heart,
    title: 'Great Culture',
    description:
      "We're a small, tight-knit team that values collaboration and fun.",
  },
  {
    icon: Rocket,
    title: 'Grow With Us',
    description:
      'As we scale, top performers will have opportunities to grow into full-time roles.',
  },
];

export const CareersPageContent = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const { toast } = useToast();

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      role: '',
      coverLetter: '',
      linkedinUrl: '',
      portfolioUrl: '',
    },
  });

  // const applicationMutation = useMutation({
  //   mutationFn: async (data: ApplicationFormValues) => {
  //     return apiRequest('POST', '/api/career-applications', data);
  //   },
  //   onSuccess: () => {
  //     toast({
  //       title: 'Application submitted!',
  //       description: "We'll review your application and get back to you soon.",
  //     });
  //     form.reset();
  //     setIsDialogOpen(false);
  //   },
  //   onError: () => {
  //     toast({
  //       title: 'Something went wrong',
  //       description: 'Please try again later.',
  //       variant: 'destructive',
  //     });
  //   },
  // });

  const handleApply = (role: Role) => {
    setSelectedRole(role);
    form.setValue('role', role.title);
    setIsDialogOpen(true);
  };

  // const onSubmit = (data: ApplicationFormValues) => {
  //   applicationMutation.mutate(data);
  // };

  return (
    <div className='flex flex-col'>
      <section className='from-primary/5 to-background bg-gradient-to-b py-20 md:py-28'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <span className='text-primary text-sm font-medium tracking-wider uppercase'>
              Careers
            </span>
            <h1
              className='mt-3 mb-6 text-4xl font-bold md:text-5xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Join the <span className='text-primary'>Drovaq</span> team
            </h1>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              We&apos;re building the operating system for dispatch companies in
              Africa. Join us and help transform how logistics works across the
              continent.
            </p>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='mx-auto mb-16 max-w-2xl text-center'>
            <span className='text-primary text-sm font-medium tracking-wider uppercase'>
              Why Join Us
            </span>
            <h2
              className='mt-3 mb-4 text-3xl font-bold md:text-4xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              The Drovaq experience
            </h2>
          </div>

          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {values.map((value, index) => (
              <Card
                key={index}
                className='hover-elevate text-center transition-all duration-200'>
                <CardContent className='p-8'>
                  <div className='bg-primary/10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl'>
                    <value.icon className='text-primary h-7 w-7' />
                  </div>
                  <h3 className='mb-2 text-lg font-semibold'>{value.title}</h3>
                  <p className='text-muted-foreground text-sm'>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-muted/30 py-20'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='mx-auto mb-16 max-w-2xl text-center'>
            <span className='text-primary text-sm font-medium tracking-wider uppercase'>
              Open Positions
            </span>
            <h2
              className='mt-3 mb-4 text-3xl font-bold md:text-4xl'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Internship opportunities
            </h2>
            <p className='text-muted-foreground text-lg'>
              We&apos;re looking for passionate interns to join our team and
              help build the future of dispatch management.
            </p>
          </div>

          <div className='mx-auto grid max-w-5xl gap-6 md:grid-cols-2'>
            {roles.map((role) => (
              <Card
                key={role.id}
                className='hover-elevate transition-all duration-200'>
                <CardHeader>
                  <div className='flex items-start justify-between gap-4'>
                    <div>
                      <CardTitle className='text-xl'>{role.title}</CardTitle>
                      <CardDescription className='mt-1'>
                        {role.department}
                      </CardDescription>
                    </div>
                    <div className='bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg'>
                      <Briefcase className='text-primary h-5 w-5' />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='text-muted-foreground flex flex-wrap gap-4 text-sm'>
                    <div className='flex items-center gap-1'>
                      <MapPin className='h-4 w-4' />
                      {role.location}
                    </div>
                    <div className='flex items-center gap-1'>
                      <Clock className='h-4 w-4' />
                      {role.type}
                    </div>
                  </div>
                  <p className='text-muted-foreground'>{role.description}</p>
                  <div>
                    <p className='mb-2 font-medium'>Requirements:</p>
                    <ul className='space-y-1'>
                      {role.requirements.slice(0, 3).map((req, index) => (
                        <li
                          key={index}
                          className='text-muted-foreground flex items-start gap-2 text-sm'>
                          <span className='text-primary mt-1'>•</span>
                          {req}
                        </li>
                      ))}
                      {role.requirements.length > 3 && (
                        <li className='text-muted-foreground text-sm'>
                          +{role.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className='w-full'
                    onClick={() => handleApply(role)}
                    data-testid={`button-apply-${role.id}`}>
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='max-h-[90vh] overflow-y-auto sm:max-w-[500px]'>
          <DialogHeader>
            <DialogTitle>Apply for {selectedRole?.title}</DialogTitle>
            <DialogDescription>
              Fill out the form below to apply for this position. We&apos;ll
              review your application and get back to you.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              // onSubmit={form.handleSubmit(onSubmit)}
              className='mt-4 space-y-4'>
              <FormField
                control={form.control}
                name='fullName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Your full name'
                        {...field}
                        data-testid='input-career-name'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='your@email.com'
                        {...field}
                        data-testid='input-career-email'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type='tel'
                        placeholder='+234 800 000 0000'
                        {...field}
                        data-testid='input-career-phone'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='linkedinUrl'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='https://linkedin.com/in/yourprofile'
                        {...field}
                        data-testid='input-career-linkedin'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='portfolioUrl'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio/GitHub (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='https://github.com/username'
                        {...field}
                        data-testid='input-career-portfolio'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='coverLetter'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Letter</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                        className='min-h-[120px] resize-none'
                        {...field}
                        data-testid='textarea-career-cover'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type='submit'
                className='w-full gap-2'
                // disabled={ap/plicationMutation.isPending}
                data-testid='button-career-submit'>
                {/* {applicationMutation.isPending ? (
                  <>
                    <Loader2 className='h-4 w-4 animate-spin' />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className='h-4 w-4' />
                    Submit Application
                  </>
                )} */}
                <Send className='h-4 w-4' />
                Submit Application
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <section className='py-20'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2
              className='mb-4 text-3xl font-bold'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Don&apos;t see the right role?
            </h2>
            <p className='text-muted-foreground mb-8 text-lg'>
              We&apos;re always looking for talented people. Send us your resume
              and we&apos;ll keep you in mind for future opportunities.
            </p>
            <a href='mailto:careers@drovaq.com'>
              <Button
                size='lg'
                variant='outline'
                className='gap-2'
                data-testid='button-send-resume'>
                <Send className='h-4 w-4' />
                Send Your Resume
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
