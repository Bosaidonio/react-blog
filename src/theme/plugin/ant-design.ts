import { ThemeType } from '..'

/* ant-design颜色-Light */
export const AntDesignLight = {
  antInputBackground: '#fff',
  antInputBorderHover: '#40a9ff',
  antButtonGradient: ['#448bff', '#44e9ff', '#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'],
}
/* ant-design颜色-Dark */
export const AntDesignDark = {
  antInputBackground: '#191919',
  antInputBorderHover: '#40a9ff',
  antButtonGradient: ['#448bff', '#44e9ff', '#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'],
}
export const AntInput = (theme: ThemeType) => ({
  fontSize: '12px',
  backgroundColor: theme.colors.antInputBackground,
  color: theme.colors.text,
  '&:hover': {
    borderColor: theme.colors.antInputBorderHover,
  },
})
export const AntInputAffixWarrper = (theme: ThemeType) => ({
  height: '30px',
  paddingRight: '15px',
  paddingLeft: '15px',
  borderRadius: '15px',
  fontSize: '12px',
  lineHeight: '1.5',
  border: '1px solid transparent',
  backgroundColor: theme.colors.antInputBackground,
})
export const AntInputSuffix = (theme: ThemeType) => ({
  svg: {
    color: theme.colors.text,
    width: '20px',
    height: '16px',
  },
})
