/*
 * @Author: Mario
 * @Date: 2021-12-14 22:38:33
 * @LastEditTime: 2021-12-14 23:29:20
 * @LastEditors: Mario
 * @Description: Hooks模块
 */
import { useContext } from 'react'
import { Context, IProviderProps } from '@/context'
/**
 * @description: 主题Hook
 * @return {ProviderProps}
 */
export const useMode = () => {
  const context: IProviderProps | undefined = useContext(Context)
  if (!context) {
    throw new Error('useMode只能用在Context.Provider包裹的组件中!')
  }
  return context
}
