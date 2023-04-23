import { useEffect, useState } from 'react'
// 第三方组件库
import { Row, Col } from 'antd'
// 自定义组件
import Project from '@/views/Repositories/components/Project'
import BlogHeader from '@/components/BlogHeader'

// 工具库
import { warrperClass } from '@/utils/dom'
import { getRandom, chunk } from '@/utils/math'
// 请求
import { useRequest } from 'ahooks'
import { getGithubRespoList } from '@/api/Respositories'
// 静态资源
import githubSvg from '@/views/Repositories/assets/svgs/github.svg'
import styles from '@/views/Repositories/index.module.scss'

interface StylesProps {
  backgroundColor: string
  color?: string
}
const Respositories = () => {
  const [projectList, setProjectList] = useState<any[][]>([])
  const headerData = {
    title: '项目展示',
    desc: 'Github的一些项目展示',
    icon: githubSvg,
  }
  const stylesTable: StylesProps[] = [
    {
      backgroundColor: '#edf1f2',
    },
    {
      backgroundColor: '#22b7e5',
      color: '#fff',
    },
    {
      backgroundColor: '#3a3f52',
      color: '#fff',
    },
    {
      backgroundColor: '#26c24c',
      color: '#fff',
    },
    {
      backgroundColor: '#111111',
      color: '#fff',
    },
    {
      backgroundColor: '#fad732',
      color: '#fff',
    },
    {
      backgroundColor: '#7266ba',
      color: '#fff',
    },
    {
      backgroundColor: '#f05050',
      color: '#fff',
    },
    {
      backgroundColor: '#38aa43',
      color: '#fff',
    },
    {
      backgroundColor: '#f0b213',
      color: '#fff',
    },
  ]

  // 生成不重复的随机样式背景
  const generatorStyle = (): StylesProps => {
    const indexNum = getRandom(0, stylesTable.length - 1)
    return stylesTable[indexNum]
  }
  const [loadingProject, setLoadingProject] = useState(true)
  // 获取仓库列表
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { loading, run } = useRequest(getGithubRespoList, {
    manual: true,
    onSuccess: (result) => {
      // const filterResult = result.filter((item: any) => item.language)
      const projectList = chunk([...result], 2)
      setProjectList(projectList)
      setTimeout(() => {
        setLoadingProject(false)
      }, 300)
    },
  })

  useEffect(() => {
    run()
  }, [run])
  return (
    <div className={styles.respositories}>
      <BlogHeader {...headerData} />
      <div className="warrper-md">
        <article className="single-post panel">
          <div className={warrperClass(styles, 'entry-thumbnail')} aria-hidden="true">
            <div className={warrperClass(styles, 'item-thumb')} style={{ backgroundImage: 'url(https://www.ihewro.com/usr/uploads/2019/04/1350170390.jpg)' }}></div>
          </div>
          <div className="wrapper-lg">
            {projectList.map((item, index) => (
              <Row gutter={20} key={index}>
                {item.map((project, subIndex) => (
                  <Col xs={24} sm={24} md={24} lg={24} xl={12} key={subIndex}>
                    <Project
                      loading={loadingProject}
                      customStyle={generatorStyle()}
                      projectName={project.name}
                      projectDesc={project.description}
                      projectUrl={project.html_url}
                      language={project.language}
                      starsNum={project.stargazers_count}
                      forksNum={project.forks_count}
                    />
                  </Col>
                ))}
              </Row>
            ))}
          </div>
        </article>
        {!loadingProject ? <>{/* <CommentList /> */}</> : null}
      </div>
    </div>
  )
}

export default Respositories
