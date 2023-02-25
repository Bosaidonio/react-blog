/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2022-12-11 20:16:54
 * @Description: 用户相关接口
 */
import { request } from '@/utils/request'

/**
 * @description: 获取文字列表
 * @return {Promise<any>}
 */
export const login = (data: any) => {
  return request({
    url: '/auth/login',
    method: 'POST',
    data,
  })
}
