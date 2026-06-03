/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
 serverComponentsExternalPackages: ['@better-auth/kysely-adapter'],
  },
  

};

export default nextConfig;
