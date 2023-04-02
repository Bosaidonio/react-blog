/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2022-10-08 15:35:18
 * @Description: Do not edit
 */
import { FC } from 'react'
import styles from '@/views/Home/components/PinnedArticle/index.module.scss'
import { warrperClass } from '@/utils/classnames'
import { Article } from '@/views/ArticleList'
interface PinnedArticleProps extends Article {
  index: number
  handleClick?: (articleId: string, isComment: boolean) => void
}
const PinnedArticle: FC<PinnedArticleProps> = ({ index, title, banner, simpleDesc, _id, isComment, handleClick }) => {
  return (
    <div className={warrperClass(styles, 'panel-picture border-radius-6 box-shadow-wrap-normal')} onClick={() => handleClick && handleClick(_id, isComment)}>
      <figure className={warrperClass(styles, 'post-thumbnail border-radius-6')}>
        <span className={warrperClass(styles, 'post-thumbnail-inner index-image lazy')} style={{ backgroundImage: `url(${banner})` }}></span>
      </figure>
      <header className={warrperClass(styles, 'entry-header wrapper-lg')}>
        <h3 className={warrperClass(styles, 'm-t-none text-ellipsis index-post-title')}>
          <span>
            {index === 0 ? (
              <span className={warrperClass(styles, 'label text-sm bg-danger pull-left m-t-xs m-r')} style={{ marginTop: '10px' }}>
                置顶
              </span>
            ) : null}
            <span style={{ color: '#fff' }}> {title}</span>
          </span>
        </h3>
        <div className={styles['entry-meta']}>{simpleDesc}</div>
      </header>
    </div>
  )
}
export default PinnedArticle
