import { FC, useRef, useState } from 'react'
import classnames from 'classnames'
import { ReactSVG } from 'react-svg'
// import { useMediaQuery } from 'react-responsive'
import { nanoid } from 'nanoid'
import { Form, Input, Switch, Row, Col, Button, notification } from 'antd'
// 导入类型声明
import { BaseEmoji } from 'emoji-mart'
// 导入表情主依赖包
import Picker from '@emoji-mart/react'
// 导入谷歌表情
import emojiData from '@emoji-mart/data/sets/14/google.json'
import styles from '@/views/CommentList/components/Reply/index.module.scss'
import { warrperClass } from '@/utils/classnames'
import { getRandom } from '@/utils/math'
import { isEmpty } from '@/utils/is'
// import { reaplceLink } from '@/utils'
import { parseTime } from '@/utils/date'
import { CommentProp } from '@/views/CommentList/components/Comment'
import tootipSvg from '@/views/CommentList/components/Reply/assets/svgs/tootip.svg'
import emojiSvg from '@/views/CommentList/components/Reply/assets/svgs/emoji.svg'

interface ReplyForm {
  username: string
  comment: string
  email: string
  address: string
}
const nameLibrary = ['潜心学习的道士', '小有名气的学生', '躲闪的贫僧', '挺胸的女孩', '知名的人士', '知名的男士', '不知名的男孩', '刚下飞机的女孩', '看透一切的道士', '大名鼎鼎的女士', '无名的学生']

interface ReplyProps {
  id: number
  isComment?: boolean
  commentList: CommentProp[]
  setCommentList: (commentList: CommentProp[]) => void
  commentName?: string
  onCancelReply?: () => void
}
const Reply: FC<ReplyProps> = ({ id, isComment, commentName, commentList, setCommentList, onCancelReply }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [isEmoji, setIsEmoji] = useState(false)
  const [username, setUsername] = useState<string>()
  const [form] = Form.useForm()
  // 控制筛子抖动
  const [isShake, setIsShake] = useState(false)
  // const isMobile = useMediaQuery({
  //   query: '(max-width: 767px)',
  // })
  // 未验证通过提示
  const openNotification = (description: string) => {
    notification.warning({
      duration: 3,
      message: '评论通知',
      description,
    })
    throw new Error('验证未通过')
  }
  // 验证表单
  const validateForm = (form: ReplyForm) => {
    if (isEmpty(form.comment)) {
      openNotification('必须填写评论')
    } else if (isEmpty(form.username)) {
      openNotification('必须填写昵称或用户名')
    } else if (isEmpty(form.email)) {
      openNotification('必须填写邮箱')
    } else if (isEmpty(form.address)) {
      openNotification('必须填写地址')
    }
  }

  const onFinish = (values: ReplyForm) => {
    try {
      validateForm(values)
      const formBody = {
        id: new Date().getTime(),
        parentId: id,
        commentName: values.username,
        commentTime: parseTime(new Date())!,
        atAuthor: commentName ? `@${commentName}` : commentName,
        isReply: false,
        commentAvatar: 'https://gravatar.helingqi.com/wavatar/b8a18bc7cd59cea7c301868a7f9cfaa1',
        commentContent: values.comment,
        isIndex: true,
      }
      if (!formBody.atAuthor) delete formBody.atAuthor

      if (id === 0) {
        const list = [...commentList, { ...formBody }]
        form.resetFields()
        setUsername('')
        setCommentList(list)
      } else {
        const diff = (commentList: CommentProp[]): CommentProp[] => {
          return commentList.map((item) => {
            if (item.id === formBody.parentId) {
              return {
                ...item,
                children: item.children ? [...item.children, formBody] : [formBody],
              }
            } else {
              if (item.children) {
                return {
                  ...item,
                  children: diff(item.children),
                }
              } else {
                return item
              }
            }
          })
        }
        const list = diff(commentList)
        form.resetFields()
        setUsername('')
        setCommentList(list)
        onCancelReply && onCancelReply()
      }
    } catch (error) {}
  }

  const onChange = (e: any) => {
    setUsername(e.target.value)
  }
  // 生成随机姓名
  const onRandomName = () => {
    setIsShake(true)
    const username = nameLibrary[getRandom(0, nameLibrary.length - 1)]
    setUsername(username)
    form.setFieldsValue({ username })
    setTimeout(() => {
      setIsShake(false)
    }, 500)
  }
  // 选中表情
  const onSelectEmoji = (emoji: BaseEmoji, e: any) => {
    ;(textAreaRef as any).current.focus()
    const currentComent = form.getFieldsValue(['comment']).comment
    form.setFieldsValue({
      comment: `${currentComent ? currentComent : ''}${emoji.native}`,
    })
  }

  return (
    // style={{ marginLeft: isMobile && !isComment ? '-50px' : '0px' }}
    <div className={warrperClass(styles, 'comment-respond no-borders')}>
      <h4 id="reply-title" className={warrperClass(styles, 'comment-reply-title m-t-lg m-b')}>
        发表评论
        <small data-original-title="使用cookie技术保留您的个人信息以便您下次快速评论，继续评论表示您已同意该条款">
          <ReactSVG src={tootipSvg} />
        </small>
        {!isComment ? (
          <small className={warrperClass(styles, 'cancel-comment-reply')} onClick={() => onCancelReply && onCancelReply()}>
            取消回复
          </small>
        ) : null}
      </h4>
      <Form name={nanoid(6)} form={form} layout="vertical" labelCol={{ span: 8 }} wrapperCol={{ span: 24 }} autoComplete="off" onFinish={onFinish}>
        <Form.Item name="comment" label="评论">
          <Input.TextArea ref={textAreaRef} placeholder="这家伙真懒,啥也不说 ~" />
        </Form.Item>
        <div className={warrperClass(styles, 'OwO padder-v-sm')}>
          <div
            className={warrperClass(styles, `OwO-logo ${isEmoji ? 'active' : ''}`)}
            onClick={() => {
              setIsEmoji(!isEmoji)
            }}
          >
            <span className={warrperClass(styles, 'smile-icons')}>
              <ReactSVG src={emojiSvg} />
            </span>
            <span className={warrperClass(styles, 'OwOlogotext')}>表情</span>
          </div>
          <div className={styles['private-comment']}>
            <span>私密评论</span>
            <Switch size="small" defaultChecked={false} />
          </div>
          {isEmoji ? (
            <div className={classnames(styles.emoji)}>
              <Picker data={emojiData} onEmojiSelect={onSelectEmoji} locale="zh" set="google" icons="outline" />
            </div>
          ) : null}
        </div>
        <div className={styles['form-model']}>
          <Row gutter={20}>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Form.Item label="名称" name="username">
                <div className={styles.username}>
                  <img className={styles['author-avatar']} alt="" src="https://gravatar.helingqi.com/wavatar/d41d8cd98f00b204e9800998ecf8427e" />
                  <Input className={warrperClass(styles, 'form-control author')} placeholder="姓名或昵称" value={username} onChange={onChange} />
                  <div className={classnames(styles['random_user_name'], isShake ? 'shake shake-constant' : '')} onClick={onRandomName}>
                    🎲
                  </div>
                </div>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Form.Item label="邮箱" name="email">
                <Input className={styles['form-control']} placeholder="邮箱（必填,将保密）" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Form.Item label="地址" name="address">
                <Input className={styles['form-control']} placeholder="网站或博客" />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit" className={styles['btn-gd-primary']}>
            发表评论
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Reply
