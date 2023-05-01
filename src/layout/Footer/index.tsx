/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 21:31:33
 * @Description: Do not edit
 */
import { useMode } from '@/hooks'
import { FooterStyle, FooterWarpper, RecordStyle } from './footer-style'
import { SingleLineEllipsis } from '@/style/common'
const Footer = () => {
  const { theme } = useMode()
  return (
    <footer id="footer" css={FooterStyle()}>
      <div css={FooterWarpper(theme)}>
        <div css={RecordStyle(theme)}>
          <a href="http://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
            晋ICP备2021001869号-1
          </a>
          <a href="javascript;" rel="noreferrer" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="26px" viewBox="0 0 30 26" version="1.1">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                  d="M13,26 C3.36833333,26 0,22.631 0,13 C0,3.36866667 3.36833333,0 13,0 C22.6316667,0 26,3.36866667 26,13 C26,22.631 22.6316667,26 13,26 Z M6,9 L20,9 L20,7 L6,7 L6,9 Z M6,14 L16,14 L16,12 L6,12 L6,14 Z M6,19 L18,19 L18,17 L6,17 L6,19 Z"
                  id="icon"
                  fill={theme.mode === 'dark' ? '#777' : '#000'}
                ></path>
              </g>
            </svg>
          </a>
        </div>
        <span css={SingleLineEllipsis()}>©&nbsp;{new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
