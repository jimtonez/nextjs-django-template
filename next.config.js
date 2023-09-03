/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["developers.redhat.com", "avatars.githubusercontent.com", "camo.githubusercontent.com", "next-auth.js.org", "seeklogo.com", "www.postgresql.org", "icons-for-free.com", "upload.wikimedia.org", "cdn.worldvectorlogo.com"]
    },
    output: 'standalone'

}

module.exports = nextConfig
