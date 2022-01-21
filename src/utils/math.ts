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
