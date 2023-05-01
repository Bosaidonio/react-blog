import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

/*
 * @Date: 2023-04-30 09:53:22
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 10:19:06
 * @Description: Do not ed
 */
export const ContentStyle = (theme: ThemeType, isMobile: boolean, isCollapse: boolean) =>
  css({
    position: 'relative',
    backgroundColor: theme.colors.backgroundMain,
    marginLeft: '220px',
    transition: 'transform 0.4s ease',
    paddingBottom: '60px',
    ...(isMobile
      ? {
          width: '100%',
          marginLeft: '0px',
        }
      : {}),
    ...(isMobile && !isCollapse
      ? {
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          paddingTop: '50px',
          height: '100%',
          transition: 'transform 0.4s ease',
        }
      : {}),
    [theme.mediaQueries('max').xl]: {},
  })
export const ContentWarrperStyle = (theme: ThemeType) =>
  css({
    display: 'flex',
    minHeight: 'calc(100vh - 50px)',
    flexDirection: 'unset',
    [theme.mediaQueries('max').xl]: {
      flexDirection: 'column',
    },
  })
export const EmptyRouterStyle = (theme: ThemeType) =>
  css({
    flex: '1',
    width: 'calc(100% - 240px)',
    [theme.mediaQueries('max').xl]: {
      width: '100%',
    },
  })
