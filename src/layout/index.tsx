import { useState } from 'react'
import Header from '@/layout/Header'
import Navbar from '@/layout/Navbar'
import Content from '@/layout/Content'
import classnames from 'classnames'
import styles from '@/layout/index.module.scss'

const Layout = () => {
  const [initWidth, setInitWidth] = useState(220)
  return (
    <div className={classnames(styles.layout)}>
      <Header />
      <div>
        <Navbar initWidth={initWidth} setInitWidth={setInitWidth} />
        <Content initWidth={initWidth} />
      </div>
    </div>
  )
}

export default Layout
