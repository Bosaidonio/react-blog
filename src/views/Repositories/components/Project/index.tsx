import { FC } from 'react'

import { warrperClass } from '@/utils/dom'
import { StarOutlined, ForkOutlined, LinkOutlined } from '@ant-design/icons'
import styles from '@/views/Repositories/components/Project/index.module.scss'
import { Skeleton } from 'antd'

export interface ProjectProps {
  projectName: string
  projectDesc: string
  starsNum: string | number
  forksNum: number | number
  projectUrl: string
  language: string
  loading: boolean
  customStyle: React.CSSProperties
}
const Project: FC<ProjectProps> = ({ customStyle, projectName, projectDesc, projectUrl, language, starsNum, forksNum, loading }) => {
  return (
    <div className={warrperClass(styles, 'panel b-light bg-light')}>
      <Skeleton active loading={loading}>
        <div style={customStyle}>
          <div className={warrperClass(styles, 'panel-body')}>
            <div className={warrperClass(styles, 'github_language')}>{language ? language : '未知'}</div>
            <div className={styles.clear}>
              <span className={warrperClass(styles, 'text-ellipsis font-thin h3')}>{projectName}</span>
              <small className={warrperClass(styles, 'block m-sm')}>
                <StarOutlined />
                {starsNum} stars / <ForkOutlined />
                {forksNum} forks
              </small>
              <small className="text-ellipsis block ">{projectDesc || '这家伙太懒了，没有任何描述~'}</small>
              <a target="_blank" rel="noreferrer" href={projectUrl} className={warrperClass(styles, 'm-sm btn btn-rounded btn-sm lter btn-light')}>
                访问
                <LinkOutlined />
              </a>
            </div>
          </div>
        </div>
      </Skeleton>
    </div>
  )
}

export default Project
