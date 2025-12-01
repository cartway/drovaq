import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents:false,
  images: {
     qualities: [75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uuggxtszhitznobhirpd.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'kqqzjraghddbtdqcuauu.supabase.co',
      },
    ],
  },
};

export default nextConfig;
