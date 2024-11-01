import { reactive, toRefs } from 'vue'

import type { Fun, Options, IRequestResult } from './types'

const defaultResultOptions: IRequestResult<any> = {
  loading: false,
  data: undefined,
  error: undefined,
}

const resultOptions = reactive(defaultResultOptions)
export const useRequest = <T, P extends any[]>(
 func: Fun<T, P>,
  options: Options<T, P>,
) => {
  const {
    manual = false,
    defaultParams = [] as unknown as P,
    onSuccess,
    onError,
  } = options
  const run = (...args: P) => {
    resultOptions.loading = true
    func(...args)
      .then((res: any) => {
        resultOptions.data = res.data
        onSuccess?.(res.data, args)
      })
      .catch(error => {
        resultOptions.error = error
        onError?.(error, args)
      })
      .finally(() => {
        resultOptions.loading = false
      })
  }

  if (!manual) {
    run(...(defaultParams || []))
  }
  return {
    ...toRefs(resultOptions),
    run,
  }
}
