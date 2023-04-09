/*
 * @Date: 2023-04-09 12:48:30
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-09 13:39:07
 * @Description: Do not edit
 */
/* 标签列表响应 */
export interface TagListResponse {
  data: TagData
  statusCode: number
  timestamp: Date
  message: string
}

export interface TagData {
  records: TagRecord[]
  pageNow: number
  pageSize: number
  total: number
}

export interface TagRecord {
  _id: string
  tagName: string
  createTime: Date
  updateTime: Date
  status: number
}
export enum TagStatus {
  PUBLISHED = 1,
  DELETED = 0,
}
export interface TagListRequest {
  pageNow: number
  pageSize: number
  status?: TagStatus
}
/* 博客信息 */
export interface BlogInfoResponse {
  data: BlogInfoData
  statusCode: number
  timestamp: Date
  message: string
}

export interface BlogInfoData {
  articleCount: number
  commentCount: number
  lastEventTime: string
  runDays: string
}
