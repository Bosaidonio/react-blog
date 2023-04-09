/*
 * @Author: Mario
 * @Date: 2022-01-18 13:27:58
 * @LastEditTime: 2023-04-08 15:52:47
 * @LastEditors: mario marioworker@163.com
 * @Description: 时间处理
 */
/**
 * @function
 * @name add0
 * @description 为小于 10 的数字添加前导零（0），以确保数字始终为两位数。对于大于等于 10 的数字，保持原样不变。
 *
 * @param {string | number} num - 需要添加前导零的数字，可以是字符串或数字。
 * @returns {string} 两位数的字符串，前导零（如果需要）已添加。
 *
 * @example
 * 1: 使用数字类型参数
 * add0(5);  => "05"
 * 2: 使用字符串类型参数
 * add0("9"); => "09"
 * 3: 对于大于等于 10 的数字
 * add0(12); => "12"
 */
export const add0 = (num: string | number) => {
  if (typeof num === 'string') {
    num = isNaN(parseInt(num)) ? 0 : parseInt(num)
  }
  return num >= 10 ? num : '0' + num
}
/**
 * @function
 * @name diffTime
 * @description 计算当前时间与给定的起始时间之间的时间差，并将其以秒、分钟、小时、天和年的形式表示为对象。
 *
 * @param startTime 起始时间，格式为字符串，例如 "2022-03-31T12:00:00.000Z"。
 * @returns 返回一个对象，包含以下属性：
 * - `sm`：时间差的秒数。
 * - `ss`：时间差的分钟数。
 * - `hh`：时间差的小时数。
 * - `dd`：时间差的天数。
 * - `yy`：时间差的年数。
 *
 * @example
 * 计算距离当前时间 30 分钟前的时间差
 * const startTime = new Date(Date.now() - 30 * 60 * 1000).toISOString();
 * const diff = diffTime(startTime);
 * console.log(diff); => { sm: 1800, ss: 30, hh: 0, dd: 0, yy: 0 }
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
 * @function
 * @name parseTime
 * @description 将输入的时间值转换为指定格式的字符串。
 *
 * @param {string | number | Date} time - 要转换的时间值。可以是日期对象、时间戳或包含日期的字符串。
 * @param {string} [cFormat] - 可选的日期格式字符串，其中 y 表示年，m 表示月，d 表示日，h 表示小时，i 表示分钟，s 表示秒，a 表示星期几，e 表示月份的英文缩写。默认为 '{y}-{m}-{d} {h}:{i}:{s}'。
 * @returns {string | null} 返回指定格式的日期字符串。如果输入的时间值无效或不存在，返回 null。
 *
 * @example
 * parseTime(1629786312000); => "2021-08-24 16:45:12"
 * parseTime('2021-08-24 16:45:12', '{y}-{m}-{d}'); => "2021-08-24"
 * parseTime(new Date(), '{h}:{i}:{s}'); => "16:45:12"
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
