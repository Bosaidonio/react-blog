import Header from '@/views/Home/components/Header'
import styles from '@/views/Home/index.module.scss'
import ArticleList from '@/views/ArticleList'
const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <section className="padding-20">
        <ArticleList />
      </section>
    </div>
  )
}

export default Home
