/*
 * @Date: 2023-04-29 22:39:55
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-29 22:44:03
 * @Description: Do not edit
 */
import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

export const MenuLabelStyle = (theme: ThemeType) =>
  css({
    paddingRight: '15px',
    paddingLeft: '15px',
    color: theme.colors.text,
    marginBottom: '10px',
    marginTop: '15px',
    fontSize: '12px',
  })
