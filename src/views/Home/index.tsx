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
