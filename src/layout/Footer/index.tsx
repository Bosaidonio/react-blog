/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-02 17:25:06
 * @Description: Do not edit
 */
import styles from '@/layout/Footer/index.module.scss'
// import { useMediaQuery } from 'react-responsive'
import { warrperClass } from '@/utils/classnames'
const Footer = () => {
  // const isDeskbook = useMediaQuery({
  //   query: '(max-width: 1020px)',
  // })
  // const isMobile = useMediaQuery({
  //   query: '(max-width: 767px)',
  // })
  return (
    <footer id="footer" className={warrperClass(styles, 'app-footer')}>
      <div className={warrperClass(styles, 'padder-sm bg-white footer_wrapper box-shadow-wrap-normal b-normal')}>
        <div className={warrperClass(styles, 'pull-right hidden-xs text-ellipsis')}>
          <a href="http://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
            晋ICP备2021001869号-1
          </a>
          <a href="javascript;" rel="noreferrer" style={{ marginLeft: '5px' }} target="_blank">
            <svg
              style={{ width: '16px', height: '16px', verticalAlign: '-4px' }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="30px"
              height="26px"
              viewBox="0 0 30 26"
              version="1.1"
            >
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                  d="M13,26 C3.36833333,26 0,22.631 0,13 C0,3.36866667 3.36833333,0 13,0 C22.6316667,0 26,3.36866667 26,13 C26,22.631 22.6316667,26 13,26 Z M6,9 L20,9 L20,7 L6,7 L6,9 Z M6,14 L16,14 L16,12 L6,12 L6,14 Z M6,19 L18,19 L18,17 L6,17 L6,19 Z"
                  id="icon"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </a>
        </div>
        <span className={warrperClass(styles, 'text-ellipsis')}>©&nbsp;{new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
