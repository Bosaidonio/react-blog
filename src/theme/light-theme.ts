/*
 * @Date: 2023-04-23 22:59:13
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-29 15:28:06
 * @Description: 白色主题
 */

import { boxShadow, breakpoints, fontSizes, fonts, mediaQueries, spaces } from './common-theme'
import { AntDesignLight } from './plugin/ant-design'
import { AplayerLight } from './plugin/aplayer'

const LightTheme = {
  mode: 'light',
  colors: {
    text: '#777777',

    /* 布局背景颜色 */
    backgroundPrimary: '#efefef',
    backgroundBody: '#efefef',
    backgroundNavBar: '#f9f9f9',
    backgroundHeader: '#f9f9f9',
    backgroundMain: '#f1f3f4',
    backgroundHover: '#ececec',
    /* 播放器颜色 */
    ...AplayerLight,
    /* ant-design颜色 */
    ...AntDesignLight,
  },
  fonts,
  fontSizes,
  spaces,
  boxShadow,
  breakpoints,
  mediaQueries,
}
export type LightThemeType = typeof LightTheme
export default LightTheme
