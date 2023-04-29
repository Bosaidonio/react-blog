/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-29 13:43:31
 * @Description: Do not edit
 */
import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import routes, { RouteRule } from '@/router'
import classnames from 'classnames'
import EmptyRouter from '@/views/EmptyRouter'
import SearchLoading from '@/components/SearchLoading'
import { ThemeProvider } from '@/context'

const renderRoutes = (routes: RouteRule[]) => {
  return routes.map((route) =>
    route.index ? (
      <Route index key={route.path ? route.path : route.meta?.title} element={<Suspense fallback={<SearchLoading />}>{route.component ? <route.component /> : <EmptyRouter />}</Suspense>}></Route>
    ) : (
      <Route key={route.path ? route.path : route.meta?.title} path={route.path} element={<Suspense fallback={<SearchLoading />}>{route.component ? <route.component /> : <EmptyRouter />}</Suspense>}>
        {route.children ? renderRoutes(route.children) : null}
      </Route>
    )
  )
}

function App() {
  return (
    <ThemeProvider>
      <div className={classnames('App')} style={{ backgroundColor: '#efefef' }}>
        <Routes>{renderRoutes(routes)}</Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
