/*
 * @Author: Mario
 * @Date: 2021-11-21 17:16:19
 * @LastEditTime: 2021-11-21 17:43:03
 * @LastEditors: Mario
 * @Description: 显示隐藏动画
 */
import { FC } from 'react'
import { useSpring, animated } from 'react-spring'

interface Props {
  immediate: boolean
  reverse: boolean
  children?: any
}

const Opacity: FC<Props> = ({ children, reverse, immediate }) => {
  const styles = useSpring({
    reverse: reverse,
    immediate: immediate,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <>
      <animated.div style={{ ...styles }}>{children ? children : <span>请传递children</span>}</animated.div>
    </>
  )
}

export default Opacity
