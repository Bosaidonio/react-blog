/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-05-01 23:19:53
 * @Description: Do not edit
 */
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import { useMount, useRequest } from 'ahooks'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Tabs } from 'antd'

import { ArticleRecord } from '@/types/article'
import likeoutSvg from '@/assets/svgs/likeout.svg'
import giftSvg from '@/assets/svgs/gift.svg'
import commentSvg from '@/assets/svgs/comment.svg'
import { CommentRecord } from '@/types/comment'
import { getHotArticle, getHotComment, getRandomArticle } from '@/api/Articles'
import { useMode } from '@/hooks'
import { State } from '@/store'
import TabItem from '@/layout/RightAside/components/TabItem'
import BlogInfo from '@/layout/RightAside/components/BlogInfo'
import BabelCloud from '@/layout/RightAside/components/BabelCloud'
import Category from '@/layout/RightAside/components/Category'
import { RightAsideStyle, AntTabsStyle, DirectoryStyle, SidebarStyle, TabActiveStyle } from '@/layout/RightAside/right-aside-style'

const { TabPane } = Tabs
export interface TabsList {
  title: string
  icon: string
  children: ArticleRecord[] | CommentRecord[]
}
const RightAside = () => {
  const { theme } = useMode()
  const isDeskbook = useMediaQuery({
    query: '(max-width: 1020px)',
  })
  const [currentIndex, setCurrentIndex] = useState(0)
  const location = useLocation()
  const category = useSelector((state: State) => state.category)
  const isDirectory = location.pathname.indexOf('/article') > -1

  const onTabClick = (key: string) => {
    setCurrentIndex(Number(key))
  }
  const [tabsList, setTabList] = useState<TabsList[]>([
    {
      title: '热门文章',
      icon: likeoutSvg,
      children: [],
    },
    {
      title: '最新评论',
      icon: commentSvg,
      children: [],
    },
    {
      title: '随机文章',
      icon: giftSvg,
      children: [],
    },
  ])
  // 获取文章列表
  const { run: runHotArticle } = useRequest(getHotArticle, {
    manual: true,
    onSuccess: (result) => {
      if (result.statusCode === 200) {
        handleTabList(tabsList, '热门文章', result.data.records)
      }
    },
  })
  // 获取热门评论
  const { run: runHotComment } = useRequest(getHotComment, {
    manual: true,
    onSuccess: (result) => {
      if (result.statusCode === 200) {
        handleTabList(tabsList, '最新评论', result.data.records)
      }
    },
  })
  // 获取随机文章
  const { run: runRandomArticle } = useRequest(getRandomArticle, {
    manual: true,
    onSuccess: (result) => {
      if (result.statusCode === 200) {
        handleTabList(tabsList, '随机文章', result.data.records)
      }
    },
  })
  // 处理tabList
  const handleTabList = (tabList: TabsList[], title: string, updatedChildrenValue: ArticleRecord[] | CommentRecord[]) => {
    const index = tabList.findIndex((item) => item.title === title)
    if (index !== -1) {
      setTabList((prevTabsList) => {
        const newTabsList = [...prevTabsList]
        const updatedElement = {
          ...newTabsList[index],
          children: updatedChildrenValue,
        }
        newTabsList[index] = updatedElement
        return newTabsList
      })
    }
  }
  useMount(() => {
    runHotArticle({})
    runHotComment({})
    runRandomArticle({})
  })
  return (
    <div css={RightAsideStyle(theme, isDeskbook)}>
      <div css={SidebarStyle(theme, location.pathname.indexOf('article') > -1)}>
        {isDirectory ? (
          <div css={DirectoryStyle(theme)}>
            <h5>文章目录</h5>
            {/* <Anchor offsetTop={80} targetOffset={80} showInkInFixed>
            {diffNodes(category)}
          </Anchor> */}
            <Category category={category} />
          </div>
        ) : (
          <>
            <Tabs id="custom-ant-tab" css={AntTabsStyle(theme)} defaultActiveKey={`${currentIndex}`} animated onTabClick={onTabClick}>
              {tabsList.map((tab, index) => (
                <TabPane
                  tab={
                    <ReactSVG
                      css={TabActiveStyle(theme, index === currentIndex)}
                      src={tab.icon}
                      beforeInjection={(svg) => {
                        svg.setAttribute('style', 'color: rgb(119, 119, 119)')
                      }}
                    />
                  }
                  key={index}
                >
                  <TabItem {...tab} currentIndex={index} />
                </TabPane>
              ))}
            </Tabs>
            <BlogInfo />
            <BabelCloud />
          </>
        )}
      </div>
    </div>
  )
}

export default RightAside
