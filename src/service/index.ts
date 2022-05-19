import YJRequest from './request'

const yjRequest = new YJRequest({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? '/api'
      : 'http://152.136.185.210:5000',
  timeout: 10000,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      // const token =
      // if (token) {
      //   config.headers!.Authorization = `Bearer ${token}`
      // }
      // console.log('单实例请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('单实例请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      // console.log('单实例响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      // console.log('单实例响应失败的拦截')
      return err
    }
  }
})

export default yjRequest
