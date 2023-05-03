/*
 * @Date: 2023-05-03 14:25:22
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-05-03 15:10:41
 * @Description: Do not edit
 */
import { reaplceLink } from '@/utils/index'
describe('reaplceLink function', () => {
  it('should replace links in the string with <a> tag', () => {
    const input = 'This is a string with a link: https://www.google.com'
    const expectedOutput = "This is a string with a link: <a href='https://www.google.com' style='text-decoration: underline;' target='_blank'>https://www.google.com</a>"
    expect(reaplceLink(input)).toBe(expectedOutput)
  })

  it('should ignore a specific link and not replace it with <a> tag', () => {
    const input = 'This is a string with a link: https://unpkg.com/emoji-datasource-google'
    expect(reaplceLink(input)).toBe(input)
  })
})
