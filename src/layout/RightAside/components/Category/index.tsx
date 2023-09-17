import { getTextWidth, warrperClass } from '@/utils/dom'
import styles from '@/layout/RightAside/components/Category/index.module.scss'
import { useEffect } from 'react'
import { debounce } from '@/utils'
import { Tooltip } from 'antd'

type CacheDom = {
  id: string
  dom: HTMLElement
}
type MapPosistion = {
  [key: string]: string | number
}

const Category = ({ category }: any) => {
  // 点击目录滚动到指定位置
  const onScrollViewer = (title: string) => {
    console.log('title', title)

    const target = document.getElementById(title)
    const root = document.getElementById('root')
    const top = (target as any).offsetTop
    // 圆滑滚动到指定位置
    ;(root as any).scrollTo({
      top: top - 80,
      behavior: 'smooth',
    })
  }
  // 取出category所有的title,并组成一维数组
  const getTitleList = (category: any) => {
    return category.reduce((pre: any, cur: any) => {
      pre.push(cur.title)
      if (cur.children && cur.children.length > 0) {
        pre.push(...getTitleList(cur.children))
      }
      return pre
    }, [])
  }

  // 监听滚动事件，同步目录，高亮当前位置
  useEffect(() => {
    const cacheDom: CacheDom[] = getTitleList(category).map((id: string) => ({
      id,
      dom: document.getElementById(id),
    }))
    const mapPosistion: MapPosistion = {}
    cacheDom.forEach((item: { id: string; dom: HTMLElement }) => {
      mapPosistion[item.id] = item.dom?.offsetTop
    })

    // 监听body滚动
    const scrollHandler = debounce(() => {
      const titleList: HTMLElement[] = Array.from(document.querySelectorAll(`.${styles['tocify-item']}`))
      // 如果dom不存在，直接返回
      if (!titleList.length) {
        return
      }
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 如果滚动条位置小于目录第一个dom位置，代表在向上滚动，此时清除所有高亮
      if (scrollTop < +mapPosistion[titleList[0].innerText] - 120) {
        titleList.forEach((item) => {
          item.classList.remove(styles.active)
        })
        return
      }
      Object.keys(mapPosistion).forEach((key, i) => {
        // 如果滚动条位置大于目录位置，代表在向下滚动，此时高亮当前目录
        if (scrollTop >= +mapPosistion[key] - 120) {
          titleList.forEach((item) => {
            item.classList.remove(styles.active)
          })
          const target = titleList[i]
          if (target) {
            target.classList.add(styles.active)
          }
        }
      })
    }, 20)
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  // 根据dom宽度觉得是否要渲染tootip
  const renderTooltip = (title: string) => {
    const width = getTextWidth(title)
    return width > 180 ? (
      <Tooltip title={title}>
        <span>{title}</span>
      </Tooltip>
    ) : (
      <span>{title}</span>
    )
  }
  const renderCategory = (category: any) => {
    return category.map((item: any) => {
      return item.children && item.children.length > 0 ? (
        <div key={item.title}>
          <li className={warrperClass(styles, 'tocify-item')} onClick={() => onScrollViewer(item.title)}>
            {renderTooltip(item.title)}
          </li>
          <ul className={warrperClass(styles, 'tocify-subheader nav nav-list')}>{renderCategory(item.children)}</ul>
        </div>
      ) : (
        <li className={warrperClass(styles, 'tocify-item ')} key={item.title} onClick={() => onScrollViewer(item.title)}>
          {renderTooltip(item.title)}
        </li>
      )
    })
  }

  return category.length > 0 ? (
    <div className={warrperClass(styles, 'tags l-h-2x box-shadow-wrap-normal')}>
      <div id={warrperClass(styles, 'toc')} className={warrperClass(styles, 'small-scroll-bar overflow-y-auto tocify')}>
        <ul id="tocify-header0" className={warrperClass(styles, 'tocify-header nav nav-list')}>
          {renderCategory(category)}
        </ul>
      </div>
    </div>
  ) : null
}
export default Category
