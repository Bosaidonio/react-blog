import { isArray, isString } from '@/utils/is'
/**
 * @function
 * @name replaceLink
 *
 * @description 将字符串中的 URL 链接替换为可点击的 HTML 超链接，并对其中一个链接进行特殊处理。
 * @param {string} str - 包含 URL 链接的字符串。
 * @returns {string} 返回替换后的字符串，其中 URL 链接已经被替换为 HTML 超链接。
 *
 * @example
 * // 将字符串中的 URL 链接替换为可点击的 HTML 超链接
 * const text = '这是一个包含链接的文本，其中包含了一个网址 https://www.example.com 和一个 FTP 链接 ftp://ftp.example.com'
 * const result = replaceLink(text);
 * console.log(result);
 * 输出： '这是一个包含链接的文本，其中包含了一个网址 <a href="https://www.example.com" style="text-decoration: underline;" target="_blank">https://www.example.com</a> 和一个 FTP 链接 <a href="ftp://ftp.example.com" style="text-decoration: underline;" target="_blank">ftp://ftp.example.com</a>'
 */
export const reaplceLink = (str: string) => {
  const reg = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi
  str = str.replace(reg, (result) => {
    if (/https:\/\/unpkg.com\/emoji-datasource-google/.test(result)) {
      return result
    } else {
      return `<a href='${result}' style='text-decoration: underline;' target='_blank'>${result}</a>`
    }
  })
  return str
}

interface NodeElement {
  hLevel: number
  level?: number
  children?: NodeElement[]
}
/**
 * @description: 根据指定元素级别查找该级别的子孙级，并删除掉已经查找到的子孙级
 * @param {NodeElement} currentLevelItem 当前遍历的最高级
 * @param {NodeElement[]} arr 数据源
 * @param {number} level 当前遍历
 * @return {NodeElement[]}
 */
const getChildrenByLevel = (currentLevelItem: NodeElement, arr: NodeElement[], level: number) => {
  if (!currentLevelItem) {
    return []
  }
  // 将level值转成负数，再进行比较
  const minusCurrentLevel = -currentLevelItem.hLevel
  const children = []
  for (let i = 0, len = arr.length; i < len; i++) {
    const levelItem = arr[i]
    // 排除 hLevel 小于等于 0 的情况
    if (levelItem.hLevel <= 0) {
      continue
    }
    // 只查找当前遍历这级的子级
    if (-levelItem.hLevel < minusCurrentLevel) {
      children.push(levelItem)
    } else {
      break
    }
  }
  // 从数组中删除已经找到的那些子孙级，以免影响到其他子孙级的查找
  if (children.length > 0) {
    arr.splice(0, children.length)
  }
  return children
}
/**
 * @function
 * @name getTree
 * @description 根据节点级别构建树形结构，将数组中的所有节点按照级别逐级添加到树形结构中。
 *
 * @param {NodeElement[]} result - 树形结构的结果集，初始为空数组。
 * @param {NodeElement[]} arr - 包含所有节点的数组。
 * @param {number} level - 当前节点所在的级别
 * @returns {void} 该函数没有返回值，结果存储在 `result` 参数中。
 */
const getTree = function (result: NodeElement[], arr: NodeElement[], level: number) {
  if (!isArray(arr) || arr.length <= 0) {
    return []
  }
  // 首先将数组第一位移除掉，并添加到结果集中
  let currentItem = arr.shift()
  while (currentItem && currentItem.hLevel <= 0) {
    currentItem = arr.shift()
  }
  if (currentItem) {
    currentItem.level = level
    result.push(currentItem)
  }
  while (arr.length > 0) {
    if (!currentItem) {
      return
    }
    // 根据当前级别获取它的子孙级
    const children = getChildrenByLevel(currentItem, arr, level)
    // 如果当前级别没有子孙级则开始下一个
    if (children?.length === 0) {
      currentItem = arr.shift()
      while (currentItem && currentItem.hLevel <= 0) {
        currentItem = arr.shift()
      }
      if (currentItem) {
        currentItem.level = level
        result.push(currentItem)
      }
      continue
    }
    currentItem.children = []
    // 查找到的子孙级继续查找子孙级
    getTree(currentItem.children, children, level + 1)
  }
}
/**
 * @function
 * @name toTree
 * @description 根据页面已有的 h 标签生成节点树形结构。
 *
 * @param {NodeElement[]} flatArr - 包含所有节点的数组。
 * @returns {NodeElement[]} 构建好的节点树形结构。
 */
export const toTree = (flatArr: NodeElement[]) => {
  const tree: NodeElement[] = []
  const copyArr = flatArr.map(function (item) {
    return item
  })
  getTree(tree, copyArr, 1)
  return tree
}

/**
 * @function
 * @name diffDom
 * @description 递归遍历 DOM 树，根据标签名（tagName）获取节点列表。
 *
 * @param {Node} root - 需要遍历的根节点。
 * @param {Element[]} nodes - 存储匹配到的节点列表，初始为空数组。
 * @param {string[]} tags - 需要匹配的标签名，初始值为空数组。
 * @returns {Element[]} 匹配到的节点列表。
 *
 * @example
 * // 查找页面中所有的 H1 和 H2 标签
 * const root = document.querySelector('body');
 * const nodes = diffDom(root, [], ['H1', 'H2']);
 * console.log(nodes);
 * // 输出为匹配到的节点列表
 */
export const diffDom = (root: any, nodes: Element[] = [], tags: string[] = []) => {
  if (!root) return []
  for (let i = 0; i < root.childNodes.length; i++) {
    const node: Element = root.childNodes[i]
    // 过滤 text 节点、script 节点
    if (node.nodeType !== 3 && node.nodeName !== 'SCRIPT' && tags.includes(node.tagName)) {
      nodes.push(node)
      diffDom(node)
    }
  }
  return nodes
}
/**
 * @function
 * @name deleteEmptyKey
 * @description 删除对象中值为空的键。
 *
 * @param {Object} obj - 需要删除空键的对象。
 * @returns {Object} 删除空键后的对象。
 *
 * @example
 * // 删除对象中值为空的键
 * const obj = { name: 'Alice', age: null, gender: 'female', address: '', phone: undefined };
 * const newObj = deleteEmptyKey(obj);
 * console.log(newObj);
 * // 输出为：
 * // { name: 'Alice', gender: 'female' }
 */
export const deleteEmptyKey = (obj: any) => {
  for (const key in obj) {
    if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
      delete obj[key]
    }
  }
  return obj
}
/**
 * @function
 * @name getEmojiList
 * @description 查找字符串中所有的 emoji 表情。
 *
 * @param {string} str - 需要查找的字符串。
 * @returns {string[]} 查找到的 emoji 表情列表，如果未找到则返回空数组。
 *
 * @example
 * // 查找字符串中所有的 emoji 表情
 * const str = 'This is a string with some emojis 😀🙌🏻👍🏽';
 * const emojis = getEmojiList(str);
 * console.log(emojis);
 * // 输出为：
 * // ['😀', '🙌🏻', '👍🏽']
 */
export const getEmojiList = (str: string) => {
  // 判断是否为字符串
  if (!isString(str)) {
    return []
  }
  const ranges = [
    '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
    '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
    '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
  ]
  const reg = new RegExp(ranges.join('|'), 'g')
  return str.match(reg) || []
}

/**
 * @function
 * @name debounce
 * @description 节流函数，返回一个新函数，在规定时间内多次调用只会执行一次。
 *
 * @param {Function} fn - 需要节流的函数。
 * @param {number} delay - 规定的时间，单位为毫秒。
 * @returns {Function} 节流后的函数。
 */
export const debounce = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
  let timer: any
  return (...args: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
