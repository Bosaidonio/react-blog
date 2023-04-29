/*
 * @Date: 2023-04-25 21:55:12
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-26 01:28:44
 * @Description: Do not edit
 */
import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

const HoverTransitionStyle = css({
  opacity: '1 !important',
  transition: 'all 0.3s !important',
})
/* 播放器样式 */
export const AplayerBodyStyle = (theme: ThemeType) =>
  css(
    css({
      '.aplayer-body': {
        width: '205px',
        height: '50px',
        '.aplayer-pic': {
          backgroundSize: 'cover',
          backgroundPosition: '50%',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          borderRadius: '20px',
          width: '40px !important',
          height: '40px !important',
          marginTop: '5px',
          '.aplayer-button': {
            display: 'none',
          },
        },
        '.aplayer-info': {
          marginLeft: '40px !important',
          height: '50px !important',
          padding: '6px 0 0 7px !important',
          border: 'none !important',
          '.aplayer-music': {
            margin: '0 15px 5px 5px',
          },
          '.aplayer-lrc': {
            display: 'none',
          },
          '.aplayer-controller': {
            '.aplayer-time': {
              '.aplayer-time-inner': {
                display: 'none',
              },

              '.aplayer-icon-back': {
                display: 'inline-block',
              },
              '.aplayer-icon-play': {
                display: 'inline-block',
                margin: '0 10px',
              },
              '.aplayer-icon-forward': {
                display: 'inline-block',
              },
              '.aplayer-volume-wrap': {
                marginLeft: '38px',
                opacity: '0',
                '.aplayer-volume-bar': {
                  height: '28px !important',
                },
              },
              '.aplayer-icon-menu': {
                display: 'none !important',
              },
              '.aplayer-icon-lrc': {
                display: 'inline-block',
                opacity: '0',
              },
            },
            '.aplayer-bar-wrap': {
              position: 'absolute',
              left: '0',
              bottom: '0px',
              padding: '0',
              width: '96%',
              opacity: '0',
              '.aplayer-bar': {
                backgroundColor: theme.colors.aplayerProgress,
                '.aplayer-loaded': {
                  backgroundClip: theme.colors.aplayerLoaded,
                },
              },
            },
          },
        },
      },
    })
  )
/* 歌曲列表样式 */
const AplayerListStyle = (theme: ThemeType) =>
  css({
    '.aplayer-list': {
      width: '254px',
      position: 'fixed',
      top: '50px',
      backgroundColor: theme.colors.backgroundHeader,
      boxShadow: theme.boxShadow.primary,
      margin: '0 2px 2px 2px',
      transition: 'all 0.5s ease',
      ol: {
        li: {
          height: '28px',
          lineHeight: '28px',
          borderTop: 'none',
          padding: '0 13px',
          marginTop: '3px',
          marginLeft: '5px',
          marginRight: '5px',
          borderRadius: '5px',
          background: 'transparent',
          border: 'none!important',
          '&:hover': {
            backgroundColor: theme.colors.aplayerListHover,
          },
          '&.aplayer-list-light': {
            backgroundColor: theme.colors.aplayerListHover,
          },
        },
        '.aplayer-list-light': {
          '.aplayer-list-cur': {
            display: 'inline-block',
            width: '3px',
            position: 'absolute',
            left: 0,
            backgroundColor: theme.colors.aplayerListActiveCur,
            height: '28px',
            top: 0,
          },
        },
      },
    },
  })
export const AplayerStyle = (theme: ThemeType) =>
  css(
    {
      boxShadow: 'none !important',
      backgroundColor: theme.colors.backgroundHeader,
      margin: '0px !important',
      '&:hover': {
        '.aplayer-bar-wrap': HoverTransitionStyle,
        '.aplayer-volume-wrap': HoverTransitionStyle,
        '.aplayer-icon-lrc': HoverTransitionStyle,
      },
    },
    AplayerBodyStyle(theme),
    AplayerListStyle(theme)
  )
