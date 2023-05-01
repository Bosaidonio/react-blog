/*
 * @Date: 2023-04-23 22:59:13
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-05-01 22:51:41
 * @Description: 暗色主题
 */

import { boxShadow, breakpoints, fontSizes, fonts, mediaQueries, spaces } from './common-theme'
import { ArticleDark } from './components/article-theme'
import { BabelCloudDark } from './components/babel-cloud-style'
import { BlogInfoDark } from './components/blog-info-theme'
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
    backgroundContent: '#212121',
    backgroundMain: '#191919',
    backgroundAisde: '#212121',
    backgroundFooter: '#212121',
    backgroundHover: '#2c2c2c',
    boxShadowPrimary: '#000',
    /* 进度条 */
    progressBackground: '#23b7e5',
    /* 播放器颜色 */
    ...AplayerDark,
    /* ant-design颜色 */
    ...AntDesignDark,
    /* 文章 */
    ...ArticleDark,
    /* 博客信息 */
    ...BlogInfoDark,
    /* 标签云 */
    ...BabelCloudDark,
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
