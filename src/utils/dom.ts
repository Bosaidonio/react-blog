/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-22 11:52:18
 * @Description: Do not edit
 */
interface WarrperClass {
  (styles: { [key: string]: string }, classnames: string): string
}
/**
 * @description: 处理多个类名
 * @param {object} styles
 * @param {string} classnames
 * @return {string}
 */
export const warrperClass: WarrperClass = (styles, classnames) => {
  if (!classnames || classnames.length < 0) {
    return ''
  }
  const oldClassNames = classnames.split(' ')

  const newClassNames = []
  for (let i = 0; i < oldClassNames.length; i++) {
    newClassNames.push(styles[oldClassNames[i]])
  }
  return newClassNames.join(' ')
}

/**
 * @description:  获取文本宽度
 * @param {string} text
 * @param {string} font
 * @return {*}
 */
export const getTextWidth = (text: string, font: string = '14px Hiragino Sans GB'): number => {
  // 创建一个 Canvas 元素
  const canvas = document.createElement('canvas')
  // 获取 Canvas 2D 上下文
  const context = canvas.getContext('2d')
  if (!context) {
    throw new Error('Failed to get 2D context for Canvas')
  }
  context.font = font
  // 测量文本宽度
  const width = context.measureText(text).width
  // 清除 Canvas 元素
  canvas.remove()
  // 返回文本宽度
  return parseInt(width.toString(), 10)
}
