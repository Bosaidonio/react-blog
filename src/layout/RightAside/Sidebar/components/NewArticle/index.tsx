/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-22 17:08:11
 * @Description: Do not edit
 */
import { getTextWidth, warrperClass } from '@/utils/dom'
import { ReactSVG } from 'react-svg'
import { TabsList } from '@/layout/RightAside'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticleRecord } from '@/types/article'
import { CommentRecord } from '@/types/comment'
import icon from '@/layout/RightAside/Sidebar/components/NewArticle/assets/svgs/icon-one.svg'
import { Tooltip } from 'antd'
import styles from '@/layout/RightAside/Sidebar/components/NewArticle/index.module.scss'

interface NewArticleProps extends TabsList {
  currentIndex: number
}
const NewArticle: FC<NewArticleProps> = ({ title, children, currentIndex }) => {
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
  return (
    <div id="widget-tabs-4-hots" className={warrperClass(styles, 'tab-pane wrapper-md active')} role="tabpanel">
      <h5 className={warrperClass(styles, 'widget-title m-t-none text-md')}>{title}</h5>
      <ul className={warrperClass(styles, 'list-group no-bg no-borders pull-in m-b-none')}>
        {children.map((comment, index) => {
          return (
            <li className={styles['list-group-item']} key={index} onClick={() => onNavigate(comment)}>
              <span className={warrperClass(styles, 'pull-left thumb-sm m-r')}>
                <img alt="" src={`https://cdn.mariowork.com/auth/${index + 1}.jpg`} className={warrperClass(styles, 'img-40px normal-shadow img-square')} />
              </span>
              <div className={styles.clear}>
                <h4 className={warrperClass(styles, 'h5 l-h text-second')}>
                  <span className={styles['text-ellipsis']} style={{ fontSize: currentIndex !== 0 ? '14px' : '12px' }}>
                    {renderTooltip('title' in comment ? comment.title : comment.commentDesc, currentIndex !== 0 ? '14px' : '12px')}
                  </span>
                </h4>
                <small className={warrperClass(styles, 'text-muted post-head-icon')}>
                  <span className={styles['meta-views']}>
                    {currentIndex !== 1 ? (
                      <span className={styles['right-small-icons']}>
                        <ReactSVG src={icon} />
                      </span>
                    ) : null}
                    <span className={styles['meta-value']}>{'commentCount' in comment ? comment.commentCount : ''}</span>
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

export default NewArticle
