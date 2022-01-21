/*
 * @Author: Mario
 * @Date: 2021-11-18 00:07:06
 * @LastEditTime: 2022-01-21 15:45:18
 * @LastEditors: Mario
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

import styles from '@/layout/Header/index.module.scss'
import classnames from 'classnames'

interface HeaderProps {
  isCollapse: boolean
  setIsCollapse: (arg: boolean) => void
}
const Header: FC<HeaderProps> = ({ isCollapse, setIsCollapse }) => {
  const [isSearch, setIsSearch] = useState(false)
  const [isFoucs, setIsFocus] = useState(false)
  const [player, setPlayer] = useState()
  const [reverse, setReverse] = useState(true)
  const [opacityReverse, setOpacityReverse] = useState(true)
  const [immediate, setImmediate] = useState(true)
  const [opacityImmediate, setOpacityImmediate] = useState(true)

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  // 流言碎语
  const handleFadeIn = (fadeIn: any) => {
    if (!opacityReverse) {
      setOpacityReverse(!opacityReverse)
    }
    setImmediate(false)
    setReverse(!reverse)
  }
  // 登录
  const handleOpacity = () => {
    if (!reverse) {
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

  return (
    <header className={classnames('flex', styles['bg-header'], 'bg')}>
      <div className={classnames('w-220', 'header-left', styles.logo, 'flex', isMobile ? styles.isMobile : '')} style={{ paddingLeft: isMobile ? '0' : '20px' }}>
        {isMobile ? <MenuUnfoldOutlined className={styles.BreadCrumbs} onClick={() => setIsCollapse(!isCollapse)} /> : null}
        <div className={classnames('cursor-pointer', styles.img)}>
          <img src={logo} alt="" />
          <h2>Mario's Blog</h2>
        </div>
      </div>
      {isMobile ? null : (
        <div className={classnames('flex', 'items-center', 'flex-auto', 'justify-between', styles['header-right'], 'header-right')}>
          <div className="flex h-full">
            <div className={classnames('flex', 'items-center', 'cursor-pointer', 'md-and-down:hidden', styles.echarts)}>
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
              <CaretDownOutlined className={classnames('ml-1', styles['down-arrow'])} />
            </div>
            <div className={classnames('flex', styles.search, 'items-center', isFoucs ? 'active' : '')}>
              <Input placeholder="输入关键词搜索…" suffix={isSearch ? <LoadingOutlined /> : <SearchOutlined />} onChange={handleSearch} onFocus={onSearchFocus} onBlur={onSearchBlur} />
            </div>
          </div>
          <div className="flex h-full">
            <div className={classnames('md-and-down:hidden')}>
              <ReactAplayer {...props} onInit={onInit} onPlay={onPlay} onPause={onPause} />
            </div>
            <div className={classnames('flex', 'items-center', 'md-and-down:hidden', ' hover:bg-hover', styles['common-icon'])} onClick={onShowMusicList}>
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
            <div className={classnames('flex', 'items-center', styles.dropdown)}>
              <div className={classnames('flex', styles['common-icon'], styles.mt)} onClick={handleFadeIn}>
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
                  <div className={classnames(styles['dropdown-menu'], reverse ? styles.noclick : styles.click)}>
                    <div className={classnames(styles.panel, styles['bg-white'])}>
                      <div className={classnames(styles['panel-heading'], styles['b-light'], styles['bg-light'])}>
                        <strong>闲言碎语 </strong>
                      </div>
                      <div className={classnames(styles['list-group'])} id="smallRecording">
                        {[1, 2, 3].map((item) => (
                          <a href="https://www.ihewro.com/cross.html" key={item} className={classnames(styles['list-group-item'])}>
                            <span className={classnames(styles.clear)}>
                              又要做根管了…………
                              <br />
                              <small className={styles['text-muted']}>昨天 19: 05</small>
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              }
            </div>
            <div className={classnames('flex', 'items-center', styles.dropdown)}>
              <div className={classnames('flex', 'items-center', ' hover:bg-hover', styles['common-icon'])} onClick={handleOpacity}>
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
                <div className={classnames(styles['dropdown-menu'], styles['login-modal'], opacityReverse ? styles.noclick : styles.click)}>
                  <div className={classnames('p-warrper', 'bg-default')}>
                    <LoginModal />
                  </div>
                </div>
              </Opacity>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
