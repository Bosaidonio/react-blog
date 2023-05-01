import { MultiLineEllipsis, SingleLineEllipsis } from '@/style/common'
import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

export const ArticleHeaderStyle = (theme: ThemeType) =>
  css({
    maxWidth: 'initial',
    marginBottom: '20px',
    cursor: 'pointer',
    transition: 'all .3s ease',
  })
export const AntCardStyle = (theme: ThemeType, loading: boolean) =>
  css({
    '&.custom-ant-card.ant-card': {
      borderRadius: '10px',
      boxShadow: theme.boxShadow.panel,
      backgroundColor: theme.colors.antCardBackground,
      transition: 'all .3s ease',
      '.ant-card-body': {
        padding: 0,
        ...(loading
          ? {
              padding: '20px',
            }
          : {}),
      },
    },
  })

export const LeftAndRightStyle = () => css({})
export const BannerStyle = (theme: ThemeType, isLeftRight?: boolean) =>
  css({
    transition: 'all .3s ease',
    ...(isLeftRight
      ? {
          position: 'relative',
          width: '35%',
          float: 'left',
        }
      : {}),
  })
export const BannerImgStyle = (theme: ThemeType, banner: string, isLeftRight?: boolean) =>
  css({
    minHeight: '250px',
    height: 'auto',
    position: 'relative',
    display: 'block',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
    backgroundImage: `url(${banner})`,
    transition: 'all .3s ease',
    ...(isLeftRight
      ? {
          minHeight: 'unset',
          height: '210px',
          position: 'relative',
          display: 'block',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      : {}),
  })
export const PanelSmallStyle = (theme: ThemeType, isLeftRight?: boolean, banner?: string) =>
  css({
    padding: '20px 30px',
    transition: 'all .3s ease',
    ...(isLeftRight && banner
      ? {
          float: 'left',
          width: '65%',
          padding: '20px 30px 20px 30px',
        }
      : {}),
  })
export const ItemMetaIcoStyle = (theme: ThemeType) =>
  css({
    position: 'relative',
    display: 'inline-block',
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    float: 'left',
    lineHeight: '42px',
    background: '0 0',
    border: 'none',
    fontSize: '35px',
    marginRight: '15px',
    userSelect: 'none',
    transition: 'all .3s ease',
  })
export const ItemMetaTitleStyle = (theme: ThemeType) =>
  css(
    {
      display: 'block',
      marginTop: '0 !important',
      fontSize: '22px',
      paddingBottom: '1px',
      color: theme.colors.articleTitleColor,
      transition: 'all .3s ease',
    },
    SingleLineEllipsis()
  )
export const SimpleDescStyle = (theme: ThemeType, isLeftRight?: boolean) =>
  css(
    {
      lineHeight: '2em',
      color: theme.colors.articleDescColor,
      height: '60px',
      transition: 'all .3s ease',
    },
    MultiLineEllipsis(2)
  )
export const LineStyle = (theme: ThemeType) =>
  css({
    width: '100%',
    height: '2px',
    overflow: 'hidden',
    fontSize: 0,
    marginTop: '15px',
    marginBottom: '15px',
    borderBottom: `1px solid ${theme.colors.backgroundPrimary}`,
  })
export const PostItemFootStyle = (theme: ThemeType) =>
  css(
    {
      color: theme.colors.articleDescColor,
      fontSize: '13px',
      display: 'flex',
      marginLeft: '-5px',
      listStyle: 'none',
      background: theme.colors.articleFooterBackground,
      padding: '6px',
      borderRadius: '5px',
      li: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: '5px',
        paddingLeft: '5px',
        a: {
          color: 'inherit',
          textDecoration: 'none',
          cursor: 'pointer',
          wordBreak: 'break-all',
        },
      },
    },
    SingleLineEllipsis()
  )
export const UserIconStyle = (theme: ThemeType) =>
  css({
    marginRight: '10px',
    svg: {
      width: '14px',
      height: '14px',
      verticalAlign: '-3px',
    },
  })
