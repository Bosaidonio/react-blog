import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import routes, { RouteRule } from '@/router'
import classnames from 'classnames'
import EmptyRouter from '@/views/EmptyRouter'
import SearchLoading from '@/components/SearchLoading'
import '@/style/theme/dark.scss'
import '@/style/global.scss'

const renderRoutes = (routes: RouteRule[]) => {
  return routes.map((route) => (
    <Route
      index={route.index}
      key={route.path ? route.path : route.meta?.title}
      path={route.path}
      element={<Suspense fallback={<SearchLoading />}>{route.component ? <route.component /> : <EmptyRouter />}</Suspense>}
    >
      {route.children ? renderRoutes(route.children) : null}
    </Route>
  ))
}
function App() {
  return (
    <div className={classnames('App')}>
      <Routes>{renderRoutes(routes)}</Routes>
    </div>
  )
}

export default App
