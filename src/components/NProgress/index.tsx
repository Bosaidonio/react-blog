/*
 * @Author: Mario
 * @Date: 2021-12-25 12:51:08
 * @LastEditTime: 2023-04-30 11:09:05
 * @LastEditors: mario marioworker@163.com
 * @Description: 进度条组件
 */
import { useMode } from '@/hooks'
import { BarStyle, ButterBarStyle } from './nprogress-style'

interface INProgress {
  loading: boolean
}
const NProgress = ({ loading }: INProgress) => {
  const { theme } = useMode()
  return loading ? (
    <div id="loading" css={ButterBarStyle(theme, true)}>
      <span css={BarStyle(theme, true)}></span>
    </div>
  ) : null
}
export default NProgress
