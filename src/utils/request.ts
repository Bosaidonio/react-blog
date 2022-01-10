/*
 * @Author: Mario
 * @Date: 2021-12-25 15:28:27
 * @LastEditTime: 2022-01-05 17:21:25
 * @LastEditors: Mario
 * @Description: 封装fetch请求
 */

import { message } from 'antd'
import qs from 'qs'
import { store } from '@/store'
import { ActionTypes } from '@/store/action-types'
const apiUrl = process.env.REACT_APP_API_URL

interface IRequest extends RequestInit {
  data?: object
  token?: string
}
let requestCount = 0
export const request = (endpoint: string, { data, token, ...restConfig }: IRequest) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...restConfig,
  }

  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`
  } else {
    config.body = JSON.stringify(data || {})
  }
  requestCount = requestCount + 1
  if (requestCount > 0) {
    store.dispatch({ type: ActionTypes.LOADING, payload: true })
  }
  return fetch(`${apiUrl}${endpoint}`, config).then(async (response) => {
    requestCount = requestCount - 1
    if (requestCount === 0) {
      store.dispatch({ type: ActionTypes.LOADING, payload: false })
    }
    if (response.status === 401) {
      window.location.reload()
      return Promise.reject({ message: '请重新登录' })
    }
    const res = await response.json()
    if (response.ok) {
      return Promise.resolve(res)
    } else {
      message.error(res.message || '系统错误')
      return Promise.reject(res)
    }
  })
}
