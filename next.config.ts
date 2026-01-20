import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "drop-assets.ea.com" },
      { protocol: "https", hostname: "www.thewitcher.com" },
      { protocol: "https", hostname: "tse4.mm.bing.net" },
      { protocol: "https", hostname: "www.iitb.ac.in" },
      { protocol: "https", hostname: "freeimage.host" },
      { protocol: "https", hostname: "images.seeklogo.com" },
      { protocol: "https", hostname: "assets.website-files.com" },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
