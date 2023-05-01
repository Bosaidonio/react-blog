import { Card, Skeleton } from 'antd'
import { FC } from 'react'
import { Article } from '@/views/ArticleList'
import {
  AntCardStyle,
  ArticleHeaderStyle,
  BannerImgStyle,
  BannerStyle,
  ItemMetaIcoStyle,
  ItemMetaTitleStyle,
  LineStyle,
  PanelSmallStyle,
  PostItemFootStyle,
  SimpleDescStyle,
  UserIconStyle,
} from './article-Item-style'
import { useMode } from '@/hooks'
import { SingleLineEllipsis } from '@/style/common'

interface ArticleProps extends Article {
  index: number
  loading: boolean
  handleClick?: (articleId: string, isComment: boolean) => void
}
const ArticleItem: FC<ArticleProps> = ({ title, loading, simpleDesc, isComment, author, banner, isLeftRight, createTime, _id, handleClick, index }) => {
  const { theme } = useMode()
  return (
    <div css={ArticleHeaderStyle(theme)} onClick={() => handleClick && handleClick(_id, isComment)}>
      <Card css={AntCardStyle(theme, loading)} className="custom-ant-card" bordered={false}>
        {
          <Skeleton loading={loading} avatar active>
            <>
              {banner ? (
                <div css={BannerStyle(theme, isLeftRight)}>
                  <div css={BannerImgStyle(theme, banner, isLeftRight)}></div>
                </div>
              ) : null}
              <div css={PanelSmallStyle(theme, isLeftRight, banner)}>
                {banner ? null : <div css={ItemMetaIcoStyle(theme)}>📮</div>}
                <h2 css={ItemMetaTitleStyle(theme)}>
                  <span css={SingleLineEllipsis()}>{title}</span>
                </h2>
                <p css={SimpleDescStyle(theme, isLeftRight)}>{simpleDesc}</p>
                <div css={LineStyle(theme)}></div>
                <div css={PostItemFootStyle(theme)}>
                  <li>
                    <span css={UserIconStyle(theme)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </span>
                    <a href="https://www.mariowork.com">{author}</a>
                  </li>

                  <li>
                    <span css={UserIconStyle(theme)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-clock"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </span>
                    {createTime}
                  </li>
                  <li>
                    <span css={UserIconStyle(theme)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-message-square"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </span>
                    <span>{isComment ? '评论已开启' : '评论已关闭'}</span>
                  </li>
                </div>
              </div>
            </>
          </Skeleton>
        }
      </Card>
    </div>
  )
}

export default ArticleItem
