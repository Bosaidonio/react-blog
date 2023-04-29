/*
 * @Author: Mario
 * @Date: 2021-12-14 22:38:33
 * @LastEditTime: 2023-04-23 23:59:38
 * @LastEditors: mario marioworker@163.com
 * @Description: Hooks模块
 */
import { useContext } from 'react'
import { ThemeContext, ThemeProviderProps } from '@/context'
/**
 * @description: 主题Hook
 * @return {ProviderProps}
 */
export const useMode = () => {
  const context: ThemeProviderProps | undefined = useContext(ThemeContext)
  if (!context) {
    throw new Error('useMode只能用在Context.Provider包裹的组件中!')
  }
  return context
}
