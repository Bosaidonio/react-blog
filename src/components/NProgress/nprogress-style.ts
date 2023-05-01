/*
 * @Date: 2023-04-30 10:41:07
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 11:10:13
 * @Description: Do not edit
 */
import { ThemeType } from '@/theme'
import { changebar, movingbar } from '@/theme/keyframes'
import { css } from '@emotion/react'

export const BarStyle = (theme: ThemeType, loading: boolean) =>
  css({
    position: 'absolute',
    width: '100%',
    height: '0',
    textIndent: '-9999px',
    backgroundColor: theme.colors.progressBackground,
    '&::before': {
      position: 'absolute',
      height: '3px',
      backgroundColor: 'inherit',
      content: '""',
      left: '0',
      right: '0',
      width: '100%',
      ...(loading
        ? {
            animation: `${movingbar} 0.75s infinite`,
          }
        : {}),
    },
    ...(loading
      ? {
          animation: `${changebar} 2.25s infinite`,
        }
      : {}),
  })
export const ButterBarStyle = (theme: ThemeType, loading: boolean) =>
  css({
    position: 'absolute',
    height: '3px',
    marginBottom: '-3px',
    width: '100%',
    zIndex: 1000,
    willChange: 'transform',
    ...(loading
      ? {
          animation: `${changebar} 2.25s infinite 0.75s`,
          '& > span': {
            display: 'inherit',
          },
        }
      : {}),
  })
