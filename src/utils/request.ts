/*
 * @Author: Mario
 * @Date: 2021-12-25 15:28:27
 * @LastEditTime: 2022-10-08 18:07:20
 * @LastEditors: mario marioworker@163.com
 * @Description: 封装fetch请求
 */

import { notification } from 'antd'
import qs from 'qs'
import { store } from '@/store'
import { ActionTypes } from '@/store/action-types'
import { isExternal } from '@/utils/is'
import { deleteEmptyKey } from '.'
const apiUrl = process.env.REACT_APP_API_URL
console.log(process.env.REACT_APP_API_URL)

interface IRequest extends RequestInit {
  url: string
  data?: object
  token?: string
}

let requestCount = 0
export const request = ({ url, data, token, ...restConfig }: IRequest) => {
  const headers = deleteEmptyKey({
    Authorization: token ? `Bearer ${token}` : '',
    'Content-Type': data ? 'application/json' : '',
  })
  const config = {
    method: 'GET',
    headers,
    ...restConfig,
  }

  // 是Get请求并且不是外链
  if (config.method.toUpperCase() === 'GET' && !isExternal(url) && data) {
    url += `?${qs.stringify(data)}`
  } else if (config.method.toUpperCase() !== 'GET') {
    // 是Post请求
    config.body = JSON.stringify(data || {})
  }
  requestCount = requestCount + 1
  if (requestCount > 0) {
    store.dispatch({ type: ActionTypes.LOADING, payload: true })
  }

  // 判断是否请求的是外链，而不是服务器地址
  const requestUrl = isExternal(url) ? url : `${apiUrl}${url}`

  return fetch(requestUrl, config)
    .then(async (response) => {
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
        return Promise.reject(res)
      }
    })
    .catch((error) => {
      notification.error({
        message: error.message,
        description: error.error || '请求失败，请检查网络或联系管理员！',
      })
      requestCount = requestCount - 1
      if (requestCount === 0) {
        setTimeout(() => {
          store.dispatch({ type: ActionTypes.LOADING, payload: false })
        }, 500)
      }
      return Promise.reject(error)
    })
}
