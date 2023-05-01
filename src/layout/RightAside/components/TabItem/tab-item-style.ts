/*
 * @Date: 2023-05-01 21:44:20
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-05-01 23:09:06
 * @Description: Do not edit
 */
import { SingleLineEllipsis } from '@/style/common'
import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

export const TabItemStyle = (theme: ThemeType) =>
  css({
    padding: '20px',
    h5: {
      marginTop: '0',
      fontSize: '14px',
      color: theme.colors.text,
      fontWeight: 300,
    },
  })
export const ListGroupStyle = () =>
  css({
    borderRadius: '2px',
    marginBottom: '20px',
    paddingLeft: 0,
    color: 'inherit',
    backgroundColor: 'transparent',
    marginRight: '-15px',
    marginLeft: '-15px',
  })
export const ListGroupItemStyle = () =>
  css({
    position: 'relative',
    display: 'block',
    padding: '10px 15px',
    marginBottom: '-1px',
    cursor: 'pointer',
  })
export const IconWarrperStyle = (theme: ThemeType) =>
  css({
    display: 'inline-block',
    float: 'left',
    img: {
      width: '40px',
      height: 'auto',
      borderRadius: '20%',
      boxShadow: `2px 2px 3px ${theme.colors.boxShadowPrimary}`,
      border: `2px solid #fff`,
      verticalAlign: 'middle',
      marginRight: '15px',
      overflow: 'hidden',
    },
  })
export const SimpleDescWarrperStyle = () =>
  css({
    fontSize: '12px',
    display: 'block',
    overflow: 'hidden',
  })
export const DescWarrperStyle = (theme: ThemeType, isActive: boolean) =>
  css(
    {
      lineHeight: 1.4,
      opacity: 0.8,
      color: theme.colors.text,
      fontSize: isActive ? '14px' : '12px',
    },
    SingleLineEllipsis()
  )
export const PostHeadIconStyle = (theme: ThemeType) =>
  css({
    color: theme.colors.text,
    fontSize: '13px',
    marginTop: '10px',
  })
export const MetaViewsStyle = () =>
  css({
    display: 'flex',
    alignItems: 'center',
  })
export const MetaCommentsStyle = () =>
  css({
    marginRight: '5px',
  })
export const MetaValueStyle = () => css({})
