/*
 * @Date: 2023-05-01 11:56:43
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-05-01 23:15:04
 * @Description: Do not edit
 */
import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

export const RightAsideStyle = (theme: ThemeType, isDeskbook: boolean) =>
  css({
    position: 'relative',
    right: '0',
    width: '240px',
    backgroundColor: theme.colors.backgroundAisde,
    transition: 'transform 0.4s ease',
    ...(isDeskbook
      ? {
          width: '100%',
          marginTop: '30px',
        }
      : {}),
  })

export const SidebarStyle = (theme: ThemeType, position: boolean) =>
  css({
    width: '100%',
    position: position ? 'fixed' : 'unset',
  })

export const DirectoryStyle = (theme: ThemeType) =>
  css({
    padding: '20px',
    h5: {
      fontSize: '16px',
      marginBottom: '15px',
      color: 'inherit',
    },
  })
export const AntTabsStyle = (theme: ThemeType) =>
  css({
    '&#custom-ant-tab': {
      '.ant-tabs-nav': {
        marginBottom: '0px',
        '&::before': {
          border: 'none',
          // borderBottom: `1px solid ${theme.colors.antTabBorder}`,
        },
        '.ant-tabs-nav-list': {
          height: '60px',
          width: '100%',
          justifyContent: 'space-around',
          '.ant-tabs-tab': {
            margin: '0 10px !important',
            padding: '0 !important',
            width: '20%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '.ant-tabs-ink-bar': {
            backgroundColor: theme.colors.antTabBarBackground,
          },
        },
      },
    },
  })
export const TabActiveStyle = (theme: ThemeType, isActive: boolean) =>
  css({
    ...(isActive
      ? {
          svg: {
            color: `${theme.colors.antTabBarBackground} !important`,
          },
        }
      : {}),
  })
