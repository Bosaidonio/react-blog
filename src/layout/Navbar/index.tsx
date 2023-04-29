/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 00:10:57
 * @Description: Do not edit
 */
import { useMediaQuery } from 'react-responsive'
import { Divider } from 'antd'
import { Resizable } from 're-resizable'

import MenuList from '@/layout/Navbar/components/menuList'
import { CaretDownOutlined } from '@ant-design/icons'
import { FC, useRef } from 'react'
import { AsideUserStyle, AsideWarpperStyle, AvatarStyle, DividerStyle, MoveResizableStyle, NavBarStyle, NavListStyle, NavWarpperStyle, UserDescStyle, UserNameStyle } from './navbarStyle'
import { useMode } from '@/hooks'

interface AsideProps {
  isCollapse: boolean
  initWidth: number
  setInitWidth: (arg: number) => void
  setIsCollapse: (args: boolean) => void
}
const Aside: FC<AsideProps> = ({ isCollapse, setIsCollapse, initWidth, setInitWidth }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  const NavRef = useRef<HTMLElement>(null)
  const { theme } = useMode()
  return (
    <nav ref={NavRef} css={NavBarStyle(theme, isMobile)} style={{ width: initWidth }}>
      <Resizable
        css={MoveResizableStyle(theme)}
        maxWidth={380}
        minWidth={200}
        size={{ width: initWidth, height: '100%' }}
        enable={{
          right: true,
        }}
        onResize={(e) => {
          const navOffsetLeft = NavRef.current ? NavRef.current.offsetLeft : 0
          const currentWidth = (e as MouseEvent).x - navOffsetLeft
          if (currentWidth < 380 && currentWidth > 200) {
            setInitWidth(currentWidth)
          }
        }}
      >
        <div css={AsideWarpperStyle(theme)}>
          <div css={NavWarpperStyle(theme)}>
            <div css={AsideUserStyle(theme)}>
              <div css={AvatarStyle()}>
                <img src="https://cdn.mariowork.com/auth/avatar.jpeg" alt="" />
              </div>
              <div css={UserNameStyle(theme)}>
                <strong>捡故事的人</strong>
                <CaretDownOutlined />
              </div>
              <span css={UserDescStyle(theme)}>认真生活</span>
            </div>
            <div style={{ width: initWidth }}>
              <Divider css={DividerStyle(theme)} />
            </div>
            <div css={NavListStyle(theme)}>
              <MenuList isCollapse={isCollapse} setIsCollapse={setIsCollapse} width={initWidth} />
            </div>
          </div>
          {/* <div className={classnames(styles['footer-left'])}></div> */}
        </div>
      </Resizable>
    </nav>
  )
}

export default Aside
