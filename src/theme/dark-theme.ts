/*
 * @Date: 2023-04-23 22:59:13
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-29 15:28:15
 * @Description: 暗色主题
 */

import { boxShadow, breakpoints, fontSizes, fonts, mediaQueries, spaces } from './common-theme'
import { AntDesignDark } from './plugin/ant-design'
import { AplayerDark } from './plugin/aplayer'

const DarkTheme = {
  mode: 'dark',
  colors: {
    text: '#888888',
    /* 布局背景颜色 */
    backgroundPrimary: '#191919',
    backgroundBody: '#191919',
    backgroundNavBar: '#212121',
    backgroundHeader: '#212121',
    backgroundMain: '#191919',
    backgroundHover: '#2c2c2c',
    /* 播放器颜色 */
    ...AplayerDark,
    /* ant-design颜色 */
    ...AntDesignDark,
  },
  fonts,
  fontSizes,
  spaces,
  boxShadow,
  breakpoints,
  mediaQueries,
}
export type DarkThemeType = typeof DarkTheme
export default DarkTheme
