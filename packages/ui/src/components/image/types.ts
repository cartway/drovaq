import { ImageProps } from 'next/image';
import { ComponentProps } from 'react';

export interface INextImageProps
  extends ComponentProps<'div'>,
    Pick<ImageProps, 'src' | 'alt' | 'quality' | 'style'> {}
