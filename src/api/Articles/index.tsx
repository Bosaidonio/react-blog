/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-02 18:50:52
 * @Description: Do not edit
 */
import { ArticleResponse } from '@/types/article'
import { CommentResponse } from '@/types/comment'
import { request } from '@/utils/request'

/**
 * @description: 获取文字列表
 * @return {Promise<any>}
 */
export const getArticleList = (data: any) => {
  return request({
    url: '/article/list',
    method: 'GET',
    data,
  })
}

/**
 * @description: 获取文字详情信息
 * @return {Promise<any>}
 */
export const getArticleDesc = (data: any = {}) => {
  return request({
    url: `/article/detail/${data.id}`,
    method: 'GET',
  })
}
/**
 * @description: 回复评论
 * @return {Promise<any>}
 */
export const replyComment = (data: any) => {
  return request({
    url: '/comment/create',
    method: 'POST',
    data,
  })
}
/**
 * @description: 获取热门文章
 * @return {Promise<any>}
 */
export const getHotArticle = (data: any) => {
  return request<ArticleResponse>({
    url: '/article/hot',
    method: 'GET',
    data,
  })
}
/**
 * @description: 获取热门文章
 * @return {Promise<any>}
 */
export const getRandomArticle = (data: any) => {
  return request<ArticleResponse>({
    url: '/article/random',
    method: 'GET',
    data,
  })
}
/**
 * @description: 获取热门评论
 * @return {Promise<any>}
 */
export const getHotComment = (data: any) => {
  return request<CommentResponse>({
    url: '/comment/hot',
    method: 'GET',
    data,
  })
}
