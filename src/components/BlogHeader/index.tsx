/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 11:31:57
 * @Description: Do not edit
 */
import React, { FC } from 'react'
import { ReactSVG } from 'react-svg'
import { useLocation } from 'react-router'
import { BlogHeaderStyle, BlogHeaderTitleStyle, DescTextStyle, TitleIconsStyle } from './blog-header-style'
import { useMode } from '@/hooks'

export interface BlogHeaderProps {
  title: string
  desc: string
  icon?: string
  isCenter?: boolean
  customStyle?: React.CSSProperties
}
const BlogHeader: FC<BlogHeaderProps> = ({ title, desc, icon, isCenter, customStyle }) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const { theme } = useMode()
  return (
    <header css={BlogHeaderStyle(theme, isHomePage, isCenter)}>
      <h1 css={BlogHeaderTitleStyle(theme, isHomePage, isCenter, customStyle)}>
        {icon ? (
          <span css={TitleIconsStyle(theme)}>
            <ReactSVG src={icon} />
          </span>
        ) : null}
        {title}
      </h1>
      <small css={DescTextStyle(theme)}>{desc}</small>
    </header>
  )
}

export default BlogHeader
