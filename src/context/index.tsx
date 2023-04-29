/*
 * @Author: Mario
 * @Date: 2021-12-14 23:22:30
 * @LastEditTime: 2023-04-24 21:46:45
 * @LastEditors: mario marioworker@163.com
 * @Description: Context
 */
import { ThemeType } from '@/theme'
import darkTheme from '@/theme/dark-theme'
import lightTheme from '@/theme/light-theme'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React, { useState } from 'react'
export interface ThemeProviderProps {
  theme: ThemeType
  toggleTheme: () => void
}
export const ThemeContext = React.createContext<ThemeProviderProps | undefined>(undefined)
ThemeContext.displayName = 'ThemeContext'
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme(theme.mode === lightTheme.mode ? darkTheme : lightTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}
