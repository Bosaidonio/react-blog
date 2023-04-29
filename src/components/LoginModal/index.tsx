/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2023-04-29 19:15:02
 * @Description: Do not edit
 */
/*
 * @Author: Mario
 * @Date: 2021-11-21 16:33:13
 * @LastEditTime: 2023-03-31 23:49:24
 * @LastEditors: mario marioworker@163.com
 * @Description: 登录框组件
 */
import { useState, FC } from 'react'
import { Form, Input, Button } from 'antd'
import { login } from '@/api/User'
import { useRequest } from 'ahooks'
import { setStorage } from '@/utils/storage'
import { LoginRequest } from '@/types/user'
import { FormItemLastChild, LoginButtonStyle, LoginModalStyle } from '@/components/LoginModal/loginModalStyle'
import { useMode } from '@/hooks'

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
  const { theme } = useMode()
  return (
    <Form css={LoginModalStyle(theme)} form={form} name="basic" layout="vertical" wrapperCol={{ span: 24 }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
      <Form.Item label="用户名" name="username">
        <Input className="text-deafult" />
      </Form.Item>

      <Form.Item label="密码" name="password">
        <Input.Password className="text-deafult" />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }} css={FormItemLastChild()} className="custom-form-item">
        <Button type="primary" loading={loading} htmlType="submit" css={LoginButtonStyle(theme)} className="custom-login-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}
export default LoginModal
