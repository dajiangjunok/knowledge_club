const { defineConfig } = require('@vue/cli-service')
const isProd = process.env.NODE_ENV === 'production'

module.exports = defineConfig({
  assetsDir: 'static',
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '/',
  productionSourceMap: !isProd,
  transpileDependencies: ['@mdfe/*'],
  lintOnSave: false,
  devServer: {
    port: 3000,
    proxy: require('./config/proxy.ts')
    // proxy: {
    //   '^/api': {
    //     target: 'http://152.136.185.210:5000',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
})
