/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["nocohub-001-prod-app-attachments.s3.us-east-2.amazonaws.com", "*"],
    },
};

module.exports = nextConfig;
