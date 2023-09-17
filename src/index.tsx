/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-06-11 16:52:55
 * @Description: Do not edit
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/views/app'
import '@/plugins'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/store'

// 深色主题样式
import '@/style/theme/dark.scss'
// 全局样式(权限最高)
import '@/style/global.scss'
import { AuthProvider } from './views/auth'
import { ThemeProvider } from '@/context'

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
