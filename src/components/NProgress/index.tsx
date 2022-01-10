/*
 * @Author: Mario
 * @Date: 2021-12-25 12:51:08
 * @LastEditTime: 2022-01-05 16:58:49
 * @LastEditors: Mario
 * @Description: 进度条组件
 */
import styles from '@/components/NProgress/index.module.scss'
import classnames from 'classnames'

interface INProgress {
  loading: Boolean
}
const NProgress = ({ loading }: INProgress) => {
  return loading ? (
    <div id="loading" className={classnames(styles.butterbar, loading ? styles.active : '')}>
      <span className={classnames(styles.bar)}></span>
    </div>
  ) : null
}
export default NProgress
