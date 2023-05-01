/*
 * @Date: 2023-04-25 22:49:37
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 15:14:26
 * @Description: 公共css样式
 */
import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

/* 单行省略   */
export const SingleLineEllipsis = () =>
  css({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  })
/* 多行省略 */
export const MultiLineEllipsis = (lines: number) =>
  css({
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: lines,
  })
/* flex水平垂直居中布局 */
export const FlexCenter = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
/*  隐藏在最大媒体宽度为 'md' 时 */
export const HideOnMaxMediaMd = (theme: ThemeType) => ({
  [theme.mediaQueries('max').md]: {
    display: 'none',
  },
})
/* 响应式的最大宽度样式 (盒子模式)*/
export const ResponsiveMaxWidth = (theme: ThemeType) => ({
  [theme.mediaQueries('min').sm]: {
    maxWidth: '750px',
  },
  [theme.mediaQueries('min').md]: {
    maxWidth: '970px',
  },
  [theme.mediaQueries('min').lg]: {
    maxWidth: '1170px',
  },
})
