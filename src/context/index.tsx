/*
 * @Author: Mario
 * @Date: 2021-12-14 23:22:30
 * @LastEditTime: 2021-12-14 23:27:50
 * @LastEditors: Mario
 * @Description: Context
 */
import React, { useState } from 'react'
export interface IProviderProps {
  mode: string
  setMode: any
}
export const Context = React.createContext<IProviderProps | undefined>(undefined)
Context.displayName = 'Context'
export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<string>('light')
  return <Context.Provider value={{ mode, setMode }}>{children}</Context.Provider>
}
