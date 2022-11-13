import axiosBase from 'axios'
import { API_URL } from '@/config'

const fetchSetting = () =>
  axiosBase.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    responseType: 'json',
    timeout: 15 * 1000,
  })

export const API = fetchSetting()
