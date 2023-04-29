/*
 * @Date: 2023-04-29 17:18:18
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-29 20:47:59
 * @Description: Do not edit
 */
export interface MenuListType {
  label: string
  icon?: JSX.Element
  children?: MenuListType[]
  path?: string
}
