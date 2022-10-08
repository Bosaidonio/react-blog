/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2022-10-08 12:34:19
 * @Description: Do not edit
 */
import { Pagination } from 'antd'
import styles from '@/components/Pagination/index.module.scss'
import React, { FC } from 'react'

interface PaginationProps {
  customStyle?: React.CSSProperties
  total?: number
  pageSize?: number
  pageNow?: number
}
const WarrperPagination: FC<PaginationProps> = ({ customStyle, total, pageNow = 1, pageSize = 10 }) => {
  return (
    <div className={styles.pagination} style={customStyle}>
      <Pagination size="small" defaultCurrent={pageNow} total={total} showSizeChanger={false} />
    </div>
  )
}

export default WarrperPagination
