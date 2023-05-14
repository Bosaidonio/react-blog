import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

export const BreadCrumbStyle = (theme: ThemeType) =>
  css({
    display: 'flex',
    alignItems: 'center',
    padding: '8px 15px',
    marginBottom: '20px',
    listStyle: 'none',
    borderRadius: '4px',
    color: theme.colors.text,
    backgroundColor: theme.colors.background,
    li: {
      display: 'inline-block',
      '&:nth-of-type(1)': {
        cursor: 'pointer',
      },
    },
  })
export const BreadCrumbItemStyle = (theme: ThemeType) =>
  css({
    display: 'flex',
    alignItems: 'center',
  })
export const BreadCrumbIconStyle = (theme: ThemeType, goBack?: boolean) =>
  css({
    ...(goBack
      ? {
          transform: 'rotate(90deg) scale(-1)',
        }
      : {}),
  })
export const BreadCrumbLinkStyle = (theme: ThemeType) =>
  css({
    marginLeft: '5px',
  })
export const BreadCrumbSeparatorStyle = (theme: ThemeType) =>
  css({
    color: theme.colors.text,
    '&::before': {
      padding: '0 5px',
      color: theme.colors.text,
      content: "'/\\00a0'",
    },
  })
