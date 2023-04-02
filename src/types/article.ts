export interface ArticleResponse {
  data: Data
  statusCode: number
  timestamp: Date
  message: string
}

export interface Data {
  records: ArticleRecord[]
}

export interface ArticleRecord {
  _id: string
  title: string
  simpleDesc: string
  articleContent: string
  createTime: Date
  updateTime: Date
  status: number
  tags: Tag[]
  category: string
  banner: string
  isLeftRight: boolean
  isPinned: boolean
  isComment: boolean
  visits: number
  userInfo: UserInfo
  commentCount: number
}

export interface Tag {
  _id: string
  tagName: string
  createTime: Date
  updateTime: Date
  status: number
}

export interface UserInfo {
  _id: string
  username: string
  email: string
  phone: string
  avatar: string
}
