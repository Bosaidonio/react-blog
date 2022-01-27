import classnames from 'classnames'
import { useMediaQuery } from 'react-responsive'
import { Divider } from 'antd'
import { Resizable } from 're-resizable'

import Navbar from '@/layout/Navbar/navbar'
import { CaretDownOutlined } from '@ant-design/icons'
import styles from '@/layout/Navbar/index.module.scss'
import { FC, useRef } from 'react'

interface AsideProps {
  isCollapse: boolean
  initWidth: number
  setInitWidth: (arg: number) => void
  setIsCollapse: (args: boolean) => void
}
const Aside: FC<AsideProps> = ({ isCollapse, setIsCollapse, initWidth, setInitWidth }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  const NavRef = useRef<HTMLElement>(null)
  return (
    <nav ref={NavRef} className={classnames('w-220', styles.navbar, 'bg', isMobile && isCollapse ? styles['navbar-active'] : '')} style={{ width: initWidth }}>
      <Resizable
        handleWrapperClass={styles['move-resizable']}
        maxWidth={280}
        minWidth={200}
        size={{ width: initWidth, height: '100vh' }}
        onResize={(e) => {
          const navOffsetLeft = NavRef.current ? NavRef.current.offsetLeft : 0
          const currentWidth = (e as MouseEvent).x - navOffsetLeft

          if (currentWidth < 280 && currentWidth > 200) {
            setInitWidth(currentWidth)
          }
        }}
      >
        <div className={classnames(styles['aside-wrap'])}>
          <div className={classnames(styles['nav-wrap'])}>
            <div className={classnames(styles['aside-user'], 'p-warrper')}>
              <div className={classnames(styles.img)}>
                <img src="https://cdn.mariowork.com/auth/avatar.jpeg" alt="" />
              </div>
              <div className={styles.username}>
                <strong className={classnames(styles.name)}>星河万里</strong>
                <CaretDownOutlined className={classnames(styles.icon)} />
              </div>
              <span className={classnames(styles.desc, 'text-muted')}>认真生活。</span>
            </div>
            {/* <Divider style={{ borderTop: '1px solid #fff', width: '220px' }} /> */}
            <div className="line" style={{ width: initWidth }}>
              <Divider style={{ borderTop: '1px solid #fff', width: '100%' }} />
            </div>
            <div className={classnames(styles['nav-list'])}>
              <Navbar isCollapse={isCollapse} setIsCollapse={setIsCollapse} width={initWidth} />
            </div>
          </div>
          <div className={classnames(styles['footer-left'])}></div>
        </div>
      </Resizable>
    </nav>
  )
}

export default Aside
