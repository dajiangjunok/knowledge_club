/**
 * 默认代理配置
 *
 * @link
 * @type {import('http-proxy-middleware').Options}
 */
const proxyOptions = {
  // 代理目标
  // target: 'https://mcrp.mediinfo.cn/',
  target: 'http://172.19.33.60:30003/',
  // 修改请求头的 Origin 为 target 值
  changeOrigin: true
}

/**
 * 配置 http 代理
 * @link https://cli.vuejs.org/zh/config/#devserver-proxy
 * @type {import('webpack-dev-server').ProxyConfigMap}
 */
module.exports = {
  //#region home 用于处理oidc登录问题，因为callback都在home中
  '/home': {
    ...proxyOptions
  },
  '/static': {
    ...proxyOptions
  },
  '/data/config.json': {
    ...proxyOptions
  },
  '/mcrp-authserver': {
    ...proxyOptions
  }
}
