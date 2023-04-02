/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-03-31 23:38:54
 * @Description: 用户相关接口
 */
import { request } from '@/utils/request'
import { LoginResponse, LoginRequest } from '@/types/user'
/**
 * @description 发送登录请求并返回登录响应
 * @param data 登录请求所需的数据，包括用户名和密码
 * @returns {Promise<LoginResponse>} 登录响应
 */
export const login = (data: LoginRequest) => {
  return request<LoginResponse>({
    url: '/auth/login',
    method: 'POST',
    data,
  })
}
