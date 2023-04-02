/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-02 22:02:09
 * @Description: Do not edit
 */
import { useMediaQuery } from 'react-responsive'
import Sidebar from '@/layout/RightAside/Sidebar'
import styles from '@/layout/RightAside/index.module.scss'
import classNames from 'classnames'
import { useState } from 'react'
import { ArticleRecord } from '@/types/article'
import likeoutSvg from '@/assets/svgs/likeout.svg'
import giftSvg from '@/assets/svgs/gift.svg'
import commentSvg from '@/assets/svgs/comment.svg'
import { CommentRecord } from '@/types/comment'
import { getHotArticle, getHotComment, getRandomArticle } from '@/api/Articles'
import { useMount, useRequest } from 'ahooks'
export interface TabsList {
  title: string
  icon: string
  children: ArticleRecord[] | CommentRecord[]
}
const RightAside = () => {
  const isDeskbook = useMediaQuery({
    query: '(max-width: 1020px)',
  })
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
    <div className={classNames(styles.rightaside, isDeskbook ? styles['aside-active'] : '')}>
      <Sidebar tabsList={tabsList} />
    </div>
  )
}

export default RightAside
