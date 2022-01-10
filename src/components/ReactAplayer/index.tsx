/*
 * @Author: Mario
 * @Date: 2021-11-21 19:02:56
 * @LastEditTime: 2021-11-21 19:28:13
 * @LastEditors: Mario
 * @Description: 音乐播放器
 */
import APlayer from 'aplayer'
import 'aplayer/dist/APlayer.min.css'
import { useEffect, FC } from 'react'

interface AplayerProps {
  onInit: (ap: any) => void
  onPlay: (ap: any) => void
  onPause: (ap: any) => void
}
const ReactAplayer: FC<AplayerProps> = ({ onInit, onPlay, onPause, ...rest }) => {
  const removeOldSvg = () => {
    const iconBack = document.querySelector('.aplayer-icon-back') as Element
    const iconPlay = document.querySelector('.aplayer-icon-play') as Element
    const iconForward = document.querySelector('.aplayer-icon-forward') as Element
    iconBack.innerHTML =
      '<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg>'
    iconPlay.innerHTML =
      '<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'
    iconForward.innerHTML =
      '<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg>'
  }
  useEffect(() => {
    const ap = new APlayer({
      container: document.getElementById('aplayer'),
      ...rest,
    })
    onInit(ap)
    removeOldSvg()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div id="aplayer"></div>
}

export default ReactAplayer
