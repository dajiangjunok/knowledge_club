import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface YjInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (result: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface YjRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YjInterceptors<T>
  isShowLoading?: boolean
}
