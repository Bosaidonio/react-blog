import { warrperClass } from '@/utils/classnames'
import styles from '@/layout/RightAside/Sidebar/components/BabelCloud/index.module.scss'

const BabelCloud = () => {
  const babelList = [
    {
      label: '喜欢',
    },
    {
      label: '生活',
    },
    {
      label: '文章',
    },
    {
      label: '效果',
    },
    {
      label: '文件',
    },
    {
      label: 'css',
    },
    {
      label: '项目',
    },
    {
      label: '工作',
    },
    {
      label: '歌',
    },
  ]
  return (
    <section id="tag_cloud-2" className={warrperClass(styles, 'widget widget_tag_cloud wrapper-md clear')}>
      <h5 className={warrperClass(styles, 'widget-title m-t-none text-md')}>标签云</h5>
      <div className={warrperClass(styles, 'tags l-h-2x')}>
        {babelList.map((babel, index) => (
          <a key={index} href="https://www.ihewro.com/tag/%E6%97%B6%E5%80%99/" className={warrperClass(styles, 'label badge')} title="" data-toggle="tooltip" data-original-title="时候">
            {babel.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default BabelCloud
