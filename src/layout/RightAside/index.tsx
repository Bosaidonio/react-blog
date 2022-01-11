import { useMediaQuery } from 'react-responsive'
import styles from '@/layout/RightAside/index.module.scss'
import classNames from 'classnames'
const RightAside = () => {
  const isDeskbook = useMediaQuery({
    query: '(max-width: 1020px)',
  })
  return <div className={classNames(styles.rightaside, isDeskbook ? styles['aside-active'] : '')}>123</div>
}

export default RightAside
