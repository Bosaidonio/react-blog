/*
 * @Date: 2023-03-26 14:18:29
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-02 19:11:26
 * @Description: Do not edi
 */
import { UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import { warrperClass } from '@/utils/classnames'
import styles from '@/views/Ai/index.module.scss'
import gptIcon from './assets/svgs/gpt.svg'
import VditorPreview from '@/components/VditorPreview'
import { useState } from 'react'
import { useRequest } from 'ahooks'
import { conversationApi } from '@/api/ChatGpt'
const { Search } = Input
const Ai = () => {
  // const headerData = {
  //   title: 'ChatGPT',
  //   desc: '快来和我愉快的玩耍吧 ~',
  //   isCenter: true,
  //   customStyle: {
  //     fontSize: '24px',
  //   },
  // }
  const [markdown, setMarkdown] = useState('')
  const options: any = {
    mode: 'light',
    hljs: {
      enable: true,
      style: 'native',
      lineNumber: true,
    },
    // 设置代码块主题
    theme: {
      current: 'light',
    },
  }
  let stackStr = ''
  const { run } = useRequest(conversationApi, {
    manual: true,
    onSuccess: (stream) => {
      const decoder = new TextDecoder('utf-8')
      const reader = stream.getReader()
      function readStream() {
        reader.read().then((res: any) => {
          const { done, value } = res
          if (done) {
            return
          }

          const data = decoder.decode(value)
          stackStr += data
          setMarkdown(stackStr)
          // 更新完后，让滚动条滚动到最底部
          const chat: any = document.querySelector(`.${styles.chat}`)
          chat.scrollTop = chat.scrollHeight
          setTimeout(() => {
            readStream()
          }, 60)
        })
      }
      readStream()
    },
  })
  const onSearch = (val: string) => {
    run({
      prompt: val,
    })
  }
  return (
    <div className={styles.gpt}>
      {/* <BlogHeader {...headerData} /> */}
      <div className={`warrper-md ${styles.panel}`}>
        <div className={styles.chat}>
          <div className={warrperClass(styles, 'item user')}>
            <div className={styles.txt}>使用js调用接口时进行加密传输</div>
            <div className={styles.ico}>M</div>
          </div>
          <div className={warrperClass(styles, 'item ai')}>
            <img
              src={gptIcon}
              alt=""
              className={styles.speak}
              style={{ width: '30px', height: '30px', borderRadius: '15px', padding: '3px', marginBottom: '5px', marginLeft: '10px', background: 'rgb(16, 163, 127)' }}
            />
            <div className={warrperClass(styles, 'txt aiTxt')}>
              <div className={styles['markdown-body']}>{markdown ? <VditorPreview markdown={markdown} options={options} /> : null}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={warrperClass(styles, 'prompt-input')}>
        <Search loading={false} size="large" placeholder="你可以在这里输入一些问题..." prefix={<UserOutlined />} onSearch={onSearch} />
      </div>
    </div>
  )
}
export default Ai
