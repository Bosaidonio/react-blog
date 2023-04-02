/*
 * @Date: 2023-03-31 23:17:58
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-03-31 23:38:48
 * @Description: Do not edit
 */

interface UserInfo {
  _id: string
  username: string
  email: string
  phone: string
  avatar: string
}

export interface LoginResponse {
  data: {
    accessToken: string
    refreshToken: string
    userInfo: UserInfo
  }
  statusCode: number
  timestamp: string
}
export interface LoginRequest {
  username: string
  password: string
}
