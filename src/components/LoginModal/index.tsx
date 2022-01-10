/*
 * @Author: Mario
 * @Date: 2021-11-21 16:33:13
 * @LastEditTime: 2021-11-26 17:03:16
 * @LastEditors: Mario
 * @Description: 登录框组件
 */
import { useState } from 'react'
import { Form, Input, Button } from 'antd'
import classNames from 'classnames'
import styles from '@/components/LoginModal/index.module.scss'

const LoginModal = () => {
  const [loading, setLoading] = useState(false)
  const onFinish = (values: any) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      console.log('Success:', values)
    }, 3000)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form className={styles['login-modal']} name="basic" layout="vertical" wrapperCol={{ span: 24 }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
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
