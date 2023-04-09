/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-09 13:57:03
 * @Description: Do not edit
 */
import { Tooltip } from 'antd'
import { warrperClass } from '@/utils/classnames'
import styles from '@/layout/RightAside/Sidebar/components/BabelCloud/index.module.scss'
import { getTagList } from '@/api/Statistics'
import { useState } from 'react'
import { useMount, useRequest } from 'ahooks'
import { TagRecord } from '@/types/statistics'
const BabelCloud = () => {
  const [babelList, setBabelList] = useState<TagRecord[]>([])
  const { run } = useRequest(getTagList, {
    manual: true,
    onSuccess: (result) => {
      if (result.statusCode === 200) {
        const { records } = result.data
        setBabelList(records)
      }
    },
  })
  useMount(() => {
    run({
      pageNow: 1,
      pageSize: 10,
    })
  })
  return (
    <section id="tag_cloud-2" className={warrperClass(styles, 'widget widget_tag_cloud wrapper-md clear')}>
      <h5 className={warrperClass(styles, 'widget-title m-t-none text-md')}>标签云</h5>
      <div className={warrperClass(styles, 'tags l-h-2x')}>
        {babelList.map((babel, index) => (
          <Tooltip key={index} placement="top" title={babel.tagName}>
            <span className={warrperClass(styles, 'label badge')} title="">
              {babel.tagName}
            </span>
          </Tooltip>
        ))}
      </div>
    </section>
  )
}

export default BabelCloud
