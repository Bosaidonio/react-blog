/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2022-10-08 15:35:08
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
  })
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  // 获取文章列表
  const { run } = useRequest(getArticleList, {
    manual: true,
    onSuccess: (result) => {
      if (result.statusCode === 200) {
        setArticleList(result.data.records)
      }
    },
  })

  // 预览文章详情
  const onPreviewDesc = (articleId: string) => {
    navigate(`/article/${articleId}`)
  }
  useMount(() => {
    run(params)
  })
  return (
    <div className={styles['article-list']}>
      {articleList?.map((article, index) =>
        article.isPinned ? <PinnedArticle key={index} index={index} {...article} handleClick={onPreviewDesc} /> : <ArticleItem key={index} index={index} {...article} handleClick={onPreviewDesc} />
      )}
      <WarrperPagination {...params} total={total} />
    </div>
  )
}

export default ArticleList
