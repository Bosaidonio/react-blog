/*
 * @Author: Mario
 * @Date: 2022-03-02 14:09:47
 * @LastEditTime: 2023-04-09 23:21:42
 * @LastEditors: mario marioworker@163.com
 * @Description:
 */

import React, { useRef, FC, useEffect } from 'react'
import Vditor from 'vditor'
// 引入css
import 'vditor/src/assets/less/index.less'
//vidtor渲染图片的文件是vditor/src/ts/render/renderImage.ts

export interface IVditorPreviewProps {
  markdown: string
  options: IPreviewOptions
  customClass?: string
  callback?: () => void
}
const createCustomOptions = () => {
  return {
    renderParagraph(node: any, entering: Boolean): [string, number] {
      const replaceResult = node
        .Text()
        .trim()
        .match(/^:+\s+(warning|success|danger)\s+(提示|注意|危险)(.*):{3}$/)
      if (replaceResult) {
        const type = replaceResult[1]
        const tip = replaceResult[2]
        const content = replaceResult[3]
        if (entering) {
          return [`<div class="custom-block ${type}">${tip ? `<p class="custom-block-title">${tip}</p>` : ''}${content}\n`, Lute.WalkSkipChildren]
        } else {
          return ['</div>', Lute.WalkSkipChildren]
        }
      } else {
        return ['', Lute.WalkContinue]
      }
    },
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

  useEffect(() => {
    Vditor.preview(previewRef.current as HTMLDivElement, markdown, { renderers: createCustomOptions(), ...options }).then(() => {
      if (!!customClass) {
        previewRef.current?.classList.add(customClass)
      }
      callback && callback()
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markdown])

  return <div ref={previewRef}></div>
}

export default VditorPreview
