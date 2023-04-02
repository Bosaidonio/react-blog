/**
 * @file is.ts
 * 本文件提供了一些实用函数，用于处理字符串、数值、对象类型判断和格式验证。
 * @author Mario <marioworker@163.com>
 * @created 2023-03-31
 * @lastModified 2023-04-05
 *
 * @exports isEmoji - 判断是否是emoji表情的函数。
 * @exports isExternal - 判断是否为外链的函数。
 * @exports isName - 判断是否为中文名的函数。
 * @exports isIP - 判断是否为IP的函数。
 * @exports isEmail - 判断是否为邮箱的函数。
 * @exports isTel - 判断是否为固定电话的函数。
 * @exports isNumber - 判断是否为数字类型的函数。
 * @exports isString - 判断是否为字符串类型的函数。
 * @exports isPhone - 判断是否为手机号的函数。
 * @exports isUndefined - 判断是否为Undefined的函数。
 * @exports isArray - 判断是否为数组的函数。
 * @exports isObject - 判断是否为对象类型的函数。
 * @exports isPlainObject - 判断是否为纯对象的函数。
 * @exports isEmptyObject - 判断是否为空对象的函数。
 * @exports isDate - 判断是否为日期对象的函数。
 * @exports isEmpty - 判断是否为空的函数。
 */
const toString = Object.prototype.toString

/**
 * @description: 判断是否是emoji表情
 * @param {any} str
 * @return {boolean}
 */
export const isEmoji = (str: string) => {
  const ranges = [
    '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
    '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
    '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
  ]
  return str.match(ranges.join('|')) !== null
}

/**
 * @description: 判断是否为外链
 * @param {any} path
 * @return {boolean}
 */
export function isExternal(path: any) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
/**
 * @description: 判断是否为中文名
 * @param {any} value
 * @return {boolean}
 */
export function isName(value: any) {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/
  return reg.test(value)
}
/**
 * @description: 判断是否为ip
 * @param {any} ip
 * @return {boolean}
 */
export function isIP(ip: any) {
  const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return reg.test(ip)
}
/**
 * @description: 判断是否为邮箱
 * @param {any} str
 * @return {boolean}
 */
export function isEmail(str: any) {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reg.test(str)
}
/**
 * @description: 判断是否为固定电话
 * @param {any} str
 * @return {boolean}
 */
export function isTel(str: any) {
  const reg = /^(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})(-| )?)?([0-9]{7,8})((-| |转)*([0-9]{1,4}))?$/
  return reg.test(str)
}
/**
 * @description: 判断是否为数字类型
 * @param {any} val
 * @return {Boolean}
 */
export const isNumber = (val: any) => {
  return typeof val === 'number'
}
/**
 * @description: 判断是否为字符串类型
 * @param {any} val
 * @return {Boolean}
 */
export const isString = (val: any) => {
  return typeof val === 'string'
}
/**
 * @description: 判断是否为手机号
 * @param {any} value
 * @return {boolean}
 */
export const isPhone = (val: any) => {
  const reg = /^(1[0-9][0-9])\d{8}$|^0\d{2,3}-?\d{7,8}$/
  return reg.test(val)
}
/**
 * @description: 判断是否为Undefined
 * @param {any} val
 * @return {boolean}
 */
export const isUndefined = (val: any) => {
  return typeof val === 'undefined'
}
/**
 * @description: 判断是否为数组
 * @param {any} val
 * @return {boolean}
 */
export const isArray = (val: any) => {
  return toString.call(val) === '[object Array]'
}
/**
 * @description: 判断是否为对象类型，注意当传入数组时也会返回true
 * @param {any} val
 * @return {boolean}
 * @example isObject([]) // true
 */
export const isObject = (val: any) => {
  return val !== null && typeof val === 'object'
}
/**
 * @description: 判断是否为纯对象
 * @param {any} val
 * @return {boolean}
 * @example isPlainObject([]) // false
 */
export const isPlainObject = (val: any) => {
  if (toString.call(val) !== '[object Object]') {
    return false
  }
  const prototype = Object.getPrototypeOf(val)
  return prototype === null || prototype === Object.prototype
}
/**
 * @description: 判断是否为空对象
 * @param {any} val
 * @return {boolean}
 * @example isEmptyObject({}) // true
 */
export const isEmptyObject = (val: any) => {
  if (!isPlainObject(val)) {
    return false
  }
  return JSON.stringify(val) === '{}'
}
/**
 * @description: 判断是否为日期对象
 * @param {any} val
 * @return {boolean}
 */
export const isDate = (val: any) => {
  return toString.call(val) === '[object Date]'
}

/**
 * @description: 判断是否为空
 * @param {any} val
 * @return {boolean}
 */
export const isEmpty = (val: any) => {
  return val === null || val === '' || val === undefined || val === 'null' || val === 'undefined'
}
