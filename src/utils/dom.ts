/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-05-14 16:18:13
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

/**
 * 解析 HTML 字符串，查找 <code> 标签中包含特定注释的代码行，并在这些行前添加 "-" 或 "+"。
 * @param htmlString - 要解析的 HTML 字符串。
 * @returns 修改后的 HTML 字符串。
 */
export const parseAndModifyCodeBlocks = (htmlString: string): string => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlString, 'text/html')
  const codeBlocks = doc.querySelectorAll('code')
  codeBlocks.forEach((code) => {
    const codeText = code.textContent
    if (codeText) {
      const lines = codeText.split('\n')
      // 判断是否有 ```标记, 如果有则不进行解析
      const hasMatch = lines.some((item) => /```/.test(item))
      const fragment = document.createDocumentFragment()
      const lineNumberFragment = document.createDocumentFragment()
      for (let i = 0; i < lines.length; i++) {
        // 如果是空字符串并且是最后一行，就不添加 <br> 元素
        if (lines[i] === '' && i >= lines.length - 1) {
          break
        }
        const lineNumberSpan = document.createElement('span') // 创建行号 span
        lineNumberFragment.appendChild(lineNumberSpan)
        if (lines[i].includes('// [!code --]') && !hasMatch) {
          const newLine = document.createElement('span')
          newLine.className = 'diff remove'
          newLine.textContent = lines[i].replace('// [!code --]', '').trim()
          fragment.appendChild(newLine)
        } else if (lines[i].includes('// [!code ++]') && !hasMatch) {
          const newLine = document.createElement('span')
          newLine.className = 'diff add'
          newLine.textContent = lines[i].replace('// [!code ++]', '').trim()
          fragment.appendChild(newLine)
        } else {
          fragment.appendChild(document.createTextNode(lines[i]))
        }
        if (i < lines.length - 1) {
          fragment.appendChild(document.createElement('br'))
        }
      }
      code.textContent = ''
      code.appendChild(fragment)
      // 在 <code> 元素中添加行号
      const lineNumberDiv = document.createElement('div')
      lineNumberDiv.className = 'vditor-linenumber__rows'
      lineNumberDiv.appendChild(lineNumberFragment)
      code.appendChild(lineNumberDiv)
    }
  })

  return doc.body.innerHTML
}
