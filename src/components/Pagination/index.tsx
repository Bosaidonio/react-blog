import { Pagination } from 'antd'
import styles from '@/components/Pagination/index.module.scss'
import React, { FC } from 'react'

interface PaginationProps {
  customStyle?: React.CSSProperties
}
const WarrperPagination: FC<PaginationProps> = ({ customStyle }) => {
  return (
    <div className={styles.pagination} style={customStyle}>
      <Pagination size="small" defaultCurrent={1} total={500} showSizeChanger={false} />
    </div>
  )
}

export default WarrperPagination
