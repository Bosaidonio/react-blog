/*
 * @Date: 2022-11-27 17:57:21
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2022-11-27 18:09:57
 * @Description: 浏览器本地缓存
 */
import { notification } from 'antd'

/**
 * @description:  设置本地缓存
 * @param {string} key
 * @param {any} value
 * @param {boolean} lasting
 * @return {*}
 */
export const setStorage = (key: string, value: any, lasting?: boolean) => {
  try {
    const data = JSON.stringify(value)
    if (lasting) {
      localStorage.setItem(key, data)
    } else {
      sessionStorage.setItem(key, data)
    }
  } catch (error: any) {
    notification.error({
      message: error.message,
      description: '存储失败',
    })
  }
}

/**
 * @description: 获取本地缓存
 * @param {string} key
 * @param {boolean} lasting
 * @return {*}
 */
export const getStorage = (key: string, lasting?: boolean) => {
  try {
    const data = lasting ? localStorage.getItem(key) : sessionStorage.getItem(key)

    return JSON.parse(data || 'null')
  } catch (error: any) {
    notification.error({
      message: error.message,
      description: '获取失败',
    })
  }
}
