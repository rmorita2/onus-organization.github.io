/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static GitHub Pages export if using <Image> tags
  },
};

export default nextConfig;