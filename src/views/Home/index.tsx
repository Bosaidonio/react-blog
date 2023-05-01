/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-30 13:48:31
 * @Description: Do not edit
 */
import Header from '@/components/BlogHeader'
import ArticleList from '@/views/ArticleList'
import { HomeStyle, SectionStyle } from './home-style'

const Home = () => {
  const headerData = {
    title: `Mario's Blog`,
    desc: '试玉要烧三日满，辨材须待七年期。',
  }
  return (
    <div css={HomeStyle()}>
      <Header {...headerData} />
      <section css={SectionStyle()}>
        <ArticleList />
      </section>
    </div>
  )
}

export default Home
