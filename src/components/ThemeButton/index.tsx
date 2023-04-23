/*
 * @Date: 2023-04-22 16:49:55
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-22 17:06:06
 * @Description: Do not edit
 */

import { warrperClass } from '@/utils/dom'
import styles from '@/components/ThemeButton/index.module.scss'

const ThemeButton = () => {
  return (
    <div className={warrperClass(styles, 'toggleWrapper')}>
      <input type="checkbox" className={styles.dn} id="dn" />
      <label htmlFor="dn" className={styles.toggle}>
        <span className={styles.toggle__handler}>
          <span className={warrperClass(styles, 'crater crater--1')}></span>
          <span className={warrperClass(styles, 'crater crater--2')}></span>
          <span className={warrperClass(styles, 'crater crater--3')}></span>
        </span>
        <span className={warrperClass(styles, 'star star--1')}></span>
        <span className={warrperClass(styles, 'star star--2')}></span>
        <span className={warrperClass(styles, 'star star--3')}></span>
        <span className={warrperClass(styles, 'star star--4')}></span>
        <span className={warrperClass(styles, 'star star--5')}></span>
        <span className={warrperClass(styles, 'star star--6')}></span>
      </label>
    </div>
  )
}

export default ThemeButton
