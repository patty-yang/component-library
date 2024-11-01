export type Fun<T, P extends any[]> = (...args: P) => Promise<P>

export interface Options<T, P extends any[]> {
  // 是否手动请求
  manual?: boolean
  // 默认参数
  defaultParams?: P
  // 成功回调
  onSuccess?: (data: T, params: P) => void
  // 失败回调
  onError?: (e: Error, params: P) => void
}

export interface IRequestResult<T> {
  loading: boolean
  data?: T
  error?: any
}