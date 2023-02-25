/*
 * @Date: 2022-08-28 19:22:28
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2022-10-23 20:05:58
 * @Description: Do not edit
 */
import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import '@/views/404/index.module.scss'
const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          Back Home
        </Button>
      }
    />
  )
}

export default NotFound
