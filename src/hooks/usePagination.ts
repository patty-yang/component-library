import { reactive } from 'vue'
import { useRequest } from './useRequest'
import type { RequestOptions } from './useRequest/types'

export const usePagination = <T, R>(
  func: (params?: T) => Promise<R>,
  options: RequestOptions<T> = {}
) => {
  const pagination = reactive({
    page: 1,
    pageSize: 10,
    total: 0
  })

  const { run, ...rest } = useRequest(func, {
    ...options,
    onSuccess: (data) => {
      pagination.total = data.total
    }
  })

  const onPageChange = (page: number) => {
    pagination.page = page
    run()
  }
  const onPageSizeChange = (pageSize: number) => {
    pagination.page = 1
    pagination.pageSize = pageSize
    run()
  }
  return {
    pagination,
    run,
    ...rest,
    onPageChange,
    onPageSizeChange
  }
}
