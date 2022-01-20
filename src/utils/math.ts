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
