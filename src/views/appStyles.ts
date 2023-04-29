/*
 * @Date: 2023-04-29 18:02:21
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-29 23:36:56
 * @Description: 根组件样式
 */
import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

export const AppStyle = (theme: ThemeType) =>
  css({
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.backgroundBody,
  })
