/*
 * @Author: Mario
 * @Date: 2021-11-21 16:33:13
 * @LastEditTime: 2023-03-31 23:49:24
 * @LastEditors: mario marioworker@163.com
 * @Description: 登录框组件
 */
import { useState, FC } from 'react'
import { Form, Input, Button } from 'antd'
import classNames from 'classnames'
import styles from '@/components/LoginModal/index.module.scss'
import { login } from '@/api/User'
import { useRequest } from 'ahooks'
import { setStorage } from '@/utils/storage'
import { LoginRequest } from '@/types/user'

interface LoginModalProps {
  handleOpacity: () => void
}
const LoginModal: FC<LoginModalProps> = ({ handleOpacity }) => {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm<LoginRequest>()
  const { run } = useRequest(login, {
    manual: true,
    onSuccess: (res) => {
      setLoading(false)
      if (res.statusCode === 200) {
        setStorage('acessToken', res.data.accessToken)
        setStorage('userInfo', res.data.userInfo)
        handleOpacity()
        // 清空表单
        form.resetFields()
      }
    },
    onError: (err) => {
      setLoading(false)
      // handleOpacity()
      // 清空表单
      // form.resetFields()
    },
  })
  const onFinish = (values: LoginRequest) => {
    setLoading(true)
    run(values)
  }

  const onFinishFailed = (errorInfo: any) => {}

  return (
    <Form className={styles['login-modal']} form={form} name="basic" layout="vertical" wrapperCol={{ span: 24 }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
      <Form.Item label="用户名" name="username">
        <Input className="text-deafult" />
      </Form.Item>

      <Form.Item label="密码" name="password">
        <Input.Password className="text-deafult" />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }} className={styles['margin-b']}>
        <Button type="primary" loading={loading} htmlType="submit" className={classNames('w-full', styles['login-btn'])}>
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}
export default LoginModal
