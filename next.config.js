/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'i.pravatar.cc',
            
          },
        ],
      },
}

module.exports = nextConfig
