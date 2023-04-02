/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-02 20:49:35
 * @Description: Do not edit
 */
import Header from '@/components/BlogHeader'
import styles from '@/views/Home/index.module.scss'
import ArticleList from '@/views/ArticleList'

const Home = () => {
  const headerData = {
    title: `Mario's Blog`,
    desc: '试玉要烧三日满，辨材须待七年期。',
  }
  return (
    <div className={styles.home}>
      <Header {...headerData} />
      <section className="padding-20">
        <ArticleList />
      </section>
    </div>
  )
}

export default Home
