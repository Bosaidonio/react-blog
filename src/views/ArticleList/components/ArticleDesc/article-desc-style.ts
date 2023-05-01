import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

export const ArticleDescStyle = () => css({})
export const ArticleWarrperStyle = () =>
  css({
    padding: '20px',
  })
export const CommentCloseStyle = (theme: ThemeType) =>
  css({
    textAlign: 'center',
    background: theme.colors.articleCommentBackground,
    color: theme.colors.text,
    padding: '10px',
    transition: 'all 0.2s ease',
    border: '1px solid transparent',
    borderRadius: '4px',
    wordBreak: 'break-word',
    margin: '20px 0',
  })
