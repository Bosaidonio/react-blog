/*
 * @Date: 2023-04-29 17:51:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 22:43:38
 * @Description: Do not edit
 */
import { ResponsiveMaxWidth } from '@/style/common'
import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

export const BoxModeStyle = (theme: ThemeType, isBoxMode: boolean) =>
  css({
    transition: 'all .3s ease',
    ...(isBoxMode
      ? {
          ...ResponsiveMaxWidth(theme),
        }
      : {}),
  })
export const LayoutStyle = (theme: ThemeType, isBoxMode: boolean) =>
  css(
    {
      paddingTop: '50px',
      margin: '0 auto',
    },
    BoxModeStyle(theme, isBoxMode)
  )
export const LayoutWarrperStyle = (theme: ThemeType) =>
  css({
    backgroundColor: theme.colors.backgroundBody,
    height: 'auto',
    position: 'relative',
  })
export const FotterBoxStyle = (theme: ThemeType) =>
  css({
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
  })
