import { useEffect, useState } from 'react'

// 自定义组件
import Comment, { CommentProp } from '@/views/CommentList/components/Comment'
import Reply from '@/views/CommentList/components/Reply'
import WarrperPagination from '@/components/Pagination'
// 工具库
import { warrperClass } from '@/utils/classnames'
// 模块样式
import styles from '@/views/CommentList/index.module.scss'

const CommentList = () => {
  const [isComment, setIsComment] = useState(true)
  const [commentList, setCommentList] = useState<CommentProp[]>([])
  useEffect(() => {
    let timer = setTimeout(() => {
      const list: CommentProp[] = [
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
              isAuthor: true,
              isReply: false,
              commentAvatar: 'https://cdn.helingqi.com/wavatar/9e543b9d68c191fdc484c3bbe9f953a4',
              commentName: 'Mario',
              commentTime: '7 个月前',
              atAuthor: '@躲闪的大黄',
              commentContent: ':https://www.ihewro.com/archives/798/ 可以看下这里，没有试题，当年也是给了一个题库提纲',
              children: [
                {
                  id: 5,
                  isAuthor: true,
                  isReply: false,
                  commentAvatar: 'https://cdn.helingqi.com/wavatar/9e543b9d68c191fdc484c3bbe9f953a4',
                  commentName: 'Mario',
                  commentTime: '7 个月前',
                  atAuthor: '@躲闪的大黄',
                  commentContent: 'https://www.ihewro.com/archives/798/ 可以看下这里，没有试题，当年也是给了一个题库提纲',
                },
              ],
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
              isReply: false,
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
      list.forEach((item) => (item.isIndex = true))
      setCommentList(list)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const diffList = (commentList: CommentProp[]) => {
    return commentList.map((item) => {
      const comment: CommentProp = {
        ...item,
        isReply: false,
        children: item.children ? diffList(item.children) : [],
      }
      if (comment.children && comment.children.length <= 0) delete comment.children
      return comment
    })
  }
  // 取消回复
  const onCancelReply = (callback?: (commentList: CommentProp[]) => void) => {
    if (!callback) {
      setIsComment(true)
    }
    setCommentList((commentList) => {
      commentList = diffList(commentList)
      callback && callback(commentList)

      return commentList
    })
  }
  const filterList = (commentList: CommentProp[], id: number) => {
    return commentList.map((item) => {
      let comment: CommentProp = {
        ...item,
      }
      if (item.children) {
        comment.children = filterList(item.children, id)
      }
      if (item.id === id) {
        comment = {
          ...item,
          isReply: true,
        }
      }
      return comment
    })
  }

  // 处理评论回复
  const filterCommentList = (id: number) => {
    setIsComment(false)
    onCancelReply((commentList) => {
      // 激活当前点击的回复
      setCommentList(filterList(commentList, id))
    })
  }

  return (
    <div className={warrperClass(styles, 'comments')}>
      <div className={warrperClass(styles, 'post-comment-list')}>
        <h4 className={warrperClass(styles, 'comments-title m-t-lg m-b')}>49 条评论</h4>
        <ol className={warrperClass(styles, 'comment-list')}>
          {commentList.map((comment, index) => (
            <Comment {...comment} key={index} isIndex={comment.isIndex} commentList={commentList} setCommentList={setCommentList} filterCommentList={filterCommentList} onCancelReply={onCancelReply} />
          ))}
        </ol>
        <WarrperPagination customStyle={{ margin: '50px 0' }} />
        {isComment ? <Reply id={0} isComment={isComment} onCancelReply={onCancelReply} commentList={commentList} setCommentList={setCommentList} /> : null}
      </div>
    </div>
  )
}

export default CommentList
