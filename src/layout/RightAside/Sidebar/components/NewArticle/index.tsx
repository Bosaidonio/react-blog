import styles from '@/layout/RightAside/Sidebar/components/NewArticle/index.module.scss'
import { warrperClass } from '@/utils/classnames'
import { ReactSVG } from 'react-svg'
import { TabsList } from '@/layout/RightAside/Sidebar'
import { FC } from 'react'

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
                <img alt="" src={comment.imgSrc} className={warrperClass(styles, 'img-40px normal-shadow img-square')} />
              </a>
              <div className={styles.clear}>
                <h4 className={warrperClass(styles, 'h5 l-h text-second')}>
                  <a
                    className={currentIndex === 1 ? styles['text-ellipsis'] : ''}
                    style={{ fontSize: currentIndex !== 0 ? '14px' : '12px' }}
                    href="https://www.ihewro.com/archives/489/"
                    title="handsome —— 一款typecho主题"
                  >
                    {comment.title}
                  </a>
                </h4>
                <small className={warrperClass(styles, 'text-muted post-head-icon')}>
                  <span className={styles['meta-views']}>
                    {currentIndex !== 1 ? (
                      <span className={styles['right-small-icons']}>
                        <ReactSVG src={comment.icon} />
                      </span>
                    ) : null}
                    <span className={styles['meta-value']}>{comment.content}</span>
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
