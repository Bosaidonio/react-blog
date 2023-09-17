/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-06-11 20:31:51
 * @Description: Do not edit
 */
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import routes, { RouteRule } from '@/router'
import EmptyRouter from '@/views/EmptyRouter'
import { AppStyle } from './app-styles'
import { useMode } from '@/hooks'
import SearchLoading from '@/components/SearchLoading'

const renderRoutes = (routes: RouteRule[]) => {
  return routes.map((route) =>
    route.index ? (
      <Route
        index
        key={route.path ? route.path : route.meta?.title}
        element={<Suspense fallback={route.path === '/' ? <SearchLoading /> : null}>{route.component ? <route.component /> : <EmptyRouter />}</Suspense>}
      ></Route>
    ) : (
      <Route
        key={route.path ? route.path : route.meta?.title}
        path={route.path}
        element={<Suspense fallback={route.path === '/' ? <SearchLoading /> : null}>{route.component ? <route.component /> : <EmptyRouter />}</Suspense>}
      >
        {route.children ? renderRoutes(route.children) : null}
      </Route>
    )
  )
}

function App() {
  const { theme } = useMode()
  return (
    <div css={AppStyle(theme)}>
      <Routes>{renderRoutes(routes)}</Routes>
    </div>
  )
}

export default App
