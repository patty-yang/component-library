import { reactive, watch, toRefs, onUnmounted } from 'vue'
import type { RequestOptions, ResultOptions } from './types'
export const useRequest = <T, R>(
  func: (params?: T) => Promise<R>,
  options: RequestOptions<T> = {}
) => {
  const {
    manual = false,
    defaultParams,
    onSuccess,
    onError,
    onBefore,
    onFinally,
    formatResult,
    refreshDeps = [], // 依赖刷新
    pollingInterval, // 轮询间隔
    debounceWait, // 防抖等待时间
    throttleWait, // 节流等待时间
    retryCount = 0 // 错误重试次数
    // cacheKey         // 缓存key
  } = options

  const resultOptions = reactive<ResultOptions>({
    loading: false,
    data: undefined,
    error: undefined
  })

  let pollingTimer: number | null = null
  let retryTimes = 0

  const throttle = (fn: Function, delay: number = 500) => {
    let timer: number | null = null
    return function (...args: any[]) {
      const ctx = this
      if (timer == null) {
        timer = setTimeout(() => {
          fn.apply(ctx, args)
          clearTimeout(timer as number)
          timer = null
        }, delay)
      }
    }
  }

  const debounce = (func: Function, delay: number = 500) => {
    let timeout: number | null = null
    return function (...args: any[]) {
      const ctx = this
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        func.apply(ctx, args)
      }, delay)
    }
  }

  const _run = async (params?: T) => {
    try {
      onBefore?.(params)
      resultOptions.loading = true
      resultOptions.error = undefined

      const res = await func(params)
      const formattedResult = formatResult ? formatResult(res.data) : res.data
      resultOptions.data = formattedResult.records
      onSuccess?.(formattedResult, params)

      if (pollingInterval) {
        pollingTimer = setTimeout(() => {
          _run(params)
        }, pollingInterval)
      }

      return formattedResult
    } catch (error) {
      resultOptions.error = error

      if (retryTimes < retryCount) {
        retryTimes++
        return _run(params)
      }

      onError?.(error, params)
      throw error
    } finally {
      resultOptions.loading = false
      onFinally?.()
    }
  }

  const run = debounceWait
    ? debounce(_run, debounceWait)
    : throttleWait
      ? throttle(_run, throttleWait)
      : _run

  watch(refreshDeps, () => {
    if (!manual) {
      run(defaultParams || {})
    }
  })

  if (!manual) {
    run(defaultParams || {})
  }

  onUnmounted(() => {
    if (pollingTimer) {
      clearTimeout(pollingTimer)
    }
  })

  return {
    ...toRefs(resultOptions),
    run,
    refresh: () => run(defaultParams || {}),
    cancel: () => {
      if (pollingTimer) {
        clearTimeout(pollingTimer)
      }
    }
  }
}
