/*
 * @Author: Mario
 * @Date: 2021-11-21 14:59:02
 * @LastEditTime: 2022-01-25 12:47:37
 * @LastEditors: Mario
 * @Description: 渐入动画组件
 */
import { FC } from 'react'
import { useSpring, animated } from 'react-spring'
interface Props {
  immediate: boolean
  reverse: boolean
  children?: any
}
const FadeIn: FC<Props> = ({ children, reverse, immediate }) => {
  const styles = useSpring({
    reverse: reverse,
    immediate: immediate,
    from: { y: 25, opacity: 1 },
    to: { y: 200, opacity: 0 },
  })

  return (
    <>
      <animated.div style={{ ...styles }}>{children ? children : <span>请传递children</span>}</animated.div>
    </>
  )
}

export default FadeIn
