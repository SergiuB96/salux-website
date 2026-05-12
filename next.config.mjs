/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ["resend", "svix"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
        unoptimized: true,
    },
};

export default nextConfig;
