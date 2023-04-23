/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-09 13:31:47
 * @Description: Do not edit
 */
import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import { warrperClass } from '@/utils/dom'
import styles from '@/layout/RightAside/Sidebar/components/BlogInfo/index.module.scss'
import articleCountSvg from '@/layout/RightAside/Sidebar/components/BlogInfo/assets/svgs/article-count.svg'
import commentCountSvg from '@/layout/RightAside/Sidebar/components/BlogInfo/assets/svgs/comment-count.svg'
import runDateSvg from '@/layout/RightAside/Sidebar/components/BlogInfo/assets/svgs/run-date.svg'
import activitySvg from '@/layout/RightAside/Sidebar/components/BlogInfo/assets/svgs/activity.svg'
import { getBlogInfo } from '@/api/Statistics'
import { useMount, useRequest } from 'ahooks'

// 运行时间
// const runTime = (startTime: string) => {
//   const { sm, ss, hh, dd, yy } = diffTime(startTime)
//   if (yy > 0) {
//     return `${yy}年${add0(dd - 365 * yy)}天`
//   } else if (dd > 0) {
//     return `${dd}天${add0(hh - 24 * dd)}小时`
//   } else if (hh > 0) {
//     return `${add0(hh)}小时${add0(ss - 60 * hh)}分`
//   } else if (ss > 0) {
//     return `${ss}分${add0(sm - 60 * ss)}秒`
//   } else {
//     return `${add0(sm)}秒`
//   }
// }
// // 相对时间
// const relativeTime = (startTime: string) => {
//   const { sm, ss, hh, dd, yy } = diffTime(startTime)
//   if (yy > 0) {
//     return `${yy}年前`
//   } else if (dd > 0) {
//     return `${dd}天前`
//   } else if (hh > 0) {
//     return `${hh}小时前`
//   } else if (ss > 0) {
//     return `${ss}分前`
//   } else {
//     return `${sm}秒前`
//   }
// }
interface Info {
  icon: string
  title: string
  count: string | number
}
const BlogInfo = () => {
  const [blogInfo, setBlogInfo] = useState<Info[]>([])
  const { run } = useRequest(getBlogInfo, {
    manual: true,
    onSuccess: (result) => {
      if (result.statusCode === 200) {
        const { data } = result
        const { articleCount, commentCount, runDays, lastEventTime } = data
        setBlogInfo([
          {
            icon: articleCountSvg,
            title: '文章数目',
            count: articleCount,
          },
          {
            icon: commentCountSvg,
            title: '评论数目',
            count: commentCount,
          },
          {
            icon: runDateSvg,
            title: '运行天数',
            count: runDays,
          },
          {
            icon: activitySvg,
            title: '最后活动',
            count: lastEventTime,
          },
        ])
      }
    },
  })
  useMount(() => {
    run()
  })

  return (
    <section id="blog_info" className={warrperClass(styles, 'widget widget_categories wrapper-md clear')}>
      <h5 className={warrperClass(styles, 'widget-title m-t-none text-md')}>博客信息</h5>
      <ul className={warrperClass(styles, 'list-group box-shadow-wrap-normal')}>
        {blogInfo.map((blog, index) => (
          <li key={index} className={warrperClass(styles, 'list-group-item text-second')}>
            <span className={styles['blog-info-icons']}>
              <ReactSVG src={blog.icon} />
            </span>
            <span className={warrperClass(styles, 'badge pull-right')}>{blog.count}</span>
            {blog.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BlogInfo
