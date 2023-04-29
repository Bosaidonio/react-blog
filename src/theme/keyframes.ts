/*
 * @Date: 2023-04-29 16:11:30
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-29 16:11:32
 * @Description: 动画帧
 */
import { keyframes } from '@emotion/react'

export const backgroundGradient = keyframes({
  '0%': {
    backgroundPosition: '0 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0 50%',
  },
})
