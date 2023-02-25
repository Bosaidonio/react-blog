/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-02-19 19:02:14
 * @Description: Do not edit
 */
import { useState } from 'react'
import WarrperPagination from '@/components/Pagination'
import ArticleItem from '@/views/ArticleList/components/ArticleItem'
import PinnedArticle from '@/views/Home/components/PinnedArticle'
import { useRequest, useMount } from 'ahooks'
import { getArticleList } from '@/api/Articles'
import styles from '@/views/ArticleList/index.module.scss'
import { useNavigate } from 'react-router-dom'
export interface Article {
  _id: string
  title: string
  simpleDesc: string
  article: string
  author: string
  banner?: string
  time: string
  isLeftRight?: boolean // 是否左右布局显示
  isPinned?: boolean // 是否置顶
}
const ArticleList = () => {
  const [articleList, setArticleList] = useState<Article[]>()
  const [params, setParams] = useState({
    pageNow: 1,
    pageSize: 10,
    total: 0,
  })
  const navigate = useNavigate()

  // 获取文章列表
  const { run } = useRequest(getArticleList, {
    manual: true,
    onSuccess: (result) => {
      if (result.statusCode === 200) {
        setArticleList(result.data.records)
        setParams({
          pageNow: params.pageNow,
          pageSize: params.pageSize,
          total: result.data.total,
        })
        // 圆滑的回到顶部
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    },
  })

  // 预览文章详情
  const onPreviewDesc = (articleId: string) => {
    navigate(`/article/${articleId}`)
  }
  const handlePageChange = (pageNow: number, pageSize: number) => {
    setParams({
      pageNow,
      pageSize,
      total: params.total,
    })
    run({
      pageNow,
      pageSize,
    })
  }
  useMount(() => {
    run(params)
  })
  return (
    <div className={styles['article-list']}>
      {articleList?.map((article, index) =>
        article.isPinned ? <PinnedArticle key={index} index={index} {...article} handleClick={onPreviewDesc} /> : <ArticleItem key={index} index={index} {...article} handleClick={onPreviewDesc} />
      )}
      <WarrperPagination {...params} handlePageChange={handlePageChange} />
    </div>
  )
}

export default ArticleList
