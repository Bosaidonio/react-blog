/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-05-01 23:18:29
 * @Description: Do not edit
 */
import { getTextWidth } from '@/utils/dom'
import { ReactSVG } from 'react-svg'
import { TabsList } from '@/layout/RightAside'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticleRecord } from '@/types/article'
import { CommentRecord } from '@/types/comment'
import icon from '@/layout/RightAside/components/TabItem/assets/svgs/icon-one.svg'
import { Tooltip } from 'antd'
import { useMode } from '@/hooks'
import { DescWarrperStyle, IconWarrperStyle, ListGroupItemStyle, ListGroupStyle, MetaCommentsStyle, MetaViewsStyle, PostHeadIconStyle, SimpleDescWarrperStyle, TabItemStyle } from './tab-item-style'

interface TabItemProps extends TabsList {
  currentIndex: number
}
const TabItem: FC<TabItemProps> = ({ title, children, currentIndex }) => {
  const navigate = useNavigate()
  const onNavigate = (comment: ArticleRecord | CommentRecord) => {
    if (!('isComment' in comment)) {
      navigate(`/article/${comment.articleId}`, { state: { isComment: false, isJustComment: true } })
      return
    } else {
      navigate(`/article/${comment._id}`, { state: { isComment: comment.isComment } })
    }
  }
  const renderTooltip = (title: string, font: string) => {
    const width = getTextWidth(title, `${font} Hiragino Sans GB`)
    return width > 145 ? (
      <Tooltip title={title}>
        <span>{title}</span>
      </Tooltip>
    ) : (
      <span>{title}</span>
    )
  }
  const { theme } = useMode()
  return (
    <div id="widget-tabs-4-hots" css={TabItemStyle(theme)}>
      <h5>{title}</h5>
      <ul css={ListGroupStyle()}>
        {(children as Array<ArticleRecord | CommentRecord>).map((comment, index) => {
          return (
            <li css={ListGroupItemStyle()} key={index} onClick={() => onNavigate(comment)}>
              <span css={IconWarrperStyle(theme)}>
                <img alt="" src={`https://cdn.mariowork.com/auth/${index + 1}.jpg`} />
              </span>
              <div css={SimpleDescWarrperStyle()}>
                <h4 css={DescWarrperStyle(theme, currentIndex !== 0)}>{renderTooltip('title' in comment ? comment.title : comment.commentDesc, currentIndex !== 0 ? '14px' : '12px')}</h4>
                <small css={PostHeadIconStyle(theme)}>
                  <span css={MetaViewsStyle()}>
                    {currentIndex !== 1 ? (
                      <span css={MetaCommentsStyle()}>
                        <ReactSVG src={icon} />
                      </span>
                    ) : null}
                    <span>{'commentCount' in comment ? comment.commentCount : ''}</span>
                  </span>
                </small>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TabItem
