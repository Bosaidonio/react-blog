/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-02-19 18:58:24
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
  handlePageChange: (pageNow: number, pageSize: number) => void
}
const WarrperPagination: FC<PaginationProps> = ({ customStyle, total, pageNow = 1, pageSize = 10, handlePageChange }) => {
  const onChange = (page: number, pageSize?: number) => {
    handlePageChange(page, pageSize || 10)
  }
  return (
    <div className={styles.pagination} style={customStyle}>
      <Pagination size="small" hideOnSinglePage defaultCurrent={1} defaultPageSize={10} current={pageNow} total={total} showSizeChanger={false} onChange={onChange} />
    </div>
  )
}

export default WarrperPagination
