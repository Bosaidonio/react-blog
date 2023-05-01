/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 10:39:54
 * @Description: Do not edit
 */
import { FC, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'
import { State } from '@/store'
import NProgress from '@/components/NProgress'
import RightAside from '@/layout/RightAside'
import EmptyRouter from '@/views/EmptyRouter'

import { useMode } from '@/hooks'
import { ContentStyle, ContentWarrperStyle, EmptyRouterStyle } from './content-style'

interface ContentProps {
  isCollapse: boolean
  initWidth: number
  customStyle: object
}
const Content: FC<ContentProps> = ({ initWidth, isCollapse, customStyle }) => {
  const isLoading = useSelector((state: State) => state.loading)
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  const [isFinished, setIsFinished] = useState(true)
  const { theme } = useMode()
  return (
    <div
      id="content"
      css={ContentStyle(theme, isMobile, isCollapse)}
      style={{ marginLeft: isMobile ? '0' : `${initWidth}px`, transform: isMobile && !isCollapse ? `translate3d(${initWidth}px, 0, 0)` : 'unset', ...customStyle }}
    >
      <NProgress loading={isLoading} />
      <div css={ContentWarrperStyle(theme)}>
        <div css={EmptyRouterStyle(theme)}>
          <EmptyRouter isFinished={isFinished} setIsFinished={setIsFinished} />
        </div>
        <RightAside />
      </div>
    </div>
  )
}

export default Content
