import classnames from 'classnames'
import styles from '@/views/ArticleList/components/ArticleHeader/index.module.scss'
import { warrperClass } from '@/utils/classnames'
import { Card, Skeleton } from 'antd'
import { useState, useEffect, FC } from 'react'

interface ArticleProps {
  title: string
  article: string
  author: string
  banner?: string
  isLeftRight?: boolean
  time: string
}
const ArticleHeader: FC<ArticleProps> = ({ title, article, author, banner, isLeftRight, time }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className={classnames(styles['article-header'], loading ? styles['warrper-20'] : '')}>
      <Card bordered={false}>
        {
          <Skeleton loading={loading} avatar active>
            <div className={isLeftRight ? styles['is-left-right'] : ''}>
              {banner ? (
                <div className={classnames(styles['index-post-img'], styles['index-img-small'])}>
                  <a href="https://www.ihewro.com/archives/1205/">
                    <div className={classnames(styles['item-thumb'], styles['item-thumb-small'])} style={{ backgroundImage: `url(${banner})` }}></div>
                  </a>
                </div>
              ) : null}
              <div className={classnames(styles['post-meta'], styles['panel-small'], 'padding-20', styles['wrapper-lg'])}>
                {banner ? null : <div className={classnames(styles['item-meta-ico'], styles['bg-ico-emoji'])}>📮</div>}
                <h2 className={warrperClass(styles, 'm-t-none text-ellipsis index-post-title text-title')}>
                  <a href="https://www.ihewro.com/archives/1218/" className={styles['text-ellipsis']}>
                    {title}
                  </a>
                </h2>
                <p className={warrperClass(styles, 'summary l-h-2x text-muted')}>{article}</p>
                <div className={warrperClass(styles, 'line line-lg b-b b-light')}></div>
                <div className={warrperClass(styles, 'text-muted post-item-foot-icon text-ellipsis list-inline')}>
                  <li>
                    <span className={warrperClass(styles, 'm-r-sm right-small-icons')}>
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
                    <a href="https://www.ihewro.com/author/1/">{author}</a>
                  </li>

                  <li>
                    <span className={warrperClass(styles, 'right-small-icons m-r-sm')}>
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
                    {time}
                  </li>
                  <li>
                    <span className={warrperClass(styles, 'right-small-icons m-r-sm')}>
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
                    <a href="https://www.ihewro.com/archives/1218/#comments">关闭评论</a>
                  </li>
                </div>
              </div>
            </div>
          </Skeleton>
        }
      </Card>
    </div>
  )
}

export default ArticleHeader
