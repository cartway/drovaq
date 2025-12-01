import * as React from 'react';

import { cn } from '@/utils/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Field } from '@ark-ui/react/field';

const inputVariants = cva('', {
  variants: {
    variant: {
      auth: 'h-[44px] border border-[#F2F4F7] bg-[#F9FAFB] text-[14px] rounded-[15px] leading-[20px] font-medium text-[#101828] focus-visible:border-[#650BFF] focus-visible:shadow-[0px_0px_0px_2px_#650BFF40]',
    },
  },
});

function Input({
  className,
  type,
  variant,
  ...props
}: React.ComponentProps<'input'> & VariantProps<typeof inputVariants>) {
  return (
    <Field.Input asChild>
      <input
        type={type}
        data-slot='input'
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          // 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          inputVariants({ variant, className })
        )}
        {...props}
      />
    </Field.Input>
  );
}

export { Input };
