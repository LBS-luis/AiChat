/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Link',
            value: '/favicon.ico; rel="icon"',
          },
          {
            key: 'Link',
            value: '/favicon.ico; rel="shortcut icon"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
