/*
 * @Author: Mario
 * @Date: 2022-03-01 18:27:32
 * @LastEditTime: 2023-05-14 13:23:36
 * @LastEditors: mario marioworker@163.com
 * @Description: 文章详情组件
 */
import { createContext, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getArticleDesc } from '@/api/Articles'
import BlogHeader, { BlogHeaderProps } from '@/components/BlogHeader'
import VditorPreview from '@/components/VditorPreview'
import Breadcrumb from '@/components/Breadcrumb'
import { diffDom, toTree } from '@/utils'
import { useDispatch } from 'react-redux'
import { CategoryTypes } from '@/store/action-types'
import CommentList from '@/views/CommentList'
import { CommentProp } from '@/views/CommentList/components/Comment'
import { ArticleWarrperStyle, CommentCloseStyle } from './article-desc-style'
import { useMode } from '@/hooks'
import { parseAndModifyCodeBlocks } from '@/utils/dom'

interface IPreviewOptions {
  mode: 'dark' | 'light'
  customEmoji?: IObject
  lang?: keyof II18n
  i18n?: ITips
  lazyLoadImage?: string
  emojiPath?: string
  hljs?: IHljs
  speech?: {
    enable?: boolean
  }
  anchor?: number // 0: no render, 1: render left, 2: render right
  math?: IMath
  cdn?: string
  markdown?: IMarkdownConfig
  renderers?: ILuteRender
  theme?: IPreviewTheme
  icon?: 'ant' | 'material' | undefined
  transform?(html: string): string
  after?(): void
}
export const ArticleContext = createContext({
  articleId: '',
  run: ({ id }: { id: string }) => {},
})
const ArticleProvider = ({ children, run }: any) => {
  const { id } = useParams<{ id: string }>()
  return <ArticleContext.Provider value={{ articleId: id || '', run }}>{children}</ArticleContext.Provider>
}

export const ArticleComsumer = () => useContext(ArticleContext)
const PreviewArticleDesc = () => {
  const [markdown, setMarkdown] = useState('')
  const [commentList, setCommentList] = useState<CommentProp[]>([])
  const [isRenderFinsish, setRenderFinsish] = useState(false)
  const [headerData, setHeaderData] = useState<BlogHeaderProps>({
    title: '',
    desc: '',
    isCenter: true,
    customStyle: {
      fontSize: '24px',
    },
  })
  const params = useParams()
  const [isComment, setIsComment] = useState(false)

  const dispatch = useDispatch()
  // 获取文章详情
  const { run } = useRequest(getArticleDesc, {
    manual: true,
    onSuccess: (result) => {
      if (result.statusCode === 200) {
        const comment = result.data.commentList.map((item: any) => {
          return {
            ...item,
            isIndex: true,
          }
        })
        setIsComment(result.data.isComment)
        setCommentList(comment)
        setHeaderData({
          ...headerData,
          title: result.data.title,
          desc: result.data.simpleDesc,
        })
        setMarkdown(result.data.articleContent)
      }
    },
  })

  // 文章预览配置
  const options: IPreviewOptions = {
    mode: 'light',
    hljs: {
      enable: true,
      style: 'native',
      lineNumber: false,
    },
    // 设置代码块主题
    theme: {
      current: 'light',
    },
    transform: (html) => {
      console.log('html', html)

      const modifyHtml = parseAndModifyCodeBlocks(html)
      console.log('modifyHtml', modifyHtml)

      return modifyHtml
    },

    // media: {
    //   audio: true,
    //   video: true,
    //   iframe: true,
    //   externalLink: true,
    // },
    // markdown: {
    //   linkBase: 'https://www-mariowork-com.oss-cn-beijing.aliyuncs.com/',
    // },
  }

  const asyncRender = () => {
    window.scrollTo(0, 0)
    setRenderFinsish(true)
    const root = document.querySelector('.vditor-reset')
    const tags = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']

    const hTags = diffDom(root, [], tags).map((node) => ({
      hLevel: Number(node.tagName.replace('H', '')),
      href: `#${node.id}`,
      title: node.id,
    }))

    const tree = toTree(hTags)

    dispatch({ type: CategoryTypes.SET_CATEGORY, payload: tree })
  }
  const { theme } = useMode()
  useEffect(() => {
    run({ id: params.id })
  }, [run, params.id])
  return (
    <div className="article-desc">
      <BlogHeader {...headerData} />
      <div css={ArticleWarrperStyle()}>
        <Breadcrumb />
        {markdown ? <VditorPreview markdown={markdown} options={options} callback={asyncRender} /> : null}
        <ArticleProvider run={run}>{isComment && isRenderFinsish ? <CommentList commentList={commentList} /> : <p css={CommentCloseStyle(theme)}>此处评论已关闭</p>}</ArticleProvider>
      </div>
    </div>
  )
}

export default PreviewArticleDesc
