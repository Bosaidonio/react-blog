/*
 * @Date: 2023-04-29 16:11:30
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 10:58:11
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

export const changebar = keyframes({
  '0%': {
    backgroundColor: '#23b7e5',
  },
  '33.3%': {
    backgroundColor: '#23b7e5',
  },
  '33.33%': {
    backgroundColor: '#fad733',
  },
  '66.6%': {
    backgroundColor: '#fad733',
  },
  '66.66%': {
    backgroundColor: '#7266ba',
  },
  '99.9%': {
    backgroundColor: '#7266ba',
  },
})

export const movingbar = keyframes({
  '0%': {
    transform: 'scaleX(0)',
  },
  '99.9%': {
    transform: 'scaleX(1)',
  },
  '100%': {
    transform: 'scaleX(0)',
  },
})
