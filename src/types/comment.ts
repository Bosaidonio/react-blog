/*
 * @Date: 2023-04-02 16:11:57
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-02 16:11:58
 * @Description: Do not edit
 */
export interface CommentResponse {
  data: Data
  statusCode: number
  timestamp: Date
  message: string
}

export interface Data {
  records: CommentRecord[]
}

export interface CommentRecord {
  _id: string
  articleId: string
  replyCommentRootId: string
  replyCommentId: string
  userId: string
  commentDesc: string
  commentStatus: string
  commentLike: string
  commentCreateTime: Date
  commentUpdateTime: Date
}
