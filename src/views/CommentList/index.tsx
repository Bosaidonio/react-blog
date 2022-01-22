import { useEffect, useState } from 'react'

// 自定义组件
import Comment, { CommentProp } from '@/views/CommentList/components/Comment'
// 工具库
import { warrperClass } from '@/utils/classnames'
// 模块样式
import styles from '@/views/CommentList/index.module.scss'

const CommentList = () => {
  const [commentList, setCommentList] = useState<CommentProp[]>([])
  useEffect(() => {
    setTimeout(() => {
      const list = [
        {
          id: 1,
          isReply: false,
          commentAvatar: 'https://gravatar.helingqi.com/wavatar/b8a18bc7cd59cea7c301868a7f9cfaa1',
          commentName: '躲闪的大黄',
          commentTime: '7 个月前',
          commentContent: '好哥哥还有往年北化人工智能试题吗',
          children: [
            {
              id: 2,
              parentId: 1,
              isAuthor: true,
              commentAvatar: 'https://cdn.helingqi.com/wavatar/9e543b9d68c191fdc484c3bbe9f953a4',
              commentName: 'Mario',
              commentTime: '7 个月前',
              atAuthor: '@躲闪的大黄',
              commentContent: 'https://www.ihewro.com/archives/798/ 可以看下这里，没有试题，当年也是给了一个题库提纲',
              emojiList: ['kissing_heart'],
            },
          ],
        },
        {
          id: 3,
          isReply: false,
          commentAvatar: 'https://gravatar.helingqi.com/wavatar/b8a18bc7cd59cea7c301868a7f9cfaa1',
          commentName: '躲闪的大黄',
          commentTime: '7 个月前',
          commentContent: '好哥哥还有往年北化人工智能试题吗',
          children: [
            {
              id: 4,
              parentId: 3,
              isAuthor: true,
              commentAvatar: 'https://cdn.helingqi.com/wavatar/9e543b9d68c191fdc484c3bbe9f953a4',
              commentName: 'Mario',
              commentTime: '7 个月前',
              atAuthor: '@躲闪的大黄',
              commentContent: 'https://www.ihewro.com/archives/798/ 可以看下这里，没有试题，当年也是给了一个题库提纲',
            },
          ],
        },
      ]
      setCommentList(list)
    }, 1000)
  }, [])

  // 取消回复
  const onCancelReply = (callback?: (commentList: CommentProp[]) => void) => {
    setCommentList((commentList) => {
      commentList = commentList.map((item) => ({
        ...item,
        isReply: false,
      }))
      callback && callback(commentList)

      return commentList
    })
  }
  // 处理评论回复
  const filterCommentList = (id: number) => {
    onCancelReply((commentList) => {
      // 激活当前点击的回复
      setCommentList(
        (commentList = commentList.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              isReply: true,
            }
          } else {
            return {
              ...item,
            }
          }
        }))
      )
    })
  }
  return (
    <div className={warrperClass(styles, 'comments')}>
      <div className={warrperClass(styles, 'post-comment-list')}>
        <h4 className={warrperClass(styles, 'comments-title m-t-lg m-b')}>49 条评论</h4>
        <ol className={warrperClass(styles, 'comment-list')}>
          {commentList.map((comment, index) => (
            <Comment {...comment} key={index} filterCommentList={filterCommentList} onCancelReply={onCancelReply} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default CommentList
