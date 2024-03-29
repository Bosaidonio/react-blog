/*
 * @Date: 2023-04-29 18:02:21
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 09:47:06
 * @Description: 根组件样式
 */
import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

export const AppStyle = (theme: ThemeType) =>
  css({
    width: '100%',
    height: 'auto',
    minHeight: '100%',
    backgroundColor: theme.colors.backgroundBody,
  })
