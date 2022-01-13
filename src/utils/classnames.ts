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
