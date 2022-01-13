import { useState } from 'react'
import { Pagination } from 'antd'
import ArticleHeader from '@/views/ArticleList/components/ArticleHeader'
import styles from '@/views/ArticleList/index.module.scss'
const ArticleList = () => {
  let list = Array(5).fill({
    title: '实习拿到了百度、腾讯和字节的实习offer',
    article: `实习拿到了百度、腾讯和字节的实习offer，最终选择字节实习。秋招由于准备的晚，在字节转正后才开始准备秋招，拿到了百度的offer，最终留在了字节。 一些概念 日常实习与正式（暑期）实习有什么区别
日常实习如果一个组比较缺人，就很可能一年四季都招实习生，就会有日常实习的机会，只要是在校学生都可以去面试。而正式实习开始时间有一个范围比较固定，比如每年的3-6月，也就是暑期实习。
日常实习相对要好进一些，但是有的日常实习没有转正名额，这个要先确认一下。 字节的日常实习和正式实习在转正没什么区别，都是一起申请转正的。`,
    author: 'Mario',
    banner: 'https://cdn.jsdelivr.net/gh/ihewro/twenty-one@main/usr/uploads/2021/12/IMG_63482.jpg?t=1639549807127',
    time: '2021 年 12 月 28 日',
  })
  list = list.map((item, index) => {
    if (index === 0) {
      // 没有图
      return {
        ...item,
        banner: '',
      }
    } else if (index === 1) {
      // 图片左右布局
      return { ...item, isLeftRight: true, banner: 'https://cdn.jsdelivr.net/gh/ihewro/twenty-one@main/usr/uploads/image/IMG_5956_2.jpg?t=1633531626229' }
    } else {
      return { ...item }
    }
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [articleList, setArticleList] = useState(list)

  return (
    <div className={styles['article-list']}>
      {articleList.map((article, index) => (
        <ArticleHeader key={index} {...article} />
      ))}
      <div className={styles.pagination}>
        <Pagination size="small" defaultCurrent={1} total={500} showSizeChanger={false} />
      </div>
    </div>
  )
}

export default ArticleList
