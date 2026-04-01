import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@hv/ui', '@hv/utils', '@hv/constants', '@hv/types'],
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: '/services/cedar-fencing',
        destination: '/services/cedar',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
