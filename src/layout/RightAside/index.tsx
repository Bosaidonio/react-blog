import { useMediaQuery } from 'react-responsive'
import Sidebar from '@/layout/RightAside/Sidebar'
import styles from '@/layout/RightAside/index.module.scss'
import classNames from 'classnames'
const RightAside = () => {
  const isDeskbook = useMediaQuery({
    query: '(max-width: 1020px)',
  })
  return (
    <div className={classNames(styles.rightaside, isDeskbook ? styles['aside-active'] : '')}>
      <Sidebar />
    </div>
  )
}

export default RightAside
