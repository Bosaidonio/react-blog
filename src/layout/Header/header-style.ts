/*
 * @Date: 2023-04-24 21:43:15
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 12:57:35
 * @Description: Do not edit
 */
import { FlexCenter, HideOnMaxMediaMd } from '@/style/common'
import { ThemeType } from '@/theme'
import { AntInput, AntInputAffixWarrper, AntInputSuffix } from '@/style/plugin/ant-design'
import { css } from '@emotion/react'

export const HeaderStyle = (theme: ThemeType) =>
  css({
    display: 'flex',
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '50px',
    backgroundColor: theme.colors.backgroundHeader,
    color: theme.colors.text,
    boxShadow: `0 1px 1px 1px ${theme.colors.backgroundPrimary}`,
    zIndex: 1020,
  })
export const HeaderLeftStyle = (isMobile: boolean) =>
  css({
    display: 'flex',
    maxHeight: '50px',
    paddingLeft: isMobile ? '0' : '20px',
    paddingRight: '20px',
    width: '220px',
    ...(isMobile
      ? {
          width: '100%',
        }
      : {}),
  })
export const BreadCrumbsStyle = () =>
  css({
    cursor: 'pointer',
    padding: '10px 17px',
    fontSize: '16px',
    lineHeight: '30px',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    border: 'none',
  })
export const LogoStyle = (theme: ThemeType, isMobile: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    width: '130px',
    height: '50px',
    ...(isMobile
      ? {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }
      : {}),
    img: {
      width: '50px',
      height: '100%',
      marginTop: '-2px',
      // marginRight: '10px',
    },
    h2: {
      fontFamily: "'TheNautigal'",
      textAlign: 'center',
      fontSize: '18px',
      margin: '0',
      color: theme.colors.text,
    },
  })
export const HeaderRightStyle = () =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: '1 1 auto',
    paddingLeft: '15px',
    paddingRight: '15px',
  })
export const FlexAndHeightStyle = () =>
  css({
    display: 'flex',
    height: '100%',
  })
export const EchartsStyle = (theme: ThemeType) =>
  css({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '15px',
    height: '100%',
    '&:hover': {
      backgroundColor: theme.colors.backgroundHover,
    },
    ...HideOnMaxMediaMd(theme),
  })
export const CaretDownStyle = () =>
  css({
    marginLeft: '0.25rem',
    svg: {
      width: '10px',
      height: '10px',
    },
  })
export const SearchStyle = (theme: ThemeType) =>
  css({
    display: 'flex',
    alignItems: 'center',
    width: '211px',
    padding: '10px 15px',
    '.ant-input-affix-wrapper': {
      ...AntInputAffixWarrper(theme),
      '.ant-input': {
        ...AntInput(theme),
      },
    },
    '.ant-input-suffix': {
      ...AntInputSuffix(theme),
    },
  })
export const MusicIconStyle = (theme: ThemeType) =>
  css({
    height: '100%',
    padding: '15px 18px',
    cursor: 'pointer',
    ...FlexCenter(),
    ...HideOnMaxMediaMd(theme),
    '&:hover': {
      backgroundColor: theme.colors.backgroundHover,
    },
  })

export const RecordMessageStyle = (theme: ThemeType) =>
  css({
    position: 'relative',
    height: '100%',
    ...FlexCenter(),
    padding: '15px 18px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.colors.backgroundHover,
    },
  })
export const RecordMessageIconStyle = () =>
  css({
    display: 'flex',
    marginTop: ' 2px',
  })
export const DropDownMenuStyle = (theme: ThemeType, isReverse: boolean) =>
  css({
    position: 'absolute',
    top: '100%',
    zIndex: 1000,
    minWidth: '160px',
    padding: '5px 0',
    margin: '2px 0 0',
    fontSize: '14px',
    textAlign: 'left',
    listStyle: 'none',
    backgroundClip: 'padding-box',
    width: '320px',
    display: 'block',
    right: 0,
    left: 'auto',
    marginTop: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    border: 'none',
    borderRadius: '2px',
    boxShadow: theme.boxShadow.primary,
    ...(isReverse
      ? {
          pointerEvents: 'auto',
        }
      : {
          pointerEvents: 'none',
        }),
    color: theme.colors.text,
    backgroundColor: theme.colors.backgroundHeader,
    a: {
      color: theme.colors.text,
    },
  })
export const PanelStyle = () =>
  css({
    margin: '-5px 0',
    border: 'none',
    borderRadius: '4px',
    boxShadow: '0 1px 1px rgb(0 0 0 / 5%)',
    transition: 'all 0.2s ease',
    padding: '5px 0',
    boxSizing: 'border-box',
  })
export const PanelHeadingStyle = (theme: ThemeType) =>
  css({
    padding: '10px 15px',
    borderBottom: '1px solid transparent',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    cursor: 'pointer',
    borderColor: theme.colors.backgroundPrimary,
    color: theme.colors.text,
    backgroundColor: theme.colors.backgroundHeader,
  })
export const NavIconStyle = () =>
  css({
    position: 'relative',
    float: 'left',
    width: '40px',
    margin: '-10px -10px',
    marginRight: '5px',
    overflow: 'hidden',
    lineHeight: '40px',
    textAlign: 'center',
    svg: {
      display: 'inline',
      verticalAlign: '-3px',
    },
  })
export const ListGroupStyle = (theme: ThemeType) =>
  css({
    borderRadius: '2px',
    marginBottom: '0px',
    paddingLeft: '0',
    backgroundColor: theme.colors.backgroundHeader,
  })
export const ListGroupItemStyle = (theme: ThemeType) =>
  css({
    position: 'relative',
    display: 'block',
    padding: '10px 15px',
    marginTop: '4px',
    marginLeft: '8px',
    marginRight: '8px',
    backgroundColor: theme.colors.backgroundHeader,
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: theme.colors.backgroundHover,
    },
    '&:first-of-type': {
      borderTopWidth: '0',
    },
    span: {
      display: 'block',
      overflow: 'hidden',
    },
    small: {
      fontSize: '13px',
      color: theme.colors.text,
    },
  })
export const DropDownStyle = (theme: ThemeType) =>
  css({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    height: '100%',
    cursor: 'pointer',
    '&>div:first-of-type': {
      ...FlexCenter(),
      height: '50px',
      width: '52px',
    },
  })
export const LoginModalWarrperStyle = (theme: ThemeType) =>
  css({
    padding: '15px',
    backgroundColor: theme.colors.backgroundHeader,
    '.ant-input-affix-wrapper': {
      ...AntInputAffixWarrper(theme),
      borderRadius: 'unset',
      border: `1px solid ${theme.colors.backgroundPrimary}`,
      '.ant-input': {
        ...AntInput(theme),
      },
    },
    '.ant-input': {
      ...AntInput(theme),
      border: `1px solid ${theme.colors.backgroundPrimary}`,
    },
    '.ant-input-suffix': {
      ...AntInputSuffix(theme),
    },
  })
export const ThemeButtonStyle = () =>
  css({
    display: 'flex',
    alignItems: 'center',
  })
