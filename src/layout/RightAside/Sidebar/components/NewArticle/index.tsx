/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-02 19:37:07
 * @Description: Do not edit
 */
import styles from '@/layout/RightAside/Sidebar/components/NewArticle/index.module.scss'
import { warrperClass } from '@/utils/classnames'
import { ReactSVG } from 'react-svg'
import { TabsList } from '@/layout/RightAside'
import { FC } from 'react'
import icon from '@/layout/RightAside/Sidebar/components/NewArticle/assets/svgs/icon-one.svg'

interface NewArticleProps extends TabsList {
  currentIndex: number
}
const newArticle: FC<NewArticleProps> = ({ title, children, currentIndex }) => {
  return (
    <div id="widget-tabs-4-hots" className={warrperClass(styles, 'tab-pane wrapper-md active')} role="tabpanel">
      <h5 className={warrperClass(styles, 'widget-title m-t-none text-md')}>{title}</h5>
      <ul className={warrperClass(styles, 'list-group no-bg no-borders pull-in m-b-none')}>
        {children.map((comment, index) => {
          return (
            <li className={styles['list-group-item']} key={index}>
              <a href="https://www.ihewro.com/archives/489/" className={warrperClass(styles, 'pull-left thumb-sm m-r')}>
                <img alt="" src={`https://cdn.mariowork.com/auth/${index + 1}.jpg`} className={warrperClass(styles, 'img-40px normal-shadow img-square')} />
              </a>
              <div className={styles.clear}>
                <h4 className={warrperClass(styles, 'h5 l-h text-second')}>
                  <span className={styles['text-ellipsis']} style={{ fontSize: currentIndex !== 0 ? '14px' : '12px' }}>
                    {'title' in comment ? comment.title : comment.commentDesc}
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

export default newArticle
