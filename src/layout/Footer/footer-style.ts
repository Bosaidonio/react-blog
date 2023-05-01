/*
 * @Date: 2023-04-30 21:07:21
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-05-01 14:46:30
 * @Description: Do not edit
 */
import { SingleLineEllipsis } from '@/style/common'
import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

export const FooterStyle = () => css({})
export const FooterWarpper = (theme: ThemeType) =>
  css({
    margin: '10px',
    borderRadius: '5px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingRight: '10px',
    paddingLeft: '10px',
    fontSize: '12px',
    color: theme.colors.text,
    backgroundColor: theme.colors.backgroundFooter,
    boxShadow: theme.boxShadow.primary,
    border: `1px solid ${theme.colors.backgroundFooter}`,
  })
export const RecordStyle = (theme: ThemeType) =>
  css(
    {
      float: 'right',
      display: 'flex',
      alignItems: 'center',
      a: {
        fontSize: '12px',
        color: theme.colors.text,
      },
      '&>a:nth-of-type(2)': {
        marginLeft: '5px',
        svg: {
          width: '16px',
          height: '16px',
          verticalAlign: '-4px',
        },
      },
    },
    SingleLineEllipsis()
  )
