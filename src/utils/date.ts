/*
 * @Author: Mario
 * @Date: 2022-01-18 13:27:58
 * @LastEditTime: 2022-01-18 14:20:36
 * @LastEditors: Mario
 * @Description: 时间处理
 */
/**
 * @description: 补0函数
 * @param {string | number} num
 * @return {string | number}
 */
export const add0 = (num: string | number) => {
  return num > 10 ? num : '0' + num
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
