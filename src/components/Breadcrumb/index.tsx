import { ReactSVG } from 'react-svg'
import backSvg from '@/assets/svgs/back.svg'
import homeSvg from '@/assets/svgs/home.svg'
import { useNavigate } from 'react-router-dom'
import { FC } from 'react'
import { useMode } from '@/hooks'
import { BreadCrumbIconStyle, BreadCrumbItemStyle, BreadCrumbLinkStyle, BreadCrumbSeparatorStyle, BreadCrumbStyle } from './bread-crumb-style'
interface BreadcrumbProps {
  goBack?: () => void
}
const Breadcrumb: FC<BreadcrumbProps> = ({ goBack }) => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }
  const { theme } = useMode()
  return (
    <ol css={BreadCrumbStyle(theme)}>
      <li onClick={() => (goBack ? goBack() : goHome())}>
        <div css={BreadCrumbItemStyle(theme)}>
          <div css={BreadCrumbIconStyle(theme, !!goBack)}>
            <ReactSVG src={goBack ? backSvg : homeSvg} />
          </div>
          <div css={BreadCrumbLinkStyle(theme)}>{goBack ? '返回' : '首页'}</div>
        </div>
      </li>
      <li css={BreadCrumbSeparatorStyle(theme)}>正文&nbsp;&nbsp;</li>
    </ol>
  )
}
export default Breadcrumb
