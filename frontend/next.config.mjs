/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable static export for production builds served by Express
  // Remove this line for development with next dev
  output: process.env.NEXT_OUTPUT_MODE === 'export' ? 'export' : undefined,

  images: {
    // When using static export, images must be unoptimized
    unoptimized: process.env.NEXT_OUTPUT_MODE === 'export' ? true : false
  },

  // Ensure trailing slashes for static file serving
  trailingSlash: process.env.NEXT_OUTPUT_MODE === 'export' ? true : false,

  // Expose environment variables to the browser
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || '/api',
  },
};

export default nextConfig;
