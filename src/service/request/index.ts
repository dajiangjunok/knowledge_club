import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'

import { YjInterceptors, YjRequestConfig } from './type'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

// 如果config类型是AxiosRequestConfig，那么就需要满足里面对象属性，
// 如果我们需要自定义一些传入的属性，那么肯定是无法实现
// 此时我们可以自定义一个接口，让我们的接口继承自AxiosRequestConfig来实现
const SHOW_LOADING = false

class YJRequest {
  instance: AxiosInstance
  interceptors?: YjInterceptors
  isShowLoading: boolean = SHOW_LOADING
  loading?: LoadingInstance

  constructor(config: YjRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存基本信息
    this.isShowLoading = config.isShowLoading ?? SHOW_LOADING
    this.interceptors = config.interceptors
    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器【单个实例的拦截器，创建实例时自己传入】
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 2.所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.isShowLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.8)'
          })
        }

        // console.log('所有实例拦截器：请求发送拦截')
        return config
      },
      (err) => {
        // console.log('所有实例拦截器：请求发送拦截失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.loading?.close()
        }, 500)
        // console.log('所有实例拦截器：请求返回拦截')
        return res.data
      },
      (err) => {
        this.loading?.close()
        // console.log('所有实例拦截器：请求返回拦截失败')
        return err
      }
    )
  }

  request<T>(config: YjRequestConfig<T>): Promise<any> {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.isShowLoading = config.isShowLoading ?? SHOW_LOADING

    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: YjRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: YjRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  put<T>(config: YjRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PUT' })
  }

  delete<T>(config: YjRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: YjRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default YJRequest
