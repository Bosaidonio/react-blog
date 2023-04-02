/**
 * @file request.ts
 * 本文件提供了一个通用的HTTP请求方法，用于处理API请求和错误处理。
 * 它还包括一个接口IRequest，用于描述请求对象的类型。
 * @author Your Name <your.email@example.com>
 * @created 2023-03-31
 * @lastModified 2023-04-05
 *
 * @exports IRequest - 描述请求对象的接口类型。
 * @exports request - 通用的HTTP请求方法，用于处理API请求和错误处理。
 */

import { notification } from 'antd'
import qs from 'qs'
import { store } from '@/store'
import { ActionTypes } from '@/store/action-types'
import { isEmptyObject, isExternal, isObject } from '@/utils/is'
import { deleteEmptyKey } from '@/utils'
import { isString } from '@/utils/is'
const apiUrl = process.env.REACT_APP_API_URL

export interface IRequest extends RequestInit {
  url: string
  data?: any
  token?: string
}
const timeout = <T = any>(ms: number, controller: AbortController): Promise<T> => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      controller.abort()
      reject(new Error(`请求超时`))
    }, ms)
  })
}

/**
 * @description 处理错误
 * @param {any} error 错误信息
 * @param {number} requestCount 请求次数
 * @returns {void}
 */
const handleErrors = (error: any, requestCount: number) => {
  notification.error({
    message: error.message,
    description: isString(error.error) ? error.error : isObject(error.error) ? Object.values(error.error)[0] : '请求失败，请检查网络或联系管理员！',
  })
  requestCount = requestCount - 1
  if (requestCount === 0) {
    setTimeout(() => {
      store.dispatch({ type: ActionTypes.LOADING, payload: false })
    }, 500)
  }
}
let requestCount = 0
export const request = <T = any>({ url, data, token, ...restConfig }: IRequest): Promise<T> => {
  const controller = new AbortController()
  const { signal } = controller
  const headers = deleteEmptyKey({
    Authorization: token ? `Bearer ${token}` : '',
    'Content-Type': data ? 'application/json' : '',
  })

  const config = {
    method: 'GET',
    headers,
    ...restConfig,
    signal,
  }

  // 是Get请求并且不是外链
  if (config.method.toUpperCase() === 'GET' && !isExternal(url) && data) {
    url += `${isEmptyObject(data) ? '' : '?'}${qs.stringify(data)}`
  } else if (config.method.toUpperCase() !== 'GET') {
    // 是Post请求
    config.body = isString(data) ? data : JSON.stringify(data || {})
  }
  requestCount = requestCount + 1
  if (requestCount > 0) {
    store.dispatch({ type: ActionTypes.LOADING, payload: true })
  }

  // 判断是否请求的是外链，而不是服务器地址
  const requestUrl = isExternal(url) ? url : `${apiUrl}${url}`

  const fetchRequest: Promise<T> = fetch(requestUrl, config).then(async (response) => {
    requestCount = requestCount - 1
    if (requestCount === 0) {
      setTimeout(() => {
        store.dispatch({ type: ActionTypes.LOADING, payload: false })
      }, 500)
    }
    if (config.headers.Accept === 'text/event-stream') {
      return Promise.resolve(response.body)
    }
    const res = await response.json()
    if (response.status === 401) {
      return Promise.reject(res)
    }
    if (response.ok) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  })
  const fetchTimeout: Promise<T> = timeout(60 * 1000, controller)
  return Promise.race<T>([fetchRequest, fetchTimeout]).catch((error) => {
    handleErrors(error, requestCount)
    return Promise.reject(error)
  })
}
