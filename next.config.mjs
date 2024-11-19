/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        domains: ['your-image-domain.com'],
        unoptimized: true,
    },
};

export default nextConfig;
