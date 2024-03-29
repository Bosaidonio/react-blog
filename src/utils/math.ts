/**
 * @file math.ts
 * 本文件提供了一些实用函数，用于处理数组、数值计算和图片宽高比的计算。
 * @author Your Name <your.email@example.com>
 * @created 2023-03-31
 * @lastModified 2023-04-05
 *
 * @exports randomArr - 随机变化数组顺序的函数。
 * @exports getRandom - 生成指定范围内的随机数的函数。
 * @exports chunk - 将一维数组分割成二维数组的函数。
 * @exports gcd - 计算最大公约数的函数。
 * @exports computedRate - 计算图片宽高比的函数。
 */

/**
 * @description: 随机变化数组顺序
 * @param {T[]} arr
 * @return {T[]}
 */
export const randomArr = <T>(arr: T[]) => {
  arr.sort(function () {
    return Math.random() - 0.5
  })
  return arr
}
/**
 * @description: 取随机数
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min
}

/**
 * @description: 根据num参数将一维数组分割成二维数组
 * @param {any} arr
 * @param {number} num
 * @return {any[][]}
 */
export const chunk = <T>(arr: T[], num: number) => {
  const newArr = []
  for (let i = 0; i < arr.length / num; i++) {
    newArr[i] = arr.slice(i * num, num * i + num)
  }
  return newArr
}
/**
 * @description: 获取最大公约数
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
export const gcd = (n: number, m: number): number => {
  var temp
  while (m !== 0) {
    temp = n % m
    n = m
    m = temp
  }
  return n
}
/**
 * @description: 计算图片宽高比
 * @param {string}
 * @return {width: number, height: number}
 */
export const computedRate = (src: string) => {
  const body = document.body
  const image = document.createElement('img')
  image.style.display = 'none'
  image.src = src
  body.appendChild(image)
  const width = image.width
  const height = image.height
  let photo = { width: width, height: height }
  body.removeChild(image)
  return photo
}
