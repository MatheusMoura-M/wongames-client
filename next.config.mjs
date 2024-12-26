/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "items.gog.com"
      },
      {
        protocol: "https",
        hostname: "s2-g1.glbimg.com"
      }
    ]
  }
}

import withPWA from 'next-pwa'

const isProd = process.env.NODE_ENV === 'production'

const withPWAConfig = withPWA({
  dest: 'public',
  disable: !isProd
})

const nextConfigFunction = withPWAConfig(nextConfig)

export default nextConfigFunction
