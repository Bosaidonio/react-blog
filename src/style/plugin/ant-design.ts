/*
 * @Date: 2023-04-29 18:17:54
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-29 23:21:50
 * @Description: ant-design组件样式
 */
import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

export const AntInput = (theme: ThemeType) => ({
  fontSize: '12px',
  backgroundColor: theme.colors.antInputBackground,
  color: theme.colors.text,
  '&:hover': {
    borderColor: theme.colors.antInputBorderHover,
  },
})
export const AntInputAffixWarrper = (theme: ThemeType) => ({
  height: '30px',
  paddingRight: '15px',
  paddingLeft: '15px',
  borderRadius: '15px',
  fontSize: '12px',
  lineHeight: '1.5',
  border: '1px solid transparent',
  backgroundColor: theme.colors.antInputBackground,
})
export const AntInputSuffix = (theme: ThemeType) => ({
  svg: {
    color: theme.colors.text,
    width: '20px',
    height: '16px',
  },
})

export const AntMenuStyle = (theme: ThemeType) =>
  css({
    '&#custom-ant-menu': {
      backgroundColor: `${theme.colors.backgroundNavBar}`,
      padding: '5px 10px',
      '.ant-menu-item': {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '0',
        backgroundColor: `${theme.colors.backgroundNavBar}`,
        color: `${theme.colors.text}`,
        borderRadius: '5px',
        paddingLeft: '10px',
        height: '36px',
        lineHeight: '36px',
        '.ant-menu-title-content': {
          marginLeft: '15px !important',
          color: theme.colors.text,
        },
        '.ant-menu-item-icon': {
          svg: {
            color: theme.colors.text,
          },
        },
      },
      '.ant-menu-submenu-arrow': {
        '&::before': {
          background: '#777',
        },
        '&::after': {
          background: '#777',
        },
      },
      '.ant-menu-submenu': {
        color: theme.colors.text,
        '.ant-menu-submenu-title': {
          '&:hover': {
            color: theme.colors.text,
          },
        },
        '.ant-menu-sub': {
          backgroundColor: theme.colors.backgroundNavBar,
        },
      },
      '.ant-menu-item-active': {
        backgroundColor: theme.colors.antMenuActive,
      },
      '.ant-menu-item-selected': {
        backgroundColor: theme.colors.antMenuActive,
      },
    },
  })
