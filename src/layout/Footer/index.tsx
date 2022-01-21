import styles from '@/layout/Footer/index.module.scss'
import { useMediaQuery } from 'react-responsive'
import classnames from 'classnames'
const Footer = () => {
  const isDeskbook = useMediaQuery({
    query: '(max-width: 1020px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  return (
    <footer className={classnames(styles.footer, isMobile || isDeskbook ? styles['w-full'] : '')}>
      <div className={styles.wrapper}>
        <div className={classnames('text-ellipsis')}>
          <a rel="noreferrer" href="http://beian.miit.gov.cn/" target="_blank">
            晋ICP备2021001869号-1
          </a>{' '}
        </div>
        <div>
          <span>
            Powered by <i className={styles.author}>Mario</i>
          </span>
          <span> ©&nbsp;{new Date().getFullYear()} Copyright&nbsp;</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
