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
const routes = [
  {
    path: '/',
    component: lazy(() => import('@/layout')),
    children: [
      {
        index: true,
        component: lazy(() => import('@/views/Home')),
        meta: {
          title: '首页',
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
        component: lazy(() => import('@/views/Repositories')),
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
