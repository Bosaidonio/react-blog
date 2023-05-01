/*
 * @Date: 2023-04-29 20:48:55
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 10:34:44
 * @Description: NavBar样式
 */
import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

export const NavBarStyle = (theme: ThemeType, isMobile: boolean, isCollapse: boolean) =>
  css({
    position: 'fixed',
    height: 'calc(100vh - 50px)',
    backgroundColor: theme.colors.backgroundNavBar,
    transition: 'transform 0.4s ease',
    transform: 'translate3d(0, 0, 0)',
    zIndex: 1010,
    width: '220px',
    ...(isMobile && isCollapse
      ? {
          zIndex: 1010,
          transition: 'transform 0.4s ease',
          transform: 'translate3d(-100%, 0, 0)',
        }
      : {}),
  })

export const MoveResizableStyle = (theme: ThemeType) =>
  css({
    '& .resizable-navbar': {
      '&>div': {
        width: '2px !important',
        transition: 'all 0.2s ease',
        '&:hover': {
          transition: 'all 0.2s ease',
          backgroundColor: '#426ff6',
        },
      },
    },
  })
export const AsideWarpperStyle = (theme: ThemeType) =>
  css({
    width: '100%',
    height: '100%',
  })

export const NavWarpperStyle = (theme: ThemeType) =>
  css({
    width: '100%',
    height: '100%',
  })
export const AsideUserStyle = (theme: ThemeType) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '15px',
    '&:hover': {
      background: 'url(https://cdn.jsdelivr.net/gh/ihewro/handsome-static@8.2.0.2/assets/img/snow.gif)',
      backgroundSize: 'cover',
      color: theme.colors.text,
      cursor: 'pointer',
    },
  })
export const AvatarStyle = () =>
  css({
    width: '96px',
    height: '96px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginTop: '10px',
    img: {
      width: '100%',
      height: '100%',
    },
  })
export const UserNameStyle = (theme: ThemeType) =>
  css({
    color: theme.colors.text,
    marginTop: '10px',
    strong: {
      marginRight: '5px',
    },
    '.anticon-caret-down': {
      verticalAlign: 'middle',
      '& svg': {
        width: '10px',
        height: '10px',
      },
    },
  })
export const UserDescStyle = (theme: ThemeType) =>
  css({
    fontWeight: '200',
    fontSize: '12px',
    color: theme.colors.text,
  })
export const DividerStyle = (theme: ThemeType) =>
  css({
    '&.ant-divider': {
      borderTop: `2px solid ${theme.colors.backgroundPrimary}`,
      width: '100%',
      margin: '10px 0',
    },
  })
export const NavListStyle = (theme: ThemeType) =>
  css({
    maxHeight: '500px',
    overflowY: 'auto',
  })
