import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Site images are served from Cloudinary
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/b5lvyi64/**",
      },
    ],
  },
};

export default nextConfig;
