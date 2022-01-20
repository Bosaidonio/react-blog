import styles from '@/views/Home/components/TopComponent/index.module.scss'
import { warrperClass } from '@/utils/classnames'
const TopComponent = () => {
  return (
    <div className={warrperClass(styles, 'single-post panel-picture border-radius-6 box-shadow-wrap-normal')}>
      <figure className="post-thumbnail border-radius-6">
        <a
          className="post-thumbnail-inner index-image lazy"
          href="https://www.ihewro.com/archives/489/"
          style={{ backgroundImage: 'url(https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2019/01/762065921.jpg)' }}
        >
          {''}
        </a>
      </figure>
      <header className="entry-header wrapper-lg">
        <h3 className="m-t-none text-ellipsis index-post-title">
          <a href="https://www.ihewro.com/archives/489/" rel="bookmark" data-pjax-state="">
            <span className="label text-sm bg-danger pull-left m-t-xs m-r" style={{ marginTop: '2px' }}>
              置顶
            </span>
            handsome —— 一款typecho主题
          </a>
        </h3>
        <div className="entry-meta">
          <span className="byline">
            <span className="author vcard">
              <a href="https://www.ihewro.com/archives/489/">在复杂中，保持简洁。 一款精心打磨后的typecho主题。</a>
            </span>
          </span>
        </div>
      </header>
    </div>
  )
}
export default TopComponent
