/*
 * @Date: 2023-03-26 19:15:57
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-03-26 20:05:43
 * @Description: Do not edit
 */
import { request } from '@/utils/request'

/**
 * @description: ai聊天
 * @return {Promise<any>}
 */
export const conversationApi = (data = {}) => {
  return request({
    url: '/chat/conversation',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
      Accept: 'text/event-stream',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
}
