/*
 * @Date: 2023-04-23 22:59:13
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-05-01 22:53:35
 * @Description: 白色主题
 */

import { boxShadow, breakpoints, fontSizes, fonts, mediaQueries, spaces } from './common-theme'
import { ArticleLight } from './components/article-theme'
import { BabelCloudLight } from './components/babel-cloud-style'
import { BlogInfoLight } from './components/blog-info-theme'
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
    backgroundContent: '#f9f9f9',
    backgroundMain: '#f1f3f4',
    backgroundFooter: '#f9f9f9',
    backgroundAisde: '#f9f9f9',
    backgroundHover: '#ececec',
    boxShadowPrimary: '#e1e1e1',
    /* 播放器颜色 */
    ...AplayerLight,
    /* ant-design颜色 */
    ...AntDesignLight,
    /* 进度条 */
    progressBackground: '#23b7e5',
    /* 文章 */
    ...ArticleLight,
    /* 博客信息 */
    ...BlogInfoLight,
    /* 标签云 */
    ...BabelCloudLight,
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
