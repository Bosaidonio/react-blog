import classnames from 'classnames'
import styles from '@/views/Home/components/Header/index.module.scss'
const Header = () => {
  return (
    <header className={classnames(styles['header-md'])}>
      <h1 className={classnames('m-0', styles['font-thin'])}>Mario's Blog</h1>
      <small className="text-muted tracking-widest">试玉要烧三日满，辨材须待七年期。</small>
    </header>
  )
}

export default Header
