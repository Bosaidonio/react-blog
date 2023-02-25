/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2022-11-15 10:16:39
 * @Description: Do not edit
 */
import React, { FC } from 'react'
import { ReactSVG } from 'react-svg'
import classnames from 'classnames'
import { useLocation } from 'react-router'

import styles from '@/components/BlogHeader/index.module.scss'

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
  const homeStyle = {
    background: `#f9f9f9 url('https://www.ihewro.com/usr/uploads/2022/01/2429933165.png') no-repeat center`,
    backgroundSize: '100% 100%',
  }
  return (
    <header className={classnames(styles['header-md'], isHomePage || isCenter ? styles['center'] : '')} style={isHomePage ? homeStyle : {}}>
      <h1 className={classnames(isHomePage ? styles['font-thin'] : '')} style={{ fontWeight: isHomePage ? 300 : 400, justifyContent: isHomePage || isCenter ? 'center' : 'unset', ...customStyle }}>
        {icon ? (
          <span className={styles['title-icons']}>
            <ReactSVG src={icon} />
          </span>
        ) : null}
        {title}
      </h1>
      <small className="text-muted tracking-widest">{desc}</small>
    </header>
  )
}

export default BlogHeader
