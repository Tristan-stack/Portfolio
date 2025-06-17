import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

/**
 * Active le bundle analyzer avec `ANALYZE=true pnpm build`
 */
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/**
 * Configuration Next.js optimisée
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true, // Gzip compression

  images: {
    formats: ["image/webp", "image/avif"],
    // domains: ["yourdomain.com"], // Décommente si tu charges des images externes
  },

  experimental: {
    optimizeCss: true, // Active l’optimisation CSS
  },

  // Ajoute d'autres options si nécessaire
};

export default withAnalyzer(nextConfig);
