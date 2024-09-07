/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV == "production"

const nextConfig = {
  output: isProd ? "export" : "",
}

module.exports = nextConfig
