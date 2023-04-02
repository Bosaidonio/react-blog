/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-02 22:17:17
 * @Description: Do not edit
 */
import { useState } from 'react'
// import { useMediaQuery } from 'react-responsive'
import Header from '@/layout/Header'
import Navbar from '@/layout/Navbar'
import Content from '@/layout/Content'
import Footer from '@/layout/Footer'

import classnames from 'classnames'
import styles from '@/layout/index.module.scss'
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom'
const Layout = () => {
  const [isCollapse, setIsCollapse] = useState(true)
  const [initWidth, setInitWidth] = useState(220)
  // const isLayout = useMediaQuery({
  //   query: '(max-width: 1300px)',
  // })
  // 'header-fixed', isLayout ? '' : 'layout-box'
  // const isDeskbook = useMediaQuery({
  //   query: '(max-width: 1020px)',
  // })
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  // 判断当前路由是否是/ai
  const isAi = useLocation().pathname === '/ai'

  return (
    <div className={classnames(styles.layout)}>
      <Header isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <div style={{ backgroundColor: '#f9f9f9', height: 'auto', position: 'relative' }}>
        <Navbar isCollapse={isCollapse} setIsCollapse={setIsCollapse} initWidth={initWidth} setInitWidth={setInitWidth} />
        <Content isCollapse={isCollapse} initWidth={initWidth} customStyle={{ paddingBottom: isAi ? '0px' : '60px' }}></Content>
        {isAi ? null : (
          <div className={styles.footerBox} style={{ marginLeft: isMobile ? 0 : `${initWidth + 10}px`, marginRight: isMobile ? 0 : '250px' }}>
            <Footer />
          </div>
        )}
      </div>
    </div>
  )
}

export default Layout
