/**
 * @file storage.ts
 * 本文件提供了两个实用函数，用于处理数据的本地存储（localStorage 和 sessionStorage）。
 * 通过这两个函数，您可以将数据存储到本地，或从本地存储中检索数据。
 * @author Mario <marioworker@163.com>
 * @created 2023-03-31
 * @lastModified 2023-04-05
 *
 * @exports setStorage - 将数据存储到本地存储（localStorage/sessionStorage）中。
 * @exports getStorage - 从localStorage或sessionStorage中获取存储的值。
 */

import { notification } from 'antd'

/**
 * @function
 * @name setStorage
 * @description 将数据存储到本地存储（localStorage/sessionStorage）中。
 * @param {string} key - 存储的键值。
 * @param {*} value - 存储的值，可以是任意数据类型。
 * @param {boolean} [lasting] - 是否使用本地持久化存储（localStorage），默认为否（使用会话存储 sessionStorage）。
 * @returns {void}
 *
 * @example
 * // 存储数据到 sessionStorage
 * setStorage('username', 'Tom');
 *
 * // 存储数据到 localStorage
 * setStorage('username', 'Tom', true);
 */
export const setStorage = (key: string, value: any, lasting: boolean = false) => {
  const storage = lasting ? localStorage : sessionStorage
  try {
    const data = JSON.stringify(value)
    storage.setItem(key, data)
  } catch (error: any) {
    notification.error({
      message: error.message,
      description: '存储失败',
    })
  }
}

/**
 * @function
 * @name getStorage
 * @description 从localStorage或sessionStorage中获取存储的值。
 * @param {string} key - 存储值的键。
 * @param {boolean} [lasting=false] - 可选参数，如果为true，则从localStorage中获取值；否则从sessionStorage中获取值。默认值为false。
 * @returns {any} 返回存储值的解析后的JSON对象，如果没有找到或者解析出错，则返回null。
 * @example
 * // 向localStorage中存储一个对象
 * localStorage.setItem("example", JSON.stringify({ id: 1, name: "John Doe" }));
 *
 * // 从localStorage中获取存储的对象
 * const exampleData = getStorage("example", true); // 返回 { id: 1, name: "John Doe" }
 *
 * // 如果尝试从sessionStorage中获取不存在的值，则返回null
 * const notFound = getStorage("notFound"); // 返回 null
 */
export const getStorage = (key: string, lasting: boolean = false) => {
  const storage = lasting ? localStorage : sessionStorage

  try {
    const data = storage.getItem(key)
    if (data === null) {
      return null
    }
    return JSON.parse(data)
  } catch (error: any) {
    notification.error({
      message: error.message,
      description: '获取失败',
    })
    return null
  }
}
