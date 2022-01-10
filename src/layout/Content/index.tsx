import classnames from 'classnames'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { State } from '@/store'
import NProgress from '@/components/NProgress'
import RightAside from '@/layout/RightAside'
import styles from '@/layout/Content/index.module.scss'

const Content = () => {
  const isLoading = useSelector((state: State) => state.loading)
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  return (
    <div className={classnames(styles.content, isMobile ? styles['w-full'] : '')}>
      <NProgress loading={isLoading} />
      <div className={classnames('flex')}>
        <div className={styles['flex-1']}>
          <Outlet />
        </div>
        <RightAside />
      </div>
    </div>
  )
}

export default Content
