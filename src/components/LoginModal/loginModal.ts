import { ThemeType } from '@/theme'
import { backgroundGradient } from '@/theme/keyframes'
import { css } from '@emotion/react'

export const LoginModalStyle = (theme: ThemeType) =>
  css({
    label: {
      color: theme.colors.text,
    },
  })

export const LoginButtonStyle = (theme: ThemeType) =>
  css({
    width: '100%',
    color: '#fff',
    border: 'none',
    background: `linear-gradient(-45deg,${theme.colors.antButtonGradient.join(',')})`,
    paddingTop: '6px',
    paddingBottom: '6px',
    transition: 'all 0.2s ease',
    borderRadius: '50px',
    backgroundSize: '1000% 1000%',
    animation: `${backgroundGradient} 40s linear infinite`,
  })
export const FormItemLastChild = () =>
  css({
    marginBottom: '0px',
  })
