/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 22:44:27
 * @Description: Do not edit
 */
import { useState } from 'react'
import Header from '@/layout/Header'
import Navbar from '@/layout/Navbar'
import Content from '@/layout/Content'
import Footer from '@/layout/Footer'

import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom'
import { BoxModeStyle, FotterBoxStyle, LayoutStyle, LayoutWarrperStyle } from './layout-style'
import { useMode } from '@/hooks'
const Layout = () => {
  const [isCollapse, setIsCollapse] = useState(true)
  const [initWidth, setInitWidth] = useState(220)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isBoxMode, setIsBoxMode] = useState(true)
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  // 判断当前路由是否是/ai
  const isAi = useLocation().pathname === '/ai'
  const { theme } = useMode()
  return (
    <div css={LayoutStyle(theme, isBoxMode)}>
      <Header BoxModeStyle={BoxModeStyle(theme, isBoxMode)} isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <div css={LayoutWarrperStyle(theme)}>
        <Navbar isCollapse={isCollapse} setIsCollapse={setIsCollapse} initWidth={initWidth} setInitWidth={setInitWidth} />
        <Content isCollapse={isCollapse} initWidth={initWidth} customStyle={{ paddingBottom: isAi ? '0px' : '60px' }}></Content>
        {isAi ? null : (
          <div css={FotterBoxStyle(theme)} style={{ marginLeft: isMobile ? 0 : `${initWidth + 10}px`, marginRight: isMobile ? 0 : '250px' }}>
            <Footer />
          </div>
        )}
      </div>
    </div>
  )
}

export default Layout
