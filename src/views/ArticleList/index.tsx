/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 13:51:05
 * @Description: Do not edit
 */
import { useState } from 'react'
import WarrperPagination from '@/components/Pagination'
import ArticleItem from '@/views/ArticleList/components/ArticleItem'
import PinnedArticle from '@/views/Home/components/PinnedArticle'
import { useMount, useRequest } from 'ahooks'
import { getArticleList } from '@/api/Articles'
import { useNavigate } from 'react-router-dom'
import { ArticleListStyle } from './article-list-style'
export interface Article {
  _id: string
  title: string
  simpleDesc: string
  article: string
  author: string
  banner?: string
  isComment: boolean
  createTime: string
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
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  // 获取文章列表
  const { run } = useRequest(getArticleList, {
    manual: true,
    onSuccess: (result) => {
      if (result.statusCode === 200) {
        const records = result.data.records.map((item: any) => ({
          ...item,
          author: item.userInfo.username,
        }))
        setArticleList(records)
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
        setLoading(false)
      }
    },
  })

  // 预览文章详情
  const onPreviewDesc = (articleId: string, isComment: boolean) => {
    navigate(`/article/${articleId}`, { state: { isComment } })
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
    run({ ...params, status: 1 })
  })

  return (
    <div css={ArticleListStyle()}>
      {articleList?.map((article, index) =>
        article.isPinned ? (
          <PinnedArticle key={index} index={index} {...article} handleClick={onPreviewDesc} />
        ) : (
          <ArticleItem key={index} loading={loading} index={index} {...article} handleClick={onPreviewDesc} />
        )
      )}
      <WarrperPagination {...params} handlePageChange={handlePageChange} />
    </div>
  )
}

export default ArticleList
