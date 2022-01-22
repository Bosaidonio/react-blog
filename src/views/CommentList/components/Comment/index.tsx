import { FC } from 'react'
import { ReactSVG } from 'react-svg'
import { warrperClass } from '@/utils/classnames'
import { Emoji } from 'emoji-mart'
import Reply from '@/views/CommentList/components/Reply'
import bloggerSvg from '@/views/CommentList/components/Comment/assets/svgs/blogger.svg'
import styles from '@/views/CommentList/components/Comment/index.module.scss'

export interface IComment {
  id: number
  commentAvatar: string
  commentName: string
  commentTime: string
  atAuthor?: string
  commentContent: string
  isAuthor?: boolean
  isReply?: boolean
  parentId?: number
  emojiList?: string[]
}
export interface CommentProp extends IComment {
  children?: IComment[]
}
export interface CommentProps extends CommentProp {
  filterCommentList: (id: number) => void
  onCancelReply: () => void
}
const Comment: FC<CommentProps> = ({ id, parentId, onCancelReply, commentAvatar, commentName, commentTime, atAuthor, commentContent, emojiList, isAuthor, children, isReply, filterCommentList }) => {
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
                <p>
                  {
                    // 展示表情
                    emojiList ? emojiList.map((eomjiId, index) => <Emoji emoji={eomjiId} set="google" size={16} key={index} />) : null
                  }
                  {commentContent}
                </p>
              </div>
            </div>

            <div className={warrperClass(styles, 'comment-reply m-t-sm')} onClick={() => filterCommentList(parentId ? parentId : id)}>
              回复
            </div>
          </div>
        </div>
        {/* 回复者列表 */}
        {children ? (
          <ol className={warrperClass(styles, 'comment-children list-unstyled m-l-xxl')}>
            {children.map((comment, index) => (
              <Comment onCancelReply={onCancelReply} {...comment} key={index} filterCommentList={filterCommentList} />
            ))}
            {isReply ? <Reply id={id} onCancelReply={onCancelReply} filterCommentList={filterCommentList} /> : null}
          </ol>
        ) : null}
      </li>
    </>
  )
}

export default Comment
