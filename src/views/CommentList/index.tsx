/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-03-12 14:19:33
 * @Description: Do not edit
 */
import { FC, useState } from 'react'

// 自定义组件
import Comment, { CommentProp } from '@/views/CommentList/components/Comment'
import Reply from '@/views/CommentList/components/Reply'
// 工具库
import { warrperClass } from '@/utils/classnames'
// 模块样式
import styles from '@/views/CommentList/index.module.scss'
interface CommentListProps {
  commentList: CommentProp[]
}

const CommentList: FC<CommentListProps> = ({ commentList }) => {
  const [isComment, setIsComment] = useState(true)
  const [currentReplyId, setCurrentReplyId] = useState<string>('0')
  // 取消回复
  const onCancelReply = () => {
    // 需要展示最底下的发表评论表单
    setIsComment(true)

    // 清空当前回复的id
    setCurrentReplyId('0')
  }

  // 处理评论回复
  const onReplyComment = async (id: string) => {
    setIsComment(false)
    setCurrentReplyId(id)
  }

  return (
    <div className={warrperClass(styles, 'comments')}>
      <div className={warrperClass(styles, 'post-comment-list')}>
        <h4 className={warrperClass(styles, 'comments-title m-t-lg m-b')}>{commentList.length}条评论</h4>
        <ol className={warrperClass(styles, 'comment-list')}>
          {commentList.map((comment, index) => (
            <Comment {...comment} currentReplyId={currentReplyId} key={index} onReplyComment={onReplyComment} onCancelReply={onCancelReply} />
          ))}
        </ol>
        {/* <WarrperPagination customStyle={{ margin: '50px 0' }} /> */}
        {isComment ? <Reply currentReplyId={currentReplyId} isComment={isComment} /> : null}
      </div>
    </div>
  )
}

export default CommentList
