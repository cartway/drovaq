import { cn } from '@/utils/utils';
import {
  Toast,
  Toaster as ArkToaster,
  createToaster,
} from '@ark-ui/react/toast';
import { LuX } from 'react-icons/lu';

export const toaster = createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 24,
});

export const Toaster = () => {
  return (
    <ArkToaster toaster={toaster}>
      {(toast) => {
        let color = 'border-red-600 bg-red-100';
        if (toast.type === 'success') color = 'border-green-600 bg-green-100';
        return (
          <Toast.Root
            key={toast.id}
            className={cn(
              color,
              'rounded-2 relative min-w-[300px] rounded-sm border p-4 text-[#1A1A1A]'
            )}>
            <Toast.Title className='text-xl font-medium'>
              {toast.title}
            </Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
            <Toast.CloseTrigger
              className='absolute top-2 right-2 z-10 cursor-pointer'
              asChild>
              <LuX />
            </Toast.CloseTrigger>
          </Toast.Root>
        );
      }}
    </ArkToaster>
  );
};
