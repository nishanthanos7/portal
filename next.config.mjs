/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Add your export setting here
  images: {
    domains: [
      "insidethemagic.net",
      "cdn.pixabay.com",
      "npcdn.ratopati.com",
      "via.placeholder.com",
      "fakestoreapi.com",
      "www.onlinekhabar.com",
      "img.freepik.com",
      "assets-cdn-api.ekantipur.com",
      "assets-cdn.ekantipur.com",
    ],
  },
};

export default nextConfig;
