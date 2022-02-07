import React, { FC } from 'react'
import { ReactSVG } from 'react-svg'
import { warrperClass } from '@/utils/classnames'

import Reply from '@/views/CommentList/components/Reply'
import bloggerSvg from '@/views/CommentList/components/Comment/assets/svgs/blogger.svg'
import styles from '@/views/CommentList/components/Comment/index.module.scss'
import googleEmoji from 'emoji-mart/data/google.json'
import { reaplceLink } from '@/utils'
import { Emoji } from 'emoji-mart'
export interface IComment {
  id: number
  parentID?: number
  commentAvatar: string
  commentName: string
  commentTime: string
  atAuthor?: string
  commentContent: string
  isAuthor?: boolean
  isReply?: boolean
  isIndex?: boolean
  // emojiList?: string[]
  children?: IComment[]
}
export interface CommentProp extends IComment {
  children?: IComment[]
}
export interface CommentProps extends CommentProp {
  filterCommentList: (id: number) => void
  onCancelReply: () => void
  commentList: CommentProp[]
  setCommentList: (commentList: CommentProp[]) => void
}
const Comment: FC<CommentProps> = ({
  commentList,
  setCommentList,
  id,
  isIndex,
  onCancelReply,
  commentAvatar,
  commentName,
  commentTime,
  atAuthor,
  commentContent,
  // emojiList,
  isAuthor,
  children,
  isReply,
  filterCommentList,
}) => {
  // 渲染表情加文本
  const renderContent = (commentContent: string) => {
    const start = new Date().getTime() //起始时间
    commentContent = reaplceLink(commentContent)
    let html = ''
    let isReplace = false
    googleEmoji.categories.forEach((item) => {
      item.emojis.forEach((subItem) => {
        if (commentContent.includes(`:${subItem}:`)) {
          html = commentContent.replace(new RegExp(':' + subItem + ':', 'gi'), (result) => {
            isReplace = true
            return `${Emoji({
              html: true,
              set: 'google',
              emoji: result,
              size: 16,
            })}`
          })
          commentContent = html
        }
      })
    })
    if (!isReplace) {
      html = commentContent
    }
    const end = new Date().getTime() //起始时间
    console.log(`${end - start}ms`)

    return html
  }
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
                  <span dangerouslySetInnerHTML={{ __html: renderContent(commentContent) }}></span>
                </p>
              </div>
            </div>

            <div className={warrperClass(styles, 'comment-reply m-t-sm')} onClick={() => filterCommentList(id)}>
              回复
            </div>
            {isReply ? <Reply id={id} commentList={commentList} setCommentList={setCommentList} onCancelReply={onCancelReply} commentName={commentName} /> : null}
          </div>
        </div>
        {/* 回复者列表 */}
        {children ? (
          <ol className={warrperClass(styles, 'comment-children list-unstyled m-l-xxl')} style={{ marginLeft: isIndex ? '50px' : '0px' }}>
            {children.map((comment, index) => (
              <Comment onCancelReply={onCancelReply} commentList={commentList} setCommentList={setCommentList} {...comment} isIndex={false} key={index} filterCommentList={filterCommentList} />
            ))}
          </ol>
        ) : null}
      </li>
    </>
  )
}

export default Comment
