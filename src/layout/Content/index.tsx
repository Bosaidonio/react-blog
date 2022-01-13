import { FC } from 'react'
import classnames from 'classnames'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { State } from '@/store'
import NProgress from '@/components/NProgress'
import RightAside from '@/layout/RightAside'
import Footer from '@/layout/Footer'
import styles from '@/layout/Content/index.module.scss'

interface ContentProps {
  isCollapse: boolean
  initWidth: number
}
const Content: FC<ContentProps> = ({ initWidth, isCollapse }) => {
  const isLoading = useSelector((state: State) => state.loading)
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })

  return (
    <div
      id="content"
      className={classnames(styles.content, isMobile ? styles['w-full'] : '', isMobile && !isCollapse ? styles['content-collpase'] : '')}
      style={{ marginLeft: isMobile ? '0' : initWidth, transform: isMobile && !isCollapse ? `translate3d(${initWidth}px, 0, 0)` : 'unset' }}
    >
      <NProgress loading={isLoading} />
      <div className={classnames('flex')}>
        <div className={classnames(styles['flex-1'], styles['w-computed'])}>
          <Outlet />
        </div>
        <RightAside />
      </div>
      <Footer />
    </div>
  )
}

export default Content
