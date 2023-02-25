/*
 * @Date: 2022-10-22 19:37:19
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2022-10-31 15:48:35
 * @Description: Do not edit
 */
import React, { useState, createContext, useContext } from 'react'
import { Navigate } from 'react-router'
import { detectAuto } from '@/utils/detect-spiders'

const AuthContext = createContext({
  authed: false,
  detectSpiders: (): Promise<any> => Promise.resolve(),
})

/**
 * 自定义hook，函数返回 Context 值，包括 authed状态、login、logout函数来修改authed状态
 */
function useAuth() {
  const [authed, setAuthed] = useState(false)

  return {
    authed,
    detectSpiders() {
      return new Promise(async (resolve) => {
        // 检测是否为爬虫，如果为true则代表是爬虫
        const isSpiders = await detectAuto()
        setAuthed(!isSpiders)
        resolve(!isSpiders)
      })
    },
  }
}

// 将context值传递给了Context Provider，并返回该组件用于广播context值
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

// 返回 Context 值
export default function AuthConsumer() {
  return useContext(AuthContext)
}

/**
 * @description
 * 封装拦截组件,如果已登录，返回包括的children组件；
 * 未登录，返回 <Navigate to="/user" /> 组件跳转到登录页面。
 *
 * @example
 * <RequireAuth>
 *   <ComponentNeedAuth />
 * </RequireAuth>
 */
export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { authed } = AuthConsumer()
  return authed ? <>{children}</> : <Navigate to="/404" />
}
