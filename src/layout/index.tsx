import Header from '@/layout/Header'
import Navbar from '@/layout/Navbar'
import Content from '@/layout/Content'
import classnames from 'classnames'
import styles from '@/layout/index.module.scss'

const Layout = () => {
  return (
    <div className={classnames(styles.layout)}>
      <Header />
      <div>
        <Navbar />
        <Content />
      </div>
    </div>
  )
}

export default Layout
