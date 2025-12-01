import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: '#B80208',
    background_color: '#B80208',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/rider/home',
    name: 'Drovaq',
    short_name: 'Drovaq',
    description: 'Fast & Reliable Delivery Right to Your Doorstep',
    icons: [
      {
        src: '/icons/icon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icons/icon-64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: '/icons/icon-144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/icons/icon-384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
