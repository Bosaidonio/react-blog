import styles from '@/views/Home/components/TopComponent/index.module.scss'
import { warrperClass } from '@/utils/classnames'
const TopComponent = () => {
  return (
    <div className={warrperClass(styles, 'panel-picture border-radius-6 box-shadow-wrap-normal')}>
      <figure className={warrperClass(styles, 'post-thumbnail border-radius-6')}>
        <a
          className={warrperClass(styles, 'post-thumbnail-inner index-image lazy')}
          href="https://www.ihewro.com/archives/489/"
          style={{ backgroundImage: 'url(https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2019/01/762065921.jpg)' }}
        >
          {''}
        </a>
      </figure>
      <header className={warrperClass(styles, 'entry-header wrapper-lg')}>
        <h3 className={warrperClass(styles, 'm-t-none text-ellipsis index-post-title')}>
          <a href="https://www.ihewro.com/archives/489/" rel="bookmark" data-pjax-state="">
            <span className={warrperClass(styles, 'label text-sm bg-danger pull-left m-t-xs m-r')} style={{ marginTop: '10px' }}>
              置顶
            </span>
            实习拿到了百度、腾讯和字节的实习offer
          </a>
        </h3>
      </header>
    </div>
  )
}
export default TopComponent
