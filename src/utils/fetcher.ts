import { API } from '@/lib/axios'
import { EP, EndPoint } from '@/utils/endPoint'

const fetcher = (url: EndPoint, param?: number) =>
  API.get(EP[url](param))
    .then((res) => {
      return res
    })
    .catch((err) => {
      if (err?.message.startsWith('Network Error')) err.response = { message: 'Network Error' }
      throw err.response
    })

export default fetcher
