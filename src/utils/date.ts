/*
 * @Author: Mario
 * @Date: 2022-01-18 13:27:58
 * @LastEditTime: 2022-11-14 18:08:47
 * @LastEditors: mario marioworker@163.com
 * @Description: 时间处理
 */
/**
 * @description: 补0函数
 * @param {string | number} num
 * @return {string | number}
 */
export const add0 = (num: string | number) => {
  return num >= 10 ? num : '0' + num
}
/**
 * @description: 计算时间差
 * @param {string} startTime
 * @return {[key: string]: number}
 */
export const diffTime = (startTime: string) => {
  const currentTime = new Date().getTime()
  const diff = currentTime - new Date(startTime).getTime()
  const sm = Math.floor(diff / 1000)
  const ss = Math.floor(diff / (1000 * 60))
  const hh = Math.floor(diff / (1000 * 60 * 60))
  const dd = Math.floor(diff / (1000 * 60 * 60 * 24))
  const yy = Math.floor(dd / 365)
  return {
    sm,
    ss,
    hh,
    dd,
    yy,
  }
}
/**
 * @description: 根据指定格式解析时间
 * @param {string | number | Date} time
 * @param {string?} cFormat
 * @return {string}
 */
export function parseTime(time: string | number | Date, cFormat?: string) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string') {
      if (/^[0-9]+$/.test(time)) {
        time = parseInt(time)
      } else {
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj: { [key: string]: number } = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
    e: date.getMonth(),
  }
  const time_str = format.replace(/{([ymdhisae])+}/g, (result, key: string) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (key === 'e') {
      return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec'][value]
    }
    return value.toString().padStart(2, '0')
  })
  return time_str
}
