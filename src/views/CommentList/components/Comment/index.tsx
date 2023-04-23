import React, { FC, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { warrperClass } from '@/utils/dom'
import * as EmojiMart from 'emoji-mart'
import data from '@emoji-mart/data/sets/14/google.json'
import Reply from '@/views/CommentList/components/Reply'
import bloggerSvg from '@/views/CommentList/components/Comment/assets/svgs/blogger.svg'
import styles from '@/views/CommentList/components/Comment/index.module.scss'
import { getEmojiList, reaplceLink } from '@/utils'
import { useMount } from 'ahooks'
import config from '@/config'
import { useLocation } from 'react-router-dom'

export interface CommentProp {
  _id: string
  articleId: string
  avatar: string
  username: string
  commentCreateTime: string
  atAuthor?: string
  commentDesc: string
  isAuthor?: boolean
  isIndex?: boolean
  children?: CommentProp[]
  commentUser: any
}

export interface CommentProps extends CommentProp {
  onReplyComment: (id: string) => void
  onCancelReply: () => void
  currentReplyId?: string
}
interface RenderCommentProps {
  commentDesc: string
}

/**
 * @description: 渲染评论内容，主要用来处理表情等非纯文本
 * @param {RenderCommentProps} param1
 * @return {JSX.Element}
 */
const RenderComment = ({ commentDesc }: RenderCommentProps) => {
  const [comment, setComment] = useState(commentDesc)
  const replaceEmoji = (content: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        const { getEmojiDataFromNative } = EmojiMart as any
        // 1、获取字符串中所有的原生表情列表
        const emojiList = getEmojiList(commentDesc)
        // 2、获取原生表情对应的emojiMart对象信息
        const emojiData = emojiList.map(async (item) => await getEmojiDataFromNative(item))
        Promise.all(emojiData).then((emojiResult) => {
          const ranges = [
            '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
            '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
            '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
          ]
          // 3、将原生表情替换为google样式的表情
          const result = content.replace(new RegExp(ranges.join('|'), 'g'), (emojiNative) => {
            const emoji = emojiResult.find((item) => item.native === emojiNative)
            return `<em-emoji id=${emoji.id} shortcodes="${emoji.shortcodes}" set="google"></em-emoji>`
          })
          resolve(result)
        })
      } catch (error) {
        console.error('replaceEmoji error', error)
      }
    })
  }

  useMount(() => {
    const { init } = EmojiMart as any
    // 1、初始化emojiMart
    init({ data })
    // 2、替换字符串中的链接为a标签
    let comment = reaplceLink(commentDesc)
    // 3、替换字符串中的原生表情为google样式的表情
    if (config.emoji.isGoogleEmoji) {
      replaceEmoji(comment).then((result) => {
        setComment(result)
      })
    }
  })

  return <span dangerouslySetInnerHTML={{ __html: comment }}></span>
}

const Comment: FC<CommentProps> = ({ _id, articleId, isIndex, onCancelReply, commentUser, commentCreateTime, atAuthor, commentDesc, isAuthor, children, currentReplyId, onReplyComment }) => {
  const location = useLocation()
  useMount(() => {
    if ((location.state as any).isJustComment) {
      const comment = document.getElementById(`div-comment-${_id}`)
      if (comment) {
        // 平滑滚动
        window.scroll({
          top: comment.offsetTop - 80,
        })
      }
    }
  })
  return (
    <>
      <li className={warrperClass(styles, 'comment-body comment-parent comment-odd')}>
        {/* 评论者 */}
        <div id={`div-comment-${_id}`} className={warrperClass(styles, 'comment-body')}>
          <a href="javascript;" className={warrperClass(styles, 'pull-left thumb-sm comment-avatar')} rel="nofollow">
            <img alt="" src={commentUser.avatar} className={warrperClass(styles, 'img-40px photo img-square normal-shadow')} />
            {isAuthor ? (
              <label className={warrperClass(styles, 'label comment-author-logo m-l-xs')} data-original-title="博主">
                <ReactSVG src={bloggerSvg} />
              </label>
            ) : null}
          </a>
          <div className={warrperClass(styles, 'm-b m-l-xxl')}>
            <div className={warrperClass(styles, 'comment-meta')}>
              <span className={warrperClass(styles, 'comment-author vcard')}>
                <b className="fn">{commentUser.username}</b>
              </span>
              <div className={warrperClass(styles, 'comment-metadata')}>
                <time className={warrperClass(styles, 'format_time text-muted text-xs block m-t-xs')}>{commentCreateTime}</time>
              </div>
            </div>

            <div className={warrperClass(styles, 'comment-content m-t-sm')}>
              <span className={warrperClass(styles, 'comment-author-at')}>
                <b>{atAuthor}</b>
              </span>
              <div className={warrperClass(styles, 'comment-content-true')}>
                <p>
                  {/* {renderContent(commentDesc)} */}
                  <RenderComment commentDesc={commentDesc} />
                </p>
              </div>
            </div>

            <div className={warrperClass(styles, 'comment-reply m-t-sm')} onClick={() => onReplyComment(_id)}>
              回复
            </div>
            {currentReplyId === _id ? <Reply currentReplyId={currentReplyId} onCancelReply={onCancelReply} username={commentUser.username} /> : null}
          </div>
        </div>
        {/* 回复者列表 */}
        {children ? (
          <ol className={warrperClass(styles, 'comment-children list-unstyled m-l-xxl')} style={{ marginLeft: isIndex ? '50px' : '0px' }}>
            {children.map((comment, index) => (
              <Comment onCancelReply={onCancelReply} currentReplyId={currentReplyId} {...comment} isIndex={false} key={index} onReplyComment={onReplyComment} />
            ))}
          </ol>
        ) : null}
      </li>
    </>
  )
}

export default Comment
