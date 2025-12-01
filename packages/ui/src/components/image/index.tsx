'use client';

import Image from 'next/image';
import { CSSProperties, FC } from 'react';

import { INextImageProps } from './types';

/**
 * Chakra-UI Next-Image component,
 * this component is a combination of chakra ui & next-image to add chakra responsiveness to next-image
 * @param props
 * @returns
 */

// NextImage Component
const NextImage: FC<INextImageProps> = (props) => {
  const { src, quality, alt, style, ...rest } = props;

  // Define default style
  const defaultStyle: CSSProperties = {
    objectFit: 'cover',
  };

  // Merge incoming style with default
  const mergedStyle: CSSProperties = { ...defaultStyle, ...style };

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#20BEB8" offset="20%" />
        <stop stop-color="#0C4C49" offset="50%" />
        <stop stop-color="#20BEB8" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#20BEB8" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  return (
    <div
      style={{
        position: 'relative',
        height: 'full',
        width: 'full',
        overflow: 'hidden',
      }}
      {...rest}>
      <Image
        style={mergedStyle}
        fill={true}
        src={src}
        alt={alt}
        quality={quality || 100}
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />
    </div>
  );
};

export default NextImage;
