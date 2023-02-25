/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2022-11-16 18:43:15
 * @Description: Do not edit
 */
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
