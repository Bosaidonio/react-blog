import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import routes, { RouteRule } from '@/router'
import classnames from 'classnames'
import EmptyRouter from '@/views/EmptyRouter'
import SearchLoading from '@/components/SearchLoading'

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
    <div className={classnames('App')} style={{ backgroundColor: '#efefef' }}>
      <Routes>{renderRoutes(routes)}</Routes>
    </div>
  )
}

export default App
