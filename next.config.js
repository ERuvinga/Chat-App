/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_LINK: "http://127.0.0.1:4002",
    REMOTE_API_LINK: "https://chatapp-wq8r.onrender.com"
  }
}

module.exports = nextConfig
