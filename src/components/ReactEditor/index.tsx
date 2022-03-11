/*
 * @Author: Mario
 * @Date: 2022-03-01 21:09:54
 * @LastEditTime: 2022-03-02 11:47:08
 * @LastEditors: Mario
 * @Description: 基于vditor封装
 */
import { FC, useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import Vditor from 'vditor'
import 'vditor/src/assets/scss/index.scss'
interface ReactEditorProps {
  ref?: any
  onChange?: (html: string) => void
}
export interface ReactEditorMethods {
  getHtml: () => string
}
const ReactEditor: FC<ReactEditorProps> = forwardRef(({ onChange }, ref) => {
  const [vditor, setVditor] = useState<Vditor>()
  useImperativeHandle(ref, () => ({
    getHtml,
  }))
  const getHtml = () => {
    return vditor?.getValue()
  }
  useEffect(() => {
    const vditor = new Vditor('vditor', {
      height: 360,
      preview: {
        hljs: {
          enable: true,
          style: 'native',
          lineNumber: true,
        },
      },
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      after() {},
    })
    setVditor(vditor)
  }, [])

  return <div id="vditor"></div>
})
export default ReactEditor
