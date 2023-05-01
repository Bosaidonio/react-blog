import { ThemeType } from '@/theme'
import { css } from '@emotion/react'
import headerBg from '@/assets/images/header.png'
/*
 * @Date: 2023-04-30 11:20:11
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 13:45:31
 * @Description: Do not edit
 */
export const BlogHeaderStyle = (theme: ThemeType, isHomePage: boolean, isCenter?: boolean) =>
  css({
    padding: '20px',
    backgroundColor: theme.colors.backgroundContent,
    ...(isHomePage || isCenter
      ? {
          textAlign: 'center',
        }
      : {}),
    ...(isHomePage
      ? {
          background: `${theme.colors.backgroundContent} url(${headerBg}) no-repeat center`,
          backgroundSize: 'cover',
        }
      : {}),
  })
export const BlogHeaderTitleStyle = (theme: ThemeType, isHomePage: boolean, isCenter?: boolean, customStyle?: React.CSSProperties) =>
  css({
    fontWeight: 400,
    color: theme.colors.text,
    ...(isHomePage
      ? {
          display: 'flex',
          fontWeight: 300,
          fontSize: '30px',
          fontFamily: 'TheNautigal',
        }
      : {}),
    ...(isHomePage || isCenter
      ? {
          justifyContent: 'center',
        }
      : {
          justifyContent: 'unset',
        }),
    ...customStyle,
  })
export const TitleIconsStyle = (theme: ThemeType) =>
  css({
    marginRight: '10px',
    marginTop: '6px',
    svg: {
      width: '25px',
      height: '25px',
    },
  })
export const DescTextStyle = (theme: ThemeType) =>
  css({
    letterSpacing: '0.1em',
    color: theme.colors.text,
  })
