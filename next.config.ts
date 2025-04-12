import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://localhost:3000/api", // your backend
            },
        ];
    },
};

export default nextConfig;
