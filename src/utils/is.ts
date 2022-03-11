/*
 * @Author: Mario
 * @Date: 2022-01-21 12:59:46
 * @LastEditTime: 2022-03-11 09:42:58
 * @LastEditors: Mario
 * @Description: 判断是否为某种类型
 */
const toString = Object.prototype.toString
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
