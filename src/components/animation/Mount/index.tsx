import React, { FC } from 'react'
import { useTransition, config, animated } from 'react-spring'
interface MountProps {
  children?: JSX.Element
  customStyle?: React.CSSProperties
}
const Mount: FC<MountProps> = ({ children, customStyle }) => {
  const transitions = useTransition(true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  return transitions((styles, item) => item && <animated.div style={{ ...styles, ...customStyle }}>{children}</animated.div>)
}

export default Mount
