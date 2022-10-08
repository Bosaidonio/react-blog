import { FC, useState } from 'react'
import classnames from 'classnames'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'
// import { Outlet } from 'react-router-dom'
import { State } from '@/store'
import NProgress from '@/components/NProgress'
import RightAside from '@/layout/RightAside'
import Footer from '@/layout/Footer'
import EmptyRouter from '@/views/EmptyRouter'
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
  const isDeskbook = useMediaQuery({
    query: '(max-width: 1020px)',
  })
  const [isFinished, setIsFinished] = useState(true)
  return (
    <div
      id="content"
      className={classnames(styles.content, isMobile ? styles['w-full'] : '', isMobile && !isCollapse ? styles['content-collpase'] : '')}
      style={{ marginLeft: isMobile ? '0' : initWidth, transform: isMobile && !isCollapse ? `translate3d(${initWidth}px, 0, 0)` : 'unset' }}
    >
      <NProgress loading={isLoading} />
      <div className={classnames('flex', styles.warrper)} style={{ flexDirection: isDeskbook ? 'column' : 'unset' }}>
        <div className={classnames(styles['flex-1'], styles['w-computed'])}>
          <EmptyRouter isFinished={isFinished} setIsFinished={setIsFinished} />
        </div>
        <RightAside />
      </div>
      {isFinished ? <Footer /> : null}
    </div>
  )
}

export default Content
