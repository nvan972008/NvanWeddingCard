/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // xuất ra static site trong thư mục out/
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  }
}

export default nextConfig
