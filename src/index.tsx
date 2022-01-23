import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/views/app'
import '@/plugins'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/store'
import '@/style/index.css'
// 深色主题样式
import '@/style/theme/dark.scss'
// 全局样式(权限最高)
import '@/style/global.scss'

window.addEventListener('error', (event) => {})

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
