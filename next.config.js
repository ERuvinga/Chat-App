/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REMOTE_API_LINK: "http://127.0.0.1:4002",
    API_LINK: "https://chatapp-wq8r.onrender.com"
  }
}

module.exports = nextConfig
