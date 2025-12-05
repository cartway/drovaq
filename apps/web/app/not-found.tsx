'use client';

import { useRouter } from '@repo/ui';
import { Button } from '@repo/ui/components';
import { Home, ArrowLeft } from '@repo/ui/icons';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function NotFound() {
  const router = useRouter();
  return (
    <div className='flex min-h-[70vh] items-center justify-center px-4'>
      <div className='max-w-md text-center'>
        <div className='mb-8'>
          <h1
            className='text-primary text-8xl font-bold'
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            404
          </h1>
        </div>
        <h2 className='mb-4 text-2xl font-bold'>Page Not Found</h2>
        <p className='text-muted-foreground mb-8'>
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved or deleted.
        </p>
        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
          <Link href='/'>
            <Button
              className='w-full gap-2 sm:w-auto'
              data-testid='button-go-home'>
              <Home className='h-4 w-4' />
              Go Home
            </Button>
          </Link>
          <Button
            variant='outline'
            className='w-full gap-2 sm:w-auto'
            onClick={() => router.back()}
            data-testid='button-go-back'>
            <ArrowLeft className='h-4 w-4' />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
