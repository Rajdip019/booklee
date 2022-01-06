module.exports = {
  env: {
    GEOCODING_API_KEY: "oeTlX4cux0SER6DKdXyqyHIh110CwwxjKIetLzJL2Uo",
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false , path: false, os: false };
    return config;
  },
};