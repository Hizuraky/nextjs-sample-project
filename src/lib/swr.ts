import useSWR from 'swr'
import { AxiosResponse } from 'axios'
import fetcher from '@/utils/fetcher'
import { EndPoint } from '@/utils/endPoint'

const useSwr = <Data>(url: EndPoint) => {
  const { data, error, mutate } = useSWR<AxiosResponse<Data>>(url, fetcher)
  return { data: data?.data, error, mutate }
}

export default useSwr
