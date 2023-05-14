import { ThemeType } from '@/theme'
import { css } from '@emotion/react'

export const VditorPreviewStyle = (theme: ThemeType) =>
  css({
    '&#vditor-preview': {
      backgroundColor: theme.colors.vditorBackground,
      padding: '30px',
      borderRadius: '6px',
      color: theme.colors.vditorPrimaryText,
      h1: {
        border: 'none !important',
        color: theme.colors.vditorHeading,
      },
      h2: {
        border: 'none !important',
        color: theme.colors.vditorHeading,
      },
      h3: {
        border: 'none !important',
        color: theme.colors.vditorHeading,
      },
      h4: {
        border: 'none !important',
        color: theme.colors.vditorHeading,
      },
      h5: {
        border: 'none !important',
        color: theme.colors.vditorHeading,
      },
      h6: {
        border: 'none !important',
        color: theme.colors.vditorHeading,
      },
      li: {
        textAlign: 'left',
      },
      p: {
        textAlign: 'left',
      },
      img: {
        maxWidth: '50%',
        margin: '10px auto',
        cursor: 'pointer',
      },
      pre: {
        backgroundColor: theme.colors.vditorPreBackground,
        borderRadius: '5px !important',
        '&::before': {
          content: '""',
          display: 'block',
          backgroundSize: '40px',
          marginBottom: '8px',
          marginLeft: '8px',
          marginTop: '8px',
          borderRadius: '50%',
          background: '#ff0800 no-repeat 10px 10px',
          width: '12px',
          height: '12px',
          boxShadow: '20px 0 #fdbc40, 40px 0 #35cd4b',
          zIndex: 3,
        },
        code: {
          position: 'relative',
          padding: '15px !important',
          paddingLeft: '52px !important',
          maxHeight: 'fit-content',
          textAlign: 'left',
          '&>span': {
            display: 'inline-block',
            marginLeft: '5px',
          },
          '.vditor-linenumber__rows': {
            top: '15px',
          },
          '.diff': {
            margin: '0 -24px',
            padding: '0 24px',
            width: '100%',
            display: 'inline-block',
          },
          '.add': {
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            '&::before': {
              position: 'absolute',
              left: '35px',
              content: `"+"`,
              color: '#10b981',
            },
          },
          '.remove': {
            backgroundColor: 'rgba(244, 63, 94, 0.2)',
            opacity: 0.7,
            '&::before': {
              position: 'absolute',
              left: '35px',
              content: `"-"`,
              color: '#f43f5e',
            },
          },
        },
      },
      blockquote: {
        backgroundColor: theme.colors.vditorQuoteBackground,
        margin: '1rem 0 !important',
        borderLeft: `0.5rem solid ${theme.colors.vditorQuoteBorder}`,
        padding: '0.8rem 1.5rem !important',
        overflowX: 'auto !important' as 'auto',
      },
      '.no-external-link': {
        color: theme.colors.vditorLinkColor,
        borderBottom: `1px solid ${theme.colors.vditorLinkBorder}`,
        svg: {
          display: 'inline-block',
          width: '13px',
          height: '13px',
          verticalAlign: '-1px',
          marginLeft: '3px',
        },
      },
      '.custom-block': {
        margin: '16px 0',
        borderRadius: '8px',
        padding: '16px 16px 8px',
        lineHeight: '24px',
        '&.tip': {
          backgroundColor: theme.colors.vditorSuccessBackground,
          color: theme.colors.vditorSuccessText,
          border: `1px solid ${theme.colors.vditorSuccessBorder}`,
        },
        '&.warning': {
          backgroundColor: theme.colors.vditorWarnBackground,
          color: theme.colors.vditorWarnText,
          border: `1px solid ${theme.colors.vditorWarnBorder}`,
          '.custom-block-title': {
            color: theme.colors.vditorWarnTitle,
          },
        },
        '&.danger': {
          backgroundColor: theme.colors.vditorDangerBackground,
          color: theme.colors.vditorDangerText,
          border: `1px solid ${theme.colors.vditorDangerBorder}`,
          '.custom-block-title': {
            color: theme.colors.vditorDangerTitle,
          },
        },
        '&.details': {
          backgroundColor: theme.colors.vditorDetailsBackground,
          color: theme.colors.vditorDetailsText,
          border: `1px solid ${theme.colors.vditorDetailsBorder}`,
          '.custom-block-title': {
            color: theme.colors.vditorDetailsTitle,
          },
          summary: {
            margin: '0 0 8px',
            fontWeight: 700,
            cursor: 'pointer',
          },
        },
        '.custom-block-title': {
          fontWeight: 600,
          marginBottom: '10px',
        },
      },
    },
  })
