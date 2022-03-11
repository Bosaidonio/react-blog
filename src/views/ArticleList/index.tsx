import { useState } from 'react'
import WarrperPagination from '@/components/Pagination'
import ArticleItem from '@/views/ArticleList/components/ArticleItem'
import PinnedArticle from '@/views/Home/components/PinnedArticle'
import { useRequest, useMount } from 'ahooks'
import { getArticleList } from '@/api/Articles'
import styles from '@/views/ArticleList/index.module.scss'
import { useNavigate } from 'react-router-dom'
export interface Article {
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

  const navigate = useNavigate()
  // 获取文章列表
  const { run } = useRequest(getArticleList, {
    manual: true,
    onSuccess: (result) => {
      if (result.code === 1) {
        setArticleList(result.data)
      }
    },
  })

  // 预览文章详情
  const onPreviewDesc = (articleId: number) => {
    navigate(`/article/${articleId}`)
  }
  useMount(() => {
    run()
  })
  return (
    <div className={styles['article-list']}>
      {articleList?.map((article, index) =>
        article.isPinned ? <PinnedArticle key={index} index={index} {...article} handleClick={onPreviewDesc} /> : <ArticleItem key={index} index={index} {...article} handleClick={onPreviewDesc} />
      )}
      <WarrperPagination />
    </div>
  )
}

export default ArticleList
