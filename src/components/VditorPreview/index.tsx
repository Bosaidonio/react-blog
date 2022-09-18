/*
 * @Author: Mario
 * @Date: 2022-03-02 14:09:47
 * @LastEditTime: 2022-03-04 21:37:09
 * @LastEditors: Mario
 * @Description:
 */

import React, { useRef, FC } from 'react'
import { useMount } from 'ahooks'

import Preivew from 'vditor'
// import 'vditor/src/assets/scss/index.scss'

export interface IVditorPreviewProps {
  markdown: string
  options: IPreviewOptions
  customClass?: string
  callback?: () => void
}
const createCustomOptions = () => {
  let myLink = ''
  return {
    // renderParagraph(node: any, entering: Boolean): [string, number] {
    //   const replaceResult = node
    //     .Text()
    //     .trim()
    //     .match(/^:+\s+(warning|success|danger)\s+(提示|注意|危险)(.*):{3}$/)

    //   if (replaceResult) {
    //     const type = replaceResult[1]
    //     const tip = replaceResult[2]
    //     const content = replaceResult[3]
    //     // console.log(type, tip, content)
    //     if (entering) {
    //       return [`<div class="custom-block ${type}">${tip ? `<p class="custom-block-title">${tip}</p>` : ''}${content}\n`, Lute.WalkContinue]
    //     } else {
    //       return ['</div>', Lute.WalkContinue]
    //     }
    //   } else {
    //     return ['', Lute.WalkContinue]
    //   }
    // },
    renderLinkText: (node: any, entering: Boolean): [string, number] => {
      if (entering) {
        return ['', Lute.WalkContinue]
      } else {
        return ['', Lute.WalkContinue]
      }
    },
    renderLinkDest: (node: any, entering: Boolean): [string, number] => {
      if (entering) {
        myLink = node.TokensStr()
        return [``, Lute.WalkContinue]
      }
      return [``, Lute.WalkContinue]
    },
    renderLink: (node: any, entering: Boolean): [string, number] => {
      if (entering) {
        return [``, Lute.WalkContinue]
      } else {
        return [
          `<a href='${myLink}' class="no-external-link"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>${node.Text()}</a>`,
          Lute.WalkContinue,
        ]
      }
    },
  }
}

const VditorPreview: FC<IVditorPreviewProps> = ({ markdown, options, customClass, callback }) => {
  const previewRef = useRef<HTMLDivElement>(null)

  useMount(() => {
    Preivew.preview(previewRef.current as HTMLDivElement, markdown, { renderers: createCustomOptions(), ...options }).then(() => {
      if (!!customClass) {
        previewRef.current?.classList.add(customClass)
      }
      callback && callback()
    })
  })

  return <div ref={previewRef}></div>
}

export default VditorPreview
