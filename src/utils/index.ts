/**
 * @description: 将字符串中的链接替换为a标签
 * @param {string} str
 * @return {string}
 */
export const reaplceLink = (str: string) => {
  const reg = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi
  str = str.replace(reg, "<a href='$1' style='text-decoration: underline;' target='_blank'>$1</a>")
  return str
}
