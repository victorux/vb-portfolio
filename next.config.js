// const composePlugins = require('next-compose-plugins');
// const mdxEnhanced = require('next-mdx-enhanced');

// const nextConfig = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     })

//     return config
//   },
// }

// module.exports = composePlugins([
//   mdxEnhanced({
//     layoutPath: './templates',
//   }),

// ],);


const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  
}

module.exports = nextConfig
