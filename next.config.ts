import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wtd0gxlsbnjxa0v4.public.blob.vercel-storage.com",
      },
    ],
  },
}

export default nextConfig
