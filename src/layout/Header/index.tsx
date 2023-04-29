/*
 * @Author: Mario
 * @Date: 2021-11-18 00:07:06
 * @LastEditTime: 2023-04-30 00:10:49
 * @LastEditors: mario marioworker@163.com
 * @Description: 头部组件
 */

import { useState, FC } from 'react'
import { Input } from 'antd'
import { useMediaQuery } from 'react-responsive'
import ReactAplayer from '@/components/ReactAplayer'
import FadeIn from '@/components/animation/FadeIn'
import Opacity from '@/components/animation/Opacity'
import LoginModal from '@/components/LoginModal'
import logo from '@/assets/svgs/logo.svg'
import { SearchOutlined, LoadingOutlined, CaretDownOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import ThemeButton from '@/components/ThemeButton'
import { useMode } from '@/hooks'
import {
  BreadCrumbsStyle,
  CaretDownStyle,
  DropDownMenuStyle,
  DropDownStyle,
  EchartsStyle,
  FlexAndHeightStyle,
  HeaderLeftStyle,
  HeaderRightStyle,
  HeaderStyle,
  ListGroupItemStyle,
  ListGroupStyle,
  LoginModalWarrperStyle,
  LogoStyle,
  MusicIconStyle,
  NavIconStyle,
  PanelHeadingStyle,
  PanelStyle,
  RecordMessageIconStyle,
  RecordMessageStyle,
  SearchStyle,
  ThemeButtonStyle,
} from '@/layout/Header/headerStyle'
import { HideOnMaxMediaMd } from '@/style/common'
import { SerializedStyles } from '@emotion/react'

interface HeaderProps {
  isCollapse: boolean
  BoxModeStyle: SerializedStyles
  setIsCollapse: (arg: boolean) => void
}
const Header: FC<HeaderProps> = ({ isCollapse, setIsCollapse, BoxModeStyle }) => {
  const [isSearch, setIsSearch] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFoucs, setIsFocus] = useState(false)
  const [player, setPlayer] = useState()
  const [reverse, setReverse] = useState(false)
  const [opacityReverse, setOpacityReverse] = useState(false)
  const [immediate, setImmediate] = useState(true)
  const [opacityImmediate, setOpacityImmediate] = useState(true)

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  // 流言碎语
  const handleFadeIn = (fadeIn: any) => {
    if (opacityReverse) {
      setOpacityReverse(!opacityReverse)
    }
    setImmediate(false)
    setReverse(!reverse)
  }
  // 登录
  const handleOpacity = () => {
    if (reverse) {
      setReverse(!reverse)
    }
    setOpacityImmediate(false)
    setOpacityReverse(!opacityReverse)
  }
  // 搜索
  function handleSearch() {
    setIsSearch(!isSearch)
    setTimeout(() => {
      setIsSearch((prevState) => {
        return !prevState
      })
    }, 1000)
  }

  const onPlay = () => {
    const iconPlay = document.querySelector('.aplayer-icon-play') as Element
    iconPlay.innerHTML =
      '<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>'
  }

  const onPause = () => {
    const iconPlay = document.querySelector('.aplayer-icon-play') as Element
    iconPlay.innerHTML =
      '<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'
  }

  const onInit = (player: any) => {
    setPlayer(player)
  }

  const onSearchFocus = () => {
    setIsFocus(true)
  }
  const onSearchBlur = () => {
    setIsFocus(false)
  }
  const onShowMusicList = () => {
    ;(player as any).list.toggle()
  }
  const props = {
    theme: '#F57F17',
    lrcType: 3,
    listFolded: true,
    listMaxHeight: '200px',
    audio: [
      {
        name: '嘉宾',
        artist: '路飞文',
        url: 'https://cdn.mariowork.com/auth/嘉宾.mp3',
        cover: 'https://cdn.mariowork.com/auth/嘉宾.jpeg',
        lrc: 'https://cdn.mariowork.com/auth/嘉宾.lrc',
        theme: '#ebd0c2',
      },
      {
        name: '十一种孤独',
        artist: '宿羽阳',
        url: 'https://cdn.mariowork.com/auth/十一种孤独.mp3',
        cover: 'https://cdn.mariowork.com/auth/十一种孤独.png',
        lrc: 'https://cdn.mariowork.com/auth/十一种孤独.lrc',
        theme: '#ebd0c2',
      },
      {
        name: '窗',
        artist: '虎二',
        url: 'https://cdn.mariowork.com/auth/窗.mp3',
        cover: 'https://cdn.mariowork.com/auth/窗.png',
        lrc: 'https://cdn.mariowork.com/auth/窗.lrc',
        theme: '#ebd0c2',
      },
    ],
  }
  const { theme } = useMode()
  return (
    <header css={[HeaderStyle(theme), BoxModeStyle]}>
      <div css={HeaderLeftStyle(isMobile)}>
        {isMobile ? <MenuUnfoldOutlined css={BreadCrumbsStyle()} onClick={() => setIsCollapse(!isCollapse)} /> : null}
        <div css={LogoStyle(theme, isMobile)}>
          <img src={logo} alt="" />
          <h2>Mario's Blog</h2>
        </div>
      </div>

      <div css={HeaderRightStyle()}>
        {isMobile ? null : (
          <div css={FlexAndHeightStyle()}>
            <div css={EchartsStyle(theme)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-pie-chart"
              >
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
              <CaretDownOutlined css={CaretDownStyle()} />
            </div>
            <div css={SearchStyle(theme)}>
              <Input placeholder="输入关键词搜索…" suffix={isSearch ? <LoadingOutlined /> : <SearchOutlined />} onChange={handleSearch} onFocus={onSearchFocus} onBlur={onSearchBlur} />
            </div>
          </div>
        )}

        <div css={FlexAndHeightStyle()}>
          {isMobile ? null : (
            <>
              <div css={HideOnMaxMediaMd(theme)}>
                <ReactAplayer {...props} onInit={onInit} onPlay={onPlay} onPause={onPause} />
              </div>
              <div css={MusicIconStyle(theme)} onClick={onShowMusicList}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-disc"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div css={RecordMessageStyle(theme)} onClick={handleFadeIn}>
                <div css={RecordMessageIconStyle()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitch"
                  >
                    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
                  </svg>
                </div>
                {
                  <FadeIn reverse={reverse} immediate={immediate}>
                    <div css={DropDownMenuStyle(theme, reverse)}>
                      <div css={PanelStyle()}>
                        <div css={PanelHeadingStyle(theme)}>
                          <strong>
                            <span css={NavIconStyle()}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                height="16px"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                              </svg>
                            </span>
                            时光机{' '}
                          </strong>
                        </div>
                        <div css={ListGroupStyle(theme)} id="smallRecording">
                          {[1, 2, 3].map((item) => (
                            <a href="https://www.ihewro.com/cross.html" key={item} css={ListGroupItemStyle(theme)}>
                              <span>
                                又要做根管了…………
                                <br />
                                <small>昨天 19: 05</small>
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                }
              </div>
              <div css={DropDownStyle(theme)}>
                <div onClick={handleOpacity}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-key"
                  >
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                  </svg>
                </div>
                <Opacity reverse={opacityReverse} immediate={opacityImmediate}>
                  <div css={DropDownMenuStyle(theme, opacityReverse)}>
                    <div css={LoginModalWarrperStyle(theme)}>
                      <LoginModal handleOpacity={handleOpacity} />
                    </div>
                  </div>
                </Opacity>
              </div>
            </>
          )}
          <div css={ThemeButtonStyle()}>
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
