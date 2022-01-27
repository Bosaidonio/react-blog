/*
 * @Author: Mario
 * @Date: 2021-11-21 17:16:19
 * @LastEditTime: 2022-01-25 13:04:54
 * @LastEditors: Mario
 * @Description: 显示隐藏动画
 */
import { FC } from 'react'
import { useSpring, animated } from 'react-spring'

interface Props {
  immediate: boolean
  reverse: boolean
  children?: any
  customStyle?: React.CSSProperties
}

const Opacity: FC<Props> = ({ children, reverse, immediate, customStyle = {} }) => {
  const styles = useSpring({
    reverse: reverse,
    immediate: immediate,
    from: { opacity: 1 },
    to: { opacity: 0 },
  })

  return (
    <>
      <animated.div style={{ ...styles, ...customStyle }}>{children ? children : <span>请传递children</span>}</animated.div>
    </>
  )
}

export default Opacity
