import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i5.walmartimages.com",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },
};

export default withNextVideo(nextConfig);