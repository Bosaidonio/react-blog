import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

/*
 * @Date: 2023-05-01 14:48:01
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-05-01 15:08:32
 * @Description: Do not edit
 */
export const BabelCloudStyle = (theme: ThemeType) =>
  css({
    display: 'block',
    overflow: 'hidden',
    padding: '20px',

    h5: {
      marginTop: 0,
      fontSize: '16px',
      fontWeight: 400,
      marginBottom: '10px',
      color: theme.colors.text,
    },
  })
export const BabelTagWarrperStyle = (theme: ThemeType) =>
  css({
    lineHeight: '2em',
    borderRadius: '8px',
    // padding: '10px',
    padding: '10px 0px 10px 10px',
    backgroundColor: theme.colors.blogInfoBackground,
    boxShadow: theme.boxShadow.panel,
    // minHeight: '200px'
  })
export const BabelTagStyle = (theme: ThemeType) =>
  css({
    display: 'inline-block',
    minWidth: '10px',
    padding: '3px 7px',
    fontSize: '12px',
    lineHeight: 1,
    color: theme.colors.babelCloudColor,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    backgroundColor: theme.colors.babelCloudTagBackground,
    borderRadius: '10px',
    marginRight: '10px',
  })
