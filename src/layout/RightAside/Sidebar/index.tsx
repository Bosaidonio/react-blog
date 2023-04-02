/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-02 20:00:48
 * @Description: Do not edite
 */
import { FC, useState } from 'react'
import { Tabs } from 'antd'
import { ReactSVG } from 'react-svg'
import { useLocation } from 'react-router-dom'

import NewArticle from '@/layout/RightAside/Sidebar/components/NewArticle'
import BlogInfo from '@/layout/RightAside/Sidebar/components/BlogInfo'
import BabelCloud from '@/layout/RightAside/Sidebar/components/BabelCloud'
import styles from '@/layout/RightAside/Sidebar/index.module.scss'
import { useSelector } from 'react-redux'
import { State } from '@/store'
import Category from './components/Category'

import { TabsList } from '@/layout/RightAside'
const { TabPane } = Tabs

interface SidebarProps {
  tabsList: TabsList[]
}
const Sidebar: FC<SidebarProps> = ({ tabsList }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const location = useLocation()
  const category = useSelector((state: State) => state.category)
  const isDirectory = location.pathname.indexOf('/article') > -1

  const onTabClick = (key: string) => {
    setCurrentIndex(Number(key))
  }

  // const diffNodes = (arr: any) => {
  //   return arr.map((link: any) => {
  //     if (!link.children) {
  //       return <Link key={link.href} href={link.href} title={link.title} />
  //     } else {
  //       return (
  //         <Link key={link.href} href={link.href} title={link.title}>
  //           {diffNodes(link.children)}
  //         </Link>
  //       )
  //     }
  //   })
  // }
  return (
    <div className={styles.sidebar} style={{ position: location.pathname.indexOf('article') > -1 ? 'fixed' : 'unset' }}>
      {isDirectory ? (
        <div className={styles.directory}>
          <h5 style={{ fontSize: '16px', marginBottom: '15px', color: 'inherit' }}>文章目录</h5>
          {/* <Anchor offsetTop={80} targetOffset={80} showInkInFixed>
            {diffNodes(category)}
          </Anchor> */}
          <Category category={category} />
        </div>
      ) : (
        <>
          <Tabs defaultActiveKey={`${currentIndex}`} animated onTabClick={onTabClick}>
            {tabsList.map((tab, index) => (
              <TabPane
                tab={
                  <ReactSVG
                    className={index === currentIndex ? `${styles.active}` : ''}
                    src={tab.icon}
                    beforeInjection={(svg) => {
                      svg.setAttribute('style', 'color: rgb(119, 119, 119)')
                    }}
                  />
                }
                key={index}
              >
                <NewArticle {...tab} currentIndex={index} />
              </TabPane>
            ))}
          </Tabs>
          <BlogInfo />
          <BabelCloud />
        </>
      )}
    </div>
  )
}

export default Sidebar
