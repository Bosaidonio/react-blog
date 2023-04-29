/*
 * @Date: 2023-04-22 17:59:54
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-29 23:44:01
 * @Description: Do not edit
 */
import styles from '@/components/SpinLoading/index.module.scss'
import { Spin, SpinProps } from 'antd'
import { FC } from 'react'
import { SpingLoadingStyle } from './spinLoadingStyle'
interface SpinLoadingProps extends SpinProps {
  children?: React.ReactNode
}

const LoadingIndicator = () => {
  const customStyles = {
    inlineBlock: {
      '--rotation-duration': '0ms',
      '--rotation-direction': 'normal',
    } as React.CSSProperties,
  }
  return (
    <div className={styles.loader}>
      <svg height="0" width="0" viewBox="0 0 64 64" className={styles.absolute}>
        <defs className="s-xJBuHA073rTt" xmlns="http://www.w3.org/2000/svg">
          <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="b">
            <stop className="s-xJBuHA073rTt" stopColor="#973BED"></stop>
            <stop className="s-xJBuHA073rTt" stopColor="#007CFF" offset="1"></stop>
          </linearGradient>
          <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0" id="c">
            <stop className="s-xJBuHA073rTt" stopColor="#FFC800"></stop>
            <stop className="s-xJBuHA073rTt" stopColor="#F0F" offset="1"></stop>
          </linearGradient>
          <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="d">
            <stop className="s-xJBuHA073rTt" stopColor="#00E0ED"></stop>
            <stop className="s-xJBuHA073rTt" stopColor="#00DA72" offset="1"></stop>
          </linearGradient>
          <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="e">
            <stop className="s-xJBuHA073rTt" stopColor="#de689c"></stop>
            <stop className="s-xJBuHA073rTt" stopColor="#de689c" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
      {/* M */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="32" width="32" className={styles['inline-block']}>
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#b)" d="M9,60 V12 L25,36 L41,12 V60" className={styles.dash} id="m" pathLength="360"></path>
      </svg>
      {/* A */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="32" width="32" className={styles['inline-block']}>
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="10" stroke="url(#c)" d="M 12,60 L 32,12 L 52,60 M 20,44 L 44,44" className={styles.dash} id="a" pathLength="360"></path>
      </svg>

      <div className="w-2"></div>
      {/* R */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={customStyles.inlineBlock} viewBox="0 0 64 64" height="32" width="32" className={styles['inline-block']}>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="8"
          stroke="url(#d)"
          d="M8,60 V12 H32 Q48,12 48,28 Q48,44 32,44 H20 L48,60"
          className={styles.dash}
          id="r"
          pathLength="360"
        ></path>
      </svg>
      <div className="w-2"></div>
      {/* I */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="32" width="32" className={styles['inline-block']}>
        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="8" stroke="url(#b)" d="M32,60 V12" className={styles.dash} id="i" pathLength="360"></path>
      </svg>
      <div className="w-2"></div>
      {/* O */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="32" width="32" className={styles['inline-block']}>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="8"
          stroke="url(#e)"
          d="M32,12 Q48,12 48,28 Q48,44 32,60 Q16,44 16,28 Q16,12 32,12"
          className={styles.dash}
          id="o"
          pathLength="360"
        ></path>
      </svg>
    </div>
  )
}
const SpinLoading: FC<SpinLoadingProps> = ({ children, ...props }) => {
  return (
    <Spin css={SpingLoadingStyle} indicator={<LoadingIndicator />} {...props}>
      {children}
    </Spin>
  )
}
export default SpinLoading
