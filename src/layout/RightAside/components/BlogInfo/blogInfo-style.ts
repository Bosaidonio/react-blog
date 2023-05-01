import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

/*
 * @Date: 2023-05-01 14:11:46
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-05-01 14:31:48
 * @Description: Do not edit
 */
export const BlogInfoStyle = (theme: ThemeType) =>
  css({
    display: 'block',
    overflow: 'hidden',
    padding: '20px',
    color: theme.colors.text,
    fontWeight: '400',
    h5: {
      color: theme.colors.text,
      fontWeight: '400',
      marginTop: 0,
      fontSize: '16px',
      marginBottom: '10px',
      lineHeight: '1.1',
    },
  })
export const ListGroupStyle = (theme: ThemeType) =>
  css({
    borderRadius: '8px',
    marginBottom: '20px',
    paddingLeft: '0',
    backgroundColor: theme.colors.blogInfoBackground,
    boxShadow: theme.boxShadow.panel,
  })
export const ListGroupItemStyle = (theme: ThemeType) =>
  css({
    position: 'relative',
    display: 'block',
    marginBottom: '-1px',
    border: 'none',
    padding: '15px',
    opacity: 0.8,
  })
export const BlogInfoIconStyle = (theme: ThemeType) =>
  css({
    position: 'relative',
    float: 'left',
    margin: '-10px -10px -10px 0',
    marginRight: '5px',
    overflow: 'hidden',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    height: '40px',
  })
export const BlogCountStyle = (theme: ThemeType) =>
  css({
    backgroundColor: theme.colors.blogInfoCountBackground,
    borderRadius: '10px',
    color: theme.colors.blogInfoColor,
    display: 'inline-block',
    float: 'right',
    fontSize: '10px',
    lineHeight: '1',
    margin: '2px 0 0',
    minWidth: '10px',
    overflow: 'hidden',
    padding: '3px 7px',
    textAlign: 'center',
    textShadow: '0 1px 0 rgb(0 0 0 / 20%)',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
  })
