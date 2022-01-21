/*
 * @Author: Mario
 * @Date: 2021-12-25 15:28:27
 * @LastEditTime: 2022-01-21 13:32:59
 * @LastEditors: Mario
 * @Description: 封装fetch请求
 */

import { message } from 'antd'
import qs from 'qs'
import { store } from '@/store'
import { ActionTypes } from '@/store/action-types'
import { isExternal } from '@/utils/is'
const apiUrl = process.env.REACT_APP_API_URL

interface IRequest extends RequestInit {
  url: string
  data?: object
  token?: string
}

let requestCount = 0
export const request = ({ url, data, token, ...restConfig }: IRequest) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...restConfig,
  }

  // 是Get请求并且不是外链
  if (config.method.toUpperCase() === 'GET' && !isExternal(url)) {
    url += `?${qs.stringify(data)}`
  } else if (config.method.toUpperCase() !== 'GET') {
    config.body = JSON.stringify(data || {})
  }
  requestCount = requestCount + 1
  if (requestCount > 0) {
    store.dispatch({ type: ActionTypes.LOADING, payload: true })
  }
  const requestUrl = isExternal(url) ? url : `${apiUrl}${url}`
  return fetch(requestUrl, config).then(async (response) => {
    requestCount = requestCount - 1
    if (requestCount === 0) {
      setTimeout(() => {
        store.dispatch({ type: ActionTypes.LOADING, payload: false })
      }, 500)
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
