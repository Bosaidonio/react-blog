/*
 * @Author: Mario
 * @Date: 2022-03-02 14:09:47
 * @LastEditTime: 2023-05-14 16:17:59
 * @LastEditors: mario marioworker@163.com
 * @Description:
 */

import React, { useRef, FC, useEffect } from 'react'
import Vditor from 'vditor'
// 引入css
import 'vditor/src/assets/less/index.less'
import { VditorPreviewStyle } from './vditor-style'
import { useMode } from '@/hooks'
//vidtor渲染图片的文件是vditor/src/ts/render/renderImage.ts

export interface IVditorPreviewProps {
  markdown: string
  options: IPreviewOptions
  customClass?: string
  callback?: () => void
}
const createCustomOptions = () => {
  // 创建新增或者删除的模板
  // const createTemplate = (str: string) => {
  //   const minusRegExp = /\/\/\s*\[!code\s+--\]/
  //   const plusRegExp = /\/\/\s*\[!code\s+\+\+\]/
  //   if (minusRegExp.test(str)) {
  //     const minusCode = str.replace(minusRegExp, '').trim()
  //     return `<div class="remove">- ${minusCode}</div>`
  //   } else if (plusRegExp.test(str)) {
  //     const plusCode = str.replace(plusRegExp, '').trim()
  //     return `<div class="add">+ ${plusCode}</div>`
  //   } else {
  //     return `<div>${str}</div>`
  //   }
  // }
  let inDetailsBlock = false
  return {
    renderParagraph: (node: any, entering: Boolean): [string, number] => {
      if (entering) {
        const startMatch = node
          .Text()
          .trim()
          .match(/:::\s+(tip|warning|danger|details)/)
        const endMatch = node.Text().trim().match(/:::/)

        if (startMatch) {
          const type = startMatch[1]
          const content = node.Text().trim().replace(startMatch[0], '').trim()
          if (type === 'details') {
            inDetailsBlock = true
            return [`<details class="custom-block ${type}"><summary>${content}</summary>`, Lute.WalkSkipChildren]
          }
          return [`<div class="custom-block ${type}"><p class="custom-block-title">${type}</p>${content}`, Lute.WalkSkipChildren]
        } else if (endMatch && inDetailsBlock) {
          inDetailsBlock = false
          return ['</details>', Lute.WalkSkipChildren]
        } else if (endMatch && !inDetailsBlock) {
          return ['</div>', Lute.WalkSkipChildren]
        } else {
          return ['', Lute.WalkContinue]
        }
      }
      return ['', Lute.WalkContinue]
    },
    // 负责渲染代码块外部包装元素
    // renderCodeBlock: (node: any, entering: Boolean): [string, number] => {
    //   if (entering) {
    //     const uint8Array = node.__internal_object__.CodeBlockInfo.$array
    //     // 获取代码块语言
    //     const language = uint8ArrayToString(uint8Array)

    //     return [`<pre><code class="${language} custom-code-block">`, Lute.WalkContinue]
    //   } else {
    //     return ['</code></pre>', Lute.WalkContinue]
    //   }
    // },
    // // // 负责渲染代码块
    // renderCodeBlockCode: (node: any, entering: Boolean): [string, number] => {
    //   if (entering) {
    //     const codeContent = node.TokensStr()
    //     // console.log(node)

    //     const codeList = codeContent.split('\n')
    //     const codeHtml = codeList.map(createTemplate).join('')
    //     return [codeHtml, Lute.WalkContinue]
    //   }
    //   return ['', Lute.WalkContinue]
    // },
    // 渲染h1-h6
    renderHeading(node: any, entering: Boolean): [string, number] {
      const level = node.__internal_object__.HeadingLevel
      const text = node.Text()

      if (entering) {
        return [`<h${level} id="${text}" class="custom-h${level === 1 ? ' custom-h1' : ''}">${text}</h${level}>`, 1]
      } else {
        return [`</h${level}>`, 1]
      }
    },

    renderLink: (node: any, entering: Boolean): [string, number] => {
      if (entering) {
        return [`<a href='${node.Text()}' class="no-external-link">`, Lute.WalkContinue]
      } else {
        return [
          `<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg></a>`,
          Lute.WalkContinue,
        ]
      }
    },
  }
}

const VditorPreview: FC<IVditorPreviewProps> = ({ markdown, options, customClass, callback }) => {
  const previewRef = useRef<HTMLDivElement>(null)
  const { theme } = useMode()

  useEffect(() => {
    Vditor.preview(previewRef.current as HTMLDivElement, markdown, { renderers: createCustomOptions(), ...options }).then(() => {
      if (!!customClass) {
        previewRef.current?.classList.add(customClass)
      }
      callback && callback()
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markdown, theme.mode])
  return <div id="vditor-preview" ref={previewRef} css={VditorPreviewStyle(theme)}></div>
}

export default VditorPreview
