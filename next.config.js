/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["icon-library.com", "www.wifo.ac.at"],
  },
};

module.exports = nextConfig;

// async rewrites() {
//     return [
//       {
//         source: '/login/:path*',
//         destination: 'http://login.localhost:5400/:path*',
//       },
//       {
//         source: '/forum/:path*',
//         destination: 'http://forum.localhost:5400/:path*',
//       },
//     ];
//   }
