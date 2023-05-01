/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-05-01 15:16:38
 * @Description: Do not edit
 */
import { Tooltip } from 'antd'
import { getTagList } from '@/api/Statistics'
import { useState } from 'react'
import { useMount, useRequest } from 'ahooks'
import { TagRecord } from '@/types/statistics'
import { BabelCloudStyle, BabelTagStyle, BabelTagWarrperStyle } from './babel-cloud-style'
import { useMode } from '@/hooks'
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
  const { theme } = useMode()
  return (
    <section id="tag_cloud-2" css={BabelCloudStyle(theme)}>
      <h5>标签云</h5>
      <div css={BabelTagWarrperStyle(theme)}>
        {babelList.map((babel, index) => (
          <Tooltip key={index} placement="top" title={babel.tagName}>
            <span css={BabelTagStyle(theme)}>{babel.tagName}</span>
          </Tooltip>
        ))}
      </div>
    </section>
  )
}

export default BabelCloud
