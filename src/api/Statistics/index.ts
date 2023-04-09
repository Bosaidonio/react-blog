/*
 * @Date: 2023-03-26 19:15:57
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-09 13:40:13
 * @Description: Do not edit
 */
import { BlogInfoResponse, TagListRequest, TagListResponse } from '@/types/statistics'
import { request } from '@/utils/request'

/**
 * @description: 统计博客信息
 * @return {Promise<BlogInfoResponse>}
 */
export const getBlogInfo = (data = {}) => {
  return request<BlogInfoResponse>({
    url: '/statistics/blogInfo',
    method: 'GET',
    data,
  })
}

/**
 * @description: 统计文章标签
 * @return {Promise<TagListResponse>}
 */
export const getTagList = (data: TagListRequest) => {
  return request<TagListResponse>({
    url: '/tag/list',
    method: 'GET',
    data,
  })
}
