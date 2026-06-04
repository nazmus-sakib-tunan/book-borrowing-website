/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
 serverExternalPackages: [
  "@better-auth/kysely-adapter",
],

};

export default nextConfig;
