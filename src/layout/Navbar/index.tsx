import classnames from 'classnames'
import { useMediaQuery } from 'react-responsive'
import { Divider } from 'antd'
import Navbar from '@/layout/Navbar/navbar'
import { CaretDownOutlined } from '@ant-design/icons'
import styles from '@/layout/Navbar/index.module.scss'

const Aside = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  return (
    <nav className={classnames('w-220', styles.navbar, 'bg', isMobile ? styles['navbar-active'] : '')}>
      <div className={classnames(styles['aside-wrap'])}>
        <div className={classnames(styles['nav-wrap'])}>
          <div className={classnames(styles['aside-user'], 'p-warrper')}>
            <div className={classnames(styles.img)}>
              <img src="https://mariowork.com/static/react-blog/avatar.jpeg" alt="" />
            </div>
            <div className={styles.username}>
              <strong className={classnames(styles.name)}>星河万里</strong>
              <CaretDownOutlined className={classnames(styles.icon)} />
            </div>
            <span className={classnames(styles.desc, 'text-muted')}>认真生活。</span>
          </div>
          <Divider style={{ borderTop: '1px solid #fff' }} />
          <div className={classnames(styles['nav-list'])}>
            <Navbar />
          </div>
        </div>
        <div className={classnames(styles['footer-left'])}></div>
      </div>
    </nav>
  )
}

export default Aside
