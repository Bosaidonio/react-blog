import { Pagination } from 'antd'
import styles from '@/components/Pagination/index.module.scss'
const WarrperPagination = () => {
  return (
    <div className={styles.pagination}>
      <Pagination size="small" defaultCurrent={1} total={500} showSizeChanger={false} />
    </div>
  )
}

export default WarrperPagination
