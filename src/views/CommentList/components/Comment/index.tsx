import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import { warrperClass } from '@/utils/classnames'
import bloggerSvg from '@/views/CommentList/components/Comment/assets/svgs/blogger.svg'
import styles from '@/views/CommentList/components/Comment/index.module.scss'

export interface IComment {
  commentAvatar: string
  commentName: string
  commentTime: string
  atAuthor?: string
  commentContent: string
  isAuthor?: boolean
}
export interface CommentProps extends IComment {
  children?: IComment[]
}
const Comment: FC<CommentProps> = ({ commentAvatar, commentName, commentTime, atAuthor, commentContent, isAuthor, children }) => {
  return (
    <>
      <li className={warrperClass(styles, 'comment-body comment-parent comment-odd')}>
        {/* 评论者 */}
        <div id="div-comment-9073" className={warrperClass(styles, 'comment-body')}>
          <a href="javascript;" className={warrperClass(styles, 'pull-left thumb-sm comment-avatar')} rel="nofollow">
            <img alt="" src={commentAvatar} className={warrperClass(styles, 'img-40px photo img-square normal-shadow')} />
            {isAuthor ? (
              <label className={warrperClass(styles, 'label comment-author-logo m-l-xs')} data-original-title="博主">
                <ReactSVG src={bloggerSvg} />
              </label>
            ) : null}
          </a>
          <div className={warrperClass(styles, 'm-b m-l-xxl')}>
            <div className={warrperClass(styles, 'comment-meta')}>
              <span className={warrperClass(styles, 'comment-author vcard')}>
                <b className="fn">{commentName}</b>
              </span>
              <div className={warrperClass(styles, 'comment-metadata')}>
                <time className={warrperClass(styles, 'format_time text-muted text-xs block m-t-xs')}>{commentTime}</time>
              </div>
            </div>

            <div className={warrperClass(styles, 'comment-content m-t-sm')}>
              <span className={warrperClass(styles, 'comment-author-at')}>
                <b>{atAuthor}</b>
              </span>
              <div className={warrperClass(styles, 'comment-content-true')}>
                <p>{commentContent}</p>
              </div>
            </div>

            <div className={warrperClass(styles, 'comment-reply m-t-sm')}>
              <a href="https://www.ihewro.com/project.html/comment-page-1?replyTo=9073#respond-page-265" rel="nofollow">
                回复
              </a>
            </div>
          </div>
        </div>
        {/* 回复者列表 */}
        {children ? (
          <ol className={warrperClass(styles, 'comment-children list-unstyled m-l-xxl')}>
            {children.map((comment, index) => (
              <Comment {...comment} key={index} />
            ))}
          </ol>
        ) : null}
      </li>
    </>
  )
}

export default Comment
