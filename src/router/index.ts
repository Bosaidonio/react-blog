/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-29 23:53:14
 * @Description: Do not edit
 */
import { lazy, LazyExoticComponent } from 'react'
interface Meta {
  title: string
}
export interface RouteRule {
  path?: string
  index?: boolean
  component?: LazyExoticComponent<() => JSX.Element>
  children?: RouteRule[]
  meta?: Meta
}
// 异步等待
export const asyncWait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}
const lazyLoadComponent = (
  component: () => Promise<{
    default: () => JSX.Element
  }>
) => {
  return lazy(async () => {
    await asyncWait(1000)
    // 检测爬虫
    // const isSpiders = await detectAuto()
    // return isSpiders ? import('@/views/404') : component()
    return component()
  })
}

const routes = [
  {
    path: '/',
    component: lazyLoadComponent(() => import('@/layout')),
    // component: lazy(() => import('@/layout')),
    children: [
      {
        index: true,
        component: lazy(() => import('@/views/Home')),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/article/:id',
        component: lazy(() => import('@/views/ArticleList/components/ArticleDesc')),
        meta: {
          title: '文章',
        },
      },
      {
        path: '/respositories',
        component: lazy(() => import('@/views/Repositories')),
        meta: {
          title: '仓库',
        },
      },
      {
        path: '/photo',
        component: lazy(() => import('@/views/Photo')),
        meta: {
          title: '相册',
        },
      },
      {
        path: '/diary',
        component: lazy(() => import('@/views/Diary')),
        meta: {
          title: '日记',
        },
      },
      {
        path: '/ai',
        component: lazy(() => import('@/views/Ai')),
        meta: {
          title: 'Ai',
        },
      },
      {
        path: '/about',
        children: [
          {
            index: true,
            component: lazy(() => import('@/views/About')),
            meta: {
              title: '关于我',
            },
          },
          {
            path: 'message',
            component: lazy(() => import('@/views/Message')),
            meta: {
              title: '留言本',
            },
          },
        ],
        meta: {
          title: '关于',
        },
      },
    ],
  },
  {
    path: '/login',
    component: lazy(() => import('@/views/Login')),
    meta: {
      title: '登录',
    },
  },
  {
    path: '*',
    component: lazy(() => import('@/views/404')),
    meta: {
      title: '404',
    },
  },
]
export default routes
